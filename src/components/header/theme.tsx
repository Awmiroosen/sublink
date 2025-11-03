"use client";

import { useTheme } from "next-themes";
import { LuSunMoon } from "react-icons/lu";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-indigo-300 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-800 transition-colors duration-200 cursor-pointer p-2 rounded-full"
    >
      <LuSunMoon size={30} />
    </button>
  );
};

export default Theme;
