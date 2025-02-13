import React from "react";
import "./ProjectMe.css";

const ProjectMe = () => {
  const projects = [
    {
      title: "Aplikasi Kasir",
      description: "This Fullstack Cashier application for food and beverages is designed to simplify the operations of culinary businesses, such as restaurants, cafes, or food stalls. It integrates key features such as ordering, payment, and menu management in one platform. Cashiers can easily take orders, whether for dine-in, takeaway, or delivery. Menu management becomes practical with the features of adding, editing, and deleting menu data.",
      image: "/kasir.png",
      github: "https://github.com/rio-damanik/aplikasi_kasir-Mern",
      demo: "#",
      tech: ["React.JS", "MongoDB", "Express.js", "Node.js"],
      date: "Dec 2024"
    },
    {
      title: "Personal Portfolio Website",
      description: "A portfolio showcasing skills and projects, built using React.js as the frontend.",
      image: "/portfolio.png",
      github: "#",
      demo: "https://riodamanik.vercel.app",
      tech: ["React.js"],
      date: "2024"
    },
    {
      title: "Mini Project - Fundamental Course",
      description: "A beginner-friendly project developed during the RevoU Fundamental Course in Software Engineering. This project focused on building a basic responsive website using HTML and CSS.",
      image: "/miniproject.png",
      github: "#",
      demo: "#",
      tech: ["HTML", "CSS", "JavaScript"],
      date: "April 2024",
      certificate: "RevoU Certificate"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="section-title">
          My Recent <span className="purple">Works</span>
        </h1>
        <p className="section-subtitle">
          Here are a few projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="laptop-frame">
                <div className="laptop-screen">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github !== "#" && (
                    <a href={project.github} className="btn btn-github" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a href={project.demo} className="btn btn-demo" target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                  {project.certificate && (
                    <a href="#" className="btn btn-certificate" target="_blank" rel="noopener noreferrer">
                      Certificate
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMe;
