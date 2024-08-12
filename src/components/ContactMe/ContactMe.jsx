import React from "react";
import "./ContactMe.css"; // Import your stylesheet here

// Import images from the src folder
import emailIcon from "../ContactMe/assestcontact/icon-email.png";
import githubIcon from "../ContactMe/assestcontact/icon-github2.png";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
        <div className="contact-card">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <div className="contact-icon-container">
              <img src={emailIcon} alt="Email Icon" className="contact-icon" />
            </div>
            <span>Email: rio71385@gmail.com</span>
          </div>
          <div className="contact-item">
            <div className="contact-icon-container">
              <img src={githubIcon} alt="GitHub Icon" className="contact-icon" />
            </div>
            <span>
              GitHub:{" "}
              <a href="https://github.com/rio-damanik" target="_blank" rel="noopener noreferrer" color="#ffffff">
                https://github.com/rio-damanik
              </a>
            </span>
          </div>
        </div>
        <div className="contact-form">
          <h3>Contact Form</h3>
          <form action="mailto:example@example.com" method="post" enctype="text/plain">
            <label>
              First Name:
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastName" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
