import { NextRequest, NextResponse } from "next/server";
import Blog from "@/models/blog.model";
import connectDB from "@/config/db";
import { blogSchema } from "@/schema/blog";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const body = await request.json();
    const { title, text } = body;

    const validation = blogSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation failed", errors: validation.error.format() },
        { status: 400 }
      );
    }

    const newBlog = new Blog({ title, text });
    const savedBlog = await newBlog.save();

    revalidatePath("/");
    revalidatePath("/blogs");
    revalidatePath(`/blogs/${savedBlog._id}`);

    return NextResponse.json(
      { message: "Blog created successfully", blog: savedBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { message: "Error creating blog", error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({}).sort({ createdAt: -1 }); // Sort by newest first

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Error fetching blogs", error: (error as Error).message },
      { status: 500 }
    );
  }
}
