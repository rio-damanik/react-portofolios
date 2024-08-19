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
      profession: "Helper Production",
      place: "PT OCS Global Services - Freelance",
      years: "2024 - Sekarang",
      jobDesk: ["Menjalankan kegiatan produksi sesuai SOP dan Standar K3", "Melakukan Produksi dengan membantu proses yang ada baik secara individu dan Tim"],
    },
    {
      profession: "Production Operator",
      place: "PT Goodyear Indonesia - Internship",
      years: "2022 - 2024",
      jobDesk: ["Mengoperasi mesin produksi sesuai SOP dan Standar K3", "Melakukan pengecekan Mesin secara berkala bersama Tim developers", "Melakukan pengendalian mutu pada kualitas hasil Produksi dan meningkatkan produktivitas pabrik"],
    },
    {
      profession: "Quality Technician",
      place: "PT Goodyear Indonesia - Internship",
      years: "2023",
      jobDesk: ["Menganalisis data kinerja kualitas dari proses produksi dan produk akhir", "Menjaga kinerja sistem manajemen mutu sesuai standar"],
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
