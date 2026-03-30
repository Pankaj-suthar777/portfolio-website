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
        <div>
          {blogs.map((blog) => (
            <BlogItem key={String(blog._id)} post={blog} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          No posts yet — check back soon.
        </p>
      )}
    </PageContainer>
  );
};

export default BlogsPage;
