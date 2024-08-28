import React from "react";
import "./NavbarSide.css";

const NavbarSide = ({ toggleSidebar }) => {
  return (
    <div className="navbar-side open">
      <div className="navbar-logo">
        <a href="#hero">
          <img className="logo" src="./assest/images/logo.png" alt="Logo" />
        </a>
      </div>
      <ul className="navbar-side-menu">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#aboutme">About</a>
        </li>
        <li>
          <a href="#skills">Skill</a>
        </li>
        <li>
          <a href="#work-experience">Work Experience</a>
        </li>
        <li>
          <a href="#project-me">Project</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
        <li>
          <a href="/path-to-your-file" className="hire-me-btn">
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
