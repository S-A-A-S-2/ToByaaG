// src/components/Footer.jsx
import React from 'react';
import './footerStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="#!">Company Information</a></li>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li><a href="#!">Contact Us</a></li>
              <li><a href="#!">Support</a></li>
              <li><a href="#!">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#!"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SaaS Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
