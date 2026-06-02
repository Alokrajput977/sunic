import React from "react";
import styles from "../css/Mainabout.module.css";
import Footer from "./Footer";

const Mainabout = () => {
  return (
    <div className={styles.aboutPage}>
      {/* ==========================================================================
         1. HERO COVER SECTION
         ========================================================================== */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <span className={styles.heroSub}>Who We Are</span>
          <h1>Sunic <span className={styles.highlight}>Automation</span></h1>
          <p>
            Architecting next-generation telemetry hardware, machine vision matrix systems, and live document intelligence nodes.
          </p>
        </div>
      </section>

      {/* ==========================================================================
         2. BUSINESS DATA INSIGHTS PANEL
         ========================================================================== */}
      <section className={styles.metricBanner}>
        <div className={styles.container}>
          <div className={styles.metricGrid}>
            <div className={styles.metricCard}>
              <span className={styles.metricNumber}>14+</span>
              <span className={styles.metricLabel}>Years Core R&D</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricNumber}>99.4%</span>
              <span className={styles.metricLabel}>OCR Node Accuracy</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricNumber}>120k+</span>
              <span className={styles.metricLabel}>Deployments Managed</span>
            </div>
            <div className={styles.metricCard}>
              <span className={styles.metricNumber}>24/7</span>
              <span className={styles.metricLabel}>Telemetry Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. COMPANY OVERVIEW SECTION (Updated Image: Modern Tech Operations Hub)
         ========================================================================== */}
      <section className={styles.companyOverview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <span className={styles.sectionBadge}>Corporate Identity</span>
              <h2>Our Genesis & Mission</h2>
              <p>
                Sunic Automation is a global technology pioneer specializing in high-performance Optical Character Recognition (OCR), integrated hardware telemetry systems, and advanced enterprise software infrastructure. Founded over a decade ago, we bridge the complex gap between multi-node physical sensory environments and live digital operations frameworks.
              </p>
              <p>
                Our architectural stacks empower multi-modal industrial platforms to optimize their daily overhead metrics, enforce clean telemetry parsing, and isolate pipeline errors effortlessly. From robust localized logistics modules to high-capacity enterprise networks, we architect performance.
              </p>
            </div>
            <div className={styles.overviewImageWrapper}>
              <div className={styles.imageBackingBox}></div>
              <img 
                className={styles.overviewImage}
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" 
                alt="Sunic Automation Network Infrastructure Control" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
   4. CORPORATE MANIFESTO (Matched to image_fdf6ff.png with Premium Orange Theme)
   ========================================================================== */}
<section className={styles.manifestoSection}>
  <div className={styles.container}>
    <div className={styles.manifestoHeader}>
      <h2>Our Manifesto</h2>
      <p>
        Great teams build great products by promoting diversity of opinions, fostering experimentation, learning and iterating quickly, and most importantly, understanding their customers such that a harmonious balance is realized between innovation, customer success, and business value. Our guiding principles include:
      </p>
    </div>
    
    <div className={styles.manifestoGrid}>
      {/* Card 1 */}
      <div className={styles.manifestoCard}>
        <div className={styles.manifestoIconZone}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className={styles.manifestoContent}>
          <h3>Be Hungry</h3>
          <p>We believe in constantly being hungry for learning more and striving for perfection bit by bit.</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className={styles.manifestoCard}>
        <div className={styles.manifestoIconZone}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div className={styles.manifestoContent}>
          <h3>Be Honest</h3>
          <p>We believe in speaking our mind without getting personal. We believe in doing things that are right even if it leads to a more difficult path.</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className={styles.manifestoCard}>
        <div className={styles.manifestoIconZone}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div className={styles.manifestoContent}>
          <h3>Be Humble</h3>
          <p>We believe in staying humble because success is not final and failure is not fatal.</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className={styles.manifestoCard}>
        <div className={styles.manifestoIconZone}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div className={styles.manifestoContent}>
          <h3>Be Human</h3>
          <p>We believe in helping and being empathic to everyone around us including our colleagues and customers.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ==========================================================================
         5. TECHNICAL EXPERTISE GRID
         ========================================================================== */}
      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <span className={styles.sectionBadge}>Architectural Capabilities</span>
            <h2>Core Technical Verticals</h2>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-eye"></i>
              </div>
              <h3>Vision & OCR Systems</h3>
              <p>
                Advanced multi-layered character recognition frameworks engineered to capture and translate complex, high-velocity physical media datasets into secure JSON matrices with minimal latency overhead.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-microchip"></i>
              </div>
              <h3>Telemetry Hardware</h3>
              <p>
                Industrial data capture hardware solutions, high-speed sorting sensors, and embedded scanning modules calibrated to perform flawlessly in high-load operational nodes.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Ecosystem Integration</h3>
              <p>
                End-to-end software development executing cloud deployments, neural analytics dashboards, and responsive, scalable control applications that merge neatly into legacy backends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. EXECUTIVE LEADERSHIP PROFILE (Updated Image: Corporate Executive portrait)
         ========================================================================== */}
      <section className={styles.leadership}>
        <div className={styles.container}>
          <div className={styles.leadershipHeader}>
            <span className={styles.sectionBadge}>The Boardroom</span>
            <h2>Executive Guidance</h2>
          </div>
          <div className={styles.leaderProfile}>
            <div className={styles.leaderImageWrapper}>
              <div className={styles.leaderGraphicBacking}></div>
              <img 
                className={styles.leaderImage}
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" 
                alt="Mr. Manmohan, Founder & CEO" 
              />
            </div>
            <div className={styles.leaderDetails}>
              <h3>Mr. Manmohan</h3>
              <p className={styles.leaderTitle}>Founder & Chief Executive Officer</p>
              <p>
                Bringing over 15 years of technical engineering tenure across industrial systems, Mr. Manmohan established Sunic Technology to completely fundamentally alter how digital frameworks parse, cross-reference, and interact with live sensor metadata assets.
              </p>
              <p>
                Under his active systemic oversight, Sunic has evolved from a targeted research lab into a premier international integration ecosystem. He advocates for hyper-scalable automation models built upon uncompromised telemetry reliability and elite client success architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         7. HIGH-CONVERSION CALL TO ACTION (CTA)
         ========================================================================== */}
      <section className={styles.aboutCta}>
        <div className={styles.container}>
          <h2>Accelerate Your Node Infrastructure Today</h2>
          <p>Connect with a system engineer to audit and scale your workflow throughput vectors.</p>
          <button className={styles.ctaButton}>
            Initiate Consultation Desk <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mainabout;