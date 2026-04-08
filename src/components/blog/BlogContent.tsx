import { BlogDocument } from "@/models/blog.model";
import React from "react";
import parse from "html-react-parser";
import BackButtonNav from "../BackButtonNav";
import moment from "moment";
import BlogViewCounter from "./BlogViewCounter";

const BlogContent = ({ blog }: { blog: BlogDocument }) => {
  return (
    <div className="px-4 py-8 max-w-[800px] mx-auto">
      <BackButtonNav />
      <h1 className="text-2xl font-medium text-black dark:text-white mt-4 mb-2">
        {blog.title}
      </h1>
      <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
        <span>{moment(blog.createdAt).format("MMMM D, YYYY")}</span>
        <span aria-hidden="true">•</span>
        <BlogViewCounter blogId={String(blog._id)} />
      </div>
      <div className="blog-content">{parse(blog.text)}</div>
    </div>
  );
};

export default BlogContent;
