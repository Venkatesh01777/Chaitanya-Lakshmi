import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="photo-placeholder">
          <img 
            src="/photo.jpg" 
            alt="Chaitanya Lakshmi Banana" 
            className="profile-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="photo-fallback">
            <span>Photo</span>
          </div>
        </div>
        <h1 className="name">Chaitanya Lakshmi Banana</h1>
        <div className="header-highlights">
          <span className="highlight-item">🎓 B.Sc Graduate</span>
          <span className="highlight-item">📍 Vizianagaram</span>
          <span className="highlight-item">🕉️ Hindu • Polinati Velama</span>
        </div>
      </div>
      <div className="decorative-border"></div>
    </header>
  );
};

export default Header;
