import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo._id)}>❌</button>
    </div>
  );
};

export default TodoItem;
