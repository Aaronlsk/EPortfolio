import React, { useState, useEffect } from 'react';
import './ToggleButton.css';

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage on initial render
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  // Update dark mode preference in localStorage and apply class to body
  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="toggle-button" onClick={toggleDarkMode}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ToggleButton;