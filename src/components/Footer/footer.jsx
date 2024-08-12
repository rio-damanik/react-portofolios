import React from "react";
import "./Footer.css"; // Import your stylesheet here

// Import icons from the Footer/assest/footer folder
import facebookIcon from "../Footer/assestfooter/icon-facebook.png";
import twitterIcon from "../Footer/assestfooter/icon-twitter.png";
import linkedinIcon from "../Footer/assestfooter/icon-linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links"></div>
        <div className="footer-contact"></div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
