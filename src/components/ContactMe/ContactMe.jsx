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
            <span>
              Email:<a href="mailto: rio71385@email.com">rio71385@gmail.com</a>
            </span>
          </div>
          <a class="sendwa" href="https://wa.me/6281219420841?text=Hallo%20perkenalkan%20nama%20saya%20rio">
            <svg viewBox="0 0 800 800">
              <path d="M519 454c4 2 7 10-1 31-6 16-33 29-49 29-96 0-189-113-189-167 0-26 9-39 18-48 8-9 14-10 18-10h12c4 0 9 0 13 10l19 44c5 11-9 25-15 31-3 3-6 7-2 13 25 39 41 51 81 71 6 3 10 1 13-2l19-24c5-6 9-4 13-2zM401 200c-110 0-199 90-199 199 0 68 35 113 35 113l-20 74 76-20s42 32 108 32c110 0 199-89 199-199 0-111-89-199-199-199zm0-40c133 0 239 108 239 239 0 132-108 239-239 239-67 0-114-29-114-29l-127 33 34-124s-32-49-32-119c0-131 108-239 239-239z" />
            </svg>
            <span>Chat Via WhatsApp</span>
          </a>
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
