import BlogCard from "@/components/blog/BlogContent";
import dbConnect from "@/config/db";
import Blog, { BlogDocument } from "@/models/blog.model";
import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

const BlogPage = async ({ params }: PageProps) => {
  let blog: BlogDocument | null = null;
  try {
    await dbConnect();

    blog = await Blog.findById(params.id).lean();
  } catch (error) {
    console.error("Error fetching blog:", error);
  }

  if (blog === null) {
    return (
      <div className="flex justify-center items-center py-8">No blogs yet.</div>
    );
  }

  return (
    <div>
      <BlogCard blog={blog} />
    </div>
  );
};

export default BlogPage;
