import React, { useState, useEffect } from 'react';
import './ScrollProgressBar.css'; // Import the CSS for styling

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate the scroll progress as a percentage
    const progress = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    // Add scroll event listener to update progress
    window.addEventListener('scroll', updateScrollProgress);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
  );
};

export default ScrollProgressBar;