import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Aaron Lua. All rights reserved.</p>
            <div className="social-links">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
};

export default Footer;