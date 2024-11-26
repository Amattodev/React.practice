import React, { useState } from "react";

const Item = ({ content, id, isDone, deleteTodo, toggleTodo }) => {
  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {content}
      </span>
      <button onClick={handleDelete}>削除</button>
    </li>
  );
};

export default Item;
