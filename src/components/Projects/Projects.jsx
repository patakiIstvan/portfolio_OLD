import React, { useState, useEffect } from 'react';
import projectData from '../../projects';
import Project from '../Project/Project';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

function Projects() {

  const [filteredProjects, setFilteredProjects] = useState(projectData)
  let [projectType, setProjectType] = useState("all")

  useEffect(() => {
    if (projectType === "all") {
      setFilteredProjects(projectData);
      return;
    }
    const filtered = projectData.filter(pr =>
      pr.category.includes(projectType)
    );
    setFilteredProjects(filtered)
  }, [projectType])

  return (
    <section className="projects section">
      <span className="section__subtitle">My portfolio</span>
      <h2 className="section__title">Recent works</h2>

      <div className="filters">
        <span className="filter__item active-work" onClick={() => setProjectType("all")}>All website</span>
        <span className="filter__item" onClick={() => setProjectType("notmydesign")}>Followed design</span>
        <span className="filter__item" onClick={() => setProjectType("mydesign")}>Own design</span>
      </div>
      <motion.div Layout className="project__container">
        <AnimatePresence>
          {filteredProjects.map((project, i) => {
            return (<Project
              key={i}
              title={project.title}
              pic={project.pic}
              tech={project.tech}
            />);
          })}
        </AnimatePresence>
      </motion.div>
    </section>);
}

export default Projects;
