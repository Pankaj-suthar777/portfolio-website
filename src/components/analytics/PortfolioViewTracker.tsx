"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PortfolioViewTracker = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const payload = JSON.stringify({ path: pathname });

    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      const tracked = navigator.sendBeacon(
        "/api/views/portfolio",
        new Blob([payload], { type: "application/json" })
      );

      if (tracked) {
        return;
      }
    }

    const trackView = async () => {
      try {
        await fetch("/api/views/portfolio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
          cache: "no-store",
          keepalive: true,
        });
      } catch (error) {
        console.error("Error tracking portfolio view:", error);
      }
    };

    void trackView();
  }, [pathname]);

  return null;
};

export default PortfolioViewTracker;
