import React, { useState, useEffect } from "react";
import { NotesContext } from "./NotesContext";
import { INote } from "../lib/types";

const STORAGE_KEY = "notes";

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const saveNotes = (updatedNotes: INote[]) => {
    setNotes(updatedNotes);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
  };

  const addNote = (title: string, content: string, color: string) => {
    const newNote: INote = {
      id: crypto.randomUUID(),
      title,
      content,
      createdDate: Date.now().toString(),
      color,
    };

    const updatedNotes = [newNote, ...notes];
    saveNotes(updatedNotes);
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
  };

  const updatedNote = (id: string, updateNote: Partial<INote>) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updateNote } : note
    );
    saveNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updatedNote }}>
      {children}
    </NotesContext.Provider>
  );
};
