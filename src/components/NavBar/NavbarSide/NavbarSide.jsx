import React, { useState } from "react";
import "./NavbarSide.css";

const NavbarSide = ({ toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(""); // state to track active menu

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    
    // Smooth scroll to section
    const element = document.querySelector(menuId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-side open">
      <div className="navbar-logo">
        <a href="#hero" onClick={() => handleMenuClick("#hero")}>
          <img className="logo" src="./assest/images/logo.png" alt="Logo" />
        </a>
      </div>
      <ul className="navbar-side-menu">
        <li>
          <a href="#hero" className={activeMenu === "#hero" ? "active-link" : ""} onClick={() => handleMenuClick("#hero")}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutme" className={activeMenu === "#aboutme" ? "active-link" : ""} onClick={() => handleMenuClick("#aboutme")}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" className={activeMenu === "#skills" ? "active-link" : ""} onClick={() => handleMenuClick("#skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#experience" className={activeMenu === "#experience" ? "active-link" : ""} onClick={() => handleMenuClick("#experience")}>
            Work Experience
          </a>
        </li>
        <li>
          <a href="#projects" className={activeMenu === "#projects" ? "active-link" : ""} onClick={() => handleMenuClick("#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={activeMenu === "#contact" ? "active-link" : ""} onClick={() => handleMenuClick("#contact")}>
            Contact Me
          </a>
        </li>
        <li>
          <a 
            href="https://drive.google.com/file/d/1q32_xL-k6DIxR5kGrBqHuOhmttalODFD/view?usp=sharing" 
            className="hire-me-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </li>

        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
      </ul>
    </div>
  );
};

export default NavbarSide;
