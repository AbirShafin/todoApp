// src/components/TodoList.tsx
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <p className="empty-message">No todos yet. Add one above! 📝</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
