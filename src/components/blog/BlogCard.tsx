import { BlogDocument } from "@/models/blog.model";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }: { post: BlogDocument }) => {
  return (
    <Link
      href={`/blogs/${post._id}`}
      className="inline-block mx-3 p-4 min-w-[240px] max-w-[280px] border border-slate-200 dark:border-slate-800 rounded-md bg-white dark:bg-black hover:border-slate-400 dark:hover:border-slate-600 transition-colors duration-200 whitespace-normal"
    >
      <h3 className="text-sm font-medium text-black dark:text-white mb-2 break-words line-clamp-2">
        {post.title}
      </h3>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        {moment(post.createdAt).format("MMM D, YYYY")}
      </p>
    </Link>
  );
};

export default BlogCard;
