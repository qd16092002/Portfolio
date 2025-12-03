import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';
import './Projects.css';

import crm from '../../../assets/Project/CRM/crm.png';
import dbms from '../../../assets/Project/DBMS/dbms.png';
import alice from '../../../assets/Project/ChatbotAI/alice.png';
import meeting from '../../../assets/Project/Meeting/voice.png';
import video from '../../../assets/Project/Video/video.png';
import access from '../../../assets/Project/AccessControl/vision.png';
import samsung from '../../../assets/Project/SamSung/samsung.png';
import investy from '../../../assets/Project/Investy/investy.png';
import lynx from '../../../assets/Project/LYNX/lynx.png';

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = t('projects.projects') || [];
  
  // Map projects với images và links
  const imageUrls = [
    crm,
    dbms,
    alice,
    meeting,
    video,
    access,
    samsung,
    investy,
    lynx
  ];
  
  const projects = projectsData.map((project, index) => ({
    ...project,
    image: imageUrls[index] || 'https://via.placeholder.com/400x250',
    github: 'https://github.com/qd16092002',
    demo: '#'
  }));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub />
                  </a>
                  {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt />
                  </a> */}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

