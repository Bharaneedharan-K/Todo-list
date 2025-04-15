import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import "./styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Base URL of your backend
  const API_URL = "http://localhost:5000/api/todos";

  // 🔄 Fetch todos from backend
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(API_URL);
        setTodos(res.data);
      } catch (err) {
        console.error("Error fetching todos:", err);
      }
    };
    fetchTodos();
  }, []);

  // ➕ Add a new todo
  const handleAddTodo = async () => {
    if (!input.trim()) return;

    try {
      const res = await axios.post(API_URL, { text: input });
      setTodos([...todos, res.data]);
      setInput("");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // ❌ Delete a todo
  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
    