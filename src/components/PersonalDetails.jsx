import React from 'react';
import './PersonalDetails.css';

const PersonalDetails = () => {
  const details = [
    { label: 'Date of Birth', value: '06-06-2002', icon: '📅' },
    { label: 'Place of Birth', value: "St. Joseph's Hospital, Rajam", icon: '📍' },
    { label: 'Time of Birth', value: '23:39', icon: '🕐' },
    { label: 'Age', value: '23 years', icon: '✨' },
    { label: 'Height', value: '5 feet 4 inches (163 cm)', icon: '📏' },
    { label: 'Complexion', value: 'Wheatish', icon: '🌟' },
    { label: 'Marital Status', value: 'Single', icon: '💫' },
  ];

  const astrologicalDetails = [
    { label: 'Rashi', value: 'Mesh (Aries)', icon: '♈' },
    { label: 'Nakshatra', value: 'Ashwini', icon: '⭐' },
    { label: 'Gotra', value: 'Nageshwara Gotram', icon: '🕉️' },
    { label: 'Manglik', value: 'No', icon: '✓' },
  ];

  const religiousDetails = [
    { label: 'Religion', value: 'Hindu', icon: '🕉️' },
    { label: 'Mother Tongue', value: 'Telugu', icon: '🗣️' },
    { label: 'Caste', value: 'BC-D', icon: '📜' },
    { label: 'Sub Caste', value: 'Polinati Velama', icon: '🏛️' },
  ];

  return (
    <section className="section personal-details">
      <div className="container">
        <h2 className="section-title">Personal Details</h2>
        
        <div className="details-group">
          <h3 className="subsection-title">Basic Information</h3>
          <div className="details-grid">
            {details.map((item, index) => (
              <div key={index} className="detail-item">
                <span className="detail-icon">{item.icon}</span>
                <div className="detail-content">
                  <span className="detail-label">{item.label}</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="details-group">
          <h3 className="subsection-title">Astrological Details</h3>
          <div className="details-grid">
            {astrologicalDetails.map((item, index) => (
              <div key={index} className="detail-item">
                <span className="detail-icon">{item.icon}</span>
                <div className="detail-content">
                  <span className="detail-label">{item.label}</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="details-group">
          <h3 className="subsection-title">Religious Background</h3>
          <div className="details-grid">
            {religiousDetails.map((item, index) => (
              <div key={index} className="detail-item">
                <span className="detail-icon">{item.icon}</span>
                <div className="detail-content">
                  <span className="detail-label">{item.label}</span>
                  <span className="detail-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
