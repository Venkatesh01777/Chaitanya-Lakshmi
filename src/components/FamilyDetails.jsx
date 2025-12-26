import React from 'react';
import './FamilyDetails.css';

const FamilyDetails = () => {
  const familyMembers = [
    {
      icon: '👨',
      relation: 'Father',
      name: 'Ramana Banana',
      occupation: 'Business',
      contact: '9676049572'
    },
    {
      icon: '👩',
      relation: 'Mother',
      name: 'Rama Ratnam Banana',
      occupation: 'MPTC - Karlam Village',
      contact: ''
    },
    {
      icon: '👨‍💻',
      relation: 'Brother',
      name: 'Venkatesh Banana',
      occupation: 'Software Engineer',
      contact: ''
    }
  ];

  return (
    <section className="section family-details">
      <div className="container">
        <h2 className="section-title">Family Background</h2>
        
        <div className="family-grid">
          {familyMembers.map((member, index) => (
            <div key={index} className="family-card">
              <div className="family-icon">{member.icon}</div>
              <div className="family-relation">{member.relation}</div>
              <h3 className="family-name">{member.name}</h3>
              <div className="family-occupation">
                <span className="occupation-icon">💼</span>
                {member.occupation}
              </div>
              {member.contact && (
                <div className="family-contact">
                  <span className="contact-icon">📞</span>
                  {member.contact}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
