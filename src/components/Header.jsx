import React from 'react';
import { ReactTyped } from "react-typed";
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Particles from './particles';

const Header = () => {
    return (
        <header>
            <Particles id="particles" />
            <div className="header-content">
                <div className="header-left">
                    <div className="profile-img-container">
                        <img
                            src="images/Aaron_Lua_Siang_Kian_Photo.jpg"
                            alt="Profile of Aaron Lua"
                            className="profile-img"
                        />
                    </div>
                    <div className="quick-links">
                        {/* GitHub and LinkedIn icons below the profile image */}
                        <div className="social-icons">
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <h1>Aaron Lua</h1>
                    <ReactTyped
                        strings={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast']}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        className="typed-text"
                    />
                    <p className="header-intro">
                        An aspiring software engineer based in Singapore, passionate about creating impactful solutions through code.
                    </p>
                    <div className="header-cta">
                        <a href="#contact" className="cta-button primary">Get in Touch</a>
                        <a href="#projects" className="cta-button secondary">View Projects</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;