import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <img src="images/FED_Website_Image.png" alt="E-commerce Platform" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>E-commerce Platform</h3>
                        <p>A full-featured online shopping platform built with React and Node.js</p>
                        <div className="tech-stack">
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">JavaScript</span>
                        </div>
                    </div>
                </div>
                {/* Repeat for other projects */}
                <div className="project-card">
                    <img src="images/Willing_Hearts_Website_Image.png" alt="Donation Website" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>Donation Website</h3>
                        <p>A backend focused donation website based off Willing Hearts</p>
                        <div className="tech-stack">
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">Node.js</span>
                            <span className="tech-badge">HTML5</span>
                            <span className="tech-badge">CSS3</span>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                    <img src="images/FSDP_App_Image.png" alt="DineAd Connect" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>DineAd Connect</h3>
                        <p>A full-featured online platform with capabilities like ad display to multiple devices, built with React and Node.js</p>
                        <div className="tech-stack">
                            <span className="tech-badge">React</span>
                            <span className="tech-badge">Node.js</span>
                            <span className="tech-badge">JavaScript</span>
                            <span className="tech-badge">CSS3</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;