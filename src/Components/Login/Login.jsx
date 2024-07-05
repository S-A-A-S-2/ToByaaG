// src/components/Login.js
import React from 'react';
import './Login.component.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back</h2>
        <input type="email" placeholder="Enter your email" className="login-input" />
        <input type="password" placeholder="Enter your password" className="login-input" />
        <a href="#" className="forgot-password">Forgot Password?</a>
        <button className="login-button">Login</button>
        <div className="or-divider">or</div>
        <button className="oauth-button github">Login with GitHub</button>
        <button className="oauth-button google">Login with Google</button>
        <button className="oauth-button byaag">Login with 2byaag ID</button>
        <div className="signup-link">
          Don't have an account? <a href="#" className="sign-up">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
