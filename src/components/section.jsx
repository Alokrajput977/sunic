import React from 'react';
import '../css/CompanySection.css';

const CompanySection = () => {
  return (
    <div className="company-section">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Sunic Technology</h1>
          <p className="hero-subtitle">Innovating the Future of IT Solutions</p>
          <button className="cta-button">Explore Our Solutions</button>
        </div>
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Sunic Technology is a leading IT company dedicated to providing
                cutting-edge solutions for businesses worldwide. With over a decade
                of experience, we specialize in software development, cloud
                computing, cybersecurity, and digital transformation.
              </p>
              <p>
                Our team of experts is committed to delivering innovative
                technology solutions that drive growth and efficiency for our
                clients.
              </p>
              <div className="stats-container">
                <div className="stat">
                  <h3>10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>500+</h3>
                  <p>Clients Worldwide</p>
                </div>
                <div className="stat">
                  <h3>50+</h3>
                  <p>IT Experts</p>
                </div>
              </div>
            </div>
            <div className="about-image">
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="why-grid">
            <div className="why-card">
              <i className="fas fa-user-shield"></i>
              <h3>Trusted Partner</h3>
              <p>We prioritize trust and long-term relationships with our clients.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-cogs"></i>
              <h3>Innovative Solutions</h3>
              <p>We deliver scalable, future-ready technologies.</p>
            </div>
            <div className="why-card">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Our dedicated support team is always available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item"><i className="fas fa-envelope"></i><p>info@sunictechnology.com</p></div>
              <div className="contact-item"><i className="fas fa-phone"></i><p>+1 (555) 123-4567</p></div>
              <div className="contact-item"><i className="fas fa-map-marker-alt"></i><p>123 Tech Park, Innovation City</p></div>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sunic Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CompanySection;
