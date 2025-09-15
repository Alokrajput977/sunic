import React from "react";
import "../css/About.css";

const About = () => {
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
              src="https://cdn.pixabay.com/photo/2024/03/05/19/42/ai-generated-8615202_1280.jpg" 
              alt="About TechSolutions" 
            />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of Experience</span>
            </div>
          </div>
          
          <div className="about-text">
            <h3>We Provide Innovative IT Solutions</h3>
            <p>
              TechSolutions is a leading provider of IT services and solutions with over a decade of experience 
              in the industry. We specialize in helping businesses leverage technology to achieve their goals 
              and stay ahead of the competition.
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
          <div className="stat-item">
            <h4>250+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h4>500+</h4>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h4>50+</h4>
            <p>IT Experts</p>
          </div>
          <div className="stat-item">
            <h4>15+</h4>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
