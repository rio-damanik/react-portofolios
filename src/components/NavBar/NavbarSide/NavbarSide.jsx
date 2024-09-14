import React, { useState } from "react";
import "./NavbarSide.css";

const NavbarSide = ({ toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(""); // state to track active menu

  const handleMenuClick = (menuId) => {
    setActiveMenu(menuId); // Set the active menu when clicked
  };

  return (
    <div className="navbar-side open">
      <div className="navbar-logo">
        <a href="#hero">
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
            Skill
          </a>
        </li>
        <li>
          <a href="#work-experience" className={activeMenu === "#work-experience" ? "active-link" : ""} onClick={() => handleMenuClick("#work-experience")}>
            Work Experience
          </a>
        </li>
        <li>
          <a href="#project-me" className={activeMenu === "#project-me" ? "active-link" : ""} onClick={() => handleMenuClick("#project-me")}>
            Project
          </a>
        </li>
        <li>
          <a href="#contact-me" className={activeMenu === "#contact-me" ? "active-link" : ""} onClick={() => handleMenuClick("#contact-me")}>
            Contact Me
          </a>
        </li>
        <li>
          <a href="https://pdf.ac/BGkpb" className={`hire-me-btn ${activeMenu === "#hire-me" ? "active-link" : ""}`} onClick={() => handleMenuClick("#hire-me")}>
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
