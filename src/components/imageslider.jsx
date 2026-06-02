import React, { useState, useEffect } from 'react';
import '../css/ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState('next'); // tracks animation swing direction

  const slides = [
    {
      id: 1,
      title: "Automated Conveyor Sorting",
      description: "High-speed optical matrix sortation units utilizing advanced machine vision to intelligently route variable freight.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      link: "#sorting"
    },
    {
      id: 2,
      title: "Real-Time Terminal Control",
      description: "Live spatial intelligence dashboard running neural mapping to track freight containers across multi-node entry hubs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      link: "#analytics"
    },
    {
      id: 3,
      title: "RFID Gate Sensor Networks",
      description: "Secure, continuous telemetry scanning rigs tracking automated logistics nodes at entry and exit checkpoints.",
      image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop",
      link: "#rfid"
    },
    {
      id: 4,
      title: "Autonomous Drone Auditing",
      description: "Aerial inventory monitoring frameworks executing localized asset tracking passes inside automated bays.",
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
      link: "#drones"
    },
    {
      id: 5,
      title: "AI Predictive Route Matrices",
      description: "Algorithmic optimization modules designed to forecast handling metrics and prevent bottleneck delays.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1200&auto=format&fit=crop",
      link: "#predictive"
    }
  ];

  useEffect(() => {
    let timer;
    let progressTimer;

    if (!isHovered) {
      setProgress(0);
      
      progressTimer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 100);

      timer = setInterval(() => {
        setDirection('next');
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, [currentIndex, isHovered, slides.length]);

  const handleNav = (targetIndex) => {
    setDirection(targetIndex > currentIndex ? 'next' : 'prev');
    setCurrentIndex(targetIndex);
  };

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider-container">
      <div className="container-header">
        <span className="slider-sub">Deployment Showcases</span>
        <h2 className="slider-title">Featured Automation Systems</h2>
      </div>

      <div 
        className="slider-scene"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dynamic Running Progress Bar Indicator */}
        <div 
          className="slider-progress-bar" 
          style={{ width: `${progress}%` }}
        ></div>

        {/* 3D Stack View Wrapper Container */}
        <div className={`slider-3d-viewport ${direction}`}>
          {slides.map((slide, index) => {
            let positionClass = "slide-inactive";
            if (index === currentIndex) positionClass = "slide-active";
            else if (index === (currentIndex - 1 + slides.length) % slides.length) positionClass = "slide-prev-stack";
            else if (index === (currentIndex + 1) % slides.length) positionClass = "slide-next-stack";

            return (
              <div key={slide.id} className={`slide-card-3d ${positionClass}`}>
                <a href={slide.link} className="slide-link">
                  <div 
                    className="slide-image"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                  
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <span className="slide-badge">System Live</span>
                      <h3 className="slide-title-text">{slide.title}</h3>
                      <p className="slide-description">{slide.description}</p>
                      <button className="slide-button">
                        Examine Architecture <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        
        {/* Sleek Floating Arrow Controllers */}
        <div className="slider-arrows">
          <button className="arrow left-arrow" onClick={goToPrevious} aria-label="Previous Slide">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="arrow right-arrow" onClick={goToNext} aria-label="Next Slide">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        {/* Nav Progress Micro Dots */}
        <div className="slider-dots">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
              onClick={() => handleNav(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;