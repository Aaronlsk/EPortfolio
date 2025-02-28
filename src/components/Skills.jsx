import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                <div className="skill-card">
                    <h3>Front-end Development</h3>
                    <p>HTML5, CSS3, JavaScript, React</p>
                </div>
                <div className="skill-card">
                    <h3>Back-end Development</h3>
                    <p>Node.js, Python, C#, C++, SQL, Postman</p>
                </div>
                <div className="skill-card">
                    <h3>UI/UX Design</h3>
                    <p>Figma, Adobe XD, Canva, Photoshop</p>
                </div>
                <div className="skill-card">
                    <h3>Other Tools</h3>
                    <p>Git, Jira, Visual Paradigm, AWS</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;