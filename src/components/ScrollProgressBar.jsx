import React, { useState, useEffect } from 'react';
import './ScrollProgressBar.css'; 

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const progress = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
  );
};

export default ScrollProgressBar;