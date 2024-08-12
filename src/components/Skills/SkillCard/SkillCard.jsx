import React from "react";
import "./SkillCard.css";

const SkillCard = ({ iconUrl, title }) => {
  return (
    <div className="skill-card">
      <img src={iconUrl} alt={title} className="skill-card-icon" />
      <h4>{title}</h4>
    </div>
  );
};

export default SkillCard;
