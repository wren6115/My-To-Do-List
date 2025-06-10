import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import { Footer } from './MyComponents/Footer';
import { About } from './MyComponents/About'; // <-- Import About component

function App() {
  const [todos, setTodos] = useState([
    { sno: 1, title: "Go to the market", desc: "You need to go to the market to buy vegetables" },
    { sno: 2, title: "Go to the gym", desc: "You need to go to the gym to stay fit" },
    { sno: 3, title: "Go to the bank", desc: "You need to go to the bank to deposit money" },
  ]);

  const addTodo = (title, desc) => {
    const sno = todos.length ? todos[todos.length - 1].sno + 1 : 1;
    setTodos([...todos, { sno, title, desc }]);
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e.sno !== todo.sno));
  };

  return (
    <Router>
      <div className="app-container" style={{
        background: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}>
        <Header title="My To Do List" />
        
        <div className="main-content" style={{
          maxWidth: 500,
          margin: "30px auto",
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 8px #ddd",
          padding: 24,
          flex: 1,
          marginBottom: 40
        }}>
          <Routes>
            <Route path="/" element={<Todos todos={todos} onDelete={onDelete} />} />
            <Route path="/add" element={<AddTodo addTodo={addTodo} />} />
            <Route path="/about" element={<About />} /> {/* <-- Add About route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;