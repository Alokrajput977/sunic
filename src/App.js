import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import ImageSlider from "./components/imageslider.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Mainabout from "./components/MainAbout.jsx";
import MainServices from "./components/MainServices.jsx";
import "./App.css";

// Home Page Layout (all sections)
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ImageSlider />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutt" element={< Mainabout/>} />
          <Route path="/services" element={<MainServices/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
