import connectDB from "@/config/db";
import {
  getRequestIpAddress,
  getRequestUserAgent,
  shouldExcludeViewByIp,
} from "@/lib/view-tracking";
import Blog from "@/models/blog.model";
import BlogView from "@/models/blogView.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    await connectDB();

    const blog = await Blog.exists({ _id: id });
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    const ipAddress = getRequestIpAddress(request);
    const shouldTrack = !shouldExcludeViewByIp(ipAddress);

    if (shouldTrack) {
      await BlogView.create({
        blogId: new mongoose.Types.ObjectId(id),
        ipAddress,
        userAgent: getRequestUserAgent(request),
      });
    }

    const totalViews = await BlogView.countDocuments({ blogId: id });

    return NextResponse.json(
      { tracked: shouldTrack, totalViews },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error tracking blog view:", error);
    return NextResponse.json(
      { message: "Error tracking blog view", error: (error as Error).message },
      { status: 500 }
    );
  }
}
