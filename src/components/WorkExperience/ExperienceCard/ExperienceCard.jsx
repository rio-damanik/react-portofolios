import React from "react";
import "./ExperienceCard.css"; // Import your stylesheet here

const ExperienceCard = ({ profession, place, years, jobDesk }) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <h3 className="profession">{profession}</h3>
        {place && <p className="place">{place}</p>}
        <p className="years">{years}</p>
      </div>
      <ul className="job-desk">
        {jobDesk.map((item, index) => (
          <li key={index} className="job-desk-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
