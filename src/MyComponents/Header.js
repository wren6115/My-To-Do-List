import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <header style={{
      background: "#fff",
      padding: "16px 32px",
      boxShadow: "0 2px 8px #eee",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span role="img" aria-label="logo" style={{ fontSize: 32 }}>📝</span>
        <h1 style={{ margin: 0, fontSize: 28 }}>{title}</h1>
      </div>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Home</Link>
        <Link to="/add" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Add Todo</Link>
        <Link to="/about" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;