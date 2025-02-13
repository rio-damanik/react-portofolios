import React, { useState } from "react";
import "./Navbar.css";
import NavbarSide from "./NavbarSide/NavbarSide";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#hero");
  const [isHireMeActive, setHireMeActive] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    // Smooth scroll to section
    const element = document.querySelector(menuId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHireMeClick = () => {
    setHireMeActive(true);
    setTimeout(() => {
      setHireMeActive(false);
    }, 2000);
  };

  return (
    <>
      {!isOpen && (
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="#hero" onClick={() => handleMenuClick("#hero")}>
              <img className="logo" src="./assest/images/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="navbar-menu">
            <ul>
              <li>
                <a
                  href="#hero"
                  onClick={() => handleMenuClick("#hero")}
                  className={activeMenu === "#hero" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  onClick={() => handleMenuClick("#aboutme")}
                  className={activeMenu === "#aboutme" ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={() => handleMenuClick("#skills")}
                  className={activeMenu === "#skills" ? "active" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={() => handleMenuClick("#experience")}
                  className={activeMenu === "#experience" ? "active" : ""}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={() => handleMenuClick("#projects")}
                  className={activeMenu === "#projects" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => handleMenuClick("#contact")}
                  className={activeMenu === "#contact" ? "active" : ""}
                >
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1q32_xL-k6DIxR5kGrBqHuOhmttalODFD/view?usp=sharing"
                  className={`hire-me-btn ${isHireMeActive ? "active-hire-me" : ""}`}
                  onClick={handleHireMeClick}
                >
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
