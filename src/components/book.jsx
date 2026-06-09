// Book.jsx
import React, { useState } from "react";
import "../css/book.css";

// SVG Icons (no emojis)
const IconOcr = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H16V10H8V8Z" fill="currentColor"/>
    <path d="M8 12H14V14H8V12Z" fill="currentColor"/>
    <path d="M8 16H12V18H8V16Z" fill="currentColor"/>
    <path d="M16 12L19 15L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconAi = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10C18 6.68629 15.3137 4 12 4C9.12304 4 6.72843 6.05273 6.1557 8.77966M18 10C20.2091 10 22 11.7909 22 14C22 16.2091 20.2091 18 18 18H7C4.23858 18 2 15.7614 2 13C2 10.2386 4.23858 8 7 8C7.05261 8 7.10506 8.00062 7.15733 8.00184M18 10H17.5M6.1557 8.77966C5.70855 8.28623 5.4 7.66359 5.4 6.97C5.4 5.43764 6.63764 4.2 8.17 4.2C9.05626 4.2 9.85717 4.63145 10.3642 5.29605" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 14L12 12L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconIndustrial = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20L8 12L12 16L16 8L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="3" y="17" width="18" height="3" rx="1" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconStar = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M12 3V16M12 16L9 13M12 16L15 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 17L5 18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Book() {
  const [formData, setFormData] = useState({ fullName: "", email: "", company: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ fullName: "", email: "", company: "" });
    }
  };

  return (
    <div className="book-page">
      {/* HERO SECTION */}
      <section className="hero-book">
        <div className="hero-left">
          <div className="badge">
            <span className="badge-icon">⚡</span> #1 Automation Guide
          </div>
          <h1>
            Master <span className="accent">Automation</span><br />
            & AI Workflows
          </h1>
          <p>
            Learn OCR systems, AI models, industrial automation, telemetry systems
            and cloud architecture with practical examples.
          </p>
          <div className="hero-buttons">
            <button className="download-btn">
              <IconDownload /> Download PDF
            </button>
            <button className="preview-btn">
              Preview Book
            </button>
          </div>
          <div className="stats">
            <div>
              <h2>450+</h2>
              <span>Pages</span>
            </div>
            <div>
              <h2>120+</h2>
              <span>Examples</span>
            </div>
            <div>
              <h2>4.9★</h2>
              <span>Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="book-card">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80"
              alt="Automation Book Cover"
              loading="eager"
            />
            <div className="tag top">AI Powered</div>
            <div className="tag bottom">Enterprise Edition</div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION - BEAUTIFUL REDESIGN */}
      <section className="features">
        <div className="features-container">
          <div className="section-header">
            <span className="section-tag">What You'll Learn</span>
            <h2>What's Inside The Book?</h2>
            <p>Comprehensive coverage of modern automation technologies</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon"><IconOcr /></div>
              <div className="feature-content">
                <h3>OCR Systems</h3>
                <p>Build OCR projects and document processing pipelines.</p>
                <div className="feature-topics">
                  <span><IconCheck /> Text Extraction</span>
                  <span><IconCheck /> Document Parsing</span>
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><IconAi /></div>
              <div className="feature-content">
                <h3>AI Models</h3>
                <p>Learn machine learning and AI workflow architectures.</p>
                <div className="feature-topics">
                  <span><IconCheck /> Neural Networks</span>
                  <span><IconCheck /> LLM Integration</span>
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><IconCloud /></div>
              <div className="feature-content">
                <h3>Cloud Deployment</h3>
                <p>Docker, Kubernetes and scalable infrastructure.</p>
                <div className="feature-topics">
                  <span><IconCheck /> Containerization</span>
                  <span><IconCheck /> Auto-scaling</span>
                </div>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><IconIndustrial /></div>
              <div className="feature-content">
                <h3>Industrial Automation</h3>
                <p>Sensors, telemetry and hardware integrations.</p>
                <div className="feature-topics">
                  <span><IconCheck /> IoT Sensors</span>
                  <span><IconCheck /> Real-time Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTERS SECTION - MODERN DESIGN */}
      <section className="chapters">
        <div className="chapters-container">
          <div className="section-header">
            <span className="section-tag">Table of Contents</span>
            <h2>Book Chapters</h2>
            <p>Structured learning path from basics to advanced</p>
          </div>
          <div className="chapter-list">
            <div className="chapter-item">
              <div className="chapter-number">01</div>
              <div className="chapter-info">
                <h4>Introduction to OCR</h4>
                <p>Optical Character Recognition fundamentals and Tesseract</p>
              </div>
              <div className="chapter-duration">8 lessons</div>
            </div>
            <div className="chapter-item">
              <div className="chapter-number">02</div>
              <div className="chapter-info">
                <h4>AI Workflow Systems</h4>
                <p>Building end-to-end machine learning pipelines</p>
              </div>
              <div className="chapter-duration">10 lessons</div>
            </div>
            <div className="chapter-item">
              <div className="chapter-number">03</div>
              <div className="chapter-info">
                <h4>Industrial Sensors</h4>
                <p>Hardware integration and data acquisition</p>
              </div>
              <div className="chapter-duration">6 lessons</div>
            </div>
            <div className="chapter-item">
              <div className="chapter-number">04</div>
              <div className="chapter-info">
                <h4>Docker & Kubernetes</h4>
                <p>Container orchestration for scalable apps</p>
              </div>
              <div className="chapter-duration">9 lessons</div>
            </div>
            <div className="chapter-item">
              <div className="chapter-number">05</div>
              <div className="chapter-info">
                <h4>Telemetry Architecture</h4>
                <p>Real-time monitoring and data streaming</p>
              </div>
              <div className="chapter-duration">7 lessons</div>
            </div>
            <div className="chapter-item">
              <div className="chapter-number">06</div>
              <div className="chapter-info">
                <h4>Cloud Deployment</h4>
                <p>AWS/Azure/GCP production deployment</p>
              </div>
              <div className="chapter-duration">12 lessons</div>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM SECTION */}
      <section className="download-section">
        <div className="download-card">
          <h2>Get Free eBook</h2>
          <p>Enter your details and receive the PDF instantly.</p>
          {isSubmitted && <div className="success-message">✓ Download link sent! Check your email.</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
            <button type="submit">Download Now</button>
          </form>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial">
        <div className="section-header">
          <span className="section-tag">Testimonials</span>
          <h2>Readers Feedback</h2>
          <p>What engineers are saying about this book</p>
        </div>
        <div className="review-grid">
          <div className="review-card">
            <div className="stars">
              <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
            </div>
            <p>"Best automation book I've ever read. Practical and up-to-date."</p>
            <span className="reviewer">— Sarah Chen, AI Lead</span>
          </div>
          <div className="review-card">
            <div className="stars">
              <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
            </div>
            <p>"Perfect for OCR and AI engineers. The cloud chapters are gold."</p>
            <span className="reviewer">— Marcus V., CTO</span>
          </div>
          <div className="review-card">
            <div className="stars">
              <IconStar /><IconStar /><IconStar /><IconStar /><IconStar />
            </div>
            <p>"Excellent practical examples. Finally a book that bridges hardware and AI."</p>
            <span className="reviewer">— Elena Rossi, Automation Specialist</span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bottom-cta">
        <h2>Ready To Transform Your <span className="accent">Automation Skills</span>?</h2>
        <p>Start learning today with our enterprise guide. Join 15,000+ engineers.</p>
        <button className="cta-button">Download Free Book</button>
      </section>
    </div>
  );
}