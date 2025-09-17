import React, { useState } from "react";
import "../css/ContactPage.css";

const ContactPage = () => {
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    education: "",
    skills: "",
    experience: "",
    coverLetter: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for your application! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      education: "",
      skills: "",
      experience: "",
      coverLetter: "",
    });
    setShowInternshipForm(false);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Get in Touch with Sunic Technology</h1>
          <p className="hero-subtitle">
            We'd love to hear from you — let's build something amazing together!
          </p>
        </div>
      </section>

      <div className="main-container">
        {/* Contact Information Section */}
        <section className="contact-section">
          <div className="section-header">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels</p>
          </div>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Address</h3>
              <p>
                Tower A, Spaze iTech Park, Unit No-561, Tower-B, B1, 5th Floor,
                <br />
                Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018
              </p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone</h3>
              <p>+91-XXXXXXXXXX</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>info@sunictechnology.com</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>
                Mon - Fri: 9:00 AM - 6:00 PM <br />
                Sat: 10:00 AM - 2:00 PM <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="section-header">
            <h2>Find Our Office</h2>
            <p>Come visit us at our location</p>
          </div>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.419258973492!2d77.04685621508337!3d28.437935182499024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c95dc76c6f%3A0x72e8cf7edc72b37a!2sSpaze%20iTech%20Park%2C%20Sector%2049%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="video-section">
          <div className="section-header">
            <h2>🎥 Watch Our Introduction</h2>
            <p>Learn more about Sunic Technology</p>
          </div>
          <div className="video-container">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/QyhwSYhX09s?si=tHh3RZoE2CaokxZW" 
              title="Sunic Technology Intro Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px" }}
            ></iframe>
          </div>
        </section>

        {/* Internship Section */}
        <section className="internship-section">
          <div className="section-header">
            <h2>🚀 Internship Program</h2>
            <p>
              Join our dynamic team and gain valuable experience in the tech
              industry. We offer internships in various domains.
            </p>
          </div>

          {!showInternshipForm ? (
            <div className="internship-cta">
              <p>
                Ready to kickstart your career? Apply now for our internship
                program!
              </p>
              <button
                className="cta-button"
                onClick={() => setShowInternshipForm(true)}
              >
                Apply for Internship
              </button>
            </div>
          ) : (
            <div className="form-container">
              <h3>Internship Application</h3>
              <form className="internship-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="position">Desired Position *</label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select a position</option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Quality Assurance">
                        Quality Assurance
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="education">Educational Background *</label>
                  <textarea
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="skills">Technical Skills *</label>
                  <textarea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Previous Experience (if any)</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter *</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowInternshipForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ContactPage;