import React from 'react';
import './Guidelines.component.css';

const Guidelines = () => {
  return (
    <div className="guidelines-container">
      <h1 className="guidelines-heading">Community Guidelines</h1>
      <div className="guideline-section">
        <h2 className="section-heading">Welcome!</h2>
        <p className="section-text">
          This online community is dedicated to helping students navigate the
          exciting, yet sometimes overwhelming, world of career exploration.
          Here, you can connect with peers, learn from professionals, and
          discover valuable resources to guide you towards your dream career.
        </p>
      </div>
      <div className="guideline-section">
        <h2 className="section-heading">To ensure a positive experience:</h2>
        <div className="guideline-list">
          <div className="guideline-item">
            <div className="icon-container">
              <i className="fas fa-handshake"></i>
            </div>
            <p className="item-text">
              <strong>Respectful Communication:</strong> Treat all members with
              courtesy and respect, even if you disagree with their opinions.
              Avoid personal attacks, insults, offensive language, or
              discriminatory remarks.
            </p>
          </div>
          <div className="guideline-item">
            <div className="icon-container">
              <i className="fas fa-book"></i>
            </div>
            <p className="item-text">
              <strong>Content Sharing:</strong> Share information that is
              relevant to career guidance and exploration. Avoid spam, misleading
              content, or content promoting illegal activities.
            </p>
          </div>
          <div className="guideline-item">
            <div className="icon-container">
              <i className="fas fa-users"></i>
            </div>
            <p className="item-text">
              <strong>Community Engagement:</strong> Participate actively in
              discussions and share your knowledge and experiences. Help others
              by answering questions and offering helpful advice.
            </p>
          </div>
          <div className="guideline-item">
            <div className="icon-container">
              <i className="fas fa-shield-alt"></i>
            </div>
            <p className="item-text">
              <strong>Moderation:</strong> Our moderation team is dedicated to
              maintaining a safe environment. We review all content and take
              appropriate action against violations.
            </p>
          </div>
        </div>
      </div>
      <div className="guideline-section">
        <h2 className="section-heading">Additional Considerations:</h2>
        <p className="section-text">
          Off-topic content guidelines will be specified on the community forum
          page. Separate spaces may be designated for discussions and career
          exploration resources. These guidelines are subject to review and
          updates as needed.
        </p>
      </div>
    </div>
  );
};

export default Guidelines;
