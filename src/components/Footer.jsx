import React from "react";
import "../css/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Info Segment */}
          <div className="footer-section brand-info">
            <div className="footer-logo">
              <img src={logo} alt="Sunic Automation Logo" />
              <span>Sunic <span className="highlight">Automation</span></span>
            </div>
            <p>
              Next-generation telemetry tracking frameworks and port-side operational hardware architectures engineered for flawless efficiency.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          {/* Quick Navigation Segment */}
          <div className="footer-section">
            <h3>Platform Links</h3>
            <ul>
              <li><a href="#home">Dashboard Home</a></li>
              <li><a href="#about">Corporate About</a></li>
              <li><a href="#services">Core Services</a></li>
              <li><a href="#products">Hardware Systems</a></li>
              <li><a href="#contact">Inquire Desk</a></li>
            </ul>
          </div>
          
          {/* Automated System Capabilities Segment */}
          <div className="footer-section">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#">Asset Micro-Tracking</a></li>
              <li><a href="#">Terminal Dispatchers</a></li>
              <li><a href="#">Ecosystem API Sync</a></li>
              <li><a href="#">Neural Flow Models</a></li>
              <li><a href="#">Data Guard Isolation</a></li>
            </ul>
          </div>
          
          {/* Contact Details & Newsletter Feature Segment */}
          <div className="footer-section contact-info-sect">
            <h3>Control HQ</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt icon-active"></i> 
                <span>Tower A, Spaze iTech Park, Unit No-561, 5th Floor, Sohna Rd, Sector 49, Gurugram, Haryana 122018</span>
              </li>
              <li>
                <i className="fas fa-phone icon-active"></i> 
                <span>+91 (124) 456-7890</span>
              </li>
              <li>
                <i className="fas fa-envelope icon-active"></i> 
                <span>SunicTechnology@gmail.com</span>
              </li>
            </ul>

            {/* Micro Feature: Live Tracking Status PING */}
            <div className="system-status-pill">
              <span className="ping-dot"></span>
              <span className="status-text">All Automation Clusters Operational</span>
            </div>
          </div>
        </div>
        
        {/* Footer Base Subbar */}
        <div className="footer-bottom">
          <p>Copyright © 2012 - 2026, Sunic Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Framework</a>
            <a href="#">Terms of Architecture</a>
            <a href="#">Node Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;