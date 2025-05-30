import { BlogDocument } from "@/models/blog.model";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }: { post: BlogDocument }) => {
  return (
    <div
      key={`${post._id}`}
      className="border border-slate-800 inline-block mx-4 p-4 min-w-[250px] max-w-[300px] bg-white dark:bg-black rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-1 whitespace-normal break-words">
        {post.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {moment(post.createdAt).format("MMMM Do YYYY")}
      </p>

      <Link
        href={`/blogs/${post._id}`}
        rel="noopener noreferrer"
        className="text-xs text-blue-500 dark:text-blue-300 hover:underline mt-2 inline-block"
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
