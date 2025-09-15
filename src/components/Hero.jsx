import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Innovative <span className="text-red">IT Solutions</span> for Your Business
        </h1>
        <p className="hero-subtitle">
          We provide cutting-edge technology services to help your business grow in the digital age
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">
            Our Services
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="floating-card">
          <i className="fas fa-server"></i>
          <h3>Cloud Services</h3>
        </div>
        <div className="floating-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Cyber Security</h3>
        </div>
        <div className="floating-card">
          <i className="fas fa-code"></i>
          <h3>Web Development</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;