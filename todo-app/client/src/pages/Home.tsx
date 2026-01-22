// src/pages/Home.tsx
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <main className="app-container">
      <div className="app-header">
        <h1 className="app-title">📋 My Todo List</h1>
        <p className="app-subtitle">Stay organized and productive</p>
      </div>
      <AddTodo />
      <TodoList />
    </main>
  );
}
