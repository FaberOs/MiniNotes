import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNotes } from "../hooks/useNotes";

const colors = ["#F87171", "#FACC15", "#4ADE80", "#60A5FA", "#A78BFA"];

const dropVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.5 },
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

const FloatingButton: React.FC = () => {
  const [showColors, setShowColors] = useState(false);
  const { addNote } = useNotes();

  const handleColorSelect = (color: string) => {
    addNote("New Note", "Write something...", color);
    setShowColors(false);
  };

  return (
    <div className="md:hidden fixed bottom-8 right-8 flex flex-col items-center gap-4">
      <button
        className="h-14 w-14 bg-black dark:bg-neutral-50 text-white dark:text-black text-3xl rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 transition cursor-pointer shadow-sm shadow-neutral-300 dark:shadow-neutral-600"
        onClick={() => setShowColors(!showColors)}
        aria-label="Add new note"
      >
        +
      </button>

      {showColors && (
        <motion.div
          initial="hidden"
          animate="visible"
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 flex flex-col-reverse items-center gap-2"
        >
          {colors.map((color, index) => (
            <motion.button
              key={color}
              custom={index}
              variants={dropVariants}
              className="h-6 w-6 rounded-full cursor-pointer shadow-sm shadow-neutral-300 dark:shadow-neutral-600"
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FloatingButton;
