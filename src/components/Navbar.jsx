// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Space Exploration</h1>
      <button onClick={toggleDarkMode} style={styles.button}>
        Toggle Dark Mode
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#282c34',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    margin: 0,
  },
  button: {
    padding: '0.5rem 1rem',
    background: '#007bff',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Navbar;
