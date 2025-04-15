const Todo = require("../models/Todo");

// Get all todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Todo text is required" });
  }

  try {
    const newTodo = new Todo({ text });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

// Delete a todo by ID
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(204).end(); // No content
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};

module.exports = { getTodos, createTodo, deleteTodo };
