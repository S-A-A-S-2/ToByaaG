// src/pages/contactPage.jsx
import React from 'react';
import './contactStyles.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="4"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
