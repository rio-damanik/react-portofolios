import React, { useState } from "react";
import "./NavbarSide.css";
import HireModal from "../../HireModal/HireModal";

const NavbarSide = ({ toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId);
    
    // Smooth scroll to section without closing sidebar
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
    // Smooth scroll to contact section without closing sidebar
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar-side open">
        <div className="menu-content">
          <ul className="navbar-side-menu">
            <li>
              <a 
                href="#hero" 
                className={activeMenu === "#hero" ? "active-link" : ""} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#hero");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#aboutme" 
                className={activeMenu === "#aboutme" ? "active-link" : ""} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#aboutme");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeMenu === "#skills" ? "active-link" : ""} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeMenu === "#experience" ? "active-link" : ""} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#experience");
                }}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeMenu === "#projects" ? "active-link" : ""} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeMenu === "#contact" ? "active-link" : ""} 
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("#contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <button className="hire-me-button-side" onClick={() => setIsModalOpen(true)}>
            Hire Me
          </button>
        </div>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
      </div>

      <HireModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownloadCV={handleDownloadCV}
        onContactMe={handleContactMe}
      />
    </>
  );
};

export default NavbarSide;
