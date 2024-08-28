import React, { useState, useEffect } from "react";
import "./AboutMe.css";

// Import images from the src/component/about/assestabout folder
import image1 from "../About/assestabout/photo-ai.png";
import image2 from "../About/assestabout/photo-ai2.png";
import image3 from "../About/assestabout/photo-ai3.png";
import image4 from "../About/assestabout/photo-ai4.png";

const AboutMe = () => {
  const images = [image1, image2, image3, image4]; // Added image4 for consistency
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <section id="aboutme" className="about-me-container">
      <div className="section-left">
        <h3 className="pre-title">My Name is</h3>
        <h1 className="your-name">
          Rio Richie Pratama <span>Damanik</span>
        </h1>
        <p>Memiliki Pengalaman 2 Tahun sebagai Operator produksi yang ingin merubah karir dengan ingin menjadi seorang web developer terutama di bidang Front-End Developer</p>
      </div>

      <div className="section-right">
        <div className="slideshow-container">
          <div className="slideshow-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index + 1}`} className="side-image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
