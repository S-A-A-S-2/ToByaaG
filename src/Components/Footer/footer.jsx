// src/components/Footer.jsx
import React from 'react';
import './footerStyles.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

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
              <li><a href="#!"><FaFacebookF /></a></li>
              <li><a href="#!"><FaTwitter /></a></li>
              <li><a href="#!"><FaLinkedinIn /></a></li>
              <li><a href="#!"><FaInstagram /></a></li>
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
