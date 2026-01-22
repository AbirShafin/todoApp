// src/utils/storage.ts
import type { Todo } from "../types";

const STORAGE_KEY = "todos";

export function loadTodos(): Todo[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
