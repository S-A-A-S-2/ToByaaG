import React from 'react';
import './homeStyles.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to 2🐝yaaG</h1>
          <p>Your Community for Career Empowerment</p>
          <button className="cta-button">Join Us Now</button>
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Our community originated from the concerns and challenges students encounter when choosing a career path after high school. By providing proper guidance, we aim to cultivate a workforce that enjoys their job and dispel misconceptions related to various degrees or fields.
        </p>
      </section>

      <section className="features-section">
        <h2>Why Join Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Comprehensive Guidance</h3>
            <p>Get detailed roadmaps for various career paths created with insights from professionals and retired experts.</p>
          </div>
          <div className="feature-card">
            <h3>Community Support</h3>
            <p>Engage with peers and mentors, share experiences, and find answers to your career-related questions.</p>
          </div>
          <div className="feature-card">
            <h3>Empowerment</h3>
            <p>Empower yourself to make informed career decisions and achieve your professional goals.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Shape Your Future?</h2>
        <p>Join our community and start your journey towards a fulfilling career today!</p>
        <button className="cta-button">Sign Up</button>
      </section>
    </div>
  );
};

export default HomePage;
