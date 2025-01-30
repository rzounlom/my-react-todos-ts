import "./App.css";

import { Button } from "react-bootstrap";
import { TodoItem } from "./types";
import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(defaultTodos);
  console.log({ defaultTodos });

  const addTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: "New Todo",
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo App Example</h1>
      <Button className="mt-2 mb-2" onClick={addTodo}>
        Add Todo
      </Button>
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
