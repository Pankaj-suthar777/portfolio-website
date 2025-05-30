import { BlogDocument } from "@/models/blog.model";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogItem = ({ post }: { post: BlogDocument }) => {
  return (
    <Link
      href={`/blogs/${post._id}`}
      key={`${post._id}`}
      className="inline-block mx-4 p-4 min-w-[250px] max-w-full bg-white dark:bg-black rounded-sm transition-shadow duration-300 hover:cursor-pointer"
    >
      <h3 className="text-md font-semibold text-blue-500 dark:text-blue-400 mb-1 whitespace-normal break-words">
        {post.title}
      </h3>
      <div className="flex justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {moment(post.createdAt).format("MMMM Do YYYY")}
        </p>

        <p className="text-xs text-blue-500 dark:text-blue-300 underline mt-2 inline-block">
          Read more
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
