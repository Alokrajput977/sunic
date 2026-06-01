import React from "react";
import Lottie from "lottie-react";
import warehouseAnim from "./warehouse.json";
import trainnAnim from "./trainn.json";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* Left content structured exactly like the reference UI */}
      <div className="hero-content">
        <h1 className="hero-title">
          Automate your <span className="text-orange">Location Tracking</span> with our AI platform
        </h1>
        
        <p className="hero-subtitle">
          We help transform terminals and ports worldwide by enhancing their efficiency, 
          capacity, and transparency across all their operations.
        </p>
        
        <div className="hero-buttons">
          <a href="#demo" className="btn btn-primary">
            Book a Demo
          </a>
          <a href="#learn" className="btn btn-secondary">
            Learn More
          </a>
        </div>

        {/* Lower body text feature section matching the reference design layout */}
        <div className="hero-feature-text">
          <p>
            Harness the power of Sunic technology, fortified by deep learning AI models 
            and equipped with pre-trained real-world data, to transform your supply chain operations.
          </p>
        </div>
      </div>
      
      {/* Right animations remain untouched */}
      <div className="hero-image">
        <div className="animation-scene">
          <div className="lottie-block warehouse-left">
            <Lottie animationData={warehouseAnim} loop={true} autoplay={true} />
          </div>
          
          <div className="lottie-block train-center">
            <Lottie animationData={trainnAnim} loop={true} autoplay={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;