"use client";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-20 w-8 h-8 flex items-center justify-center border border-slate-300 dark:border-slate-700 bg-white dark:bg-black text-black dark:text-white rounded text-sm hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
