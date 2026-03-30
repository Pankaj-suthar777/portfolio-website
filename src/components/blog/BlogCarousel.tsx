import { BlogDocument } from "@/models/blog.model";
import React from "react";
import BlogCard from "./BlogCard";

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

  // Duplicate posts for a seamless infinite scroll effect
  const duplicatedPosts = [...posts, ...posts];

  return (
    <div className="relative w-full overflow-hidden py-4 carousel-wrapper">
      <div className="blog-carousel flex whitespace-nowrap animate-marquee">
        {duplicatedPosts.map((post, index) => (
          <BlogCard key={`${post._id}-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
