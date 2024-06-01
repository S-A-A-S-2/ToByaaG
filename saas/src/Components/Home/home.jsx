// src/pages/homePage.jsx
import React from 'react';
import './homeStyles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our SaaS Company</h1>
      <p>
        We provide innovative solutions for businesses to succeed in the digital world.
      </p>
      <div className="home-features">
        <div className="feature-item">
          <i className="fas fa-cogs"></i>
          <h3>Custom Solutions</h3>
          <p>Our services are tailored to meet your unique business needs.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-shield-alt"></i>
          <h3>Security First</h3>
          <p>We prioritize security to keep your data safe and secure.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-mobile-alt"></i>
          <h3>Responsive Design</h3>
          <p>Our applications are designed to work seamlessly on all devices.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
