import React, { useEffect, useRef, useState } from "react";
import { INote } from "../lib/types";
import { useNotes } from "../hooks/useNotes";
import { motion } from "framer-motion";
import { PenIcon } from "./icons/PenIcon";
import { DeleteIcon } from "./icons/DeleteIcon";

interface NoteProps {
  note: INote;
}

const expandVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  },
};

const Note: React.FC<NoteProps> = ({ note }) => {
  const [title, setTitle] = useState(note.title || "New Note");
  const [content, setContent] = useState(note.content || "");
  const [isEditing, setIsEditing] = useState(!note.content);
  const { updatedNote, deleteNote } = useNotes();

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) {
      textareaRef.current?.focus();
    }
  }, [isEditing]);

  const handleSave = () => {
    updatedNote(note.id, { title, content });
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={expandVariants}
      className="p-4 rounded-xl flex flex-col justify-between h-56"
      style={{
        backgroundColor: note.color || "#FACC15",
      }}
    >
      <div className="mb-2">
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={!isEditing}
          className="w-full bg-transparent outline-none font-bold"
        />
      </div>
      <div className="flex-1">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={!isEditing}
          className="w-full bg-transparent outline-none resize-none field-sizing-content max-h-[100px] overflow-hidden"
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <p className="text-xs text-gray-800">
          {new Date(Number(note.createdDate)).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
        </p>

        <div className="flex gap-2">
          <button
            className={`h-8 w-8 rounded-full flex items-center justify-center transition cursor-pointer
            ${
              isEditing
                ? "bg-gray-300 text-black"
                : "bg-black text-white hover:bg-gray-700"
            }
          `}
            aria-label="Edit Note"
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <PenIcon />
          </button>
          <button
            className="h-8 w-8 rounded-full flex items-center justify-center bg-black text-white hover:bg-red-600 transition cursor-pointer"
            aria-label="Delete Note"
            onClick={() => deleteNote(note.id)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Note;
