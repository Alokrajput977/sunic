import React, { useState } from "react";
import "../css/Products.css";
import crmImage from "../assets/img.png";
import crmImagee from "../assets/iimg.png";

const Products = () => {
  const [activeTab, setActiveTab] = useState("all");

  const products = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2024/06/03/05/28/ai-generated-8805518_1280.png",
      title: "Sunic Terminal Dispatcher",
      category: "software",
      badge: "AI Integrated",
      description: "Comprehensive automated terminal control and asset management solution for high-throughput hubs."
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2024/10/01/15/54/ai-generated-9088888_1280.jpg",
      title: "Network Perimeter Guard",
      category: "security",
      badge: "Zero Trust",
      description: "Advanced cybersecurity defense shield safeguarding interconnected tracking sensors from perimeter breaches."
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2024/03/22/12/49/ai-generated-8649644_1280.jpg",
      title: "SyncCloud Storage Engine",
      category: "cloud",
      badge: "99.9% Uptime",
      description: "Secure, rapidly scalable telemetry database structure built to safely host stream data from port channels."
    },
    {
      id: 4,
      image: crmImage,
      title: "LogiRoute Hub Platform",
      category: "software",
      badge: "Automated",
      description: "Next-gen supplier-to-terminal optimization layout to smoothly streamline asset tracking data pools."
    },
    {
      id: 5,
      image: crmImagee,
      title: "Predictive Analytics Engine",
      category: "analytics",
      badge: "Deep Learning",
      description: "Real-time interactive dashboard visualizing bottle-neck forecasts with actionable spatial intelligence maps."
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2023/07/23/04/38/ai-generated-8144417_1280.png",
      title: "IoT Node Isolation Kit",
      category: "security",
      badge: "Hardware Sync",
      description: "Isolates and encrypts localized tracking beacons against field hardware signal spoofing."
    }
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(product => product.category === activeTab);

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <span className="sub-title">Product Portfolio</span>
          <h2>Our Automation Infrastructure</h2>
          <p>Explore specialized industrial hardware configurations and cloud tracking systems engineered for efficiency.</p>
        </div>

        {/* Categories Tab Bar Switcher */}
        <div className="product-filters">
          {["all", "software", "security", "cloud", "analytics"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "filter-btn active" : "filter-btn"}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" ? "All Systems" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <span className="card-top-badge">{product.badge}</span>
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                  <button className="product-btn">
                    Specs <i className="fas fa-file-alt"></i>
                  </button>
                </div>
              </div>
              
              <div className="product-content">
                <div className="product-category-tag">{product.category}</div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                
                <div className="card-action-bar">
                  <a href="#contact" className="product-link">
                    Request Demo Live <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;