import React from 'react';
import Header from './components/Header';
import PersonalDetails from './components/PersonalDetails';
import EducationCareer from './components/EducationCareer';
import FamilyDetails from './components/FamilyDetails';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <PersonalDetails />
      <EducationCareer />
      <FamilyDetails />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
