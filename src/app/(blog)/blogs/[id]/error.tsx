"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black dark:text-white px-4">
      <h2 className="text-2xl font-medium mb-4">Failed to load blog post</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
        {error.message || "Something went wrong."}
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
