import React from "react";
import Slider from "react-slick";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { NextArrow, PrevArrow } from "./CustomArrows"; // Import custom arrows
import "./WorkExperience.css";

const WorkExperience = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    nextArrow: <NextArrow />, // Use custom right arrow
    prevArrow: <PrevArrow />, // Use custom left arrow
  };

  return (
    <section className="work-experience-container">
      <h2>Work Experience</h2>
      <Slider {...settings} className="experience-cards">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} profession={exp.profession} place={exp.place} years={exp.years} jobDesk={exp.jobDesk} />
        ))}
      </Slider>
    </section>
  );
};

export default WorkExperience;
