import React from "react";
import Card from "../components/Note";
import { useNotes } from "../hooks/useNotes";
import { AnimatePresence } from "framer-motion";

const Home: React.FC = () => {
  const { notes } = useNotes();

  return (
    <div className="p-4 flex flex-col gap-4">
      <p className="text-gray-700 dark:text-neutral-50 my-4 text-xl">
        Welcome to MiniNotes! This is a simple note-taking app built with React
        and Tailwind CSS. You can add, edit, and delete notes. Give it a try!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <AnimatePresence>
          {notes.length > 0 ? (
            notes.map((note) => <Card key={note.id} note={note} />)
          ) : (
            <p className="text-gray-500 dark:text-neutral-200">
              No notes yet. Try adding one!
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
