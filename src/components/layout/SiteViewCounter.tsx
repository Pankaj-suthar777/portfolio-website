"use client";

import { FiEye } from "react-icons/fi";
import { useEffect, useState } from "react";

interface SiteViewCounterProps {
  className?: string;
  unstyled?: boolean;
}

const SiteViewCounter = ({
  className = "",
  unstyled = false,
}: SiteViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadViews = async () => {
      try {
        const response = await fetch("/api/views/portfolio", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { totalViews?: number };

        if (isMounted && typeof data.totalViews === "number") {
          setViewCount(data.totalViews);
        }
      } catch (error) {
        console.error("Error loading site views:", error);
      }
    };

    void loadViews();

    return () => {
      isMounted = false;
    };
  }, []);

  if (unstyled) {
    return (
      <span className={className}>
        {viewCount === null ? "Loading views..." : `${viewCount.toLocaleString()} views`}
      </span>
    );
  }

  return (
    <div
      aria-live="polite"
      className={`inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-2 text-left backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70 ${className}`.trim()}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm dark:bg-black dark:text-slate-300">
        <FiEye size={14} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
          Site Views
        </span>
        <span className="text-sm font-medium text-black dark:text-white">
          {viewCount === null ? "Loading..." : viewCount.toLocaleString()}
        </span>
      </span>
    </div>
  );
};

export default SiteViewCounter;
