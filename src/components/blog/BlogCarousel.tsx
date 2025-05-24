import React from "react";

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  date: string;
  link?: string; // Optional link to the full post
}

interface BlogCarouselProps {
  posts: BlogPost[];
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
          <div
            key={`${post.id}-${index}`}
            className="border border-slate-800 inline-block mx-4 p-4 min-w-[250px] max-w-[300px] bg-white dark:bg-black rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-md font-semibold text-blue-600 dark:text-blue-400 mb-1 truncate">
              {post.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
              {post.date}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-normal h-16 overflow-hidden text-ellipsis">
              {post.snippet}
            </p>
            {post.link && (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 dark:text-blue-300 hover:underline mt-2 inline-block"
              >
                Read more
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;
