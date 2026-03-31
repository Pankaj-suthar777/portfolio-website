import { BlogDocument } from "@/models/blog.model";
import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ post }: { post: BlogDocument }) => {
  return (
    <Link
      href={`/blogs/${post._id}`}
      className="inline-block mx-3 min-w-[260px] max-w-[260px] p-4 border border-slate-200 dark:border-slate-800 rounded-md bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all duration-200"
    >
      <h3 className="text-sm font-medium text-black dark:text-white mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-xs text-gray-400 dark:text-gray-500">
        {moment(post.createdAt).format("MMM D, YYYY")}
      </p>
    </Link>
  );
};

interface BlogCarouselProps {
  posts: BlogDocument[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex justify-center items-center py-8 text-gray-500 dark:text-gray-400 text-sm italic">
        No blog posts yet — check back soon.
      </div>
    );
  }

  const duplicatedPosts = [...posts, ...posts, ...posts];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        {duplicatedPosts.map((post, index) => (
          <BlogCard key={`${post._id}-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;