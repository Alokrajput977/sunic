import React, { useState } from "react";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you for reaching out! Our logistics team will review your message shortly.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Connect With Us</span>
          <h2>Get In Touch</h2>
          <p>Have questions about tracking, automated terminal networks, or supply chain solutions? Let's connect.</p>
        </div>

        <div className="contact-content">
          {/* Info Side with Added Points */}
          <div className="contact-info">
            <div className="info-intro">
              <h3>Corporate Headquarters</h3>
              <p>
                Reach out directly to find out how our AI platform turns location data into operational intelligence.
              </p>
            </div>

            <div className="info-cards-stack">
              <div className="info-item-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Tower A, Spaze iTech Park, Unit No-561, Tower-B, B1, 5th Floor, Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-details">
                  <h4>Phone & Support</h4>
                  <p>+91 123-456-7890</p>
                </div>
              </div>

              <div className="info-item-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-details">
                  <h4>Email Address</h4>
                  <p>SunicTechnology@gmail.com</p>
                </div>
              </div>

              {/* Added Premium Point: Business Hours */}
              <div className="info-item-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-details">
                  <h4>Operational Hours</h4>
                  <p>Monday - Saturday: 09:00 AM - 06:00 PM (IST)</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Our Channels</h4>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-link" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-link" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Clean Modern Form Panel */}
          <div className="contact-form-card">
            <h3>Send Us A Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject / Inquiry Area</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="e.g., Platform Demo, Terminal Deployment"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your operations or technology requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-submit">
                Submit Inquiry <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Styled Frame Map Container */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0223216098153!2d77.28684487549663!3d28.50907027573825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1c07c6abdb1%3A0x4cb09c9b3a09d7f0!2sICD%20Tughlakabad!5e0!3m2!1sen!2sin!4v1694750000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Sunic Technology Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;