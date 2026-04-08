import BlogItem from "@/components/blog/BlogItem";
import SiteViewCounter from "@/components/layout/SiteViewCounter";
import PageContainer from "@/components/layout/PageContainer";
import dbConnect from "@/config/db";
import Blog, { BlogListItem } from "@/models/blog.model";
import React from "react";

export const revalidate = 300;

const BlogsPage = async () => {
  let blogs: BlogListItem[] = [];
  try {
    await dbConnect();

    blogs = await Blog.find({})
      .select("_id title createdAt")
      .sort({ createdAt: -1 })
      .lean<BlogListItem[]>();
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <PageContainer>
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-black dark:text-white">
          Blogs
        </h1>
        <p className="mt-1 text-[11px] leading-none text-gray-500 dark:text-gray-400">
          <SiteViewCounter unstyled />
        </p>
      </div>
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
