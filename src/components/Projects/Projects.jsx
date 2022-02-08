import React from 'react';

function Projects() {
  return (
    <section className="projects section">
      <span className="section__subtitle">My portfolio</span>
      <h2 className="section__title">Recent works</h2>

      <div className="filters">
        <span className="filter__item">All website</span>
        <span className="filter__item">Made with react</span>
        <span className="filter__item">Made without react</span>
      </div>
      <div className="project__container">
        {/* Project 1 */}
        <div className="project__card">
          <img src="https://quasa.io/storage/photos/%D0%A4%D0%BE%D1%82%D0%BE%2011/APM%201.png" alt="My project" className="project__img" />
          <h3 className="project__title">Project #1</h3>
          <a href="" className="project__button">
            Read more
            <i className="project__icon uil uil-arrow-right"></i>
          </a>
        </div>

      </div>
    </section>);
}

export default Projects;
