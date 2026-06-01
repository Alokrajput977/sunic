import React from "react";
import Lottie from "lottie-react";
import warehouseAnim from "./warehouse.json";
import trainnAnim from "./trainn.json";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Innovative <span className="text-orange">IT Solutions</span> for Your Business
        </h1>
        <p className="hero-subtitle">
          We provide cutting-edge technology services to help your business grow in the digital age
        </p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">
            Our Services
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
      
      <div className="hero-image">
        <div className="animation-scene">
          
          <div className="lottie-block warehouse-left">
            <Lottie animationData={warehouseAnim} loop={true} autoplay={true} />
          </div>
          
          {/* Center Transit/Train Element */}
          <div className="lottie-block train-center">
            <Lottie animationData={trainnAnim} loop={true} autoplay={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;