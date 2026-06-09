// About.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/About.css";

const statsData = [
  { value: 250, label: "Happy Clients" },
  { value: 500, label: "Projects Completed" },
  { value: 50, label: "IT Experts" },
  { value: 15, label: "Awards Won" },
];

const About = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [years, setYears] = useState(0);

  useEffect(() => {
    // Animate stats counters
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 30));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, 30);
    });

    // Animate years of experience
    let startYear = 0;
    const endYear = 15;
    const yearCounter = setInterval(() => {
      startYear += 1;
      if (startYear >= endYear) {
        startYear = endYear;
        clearInterval(yearCounter);
      }
      setYears(startYear);
    }, 60);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Who We Are</span>
          <h2>About Our Enterprise</h2>
          <p>Pioneering automated intelligence and cutting-edge location tracking frameworks worldwide.</p>
        </div>

        <div className="about-content">
          {/* Left Side: Contextual Automation Image */}
          <div className="about-image-wrapper">
            <div className="image-border-effect"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              alt="Automated logistics telemetry systems and data control deck"
            />
            <div className="experience-badge">
              <span className="years">{years}+</span>
              <span className="badge-text">Years of Innovation</span>
            </div>
          </div>

          {/* Right Side: Text & Core Value Propositions */}
          <div className="about-text-panel">
            <h3>We Deliver High-Performance Automation & Logistics Infrastructure</h3>
            <p>
              We specialize in syncing AI deep learning models with terminal ecosystems. 
              Our platforms turn real-world raw asset data into clean, transparent, operational workflows.
            </p>

            <div className="about-features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <div className="feature-info">
                  <h4>Customized AI Architectures</h4>
                  <p>Engineered precisely around your port, station, or terminal mapping metrics.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-info">
                  <h4>Enterprise Security & SLA</h4>
                  <p>Certified data protection keeping operations resilient and guarded 24/7.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className="feature-info">
                  <h4>Seamless Terminal Synced API</h4>
                  <p>Integrates instantly with hardware location tracking configurations seamlessly.</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="feature-info">
                  <h4>Predictive Workflow Analytics</h4>
                  <p>Spot bottlenecks before they occur with real-world smart tracking forecasts.</p>
                </div>
              </div>
            </div>

            {/* FIXED: Use Link from react-router-dom instead of anchor tag */}
            <Link to="/enterprise" className="btn btn-about-cta">
              Discover Our Platform <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Counter Stats Container */}
        <div className="stats-strip">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-bg">
                <i className={
                  index === 0 ? "fas fa-users" :
                  index === 1 ? "fas fa-check-double" :
                  index === 2 ? "fas fa-user-shield" : "fas fa-trophy"
                }></i>
              </div>
              <div className="stat-numbers">
                <h4>{counts[index]}+</h4>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;