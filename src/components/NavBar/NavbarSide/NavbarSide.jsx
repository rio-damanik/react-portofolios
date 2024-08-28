import React from "react";
import "./NavbarSide.css";

const NavbarSide = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="navbar-logo">
        <a href="#hero" onClick={toggleSidebar}>
          <img className="logo" src="./assest/images/logo.png" alt="Logo" />
        </a>
      </div>
      <ul className="navbar-side-menu">
        <li>
          <a href="#hero" onClick={toggleSidebar}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutme" onClick={toggleSidebar}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={toggleSidebar}>
            Skill
          </a>
        </li>
        <li>
          <a href="#work-experience" onClick={toggleSidebar}>
            Work Experience
          </a>
        </li>
        <li>
          <a href="#project-me" onClick={toggleSidebar}>
            Project
          </a>
        </li>
        <li>
          <a href="#contact-me" onClick={toggleSidebar}>
            Contact Me
          </a>
        </li>
        <li>
          <a href="/path-to-your-file" className="hire-me-btn" onClick={toggleSidebar}>
            Hire Me
          </a>
        </li>
      </ul>
      <button className="close-btn" onClick={toggleSidebar}>
        &times;
      </button>
    </div>
  );
};

export default NavbarSide;
