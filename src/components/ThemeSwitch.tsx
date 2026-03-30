"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="w-[18px] h-[18px]" />;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        size={18}
        className="cursor-pointer"
        aria-label="Switch to light mode"
        onClick={() => setTheme("light")}
      />
    );
  }

  return (
    <FiMoon
      size={18}
      className="cursor-pointer"
      aria-label="Switch to dark mode"
      onClick={() => setTheme("dark")}
    />
  );
}
