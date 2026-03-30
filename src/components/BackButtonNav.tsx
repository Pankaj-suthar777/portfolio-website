"use client";
import { useRouter } from "next/navigation";

const BackButtonNav = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      aria-label="Go back"
      className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors mb-8"
    >
      ← Back
    </button>
  );
};

export default BackButtonNav;
