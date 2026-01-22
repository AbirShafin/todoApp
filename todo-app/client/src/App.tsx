// src/App.tsx
import { TodoProvider } from "./context/TodoContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}

export default App;
