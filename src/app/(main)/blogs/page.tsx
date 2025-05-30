import BlogItem from "@/components/blog/BlogItem";
import PageContainer from "@/components/layout/PageContainer";
import PageTitle from "@/components/layout/PageTitle";
import dbConnect from "@/config/db";
import Blog, { BlogDocument } from "@/models/blog.model";
import React from "react";

const BlogsPage = async () => {
  let blogs: BlogDocument[] = [];
  try {
    await dbConnect();

    blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <PageContainer>
      <PageTitle title="Blogs" />
      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-2">
          {blogs.map((blog) => (
            <BlogItem post={blog} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center py-8">
          No blogs yet.
        </div>
      )}
    </PageContainer>
  );
};

export default BlogsPage;
