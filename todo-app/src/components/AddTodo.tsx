// src/pages/AppToDo.tsx
import { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function AppToDo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Optional: persist todos in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo App</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </main>
  );
}
