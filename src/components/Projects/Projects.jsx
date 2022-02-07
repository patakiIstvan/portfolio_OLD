import React from 'react';

function Projects() {
  return (
    <section className="projects section">
      <h2>Projects</h2>
      <span>Most recent work</span>
      <div className="project__container">
        <div>
          {/* Project 1 */}
          <div className="portfolio__content">
            <img src="" alt="" className="portfolio__img" />
            <div className="project__info">
              <h3 className="project__title">Title</h3>
              <p className="project__description">A fancy website blablabla</p>
              <a href="" className="project__button">
                Check project
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="portfolio__content">
            <img src="" alt="" className="portfolio__img" />
            <div className="project__info">
              <h3 className="project__title">Title</h3>
              <p className="project__description">A fancy website blablabla</p>
              <a href="" className="project__button">
                Check project
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="portfolio__content">
            <img src="" alt="" className="portfolio__img" />
            <div className="project__info">
              <h3 className="project__title">Title</h3>
              <p className="project__description">A fancy website blablabla</p>
              <a href="" className="project__button">
                Check project
                <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);
}

export default Projects;
