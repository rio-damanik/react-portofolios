import React, { useState } from "react";
import "./Navbar.css";
import NavbarSide from "./NavbarSide/NavbarSide";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
