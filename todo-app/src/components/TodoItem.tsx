// src/components/TodoItem.tsx
import { Todo } from "../pages/AppToDo";

interface Props {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoItem({ todo, setTodos }: Props) {
  const toggleComplete = () => {
    setTodos(prev =>
      prev.map(t =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodos(prev => prev.filter(t => t.id !== todo.id));
  };

  return (
    <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {todo.text}
      </span>
      <button onClick={toggleComplete} style={{ marginRight: "0.5rem" }}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}
