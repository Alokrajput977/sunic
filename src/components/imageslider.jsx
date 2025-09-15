import React, { useState, useEffect } from 'react';
import '../css/ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sample project data - replace with your actual projects
  const slides = [
    {
      id: 1,
      title: "Enterprise CRM Solution",
      description: "A comprehensive customer relationship management system for large enterprises",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "#project1"
    },
    {
      id: 2,
      title: "AI-Powered Analytics Platform",
      description: "Machine learning driven analytics for business intelligence",
      image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      link: "#project2"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Modernization",
      description: "Migration and optimization of legacy systems to cloud-native architecture",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      link: "#project3"
    },
    {
      id: 4,
      title: "Mobile Banking Application",
      description: "Secure and user-friendly banking app with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "#project4"
    },
    {
      id: 5,
      title: "IoT Smart Office Solution",
      description: "Connected devices for optimizing office space utilization and energy efficiency",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "#project5"
    }
  ];

  // Auto slide every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">Our Featured Projects</h2>
      <div 
        className="slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="slide">
          <a href={slides[currentIndex].link} className="slide-link">
            <div 
              className="slide-image"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            ></div>
            <div className="slide-overlay">
              <div className="slide-content">
                <h3 className="slide-title">{slides[currentIndex].title}</h3>
                <p className="slide-description">{slides[currentIndex].description}</p>
                <button className="slide-button">View Project</button>
              </div>
            </div>
          </a>
        </div>
        
        <div className="slider-arrows">
          <div className="arrow left-arrow" onClick={goToPrevious}>
            &#10094;
          </div>
          <div className="arrow right-arrow" onClick={goToNext}>
            &#10095;
          </div>
        </div>
        
        <div className="slider-dots">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;