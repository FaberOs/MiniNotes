import { createContext } from "react";
import { INote } from "../lib/types";

interface NotesContextType {
  notes: INote[];
  addNote: (title: string, content: string, color: string) => void;
  deleteNote: (id: string) => void;
  updatedNote: (id: string, updateNote: Partial<INote>) => void;
}

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined
);
