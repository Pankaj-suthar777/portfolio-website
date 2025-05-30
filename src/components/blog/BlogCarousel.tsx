import { BlogDocument } from "@/models/blog.model";
import React from "react";
import BlogCard from "./BlogCard";

interface BlogCarouselProps {
  posts: BlogDocument[];
}

const BlogCarousel: React.FC<BlogCarouselProps> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">No blogs yet.</div>
    );
  }

  // Duplicate posts for a seamless infinite scroll effect
  const duplicatedPosts = [...posts, ...posts];

  return (
    <div className="relative w-full overflow-hidden py-4 group">
      {/* Added 'group' class for potential future use with group-hover for pseudo-elements if needed */}
      {/* Added 'relative' for positioning pseudo-elements */}
      <div className="blog-carousel flex whitespace-nowrap animate-marquee">
        {duplicatedPosts.map((post, index) => (
          <BlogCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
