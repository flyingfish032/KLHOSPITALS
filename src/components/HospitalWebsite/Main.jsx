import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DoctorsCombined from './DoctorsCombined';
import ContactsCombined from './ContactsCombined';
import Login from './Login';
import Register from './Register';
import "./Main.css";
import Home from './Home';
import Services from "./Services"; 
import Header from './HOME/Header';
import Navbar from './HOME/Navbar';
import AboutUsCombined from './AboutUsCombined';

function Main() {
  const location = useLocation(); // Get the current URL path
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className={`container ${isAuthPage ? 'auth-container' : ''}`}>
      {/* Hide Header & Navbar for Login/Register Pages */}
      {!isAuthPage && (
        <>
          <div className='header'>
            <Header />
          </div>
          <div className="nav">
            <Navbar />
          </div>
        </>
      )}

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUsCombined />} />
          <Route path="/doctors" element={<DoctorsCombined />} />
          <Route path="/contacts" element={<ContactsCombined />} />

          {/* Centered Login & Register Pages */}
          <Route path="/login" element={<div className="auth-box"><Login /></div>} /> 
          <Route path="/register" element={<div className="auth-box"><Register /></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
