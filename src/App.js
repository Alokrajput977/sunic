import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import ImageSlider from "./components/imageslider.jsx"; // Add this import
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ImageSlider /> {/* Add the ImageSlider component here */}
      <Products />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;