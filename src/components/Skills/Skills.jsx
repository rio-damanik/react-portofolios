import React from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">
        Professional <span className="purple">Skillset</span>
      </h2>
      <div className="skills-container">
        {SKILLS.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <div className="skill-content">
                    <img src={skill.icon} alt={skill.skill} className="skill-icon" />
                    <span className="skill-name">{skill.skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
