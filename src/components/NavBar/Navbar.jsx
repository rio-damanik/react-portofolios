import React, { useState } from "react";
import "./Navbar.css";
import NavbarSide from "./NavbarSide/NavbarSide";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#hero"); // state to track active menu
  const [isHireMeActive, setHireMeActive] = useState(false); // state to track Hire Me button

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
  };

  const handleHireMeClick = () => {
    setHireMeActive(true);
    setTimeout(() => {
      setHireMeActive(false); // Reset button color after click
    }, 2000); // Button stays active for 2 seconds
  };

  return (
    <>
      {!isOpen && (
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="#hero">
              <img className="logo" src="./assest/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a href="#hero" onClick={() => handleMenuClick("#hero")} className={activeMenu === "#hero" ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a href="#aboutme" onClick={() => handleMenuClick("#aboutme")} className={activeMenu === "#aboutme" ? "active" : ""}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => handleMenuClick("#skills")} className={activeMenu === "#skills" ? "active" : ""}>
                  Skill
                </a>
              </li>
              <li>
                <a href="#work-experience" onClick={() => handleMenuClick("#work-experience")} className={activeMenu === "#work-experience" ? "active" : ""}>
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#project-me" onClick={() => handleMenuClick("#project-me")} className={activeMenu === "#project-me" ? "active" : ""}>
                  Project
                </a>
              </li>
              <li>
                <a href="#contact-me" onClick={() => handleMenuClick("#contact-me")} className={activeMenu === "#contact-me" ? "active" : ""}>
                  Contact Me
                </a>
              </li>
              <li>
                <a href="https://pdf.ac/3lfSIB" className={`hire-me-btn ${isHireMeActive ? "active-hire-me" : ""}`} onClick={handleHireMeClick}>
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleSidebar}>
            &#9776;
          </div>
        </nav>
      )}
      <div className={`navbar-side ${isOpen ? "open" : ""}`}>
        <NavbarSide toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
};

export default Navbar;
