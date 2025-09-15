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
      title: "Enterprise Resource Planning",
      category: "software",
      description: "Comprehensive business management solution for large enterprises."
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2024/10/01/15/54/ai-generated-9088888_1280.jpg",
      title: "Network Security Suite",
      category: "security",
      description: "Advanced security solution to protect your network from threats."
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2024/03/22/12/49/ai-generated-8649644_1280.jpg",
      title: "Cloud Storage Solution",
      category: "cloud",
      description: "Secure and scalable cloud storage for businesses of all sizes."
    },
    {
      id: 4,
      image: crmImage,
      title: "CRM Platform",
      category: "software",
      description: "Customer relationship management tool to grow your business."
    },
    {
      id: 5,
       image: crmImagee,
      title: "Data Analytics Dashboard",
      category: "analytics",
      description: "Visualize and analyze your business data with powerful insights."
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2023/07/23/04/38/ai-generated-8144417_1280.png",
      title: "Endpoint Protection",
      category: "security",
      description: "Protect all endpoints in your organization from cyber threats."
    }
  ];

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter(product => product.category === activeTab);

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>Discover our innovative software solutions and products</p>
        </div>

        <div className="product-filters">
          {["all", "software", "security", "cloud", "analytics"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "filter-btn active" : "filter-btn"}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "all" ? "All Products" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <div className="product-overlay">
                  <button className="product-btn">View Details</button>
                </div>
              </div>
              <div className="product-content">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href="#contact" className="product-link">
                  Request Demo <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
