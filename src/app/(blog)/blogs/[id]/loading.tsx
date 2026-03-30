const BlogDetailLoading = () => {
  return (
    <div className="px-4 py-8 max-w-[800px] mx-auto">
      <div className="h-4 w-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-8" />
      <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-3/4 mb-3" />
      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse w-24 mb-10" />
      <div className="space-y-3">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse ${
              i % 5 === 4 ? "w-2/3" : "w-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogDetailLoading;
