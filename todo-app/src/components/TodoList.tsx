// src/components/TodoList.tsx
import { Todo } from "../pages/AppToDo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}
