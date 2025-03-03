import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaCode, FaServer, FaPalette, FaTools, FaAws
} from 'react-icons/fa'; 
import './Skills.css';

const Skills = () => {
  // Carousel settings for categories
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
  };

  // Skill data
  const skillsData = [
    {
      category: 'Front-end Development',
      icon: <FaCode />,
      skills: [
        { name: 'HTML5', icon: '/images/html5-icon.png' }, 
        { name: 'CSS3', icon: '/images/css3-icon.png' },
        { name: 'JavaScript', icon: '/images/javascript-icon.png' },
        { name: 'React', icon: '/images/react-icon.png' }, 
      ],
    },
    {
      category: 'Back-end Development',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: '/images/nodejs-icon.png' },
        { name: 'Python', icon: '/images/python-icon.png' }, 
        { name: 'C#', icon: <FaCode /> }, 
        { name: 'SQL', icon: '/images/sql-icon.png' }, 
        { name: 'Postman', icon: '/images/postman-icon.png' }, 
      ],
    },
    {
      category: 'UI/UX Design',
      icon: <FaPalette />,
      skills: [
        { name: 'Figma', icon: '/images/figma-icon.png' }, 
        { name: 'Adobe XD', icon: '/images/adobe-xd-icon.png' }, 
        { name: 'Canva', icon: '/images/canva-icon.png' }, 
        { name: 'Photoshop', icon: '/images/photoshop-icon.png' }, 
      ],
    },
    {
      category: 'Other Tools',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: '/images/github-icon.png' }, 
        { name: 'Jira', icon: '/images/jira-icon.png' }, 
        { name: 'Visual Paradigm', icon: '/images/diagram-icon.png' }, 
        { name: 'AWS', icon: <FaAws /> }, 
      ],
    },
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <Slider {...carouselSettings} className="category-carousel">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.category}</h3>
            </div>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-icon">
                    {typeof skill.icon === 'string' ? (
                      <img src={skill.icon} alt={skill.name} className="custom-icon" />
                    ) : (
                      skill.icon
                    )}
                  </div>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      {/* Credit Line */}
      <div className="icon-credit">
        Icons sourced from <a href="https://www.svgrepo.com/" target="_blank" rel="noopener noreferrer">SVG Repo</a>.
      </div>
    </section>
  );
};

export default Skills;