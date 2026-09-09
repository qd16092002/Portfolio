import React from 'react';
import { FaGithub, FaUsers, FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import SectionHeader from '../../common/SectionHeader';
import Reveal from '../../common/Reveal';
import { PROFILE } from '../../../data/profile';
import { asset } from '../../../lib/asset';
import './Projects.css';

const MAX_VISIBLE_TAGS = 5;

const Projects = () => {
  const { t } = useLanguage();
  const projects = t('projects.projects');
  const list = Array.isArray(projects) ? projects : [];

  return (
    <section
      id="projects"
      className="section section--subtle projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
          id="projects-title"
        />

        <ul className="projects__grid">
          {list.map((project, index) => {
            const visibleTags = project.technologies.slice(0, MAX_VISIBLE_TAGS);
            const hiddenCount = project.technologies.length - visibleTags.length;

            return (
              <Reveal
                as="li"
                className="card project"
                key={project.id}
                delay={(index % 3) * 70}
              >
                <div className="project__media">
                  <img
                    src={asset(`/projects/${project.id}.webp`)}
                    alt={project.title}
                    width="1200"
                    height="750"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>

                <div className="project__body">
                  <h3 className="project__title">{project.title}</h3>
                  <p className="project__description">{project.description}</p>

                  <div className="project__footer">
                    <ul className="project__tags">
                      {visibleTags.map((tech) => (
                        <li className="tag" key={tech}>
                          {tech}
                        </li>
                      ))}
                      {hiddenCount > 0 && (
                        <li className="tag">+{hiddenCount}</li>
                      )}
                    </ul>

                    {project.teamSize && (
                      <p className="project__team">
                        <FaUsers aria-hidden="true" />
                        {t('projects.teamSize')}: {project.teamSize}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="projects__cta">
          <p>{t('projects.ctaNote')}</p>
          <a
            className="btn btn--secondary"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub aria-hidden="true" />
            {t('projects.ctaButton')}
            <FaArrowRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
