
// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={closeMenu}>
            <span className="logo-text">SUNIC</span>
            <span className="logo-subtext">Technology</span>
          </a>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="#home" onClick={closeMenu}>
              <i className="fas fa-home"></i> Home
            </a>
          </div>
          <div className="nav-item">
            <a href="#about" onClick={closeMenu}>
              <i className="fas fa-info-circle"></i> About
            </a>
          </div>
          <div className="nav-item">
            <a href="#services" onClick={closeMenu}>
              <i className="fas fa-cogs"></i> Services
            </a>
          </div>
          <div className="nav-item">
            <a href="#products" onClick={closeMenu}>
              <i className="fas fa-box-open"></i> Products
            </a>
          </div>
          <div className="nav-item">
            <a href="#contact" onClick={closeMenu}>
              <i className="fas fa-envelope"></i> Contact
            </a>
          </div>
        </div>
        
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;