// SunicServicesPage.jsx
import React from 'react';
import '../css/SunicServicesPage.css';
import Footer from './Footer';

const SunicServicesPage = () => {
    return (
        <div className="sunic-services-page">


            {/* Hero Section */}
            <section className="sunic-hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>What do you want to achieve today?</h1>
                        <p className="hero-tagline">Scale AI you can trust</p>
                        <div className="hero-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🚀</div>
                                <p>Transform applications to unlock value</p>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon">🛡️</div>
                                <p>Navigate cyber risk with confidence</p>
                            </div>
                        </div>
                        <button className="cta-button">Explore Our Services</button>
                    </div>
                    <div className="hero-image">
                        <img
                            src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Sunic Technology Solutions"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="sunic-services">
                <div className="container">
                    <h2 className="section-title">Services that drive business results</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Applications" />
                            </div>
                            <h3>Applications</h3>
                            <p>Modernize your application portfolio with our cutting-edge development and management services designed for the digital era.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Data and AI" />
                            </div>
                            <h3>Data and AI</h3>
                            <p>Leverage the power of artificial intelligence and advanced analytics to transform data into actionable business insights.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Cloud" />
                            </div>
                            <h3>Cloud</h3>
                            <p>Accelerate innovation with our comprehensive cloud solutions, from migration strategy to implementation and management.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Digital Workplace" />
                            </div>
                            <h3>Digital Workplace</h3>
                            <p>Empower your workforce with seamless digital experiences, collaboration tools, and modern workplace solutions.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Core Enterprise" />
                            </div>
                            <h3>Core Enterprise and xCloud</h3>
                            <p>Modernize your core enterprise systems with our innovative xCloud solutions for enhanced agility and performance.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1560732486-7e3166070c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Network and Edge" />
                            </div>
                            <h3>Network and Edge</h3>
                            <p>Build resilient, high-performance networks with our edge computing solutions for the connected enterprise.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>

                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Cyber Resilience" />
                            </div>
                            <h3>Cyber Resilience</h3>
                            <p>Protect your business with our comprehensive cybersecurity framework designed to anticipate, withstand, and recover from threats.</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spotlight Section */}
            <section id="solutions" className="sunic-spotlight">
                <div className="container">
                    <h2 className="section-title">Spotlight Solutions</h2>
                    <div className="spotlight-grid">
                        <div className="spotlight-card">
                            <div className="spotlight-image">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sunic Bridge" />
                            </div>
                            <div className="spotlight-content">
                                <h3>Sunic Bridge</h3>
                                <p>An open integration platform delivering innovative IT solutions that connect your business processes and data sources seamlessly.</p>
                                <a href="#" className="spotlight-link">Learn more →</a>
                            </div>
                        </div>

                        <div className="spotlight-card">
                            <div className="spotlight-image">
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sunic Collaborative" />
                            </div>
                            <div className="spotlight-content">
                                <h3>Sunic Collaborative</h3>
                                <p>The space where delivery happens, globally and locally. Our collaborative platform brings teams together regardless of location.</p>
                                <a href="#" className="spotlight-link">Learn more →</a>
                            </div>
                        </div>

                        <div className="spotlight-card">
                            <div className="spotlight-image">
                                <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sunic Vital" />
                            </div>
                            <div className="spotlight-content">
                                <h3>Sunic Vital</h3>
                                <p>Co-creating intelligent, human-centred experiences that put people at the heart of digital transformation.</p>
                                <a href="#" className="spotlight-link">Learn more →</a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="sunic-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to transform your business?</h2>
                        <p>Connect with our experts to discover how Sunic Technology can help you achieve your goals.</p>
                        <div className="cta-buttons">
                            <button className="cta-button primary">Contact Us</button>
                            <button className="cta-button secondary">View All Services</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SunicServicesPage;