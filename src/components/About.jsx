import React, { useEffect, useState } from "react";
import "../css/About.css";

const statsData = [
  { value: 250, label: "Happy Clients" },
  { value: 500, label: "Projects Completed" },
  { value: 50, label: "IT Experts" },
  { value: 15, label: "Awards Won" },
];

const About = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [years, setYears] = useState(0); // 👈 for experience badge

  useEffect(() => {
    // 🔹 Animate stats counters
    statsData.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 13200;
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

    // 🔹 Animate years of experience
    let startYear = 0;
    const endYear = 13;
    const yearCounter = setInterval(() => {
      startYear += 1;
      if (startYear >= endYear) {
        startYear = endYear;
        clearInterval(yearCounter);
      }
      setYears(startYear);
    }, 80); // speed for years count

  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Us</h2>
          <p>Learn more about our company and mission</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
              alt="About TechSolutions"
            />
            <div className="experience-badge">
              <span className="years">{years}+</span> {/* 🔥 animated */}
              <span className="text">Years of Experience</span>
            </div>
          </div>

          <div className="about-text">
            <h3>We Provide Innovative IT Solutions</h3>
            <p>
              TechSolutions is a leading provider of IT services and solutions
              with over a decade of experience in the industry. We specialize in
              helping businesses leverage technology to achieve their goals and
              stay ahead of the competition.
            </p>

            <div className="about-features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Customized solutions for your business needs</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Expert team with certified professionals</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>24/7 support and maintenance services</span>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <span>Cutting-edge technology and methodologies</span>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="stats">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-item">
              <h4>{counts[index]}+</h4>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
