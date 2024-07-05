// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbarStyles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          2🐝yaaG
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Explore
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Commmunity
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
