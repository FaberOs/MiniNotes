import React, { useState, useEffect } from "react";
import MoonIcon from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [animateCircle, setAnimateCircle] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setAnimateCircle(true);
    setTimeout(() => {
      setIsDarkMode((prev) => !prev);
      setAnimateCircle(false);
    }, 1000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center w-10 h-10 bg-black dark:bg-neutral-50 text-white dark:text-black rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition cursor-pointer"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
      <AnimatePresence>
        {animateCircle && (
          <motion.div
            className="absolute top-0 left-0 rounded-full"
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 110, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              width: 40,
              height: 40,
              pointerEvents: "none",
              transformOrigin: "center",
              backgroundColor: isDarkMode ? "#fafafa" : "#404040",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
