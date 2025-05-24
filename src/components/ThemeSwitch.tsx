"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        size={18}
        className="cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        size={18}
        className="cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
