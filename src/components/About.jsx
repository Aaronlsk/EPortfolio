import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Hello! I'm Aaron, a Year 2 Polytechnic student, pursuing a diploma in Information Technology, specializing in Software Engineering at Ngee Ann Polytechnic.</p>
                    <p>I'm an individual always looking to learn and grow as a developer and as a person, seeking opportunities every day!</p>
                </div>
                <img src="images/About_Me_Image.jpg" alt="About Me" />
            </div>
        </section>
    );
};

export default About;