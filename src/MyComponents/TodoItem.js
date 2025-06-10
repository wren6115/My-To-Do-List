import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div style={{
      background: "#f8f9fa",
      margin: "12px 0",
      padding: "16px",
      borderRadius: "6px",
      boxShadow: "0 1px 4px #eee"
    }}>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <button
        onClick={() => onDelete(todo)}
        style={{
          background: "#dc3545",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "6px 16px",
          cursor: "pointer"
        }}
      >
        Delete
      </button>
    </div>
  );
};
