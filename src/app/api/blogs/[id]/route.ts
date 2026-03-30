import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog.model";
import connectDB from "@/config/db";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const blog = await Blog.findById(id).lean();
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching blog", error: (error as Error).message },
      { status: 500 }
    );
  }
}
