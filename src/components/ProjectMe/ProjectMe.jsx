import React from "react";
import "./ProjectMe.css"; // Ensure this path is correct

const ProjectMe = () => {
  return (
    <section id="project-me" className="project-me-container">
      <div className="container">
        <h3 className="pre-title">My Work</h3>
        <h1 className="section-title">Featured Portfolio</h1>

        <div className="row">
          {/* PORTFOLIO 1 */}
          <div className="col-md-4 mb-4">
            <div className="portfolio-item card">
              <div className="portfolio-cover card-img-top">
                <img src="assets/portfolio1.png" alt="portfolio 1" className="img-fluid" />
              </div>
              <div className="portfolio-info card-body">
                <div className="portfolio-title d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Agency Website</h4>
                  <a href="/" className="portfolio-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags mb-3">
                  <span className="badge bg-secondary">HTML</span>
                  <span className="badge bg-secondary">CSS</span>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem earum nisi vero nam pariatur culpa quod aspernatur recusandae officiis commodi numquam, distinctio quos, sed asperiores, cumque iste? Laboriosam,
                  tenetur mollitia!
                </p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO 2 */}
          <div className="col-md-4 mb-4">
            <div className="portfolio-item card">
              <div className="portfolio-cover card-img-top">
                <img src="assets/portfolio2.png" alt="portfolio 2" className="img-fluid" />
              </div>
              <div className="portfolio-info card-body">
                <div className="portfolio-title d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Landing Page</h4>
                  <a href="/" className="portfolio-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags mb-3">
                  <span className="badge bg-secondary">HTML</span>
                  <span className="badge bg-secondary">CSS</span>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem earum nisi vero nam pariatur culpa quod aspernatur recusandae officiis commodi numquam, distinctio quos, sed asperiores, cumque iste? Laboriosam,
                  tenetur mollitia!
                </p>
              </div>
            </div>
          </div>

          {/* PORTFOLIO 3 */}
          <div className="col-md-4 mb-4">
            <div className="portfolio-item card">
              <div className="portfolio-cover card-img-top">
                <img src="assets/portfolio3.png" alt="portfolio 3" className="img-fluid" />
              </div>
              <div className="portfolio-info card-body">
                <div className="portfolio-title d-flex justify-content-between align-items-center">
                  <h4 className="card-title">Coming Soon</h4>
                  <a href="/" className="portfolio-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>
                <div className="portfolio-tags mb-3">
                  <span className="badge bg-secondary">HTML</span>
                  <span className="badge bg-secondary">CSS</span>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem earum nisi vero nam pariatur culpa quod aspernatur recusandae officiis commodi numquam, distinctio quos, sed asperiores, cumque iste? Laboriosam,
                  tenetur mollitia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMe;
