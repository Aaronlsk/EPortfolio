import React from 'react';
import './Projects.css';
import { FaUser, FaUserFriends, FaUsers } from "react-icons/fa";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>

            {/* Notable Websites Section */}
            <h3 className="sub-title">Notable Websites</h3>
            <div className="projects-grid">
                {/* Project 1: E-commerce Platform */}
                <div className="project-card">
                    <img src="images/FED_Website_Image.png" alt="E-commerce Platform" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://aaronlsk.github.io/FED_EZMart/" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href="https://github.com/Aaronlsk/FED_EZMart" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>E-commerce Platform</h3>
                        <p className="project-context">
                            <FaUserFriends className="work-icon" /> Pair Work • 2024
                        </p>
                        <p className="project-description">
                            My first major project in Front-End Development, showcasing my ability to build a responsive and interactive e-commerce platform.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge html">HTML5</span>
                            <span className="tech-badge css">CSS3</span>
                            <span className="tech-badge js">JavaScript</span>
                        </div>
                    </div>
                </div>

                {/* Project 2: Donation Website */}
                <div className="project-card">
                    <img src="images/Willing_Hearts_Website_Image.png" alt="Donation Website" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://github.com/kelvinn44/BED2024Apr_P03_Team03" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>Donation Website</h3>
                        <p className="project-context">
                            <FaUsers className="work-icon" /> Group Work • 2024
                        </p>
                        <p className="project-description">
                            A backend-focused donation website inspired by Willing Hearts, highlighting my skills in Node.js and team collaboration.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge js">JavaScript</span>
                            <span className="tech-badge node">Node.js</span>
                            <span className="tech-badge html">HTML5</span>
                            <span className="tech-badge css">CSS3</span>
                        </div>
                    </div>
                </div>

                {/* Project 3: DineAd Connect */}
                <div className="project-card">
                    <img src="images/FSDP_App_Image.png" alt="DineAd Connect" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://github.com/Dewiliaa/FSDP_Team3" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>DineAd Connect</h3>
                        <p className="project-context">
                            <FaUsers className="work-icon" /> Group Work • 2024 - 2025
                        </p>
                        <p className="project-description">
                            My first Full Stack Development project, featuring ad display capabilities and built with React and Node.js.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge react">React</span>
                            <span className="tech-badge node">Node.js</span>
                            <span className="tech-badge js">JavaScript</span>
                            <span className="tech-badge css">CSS3</span>
                        </div>
                    </div>
                </div>

                {/* Project 4: Idol Group Website */}
                <div className="project-card">
                    <img src="images/Idol_Website_Image.png" alt="Idol Group Website" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://aaronlsk.github.io/Assignment-1/" target="_blank" rel="noopener noreferrer">View Live</a>
                            <a href="https://github.com/Aaronlsk/Assignment-1" target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>Idol Group Website</h3>
                        <p className="project-context">
                            <FaUser className="work-icon" /> Solo Work • 2023
                        </p>
                        <p className="project-description">
                            A platform to learn about a Japanese idol group, showcasing my foundational skills in HTML, CSS, and JavaScript.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge html">HTML5</span>
                            <span className="tech-badge css">CSS3</span>
                            <span className="tech-badge js">JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notable Design Projects Section */}
            <h3 className="sub-title">Notable Design Projects</h3>

            <div className="projects-grid">
                {/* Project 1: NPath Navigation Website */}
                <div className="project-card">
                    <img src="images/DUX_Assignment2_Image.png" alt="E-commerce Platform" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://www.figma.com/design/oCMi00bXf1kP6VnezdN1Jl/TeamPeanut_DUX_Asg2?node-id=0-1&t=oHIup41kMIM8rWZ2-1" target="_blank" rel="noopener noreferrer">View</a>
                            <a href="https://www.figma.com/proto/oCMi00bXf1kP6VnezdN1Jl/TeamPeanut_DUX_Asg2?node-id=471-910&t=TWdxmxR2nhl8DkEj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A12&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">Prototype</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>Navigation App</h3>
                        <p className="project-context">
                            <FaUsers className="work-icon" /> Group Work • 2025
                        </p>
                        <p className="project-description">
                            My big group project in Designing User Experience, showcasing my ability to design and create a visually appealing and interactive app.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge figma">Figma</span>
                            <span className="tech-badge canva">Canva</span>
                        </div>
                    </div>
                </div>

                {/* Project 1: Souvenirs Website */}
                <div className="project-card">
                    <img src="images/DP_Assignment.png" alt="E-commerce Platform" className="project-img" />
                    <div className="project-overlay">
                        <div className="project-links">
                            <a href="https://www.figma.com/proto/5HiZTtRirk2jBbUN2BsOPO/DP_Assg2_Final_Aaron-Lua?node-id=1-2&starting-point-node-id=1%3A2&t=vVWfsrusNj7G2ZcO-1" target="_blank" rel="noopener noreferrer">Prototype</a>
                        </div>
                    </div>
                    <div className="project-content">
                        <h3>Souvenirs Webite Redesign</h3>
                        <p className="project-context">
                            <FaUser className="work-icon" /> Solo Work • 2023
                        </p>
                        <p className="project-description">
                            My big project in Design Principles, to redesign on a chosen website that can be further improved.
                        </p>
                        <div className="tech-stack">
                            <span className="tech-badge figma">Figma</span>
                            <span className="tech-badge canva">Canva</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;