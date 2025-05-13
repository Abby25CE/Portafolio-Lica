"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  const applyTheme = (theme: "dark" | "light") => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
    } else {
      applyTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    applyTheme(isDark ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle dark mode"
      className="flex items-center justify-center relative z-10 p-2 w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full text-black dark:text-white"
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
