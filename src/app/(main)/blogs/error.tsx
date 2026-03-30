"use client";

export default function BlogsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="lg:my-24 my-0 p-8 flex flex-col items-center justify-center text-black dark:text-white">
      <h2 className="text-2xl font-medium mb-4">Failed to load blogs</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="underline underline-offset-4 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
