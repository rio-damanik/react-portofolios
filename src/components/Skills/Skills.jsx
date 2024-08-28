import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Close if the same category is clicked
    } else {
      setActiveCategory(category); // Open new category
    }
  };

  return (
    <section id="skills" className="skills-container">
      <h5>Technical Proficiency</h5>

      {/* Display content for active category on the front up */}
      <div className={`skills-display ${activeCategory ? "show" : ""}`}>
        {SKILLS.filter((category) => category.title === activeCategory).map((category) => (
          <div key={category.title} className="skills-display-content">
            {category.skills.map((skill) => (
              <SkillCard key={skill.skill} iconUrl={skill.icon} title={skill.skill} />
            ))}
          </div>
        ))}
        <button className="close-btn-skill" onClick={() => setActiveCategory(null)}>
          Close
        </button>
      </div>

      <div className="skills-content-container">
        {/* List of categories on the left */}
        <div className="skills-list">
          {SKILLS.map((category) => (
            <div key={category.title} className={`skills-section ${activeCategory === category.title ? "active" : ""}`} onClick={() => handleCategoryClick(category.title)}>
              <div className="skills-header">
                <img src={category.icon} alt={category.title} className="skills-icon" />
                <h6>{category.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
