import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import "./WorkExperience.css";

const WorkExperience = () => {
  const experienceContainerRef = useRef(null);

  const scrollLeft = () => {
    if (experienceContainerRef.current) {
      experienceContainerRef.current.scrollBy({
        left: -200, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (experienceContainerRef.current) {
      experienceContainerRef.current.scrollBy({
        left: 200, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const experiences = [
    {
      profession: "Production Operator",
      place: "PT Goodyear Indonesia",
      years: "2022 - 2024",
      jobDesk: ["Developed web applications", "Led a team of developers", "Worked closely with clients to understand their needs"],
    },
  ];

  return (
    <section className="work-experience-container">
      <h2>Work Experience</h2>
      <button className="scroll-btn left" onClick={scrollLeft}>
        ←
      </button>
      <button className="scroll-btn right" onClick={scrollRight}>
        →
      </button>
      <div className="experience-cards" ref={experienceContainerRef}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} profession={exp.profession} place={exp.place} years={exp.years} jobDesk={exp.jobDesk} />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
