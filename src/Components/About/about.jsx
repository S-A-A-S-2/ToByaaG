// src/pages/aboutPage.jsx
import React from 'react';
import './aboutStyles.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
           <p>
        Our SaaS company is dedicated to providing tailored software solutions for microenterprises. We understand the unique challenges faced by small businesses and strive to empower them with cost-effective tools to thrive in today's digital landscape.
      </p>
      <p>
        Our mission is to offer dedicated software applications that can be run locally on your system, eliminating the need for complex infrastructure and reducing operational costs. With our user-friendly interfaces and scalable solutions, microenterprise owners can focus on their core business activities while leveraging technology to drive growth.
      </p>
    </div>
      <div className="about-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTQWYi8xVvPgyAAHNuRl00KtmIJ7phS16jsTkyjWScj15M70jQ9COEvXzyUyw2sET4A8&usqp=CAU/600x400" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
