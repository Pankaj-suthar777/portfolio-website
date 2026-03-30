import { BlogDocument } from "@/models/blog.model";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogItem = ({ post }: { post: BlogDocument }) => {
  return (
    <Link
      href={`/blogs/${post._id}`}
      className="flex items-start justify-between gap-4 py-4 border-b border-slate-200 dark:border-slate-800 hover:opacity-70 transition-opacity group"
    >
      <h3 className="text-sm text-black dark:text-white break-words">
        {post.title}
      </h3>
      <p className="text-xs text-gray-400 dark:text-gray-500 shrink-0 mt-0.5">
        {moment(post.createdAt).format("MMM D, YYYY")}
      </p>
    </Link>
  );
};

export default BlogItem;
