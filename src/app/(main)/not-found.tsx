import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black dark:text-white">
      <h1 className="text-6xl font-medium mb-4">404</h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
        Page not found.
      </p>
      <Link
        href="/"
        className="underline underline-offset-4 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
