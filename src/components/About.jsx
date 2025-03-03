import React from 'react';
import { FaLaptopCode, FaGamepad, FaPlane, FaPencilAlt } from "react-icons/fa";
import './About.css';

const About = () => {
    return (
        <section id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <h3 className="about-title">Who am I?</h3>
                    <p>
                        Hello! I'm Aaron, a Year 2 Polytechnic student pursuing a diploma in Information Technology, 
                        specializing in Software Engineering at Ngee Ann Polytechnic.
                    </p>
                    <p>
                        I'm an individual always looking to learn and grow as a developer and as a person, seeking 
                        opportunities every day!
                    </p>
                    
                    <h3 className="about-title">Interests</h3>
                    <p className="outside-school">Outside of School...</p>
                    <div className="interests-list">
                        <div className="interest-item">
                            <FaLaptopCode className="interest-icon" />
                            <span>Exploring new technologies</span>
                        </div>
                        <div className="interest-item">
                            <FaGamepad className="interest-icon" />
                            <span>Playing games</span>
                        </div>
                        <div className="interest-item">
                            <FaPlane className="interest-icon" />
                            <span>Travelling</span>
                        </div>
                        <div className="interest-item">
                            <FaPencilAlt className="interest-icon" />
                            <span>Drawing</span>
                        </div>
                    </div>
                </div>

                <div className="about-images">
                    <img src="images/About_Me_Image.jpg" alt="About Me 1" className="about-image" />
                    <img src="images/About_Me_Image2.jpg" alt="About Me 2" className="about-image" />
                </div>
            </div>
        </section>
    );
};

export default About;
