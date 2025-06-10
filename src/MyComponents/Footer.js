import React from 'react';
import '../App.css';

export const Footer = () => {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
    padding: "12px 0",
    marginTop: "auto",
    borderTop: "1px solid #222",
    fontSize: "1rem",
    letterSpacing: "0.5px"
  };

  return (
    <footer style={footerStyle}>
      <p>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  );
};