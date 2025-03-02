import React, { useState } from 'react';
import './Resume.css'; 
import resumePDF from '../assets/Aaron_Lua_Siang_Kian_Resume.pdf'; 
import { FaDownload, FaSearchPlus, FaSearchMinus } from 'react-icons/fa';

const Resume = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Zoom in function with improved step size
  const handleZoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(prevZoom => parseFloat((prevZoom + 0.1).toFixed(1)));
    }
  };

  // Zoom out function with improved step size
  const handleZoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(prevZoom => parseFloat((prevZoom - 0.1).toFixed(1)));
    }
  };

  // Reset zoom function
  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">Resume</h2>
      
      <div className="resume-container">
        {/* Zoom Controls */}
        <div className="zoom-controls">
          <button onClick={handleZoomOut} aria-label="Zoom Out">
            <FaSearchMinus />
          </button>
          <button onClick={handleResetZoom} aria-label="Reset Zoom">
            {zoomLevel.toFixed(1)}x
          </button>
          <button onClick={handleZoomIn} aria-label="Zoom In">
            <FaSearchPlus />
          </button>
        </div>

        {/* Resume Display */}
        <div className="resume-display">
          <object
            data={resumePDF + "#toolbar=0&navpanes=0&scrollbar=0&view=FitH"}
            type="application/pdf"
            className="resume-object"
            style={{
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'center center'
            }}
          >
            <p>Your browser does not support PDF viewing. Please <a href={resumePDF} download="Aaron_Lua_Resume.pdf">download the PDF</a> instead.</p>
          </object>
        </div>

        {/* Download Button */}
        <div className="download-button">
          <a href={resumePDF} download="Aaron_Lua_Resume.pdf" className="download-link">
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;