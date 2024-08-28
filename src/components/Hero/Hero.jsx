import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      {" "}
      {/* ID ditambahkan di sini */}
      <div className="hero-content">
        <h2>WELCOME IN MY PORTOFOLIO</h2>
        <h3>
          "Semua orang di negara ini harus belajar memprogram komputer karena komputer mengajarkan Anda cara berpikir.” <br></br> – Steve Jobs
        </h3>
        <p>Experienced In Manufacturing | Transformed into a Programmer</p>
      </div>
      <div className="hero-img">
        <img src="./assest/images/hero.png" alt="Hero" />
        <div>
          <div className="tech-icon">
            <img src="./assest/images/react.png" alt="React" />
          </div>
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assest/images/html.png" alt="HTML" />
          </div>
          <div className="tech-icon">
            <img src="./assest/images/css.png" alt="CSS" />
          </div>
          <div className="tech-icon">
            <img src="./assest/images/js.png" alt="JavaScript" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
