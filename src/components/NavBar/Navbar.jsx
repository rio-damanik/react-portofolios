import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 750);
      if (window.innerWidth > 750) {
        setOpenMenu(false); // Close the mobile menu when resizing to a wider screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />}

      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assest/images/logo.png" alt="Logo" />

          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#About">
                About
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skill">
                Skill
              </a>
            </li>
            <li>
              <a className="menu-item" href="#work-experience">
                Work Experience
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact-me">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
