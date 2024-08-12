import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="mobile-menu-container">
        <img className="logo" src="./assest/images/logo.png" alt="Logo" />
        <ul>
          <li>
            <a className="menu-item" href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="#skill" onClick={toggleMenu}>
              Skill
            </a>
          </li>
          <li>
            <a className="menu-item" href="#work-experience" onClick={toggleMenu}>
              Work Experience
            </a>
          </li>
          <li>
            <a className="menu-item" href="#contact-me" onClick={toggleMenu}>
              Contact Me
            </a>
          </li>
        </ul>
        <button className="hire-btn" onClick={() => {}}>
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
