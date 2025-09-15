import React from "react";
import "../css/Services.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description: "We create responsive, modern websites and web applications using the latest technologies."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices."
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management services for businesses of all sizes."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your data and systems from threats."
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: "fas fa-support",
      title: "IT Consulting",
      description: "Expert advice and guidance to help you make the right technology decisions."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive IT solutions for your business needs</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;