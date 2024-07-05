import React from 'react';
import './aboutStyles.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Our community originated from the concerns and challenges students encounter when choosing a career path after high school or the 10th standard. By providing proper guidance during these times, we can help cultivate a workforce that enjoys their job. At the very least, we can prevent someone from pursuing the wrong degree and dispel confusion and misconceptions related to various degrees or fields.
            </p>
          </div>
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              At "2🐝yaaG," we are dedicated to bridging gaps in career education with innovative approaches. We curate personalized roadmaps for various career fields, crafted in collaboration with retired professionals who generously share their insights and experiences.
            </p>
          </div>
          <div className="about-text">
            <h3>Why Join Us</h3>
            <p>
              Join us to discover untold stories and unique career journeys. We emphasize the significance of every career path, aiming to inspire and guide individuals towards fulfilling professional lives.
            </p>
          </div>
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower individuals by providing the necessary tools and support to shape their career paths confidently. Through our community, we aim to transform aspirations into achievements, ensuring everyone can say, "I am."
            </p>
          </div>
          <div className="about-text">
            <h3>Additional Content Ideas</h3>
            <ul>
              <li>Testimonials: Include quotes or stories from community members about their experiences and successes.</li>
              <li>Interactive Elements: Consider adding interactive elements like career quizzes or success stories.</li>
              <li>Visuals and Media: Incorporate photos or videos that highlight community events or success stories.</li>
              <li>Community Impact: Discuss the impact your community has had on members' lives or the broader community.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-title">The Story Behind 2ByaaG</h2>
        <div className="about-content">
          <p>
            Ever since finishing school, a pivotal question hangs in the air: "What do you want to be?" We answer with aspirations – doctor, engineer, entrepreneur – the possibilities are endless. The word "to be" takes center stage, shaping our path and affirming our identity.
          </p>
          <p>
            In our daily lives, we often use "yeah" or "yaa" to confirm and solidify something. "Oh yeah, that's it!" or a simple "Yeah" signifies agreement and validates our choices.
          </p>
          <p>
            2ByaaG takes these elements and merges them into a powerful message: "to bee yaa" (to be you). It's a constant reminder of your potential to become the person you envision. Our community serves as a platform to reaffirm this aspiration, providing the support, guidance, and resources you need to turn your "to be" into a resounding "I am."
          </p>
        </div>
      </section>
      <section className="about-section">
        <h2 className="section-title">Socials</h2>
        <div className="about-content">
          <ul className="social-links">
            <li><a href="https://x.com/2ByaaG">LinkedIn - X</a></li>
            <li><a href="https://www.instagram.com/2byaag/">Instagram</a></li>
            <li><a href="https://www.youtube.com/@2Byaag">Youtube</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
