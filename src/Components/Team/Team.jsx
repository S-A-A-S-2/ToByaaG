import React from 'react';
import './Team.component.css';

const Team = () => {
  return (
    <div className="team-section">
      <h2 className="section-title">Meet Our Team</h2>
      <div className="team-container">

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team1.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Abhimanyu R B</h3>
            <p className="member-position">Founder</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team10.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Aagneya Syam</h3>
            <p className="member-position">Founder</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team3.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Abhijith B</h3>
            <p className="member-position">Co-Founder</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team4.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Abhijith B</h3>
            <p className="member-position">Co-Founder</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team5.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Abhijith B</h3>
            <p className="member-position">Co-Founder</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team6.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Abhijith B</h3>
            <p className="member-position">Co-Founder</p>
          </div>
        </div>

        <div className="team-member">
          <div className="member-info">
            <div className="member-avatar">
              <img src="../assests/img/team1.jpg" alt="Abhijith" />
            </div>
            <h3 className="member-name">Abhijith B</h3>
            <p className="member-position">Co-Founder</p>
          </div>
        </div>
         
         


        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default Team;
