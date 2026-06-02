import React, { useState } from "react";
import "../css/ContactPage.css";

const ContactPage = () => {
  const [activeSegment, setActiveSegment] = useState("general"); // 'general' or 'internship'
  const [showFormNotification, setShowFormNotification] = useState(false);

  // Single, structured form state handler
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    position: "",
    education: "",
    skills: "",
    experience: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Smooth custom notification trigger
    setShowFormNotification(true);
    setTimeout(() => {
      setShowFormNotification(false);
    }, 4000);

    // Reset Form Structure safely
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      position: "",
      education: "",
      skills: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="sunicContactWrapper">
      {/* Toast Notification Alert */}
      {showFormNotification && (
        <div className="sunicToastAlert">
          <div className="toastIcon">✓</div>
          <div className="toastContent">
            <h4>Transmission Successful</h4>
            <p>Our engineering matrix group will contact you within 24 business hours.</p>
          </div>
        </div>
      )}

      {/* Hero Header Section */}
      <section className="sunicContactHero">
        <div className="heroGlowOverlay"></div>
        <div className="container">
          <div className="heroLayoutContent">
            <span className="heroMiniTag">Global Communication Hub</span>
            <h1 className="heroHeaderTitle">Connect With Sunic Engineering Labs</h1>
            <p className="heroHeaderSubtitle">
              Whether establishing enterprise infrastructure scopes or initiating your professional career within digital spaces—we build systems that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Main Framework Layout Container */}
      <div className="container nativeSpacing">

        {/* Core Contact Info Cards Grid */}
        <section className="sunicInfoGridSection">
          <div className="contactCardsLayoutGrid">

            <div className="premiumContactCard">
              <div className="cardIconWrapper">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>HQ Engineering Labs</h3>
              <p>
                Tower A, Spaze iTech Park, Unit No-561, Tower-B, B1, 5th Floor,
                Sohna - Gurgaon Rd, Sector 49, Gurugram, Haryana 122018
              </p>
            </div>

            <div className="premiumContactCard">
              <div className="cardIconWrapper">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Central Routing Pipeline</h3>
              <p className="highlightText">+91-124-XXXXXXX</p>
              <p className="subLabel">Mon - Fri, 9:00 AM — 6:00 PM</p>
            </div>

            <div className="premiumContactCard">
              <div className="cardIconWrapper">
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <h3>Secure Communications</h3>
              <p className="highlightText">info@sunictechnology.com</p>
              <p className="subLabel">Enterprise Inquiry System</p>
            </div>

          </div>
        </section>

        {/* Dual-Action Form Interface Segment */}
        <section className="sunicInteractiveFormSection">
          <div className="formInterfaceContainer">

            <div className="formLeftHeroPanel">
              <span className="panelTag">Communications Framework</span>
              <h2>How can we assist your business operations today?</h2>
              <div className="accentSeparatorBar"></div>
              <p>Toggle your requirements below to either connect with our network specialists or apply for the technology internship syllabus.</p>

              {/* Tab Toggles for switching between forms */}
              <div className="formSegmentToggles">
                <button
                  className={`segmentToggleBtn ${activeSegment === "general" ? "activeSegment" : ""}`}
                  onClick={() => setActiveSegment("general")}
                >
                  <i className="fas fa-handshake"></i> General Business Inquiry
                </button>
                <button
                  className={`segmentToggleBtn ${activeSegment === "internship" ? "activeSegment" : ""}`}
                  onClick={() => setActiveSegment("internship")}
                >
                  <i className="fas fa-graduation-cap"></i> Technical Internship Board
                </button>
              </div>
            </div>

            <div className="formRightInputPanel">
              <form className="sunicMasterForm" onSubmit={handleFormSubmit}>
                <h3>{activeSegment === "general" ? "Direct Corporate Message" : "Intern Operational Application"}</h3>

                <div className="inputSplitRow">
                  <div className="sunicFormBlock">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="sunicFormBlock">
                    <label>Corporate Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="inputSplitRow">
                  <div className="sunicFormBlock">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  {activeSegment === "general" ? (
                    <div className="sunicFormBlock">
                      <label>Inquiry Context *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. System Infrastructure"
                      />
                    </div>
                  ) : (
                    <div className="sunicFormBlock">
                      <label>Target Engineering Domain *</label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Domain Blueprint</option>
                        <option value="Software Development">Software Development & Architecture</option>
                        <option value="Data Analytics">Data Engineering & Analytics</option>
                        <option value="Digital Marketing">Digital Marketing & Strategy</option>
                        <option value="UI/UX Design">UI/UX Interface Engineering</option>
                        <option value="Quality Assurance">Quality Assurance Matrix Testing</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Conditional Fields Based on Selected Tab Segment */}
                {activeSegment === "internship" && (
                  <>
                    <div className="sunicFormBlock">
                      <label>Academic Profile & Credentials *</label>
                      <textarea
                        name="education"
                        rows="2"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        placeholder="Mention your university, degrees, or current ongoing diploma specifications..."
                      />
                    </div>
                    <div className="sunicFormBlock">
                      <label>Technical Core Skills *</label>
                      <textarea
                        name="skills"
                        rows="2"
                        value={formData.skills}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. React.js, Python, Automation Loops, Node.js..."
                      />
                    </div>
                    <div className="sunicFormBlock">
                      <label>Historical Experience Summary (Optional)</label>
                      <textarea
                        name="experience"
                        rows="2"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="List your previous tech internships, freelance tasks, or major independent project rollouts..."
                      />
                    </div>
                  </>
                )}

                <div className="sunicFormBlock">
                  <label>{activeSegment === "general" ? "Detailed Project / Inquiry Scope *" : "Cover Letter & Intent Summary *"}</label>
                  <textarea
                    name={activeSegment === "general" ? "message" : "message"}
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder={activeSegment === "general" ? "Outline your software, hardware, or container tracking optimization goals..." : "Explain why you wish to scale your career within Sunic Technology ecosystem labs..."}
                  />
                </div>

                <button type="submit" className="sunicSubmitFormButton">
                  Transmit Operations Data <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

          </div>
        </section>

        {/* Media Assets Integration Section (Maps & Videos) */}
        {/* Media Assets Integration Section (Maps & Videos) */}
        <section className="sunicMediaIntegrationGrid">

          <div className="mediaContentBlock">
            <div className="mediaHeader">
              <span className="mediaTag">Operational Telemetry</span>
              <h2>True Geographical Location</h2>
              <div className="accentSeparatorBar leftAlign"></div>
            </div>
            <div className="iframeOuterShell">
              {/* UPDATED: Accurate Google Maps Embed URL for Spaze iTech Park, Gurugram */}
              <iframe
                title="Sunic Tech HQ Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1d3509.1172658807987!2d77.03154867611599!3d28.400609395279644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22851edc9fff%3A0x6b7fc6f920f7813a!2sSpaze%20iTech%20Park!5e0!3m2!1sen!2sin!4v1717345678901!5m2!1sen!2sin"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="mediaContentBlock">
            <div className="mediaHeader">
              <span className="mediaTag">Media Ecosystem</span>
              <h2>Corporate Capabilities Showcase</h2>
              <div className="accentSeparatorBar leftAlign"></div>
            </div>
            <div className="iframeOuterShell">
              <iframe
                width="100%"
                height="380"
                src="https://www.youtube.com/embed/QyhwSYhX09s?si=tHh3RZoE2CaokxZW"
                title="Sunic Technology Comprehensive System Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ContactPage;