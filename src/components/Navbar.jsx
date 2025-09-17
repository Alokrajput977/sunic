import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // derive active item directly from pathname
  const getActiveItem = (pathname) => {
    const path = pathname.toLowerCase(); // normalize case
    if (path === "/") return "home";
    if (path === "/aboutt") return "about";
    if (path === "/services") return "services";
    if (path === "/products") return "products";
    if (path === "/contact") return "contact"; // ✅ FIXED
    if (path === "/project") return "project";
    return "";
  };

  const [activeItem, setActiveItem] = useState(getActiveItem(location.pathname));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveItem(getActiveItem(location.pathname));
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="TechSolutions Logo" className="logo-img" />
            <span className="logo-text">Tech Solutions</span>
          </Link>
        </div>

        {/* Menu */}
        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          <Link
            to="/"
            onClick={closeMenu}
            className={`nav-item ${activeItem === "home" ? "active" : ""}`}
          >
            <i className="fas fa-home"></i> Home
          </Link>
          <Link
            to="/aboutt"
            onClick={closeMenu}
            className={`nav-item ${activeItem === "about" ? "active" : ""}`}
          >
            <i className="fas fa-info-circle"></i> About
          </Link>
          <Link
            to="/services"
            onClick={closeMenu}
            className={`nav-item ${activeItem === "services" ? "active" : ""}`}
          >
            <i className="fas fa-cogs"></i> Services
          </Link>
          <Link
            to="/products"
            onClick={closeMenu}
            className={`nav-item ${activeItem === "products" ? "active" : ""}`}
          >
            <i className="fas fa-box-open"></i> Products
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`nav-item ${activeItem === "contact" ? "active" : ""}`}
          >
            <i className="fas fa-envelope"></i> Contact
          </Link>
          <Link
            to="/project"
            onClick={closeMenu}
            className={`nav-item ${activeItem === "project" ? "active" : ""}`}
          >
            <i className="fas fa-user"></i> Project
          </Link>
        </div>

        {/* Hamburger */}
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
