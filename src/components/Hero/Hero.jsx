import React from "react";
import "./Hero.css";
import { PhotoSizeSelectActual } from "@mui/icons-material";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>Passionate Helper Production | Transforming Web Developer </p>
      </div>

      <div className="hero-img">
        <img src="./assest/images/hero.png" alt="" />
        <div>
          <div className="tech-icon">
            <img src="./assest/images/react.png" alt="" />
          </div>
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assest/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assest/images/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assest/images/js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
