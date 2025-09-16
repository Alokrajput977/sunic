import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={closeMenu}>
            <img src={logo} alt="TechSolutions Logo" className="logo-img" />
            <span className="logo-text">Tech Solutions</span>
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a href="/" onClick={closeMenu} className="nav-item">
            <i className="fas fa-home"></i> Home
          </a>
          <Link to="/aboutt" onClick={closeMenu} className="nav-item">
            <i className="fas fa-info-circle"></i> About
          </Link>
          <a href="#services" onClick={closeMenu} className="nav-item">
            <i className="fas fa-cogs"></i> Services
          </a>
          <a href="#products" onClick={closeMenu} className="nav-item">
            <i className="fas fa-box-open"></i> Products
          </a>
          <a href="#contact" onClick={closeMenu} className="nav-item">
            <i className="fas fa-envelope"></i> Contact
          </a>
          <a href="/project" onClick={closeMenu} className="nav-item">
            <i className="fas fa-user"></i>  Project</a>
        </div>

        <div
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;