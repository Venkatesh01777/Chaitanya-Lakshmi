import React from 'react';
import './EducationCareer.css';

const EducationCareer = () => {
  return (
    <section className="section education-career">
      <div className="container">
        <h2 className="section-title">Education & Career</h2>
        
        <div className="education-career-grid">
          <div className="info-card">
            <div className="card-icon">🎓</div>
            <h3 className="card-title">Education</h3>
            <div className="card-content">
              <div className="info-row">
                <span className="info-label">Highest Qualification</span>
                <span className="info-value">Bachelor of Science</span>
              </div>
              <div className="info-row">
                <span className="info-label">College</span>
                <span className="info-value">St. Joseph's College for Women (Autonomous)</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="card-icon">💼</div>
            <h3 className="card-title">Career</h3>
            <div className="card-content">
              <div className="info-row">
                <span className="info-label">Current Status</span>
                <span className="info-value">SSC CGL Aspirant</span>
              </div>
              <div className="info-row">
                <span className="info-label">Focus</span>
                <span className="info-value">Preparing for Government Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCareer;
