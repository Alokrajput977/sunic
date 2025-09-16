import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home"); // default active

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // update active item when route changes
  useEffect(() => {
    if (location.pathname === "/") setActiveItem("home");
    else if (location.pathname === "/aboutt") setActiveItem("about");
    else if (location.pathname === "/services") setActiveItem("services");
    else if (location.pathname === "/project") setActiveItem("project");
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={closeMenu}>
            <img src={logo} alt="TechSolutions Logo" className="logo-img" />
            <span className="logo-text">Tech Solutions</span>
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link
            to="/"
            onClick={() => { setActiveItem("home"); closeMenu(); }}
            className={`nav-item ${activeItem === "home" ? "active" : ""}`}
          >
            <i className="fas fa-home"></i> Home
          </Link>
          <Link
            to="/aboutt"
            onClick={() => { setActiveItem("about"); closeMenu(); }}
            className={`nav-item ${activeItem === "about" ? "active" : ""}`}
          >
            <i className="fas fa-info-circle"></i> About
          </Link>
          <Link
            to="/services"
            onClick={() => { setActiveItem("services"); closeMenu(); }}
            className={`nav-item ${activeItem === "services" ? "active" : ""}`}
          >
            <i className="fas fa-cogs"></i> Services
          </Link>
          <a
            href="#products"
            onClick={() => { setActiveItem("products"); closeMenu(); }}
            className={`nav-item ${activeItem === "products" ? "active" : ""}`}
          >
            <i className="fas fa-box-open"></i> Products
          </a>
          <a
            href="#contact"
            onClick={() => { setActiveItem("contact"); closeMenu(); }}
            className={`nav-item ${activeItem === "contact" ? "active" : ""}`}
          >
            <i className="fas fa-envelope"></i> Contact
          </a>
          <Link
            to="/project"
            onClick={() => { setActiveItem("project"); closeMenu(); }}
            className={`nav-item ${activeItem === "project" ? "active" : ""}`}
          >
            <i className="fas fa-user"></i> Project
          </Link>
        </div>

        <div
          className={`nav-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
