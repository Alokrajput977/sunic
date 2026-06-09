// AboutEnterprise.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/AboutEnterprise.css";

// Custom SVG Icons
const IconAi = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M16 9L20 11L20 13L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 9L4 11L4 13L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconSecurity = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L5 6V11C5 16.5 12 21 12 21C12 21 19 16.5 19 11V6L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
    </svg>
);

const IconApi = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H20V16H4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="12" r="1" fill="currentColor" />
        <circle cx="17" cy="12" r="1" fill="currentColor" />
    </svg>
);

const IconAnalytics = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 5L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconTerminal = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9L11 12L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 15H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconArrowRight = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconCheck = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconGlobe = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2C14.5 4.5 15.5 8 15.5 12C15.5 16 14.5 19.5 12 22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2C9.5 4.5 8.5 8 8.5 12C8.5 16 9.5 19.5 12 22" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const IconRocket = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15L9 18M12 15L15 18M12 15V21M5 10L8 10M19 10L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 4C7.5 4 4 7 4 12L6 14H18L20 12C20 7 16.5 4 12 4Z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="2" fill="currentColor" />
    </svg>
);

const IconWarehouse = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 21V10L12 5L19 10V21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21V15H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="11" width="6" height="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const IconDashboard = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 21V9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="13" r="1" fill="currentColor" />
        <circle cx="17" cy="13" r="1" fill="currentColor" />
        <path d="M15 13H18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const AboutEnterprise = () => {
    const [isVisible, setIsVisible] = useState({});
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => observerRef.current.observe(el));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <div className="about-enterprise">
            {/* HERO SECTION WITH LEFT IMAGE */}
            {/* HERO SECTION */}
            <section className="hero-about-full">
                <div className="hero-bg-pattern"></div>
                <div className="hero-container">
                    {/* LEFT SIDE - IMAGE */}
                    <div className="hero-image-side animate-on-scroll visible" data-id="hero-image">
                        <div className="hero-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format"
                                alt="Warehouse automation"
                                className="hero-main-img"
                                loading="eager"
                            />
                            <div className="hero-image-badge">
                                <span className="badge-dot"></span>
                                <span>Live Operations: 1,247 Active Tasks</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - CONTENT */}
                    <div className="hero-content animate-on-scroll visible" data-id="hero-content">
                        <div className="hero-badge">
                            <IconRocket />
                            <span>Enterprise Automation Platform</span>
                        </div>

                        <h1 className="hero-title">
                            Transform Your <span className="accent">Logistics</span> <br />
                            With AI-Powered Automation
                        </h1>

                        <p className="hero-subtitle">
                            Deploy cutting-edge AI deep learning models that seamlessly integrate with your
                            terminal ecosystems, turning raw asset data into clean, operational workflows.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <h3>10M+</h3>
                                <span>Daily Operations</span>
                            </div>
                            <div className="stat-item">
                                <h3>99.99%</h3>
                                <span>Uptime SLA</span>
                            </div>
                            <div className="stat-item">
                                <h3>25+</h3>
                                <span>Countries</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <Link to="/contact" className="btn-primary">
                                Start Free Trial <IconArrowRight />
                            </Link>
                            <button className="btn-secondary">
                                Watch Demo
                            </button>
                        </div>

                        <div className="hero-trust">
                            <span>Trusted by industry leaders:</span>
                            <div className="trust-logos">
                                <span>✦ DHL</span>
                                <span>✦ Maersk</span>
                                <span>✦ FedEx</span>
                                <span>✦ Amazon Logistics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION SECTION WITH DASHBOARD IMAGE */}
            <section className="mission-section-full">
                <div className="mission-container-full">
                    <div className={`mission-text animate-on-scroll ${isVisible["mission-text"] ? "visible" : ""}`} data-id="mission-text">
                        <div className="mission-icon">
                            <IconRocket />
                        </div>
                        <h2>We Deliver High-Performance Automation & Logistics Infrastructure</h2>
                        <p>
                            We specialize in syncing AI deep learning models with terminal ecosystems.
                            Our platforms turn real-world raw asset data into clean, transparent, operational workflows.
                        </p>
                        <div className="mission-features">
                            <div className="mission-feature">
                                <IconCheck />
                                <span>Real-time asset tracking</span>
                            </div>
                            <div className="mission-feature">
                                <IconCheck />
                                <span>AI-powered predictive analytics</span>
                            </div>
                            <div className="mission-feature">
                                <IconCheck />
                                <span>Seamless terminal integration</span>
                            </div>
                        </div>
                    </div>
                    <div className={`mission-image animate-on-scroll ${isVisible["mission-image"] ? "visible" : ""}`} data-id="mission-image">
                        <div className="dashboard-preview">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format"
                                alt="Automation dashboard analytics"
                            />
                            <div className="dashboard-overlay">
                                <IconDashboard />
                                <span>Live Analytics Dashboard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WAREHOUSE SHOWCASE SECTION */}
            <section className="warehouse-showcase">
                <div className={`warehouse-header animate-on-scroll ${isVisible["warehouse-header"] ? "visible" : ""}`} data-id="warehouse-header">
                    <span className="section-tag">Our Facility</span>
                    <h2>State-of-the-Art Warehouse Automation</h2>
                    <p>See how our technology transforms traditional warehouses into smart logistics hubs</p>
                </div>
                <div className="warehouse-grid">
                    <div className={`warehouse-card animate-on-scroll ${isVisible["warehouse-1"] ? "visible" : ""}`} data-id="warehouse-1">
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format"
                            alt="Automated conveyor system"
                        />
                        <div className="warehouse-card-content">
                            <h3>Automated Conveyor Systems</h3>
                            <p>High-speed sorting and routing with AI optimization</p>
                        </div>
                    </div>
                    <div className={`warehouse-card animate-on-scroll ${isVisible["warehouse-2"] ? "visible" : ""}`} data-id="warehouse-2">
                        <img
                            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=600&auto=format"
                            alt="Robotic picking arms"
                        />
                        <div className="warehouse-card-content">
                            <h3>Robotic Picking Systems</h3>
                            <p>Vision-guided robotic arms for precise item handling</p>
                        </div>
                    </div>
                    <div className={`warehouse-card animate-on-scroll ${isVisible["warehouse-3"] ? "visible" : ""}`} data-id="warehouse-3">
                        <img
                            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format"
                            alt="AGV fleet management"
                        />
                        <div className="warehouse-card-content">
                            <h3>AGV Fleet Management</h3>
                            <p>Autonomous guided vehicles for material transport</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Services Grid */}
            <section className="services-section">
                <div className={`services-header animate-on-scroll ${isVisible["services-header"] ? "visible" : ""}`} data-id="services-header">
                    <span className="section-tag">Core Capabilities</span>
                    <h2>Enterprise-Grade Automation Solutions</h2>
                    <p>Engineered precisely around your port, station, or terminal mapping metrics</p>
                </div>
                <div className="services-grid">
                    <div className={`service-card animate-on-scroll ${isVisible["service-1"] ? "visible" : ""}`} data-id="service-1">
                        <div className="service-icon"><IconAi /></div>
                        <h3>Customized AI Architectures</h3>
                        <p>Engineered precisely around your port, station, or terminal mapping metrics.</p>
                        <div className="service-features">
                            <span><IconCheck /> Deep Learning Models</span>
                            <span><IconCheck /> Computer Vision</span>
                        </div>
                    </div>
                    <div className={`service-card animate-on-scroll ${isVisible["service-2"] ? "visible" : ""}`} data-id="service-2">
                        <div className="service-icon"><IconSecurity /></div>
                        <h3>Enterprise Security & SLA</h3>
                        <p>Certified data protection keeping operations resilient and guarded 24/7.</p>
                        <div className="service-features">
                            <span><IconCheck /> ISO 27001 Certified</span>
                            <span><IconCheck /> 99.99% Uptime SLA</span>
                        </div>
                    </div>
                    <div className={`service-card animate-on-scroll ${isVisible["service-3"] ? "visible" : ""}`} data-id="service-3">
                        <div className="service-icon"><IconApi /></div>
                        <h3>Seamless Terminal Synced API</h3>
                        <p>Integrates instantly with hardware location tracking configurations seamlessly.</p>
                        <div className="service-features">
                            <span><IconCheck /> RESTful API</span>
                            <span><IconCheck /> WebSocket Support</span>
                        </div>
                    </div>
                    <div className={`service-card animate-on-scroll ${isVisible["service-4"] ? "visible" : ""}`} data-id="service-4">
                        <div className="service-icon"><IconAnalytics /></div>
                        <h3>Predictive Workflow Analytics</h3>
                        <p>Spot bottlenecks before they occur with real-world smart tracking forecasts.</p>
                        <div className="service-features">
                            <span><IconCheck /> Real-time Dashboards</span>
                            <span><IconCheck /> Anomaly Detection</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="tech-section">
                <div className="tech-container">
                    <div className={`tech-left animate-on-scroll ${isVisible["tech-left"] ? "visible" : ""}`} data-id="tech-left">
                        <span className="section-tag">Technology Stack</span>
                        <h2>Built on Cutting-Edge Infrastructure</h2>
                        <p>
                            Our platform leverages the latest advancements in AI, cloud computing,
                            and IoT to deliver unparalleled automation capabilities.
                        </p>
                        <div className="tech-list">
                            <div className="tech-item">
                                <div className="tech-dot"></div>
                                <span>AI & Machine Learning Models</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-dot"></div>
                                <span>Cloud-Native Architecture (AWS/Azure/GCP)</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-dot"></div>
                                <span>IoT Sensor Networks & Edge Computing</span>
                            </div>
                            <div className="tech-item">
                                <div className="tech-dot"></div>
                                <span>Real-time Data Streaming (Kafka)</span>
                            </div>
                        </div>
                    </div>
                    <div className={`tech-right animate-on-scroll ${isVisible["tech-right"] ? "visible" : ""}`} data-id="tech-right">
                        <div className="tech-stats">
                            <div className="tech-stat-card">
                                <h3>10M+</h3>
                                <span>Daily API Calls</span>
                            </div>
                            <div className="tech-stat-card">
                                <h3>5ms</h3>
                                <span>Avg. Response Time</span>
                            </div>
                            <div className="tech-stat-card">
                                <h3>99.99%</h3>
                                <span>Uptime Guarantee</span>
                            </div>
                        </div>
                        <div className="tech-globe">
                            <IconGlobe />
                            <span>Global Infrastructure</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="global-section">
                <div className={`global-header animate-on-scroll ${isVisible["global-header"] ? "visible" : ""}`} data-id="global-header">
                    <span className="section-tag">Worldwide Operations</span>
                    <h2>Trusted by Industry Leaders Across the Globe</h2>
                    <p>Our solutions power automation in 25+ countries</p>
                </div>
                <div className={`global-grid animate-on-scroll ${isVisible["global-grid"] ? "visible" : ""}`} data-id="global-grid">
                    <div className="global-card">
                        <h3>🌎 North America</h3>
                        <p>New York · San Francisco · Toronto</p>
                    </div>
                    <div className="global-card">
                        <h3>🌍 Europe</h3>
                        <p>London · Berlin · Amsterdam · Paris</p>
                    </div>
                    <div className="global-card">
                        <h3>🌏 Asia-Pacific</h3>
                        <p>Singapore · Tokyo · Sydney · Shanghai</p>
                    </div>
                    <div className="global-card">
                        <h3>🌎 Middle East</h3>
                        <p>Dubai · Riyadh · Tel Aviv</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutEnterprise;