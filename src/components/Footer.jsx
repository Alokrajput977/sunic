import React from "react";
import "../css/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="TechSolutions Logo" />
              <span>TechSolutions</span>
            </div>
            <p>
              Providing innovative IT solutions to help businesses thrive in the digital age.
            </p>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Mobile App Development</a></li>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Cyber Security</a></li>
              <li><a href="#">IT Consulting</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt"></i> Tower A, Spaze iTech Park, Unit No-561, Tower-B, B1, 5th Floor, Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018</li>
              <li><i className="fas fa-phone"></i> +1 (123) 456-7890</li>
              <li><i className="fas fa-envelope"></i> SunicTechnology@gmail.com</li>
              <li><i className="fas fa-clock"></i> Mon-Fri: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © 2012-2013, Sunic Technologies Pvt Ltd., All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;