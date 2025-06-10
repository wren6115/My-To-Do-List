import React from 'react';

export const About = () => {
  return (
    <div style={{
      padding: "24px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px #eee",
      maxWidth: "700px",
      margin: "30px auto"
    }}>
      <h2 style={{ marginBottom: "16px" }}>About Us</h2>
      <p>
        <strong>MyTodosList</strong> is a simple and user-friendly React application for managing your daily tasks.
        You can add new todos, view your list, and delete tasks when they're done.
      </p>
      <p>
        This project demonstrates the use of React functional components, React Router for navigation, and basic state management with <code>useState</code>.
      </p>
      <p>
        <em>Made for learning and productivity!</em>
      </p>
    </div>
  );
};