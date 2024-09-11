import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Collapse the category if clicked again
    } else {
      setActiveCategory(category); // Expand the new category
    }
  };

  return (
    <section id="skills" className="skills-container">
      <h5>Technical Proficiency</h5>

      <div className="accordion">
        {SKILLS.map((category) => (
          <div key={category.title} className={`accordion-item ${activeCategory === category.title ? "active" : ""}`}>
            <div className="accordion-header" onClick={() => handleCategoryClick(category.title)}>
              <img src={category.icon} alt={category.title} className="accordion-icon" />
              <h6>{category.title}</h6>
              <span className={`accordion-toggle ${activeCategory === category.title ? "open" : ""}`}>{activeCategory === category.title ? "-" : "+"}</span>
            </div>

            {/* Expandable content for the category */}
            {activeCategory === category.title && (
              <div className="accordion-content">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.skill} iconUrl={skill.icon} title={skill.skill} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
