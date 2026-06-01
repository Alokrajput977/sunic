import React from "react";
import "../css/Services.css";

const Services = () => {
  const services = [
    {
      icon: "fas fa-map-marked-alt",
      title: "Real-Time Asset Tracking",
      description: "High-precision location intelligence frameworks ensuring live monitoring across globally synchronized hardware configurations."
    },
    {
      icon: "fas fa-robot",
      title: "Automated Terminal Operations",
      description: "Smart algorithmic processing architectures designed to completely minimize bottleneck delays inside terminal checkpoints."
    },
    {
      icon: "fas fa-network-wired",
      title: "Ecosystem API Syncing",
      description: "Seamless software-to-hardware integrations that stream live container updates straight to your existing dashboards."
    },
    {
      icon: "fas fa-brain",
      title: "Deep Learning AI Models",
      description: "Harness complex pre-trained neural networks to calculate predictive arrival times and optimize route management."
    },
    {
      icon: "fas fa-chart-pie",
      title: "Logistics Flow Analytics",
      description: "Turn raw terminal metrics into clean operational visual insights to maximize sorting speed and throughput capacity."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Enterprise Data Guard",
      description: "End-to-end security architectures explicitly deployed to isolate and safeguard your tracking information across nodes."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">What We Offer</span>
          <h2>Our Core Platform Services</h2>
          <p>Cutting-edge automation frameworks built around precision tracking and supply chain efficiency.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="card-inner-content">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">
                  Explore Feature <i className="fas fa-chevron-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;