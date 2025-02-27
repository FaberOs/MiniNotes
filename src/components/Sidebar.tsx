import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNotes } from "../hooks/useNotes";
import ThemeToggle from "./ThemeToggle";

const colors = ["#F87171", "#FACC15", "#4ADE80", "#60A5FA", "#A78BFA"];

const dropVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.5 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  }),
};

const Sidebar: React.FC = () => {
  const [showColors, setShowColors] = useState(false);
  const { addNote } = useNotes();

  const handleColorSelect = (color: string) => {
    addNote("New Note", "Write something...", color);
    setShowColors(false);
  };

  return (
    <div className="hidden md:fixed md:left-0 md:top-0 md:h-full md:w-20 md:min-w-[5rem] md:bg-neutral-50 md:dark:bg-neutral-700 md:border-r-2 md:border-neutral-200 md:dark:border-neutral-800 md:flex md:flex-col md:items-center md:py-8 md:shadow-md md:shadow-neutral-300 md:dark:shadow-neutral-600">
      <h1 className="font-bold text-md mb-10 leading-none text-gray-800 dark:text-neutral-100">
        Mini <br /> Notes
      </h1>

      <button
        className="h-10 w-10 bg-black dark:bg-neutral-50 text-white dark:text-black text-3xl rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition cursor-pointer"
        onClick={() => setShowColors(!showColors)}
        aria-label="Add new note"
      >
        +
      </button>

      <div className="relative">
        {showColors && (
          <motion.div
            initial="hidden"
            animate="visible"
            className="absolute left-1/2 -translate-x-1/2 mt-2 flex flex-col gap-4 p-2 rounded-lg"
          >
            {colors.map((color, index) => (
              <motion.button
                key={color}
                custom={index}
                variants={dropVariants}
                className="h-4 w-4 rounded-full cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </motion.div>
        )}
      </div>

      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Sidebar;
