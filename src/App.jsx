import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/footer";
import AboutMe from "./components/About/AboutMe";
import ProjectMe from "./components/ProjectMe/ProjectMe";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Hero />
          <AboutMe />
          <Skills />
          <WorkExperience />
          <ProjectMe />
          <ContactMe />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
