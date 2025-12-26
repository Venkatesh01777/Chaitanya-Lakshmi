import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <section className="section contact-info">
      <div className="container">
        <h2 className="section-title">Contact Information</h2>
        
        <div className="contact-content">
          <div className="contact-card primary-contact">
            <div className="contact-icon-large">📱</div>
            <h3 className="contact-card-title">Primary Contact</h3>
            <a href="tel:7997420507" className="contact-number">7997420507</a>
            <p className="contact-person">Chaitanya Lakshmi Banana</p>
          </div>

          <div className="contact-card secondary-contact">
            <div className="contact-icon-large">📞</div>
            <h3 className="contact-card-title">Father's Contact</h3>
            <a href="tel:9676049572" className="contact-number">9676049572</a>
            <p className="contact-person">Ramana Banana</p>
          </div>
        </div>

        <div className="address-card">
          <div className="address-icon">🏠</div>
          <h3 className="address-title">Address</h3>
          <p className="address-text">
            D.no: 4-54, Karlam Village<br />
            Cheepurupalli Mandal<br />
            Vizianagaram District
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
