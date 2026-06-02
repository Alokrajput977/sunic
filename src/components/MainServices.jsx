import React from 'react';
import '../css/SunicServicesPage.css';
import Footer from './Footer';

const SunicServicesPage = () => {
    const serviceItems = [
        {
            icon: "fas fa-laptop-code",
            title: "Applications",
            desc: "Modernize your application portfolio with our cutting-edge development and management services designed for the digital era."
        },
        {
            icon: "fas fa-brain",
            title: "Data and AI",
            desc: "Leverage the power of artificial intelligence and advanced analytics to transform data into actionable business insights."
        },
        {
            icon: "fas fa-cloud",
            title: "Cloud Ecosystems",
            desc: "Accelerate innovation with our comprehensive cloud solutions, from migration strategy to implementation and management."
        },
        {
            icon: "fas fa-network-wired",
            title: "Digital Workplace",
            desc: "Empower your workforce with seamless digital experiences, collaboration tools, and modern workplace solutions."
        },
        {
            icon: "fas fa-microchip",
            title: "Core Enterprise & xCloud",
            desc: "Modernize your core enterprise systems with our innovative xCloud solutions for enhanced agility and performance."
        },
        {
            icon: "fas fa-satellite-dish",
            title: "Network and Edge",
            desc: "Build resilient, high-performance networks with our edge computing solutions for the connected enterprise."
        },
        {
            icon: "fas fa-shield-virus",
            title: "Cyber Resilience",
            desc: "Protect your business with our comprehensive cybersecurity framework designed to anticipate, withstand, and recover from threats."
        }
    ];

    return (
        <div className="sunic-services-page">
            {/* Hero Section */}
            <section className="sunic-hero">
                <div className="hero-spatial-mask"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="hero-mini-badge">Enterprise Operations</span>
                        <h1>What do you want to achieve today?</h1>
                        <p className="hero-tagline">Scale AI you can trust</p>
                        
                        <div className="hero-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon-wrapper">
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <p>Transform applications to unlock core metrics value</p>
                            </div>
                            <div className="highlight-item">
                                <div className="highlight-icon-wrapper">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <p>Navigate perimeter cyber risk with confidence</p>
                            </div>
                        </div>
                        
                        <button className="cta-button-main">Explore Our Services</button>
                    </div>
                    
                    {/* NEW IMAGE: Ultra-Modern IT Corporate Headquarters & Tech Workspace */}
                    <div className="hero-image-frame">
                        <div className="image-bounding-glow"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Sunic Advanced IT Command Center"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="sunic-services">
                <div className="container">
                    <div className="section-meta-header">
                        <span className="section-accent-tag">Capabilities</span>
                        <h2 className="section-title">Services that drive business results</h2>
                        <div className="title-accent-bar"></div>
                    </div>
                    
                    <div className="services-grid">
                        {serviceItems.map((item, index) => (
                            <div key={index} className="service-card">
                                <div className="service-card-inner">
                                    <div className="service-icon-bg">
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <a href="#explore" className="service-link">
                                        Learn more <i className="fas fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Spotlight Section */}
            <section id="solutions" className="sunic-spotlight">
                <div className="container">
                    <div className="section-meta-header">
                        <span className="section-accent-tag">Frameworks</span>
                        <h2 className="section-title">Spotlight Solutions</h2>
                        <div className="title-accent-bar"></div>
                    </div>

                    <div className="spotlight-grid">
                        {/* Spotlight 1 - Sunic Bridge */}
                        <div className="spotlight-card">
                            <div className="spotlight-image">
                                {/* NEW IMAGE: Enterprise System Architecture Grid */}
                                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sunic Bridge Data Integration" />
                            </div>
                            <div className="spotlight-content">
                                <div className="spotlight-category">Integration Platform</div>
                                <h3>Sunic Bridge</h3>
                                <p>An open integration platform delivering innovative IT solutions that connect your business processes and data sources seamlessly.</p>
                                <a href="#learn" className="spotlight-link">Learn more <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>

                        {/* Spotlight 2 - Sunic Collaborative */}
                        <div className="spotlight-card">
                            <div className="spotlight-image">
                                {/* NEW IMAGE: Modern Tech Meeting & Agile Synergy */}
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sunic Collaborative Teams" />
                            </div>
                            <div className="spotlight-content">
                                <div className="spotlight-category">Global Ecosystem</div>
                                <h3>Sunic Collaborative</h3>
                                <p>The space where delivery happens, globally and locally. Our collaborative platform brings teams together regardless of location.</p>
                                <a href="#learn" className="spotlight-link">Learn more <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>

                        {/* Spotlight 3 - Sunic Vital */}
                        <div className="spotlight-card">
                            <div className="spotlight-image">
                                {/* NEW IMAGE: Human-Centric UI/UX Tech Interface */}
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Sunic Vital Human Centered Engineering" />
                            </div>
                            <div className="spotlight-content">
                                <div className="spotlight-category">Experience Design</div>
                                <h3>Sunic Vital</h3>
                                <p>Co-creating intelligent, human-centred experiences that put people at the heart of digital transformation.</p>
                                <a href="#learn" className="spotlight-link">Learn more <i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="sunic-cta">
                <div className="cta-background-overlay"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to transform your business infrastructure?</h2>
                        <p>Connect with our engineering specialists to discover how Sunic Technology can help maximize optimization matrix loops.</p>
                        <div className="cta-buttons">
                            <button className="cta-button primary">Contact Us</button>
                            <button className="cta-button secondary">View All Services</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SunicServicesPage;