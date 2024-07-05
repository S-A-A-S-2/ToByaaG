// src/pages/homePage.jsx
import React from 'react';
import './homeStyles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to 2🐝yaaG <br/></h1>
      <p>
        "Your community for career empowerment!"
      </p>
      <div className="home-features">
        <div className="feature-item">
          <i className="fas fa-cogs"></i>
          <h3>How are we?</h3>
          <p>Tap To Know more.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-shield-alt"></i>
          <h3>Our Story</h3>
          <p>Tap To Know more.</p>
        </div>
        <div className="feature-item">
          <i className="fas fa-mobile-alt"></i>
          <h3>Join Now!</h3>
          <p>Tap To Know more.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
