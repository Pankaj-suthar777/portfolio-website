import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog.model";
import connectDB from "@/config/db";
import mongoose from "mongoose";
import { updateBlogSchema } from "@/schema/blog";
import { id } from "zod/v4/locales";

interface Params {
  id: string;
}

// Helper to validate ObjectId
const isValidObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const { id } = params;
  try {
    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid Blog ID" }, { status: 400 });
    }

    await connectDB();

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ blog }, { status: 200 });
  } catch (error: any) {
    console.error(`Error fetching blog ${id}:`, error);
    return NextResponse.json(
      { message: "Error fetching blog", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  await connectDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid Blog ID" }, { status: 400 });
    }

    const body = await request.json();

    // Validate request body with Zod
    const validation = updateBlogSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const { title, text } = validation.data;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, text },
      { new: true, runValidators: true } // new: true returns the updated document, runValidators ensures schema validation is applied
    );

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog updated successfully", blog: updatedBlog },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error updating blog ${id}:`, error);
    return NextResponse.json(
      { message: "Error updating blog", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  await connectDB();
  try {
    const { id } = params;
    if (!isValidObjectId(id)) {
      return NextResponse.json({ message: "Invalid Blog ID" }, { status: 400 });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error deleting blog ${id}:`, error);
    return NextResponse.json(
      { message: "Error deleting blog", error: error.message },
      { status: 500 }
    );
  }
}
