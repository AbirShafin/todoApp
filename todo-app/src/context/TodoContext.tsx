// src/context/TodoContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Todo } from "../types";
import { loadTodos, saveTodos } from "../utils/storage";

interface TodoContextType {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  // Save to localStorage whenever todos change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
}
