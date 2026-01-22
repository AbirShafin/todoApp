// src/hooks/useTodos.ts
import { useTodoContext } from "../context/TodoContext";

export function useTodos() {
  const { todos, setTodos } = useTodoContext();

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}
