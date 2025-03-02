import React from 'react';
import './Education.css'; 

const Education = () => {
    return (
        <section id="education">
            <h2 className="section-title">Education Journey</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-date">2023 - Present</div>
                        <h3>Diploma in Information Technology</h3>
                        <p>Ngee Ann Polytechnic</p>
                        <p>Specialization in Software Engineering</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-date">2019 - 2022</div>
                        <h3>GCE O-Level Certificate</h3>
                        <p>Greenridge Secondary School</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                        <div className="timeline-date">2013 - 2018</div>
                        <h3>Primary School Leaving Examination (PSLE)</h3>
                        <p>Zhenghua Primary School</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;