import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import { FaBriefcase, FaTrophy, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const NextArrow = ({ onClick }) => (
  <button className="slider-arrow next" onClick={onClick}>
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slider-arrow prev" onClick={onClick}>
    <FaChevronLeft />
  </button>
);

const WorkExperience = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="experience-section">
      <h2 className="section-title">
        Work <span className="purple">Experience</span>
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {WORK_EXPERIENCE.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="job-header">
                  <div className="job-title">
                    <h3>{job.position}</h3>
                    {job.type && <span className="job-type">{job.type}</span>}
                  </div>
                  <div className="job-info">
                    <div className="company-info">
                      <FaBriefcase className="icon" />
                      <span>{job.company}</span>
                    </div>
                    <div className="location-info">
                      <IoLocationSharp className="icon" />
                      <span>{job.location}</span>
                    </div>
                    <div className="period">{job.period}</div>
                  </div>
                </div>

                <div className="job-details">
                  <div className="responsibilities">
                    <h4>Responsibilities:</h4>
                    <ul>
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="achievements">
                    <h4>
                      <FaTrophy className="achievement-icon" /> Achievements:
                    </h4>
                    <ul>
                      {job.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
