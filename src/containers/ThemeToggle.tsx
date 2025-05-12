"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex  bg-gray-200 dark:bg-gray-700 w-full h-full p-2 items-center   text-center rounded-full text-black dark:text-white"
    >
      {isDark ? (
        <Sun className="w-full h-full" />
      ) : (
        <Moon className="w-full h-full" />
      )}
    </button>
  );
}
