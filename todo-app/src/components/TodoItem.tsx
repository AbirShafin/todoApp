// src/components/TodoItem.tsx
import type { Todo } from "../types";
import { useTodos } from "../hooks/useTodos";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}
