// src/pages/aboutPage.jsx
import React from 'react';
import './aboutStyles.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our SaaS company! We specialize in providing top-notch software solutions to help businesses thrive in the digital age. Our team of experts is dedicated to delivering innovative and reliable services to our clients.
        </p>
        <p>
          Our mission is to empower businesses with the tools they need to succeed. We believe in the power of technology to transform industries and improve lives. With a focus on customer satisfaction and continuous improvement, we strive to exceed expectations and set new standards in the industry.
        </p>
      </div>
      <div className="about-image">
        <img src="https://via.placeholder.com/600x400" alt="About Us" />
      </div>
    </div>
  );
};

export default About;
