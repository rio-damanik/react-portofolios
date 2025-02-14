import React, { useState } from "react";
import "./Navbar.css";
import NavbarSide from "./NavbarSide/NavbarSide";
import HireModal from "../HireModal/HireModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#hero");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = './assest/cv/your-cv.pdf';
    link.download = 'Rio-Damanik-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    setIsModalOpen(false);
    // Smooth scroll to contact section
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
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
                Work Experience
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
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button className="menu-button" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {!isOpen && (
          <button className="hire-me-button" onClick={() => setIsModalOpen(true)}>
            Hire Me
          </button>
        )}
      </nav>

      {isOpen && <NavbarSide toggleSidebar={toggleSidebar} />}

      <HireModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownloadCV={handleDownloadCV}
        onContactMe={handleContactMe}
      />
    </>
  );
};

export default Navbar;
