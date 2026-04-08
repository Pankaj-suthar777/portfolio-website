"use client";

import { useEffect, useState } from "react";

interface BlogViewCounterProps {
  blogId: string;
}

const BlogViewCounter = ({ blogId }: BlogViewCounterProps) => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const trackView = async () => {
      try {
        const response = await fetch(`/api/views/blogs/${blogId}`, {
          method: "POST",
          cache: "no-store",
          keepalive: true,
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { totalViews?: number };

        if (isMounted && typeof data.totalViews === "number") {
          setViewCount(data.totalViews);
        }
      } catch (error) {
        console.error("Error tracking blog view:", error);
      }
    };

    void trackView();

    return () => {
      isMounted = false;
    };
  }, [blogId]);

  if (viewCount === null) {
    return <span>Views loading...</span>;
  }

  return <span>{viewCount} {viewCount === 1 ? "view" : "views"}</span>;
};

export default BlogViewCounter;
