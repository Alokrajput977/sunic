import React from "react";
import styles from "../css/Mainabout.module.css";
import Footer from "./Footer";

const Mainabout = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.aboutHero}>
        <div className={styles.heroContent}>
          <h1>About Sunic Technology</h1>
          <p>
            Leading the digital transformation with innovative OCR, hardware, and software solutions
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className={styles.companyOverview}>
        <div className={styles.container}>
          <div className={styles.overviewContent}>
            <div className={styles.overviewText}>
              <h2>Our Story</h2>
              <p>
                Sunic Technology is a pioneering IT company specializing in Optical Character Recognition (OCR), 
                hardware innovation, and software development. Established with a vision to bridge the gap between 
                physical documents and digital accessibility, we have been at the forefront of technological 
                advancements for over a decade.
              </p>
              <p>
                Our solutions empower businesses to streamline operations, enhance productivity, and unlock new 
                possibilities through cutting-edge technology. From small businesses to large enterprises, we 
                deliver tailored solutions that drive growth and efficiency.
              </p>
            </div>
            <div className={styles.overviewImage}>
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" 
                alt="Sunic Technology Office" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadership}>
        <div className={styles.container}>
          <h2>Our Leadership</h2>
          <div className={styles.leaderProfile}>
            <div className={styles.leaderImage}>
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt="Mr. Manmohan, Founder & CEO" 
              />
            </div>
            <div className={styles.leaderDetails}>
              <h3>Mr. Manmohan</h3>
              <p className={styles.leaderTitle}>Founder & CEO</p>
              <p>
                With over 15 years of experience in the technology industry, Mr. Manmohan founded Sunic Technology 
                with a mission to revolutionize how businesses interact with documents and data. His visionary 
                leadership and technical expertise have been instrumental in shaping the company's innovative 
                solutions and client-centric approach.
              </p>
              <p>
                Under his guidance, Sunic Technology has grown from a startup to a recognized leader in OCR 
                technology and integrated hardware-software solutions. Mr. Manmohan believes in the power of 
                technology to transform businesses and is committed to delivering excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.container}>
          <h2>Our Expertise</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
                  alt="OCR Technology" 
                />
              </div>
              <h3>OCR Technology</h3>
              <p>
                Advanced Optical Character Recognition solutions that convert various types of documents into 
                editable and searchable data. Our OCR technology supports multiple languages and formats with 
                exceptional accuracy.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/3004/3004761.png" 
                  alt="Hardware Solutions" 
                />
              </div>
              <h3>Hardware Solutions</h3>
              <p>
                Custom hardware development including scanners, data capture devices, and specialized peripherals 
                designed to work seamlessly with our software solutions for optimal performance.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/906/906175.png" 
                  alt="Software Development" 
                />
              </div>
              <h3>Software Development</h3>
              <p>
                End-to-end software development services creating intuitive, powerful applications that integrate 
                with existing systems and leverage the latest technologies to solve complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>01</div>
              <h3>Innovation</h3>
              <p>We constantly push boundaries to develop cutting-edge solutions that address tomorrow's challenges today.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>02</div>
              <h3>Excellence</h3>
              <p>We are committed to delivering superior quality in every product, service, and interaction with our clients.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>03</div>
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and respect for our clients, partners, and employees.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>04</div>
              <h3>Collaboration</h3>
              <p>We believe in working closely with our clients to understand their unique needs and deliver tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.aboutCta}>
        <div className={styles.container}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Discover how Sunic Technology's innovative solutions can drive your success</p>
          <button className={styles.ctaButton}>Contact Us Today</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mainabout;
