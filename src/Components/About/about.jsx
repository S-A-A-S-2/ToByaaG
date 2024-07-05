// src/pages/aboutPage.jsx
import React from 'react';
import './aboutStyles.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
           <p>
        
        Our community originated from the concerns and challenges students encounter when choosing a career path after high school or the 10th standard. By providing proper guidance during these times, we can help cultivate a workforce that enjoys their job. At the very least, we can prevent someone from pursuing the wrong degree and dispel confusion and misconceptions related to various degrees or fields.

Our community is bridging gaps with unique approaches and preparing roadmaps for every field. These roadmaps will guide us on the course to follow, the activities to undertake to reach our goals, and assist others in choosing their path.

To create these roadmaps, we will consult with professionals in these fields, mainly those who are retired. We will seek their guidance and collect their experiences to benefit students. Older people often share their stories and provide guidance, so we will utilize these narratives.

There are many unheard stories out there. We plan to share these through our community and emphasize that every little thing matters. Every field has its own uniqueness and a way to excel in it.
        
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
