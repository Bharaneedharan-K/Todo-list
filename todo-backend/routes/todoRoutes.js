const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodo,
  deleteTodo,
} = require("../controllers/todoController");

// Get all todos
router.get("/", getTodos);

// Create a new todo
router.post("/", createTodo);

// Delete a todo by ID
router.delete("/:id", deleteTodo);

module.exports = router;
