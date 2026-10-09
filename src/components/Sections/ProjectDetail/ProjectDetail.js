import React from 'react';
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaCheck,
} from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { PROFILE } from '../../../data/profile';
import { asset } from '../../../lib/asset';
import './ProjectDetail.css';

const ProjectDetail = ({ id }) => {
  const { t } = useLanguage();
  const projects = t('projects.projects');
  const list = Array.isArray(projects) ? projects : [];

  const index = list.findIndex((p) => p.id === id);
  const project = index >= 0 ? list[index] : null;

  if (!project) {
    return (
      <section className="section detail-missing">
        <div className="container">
          <a className="detail__back" href="#projects">
            <FaArrowLeft aria-hidden="true" />
            {t('projectDetail.back')}
          </a>
          <h1 className="detail-missing__title">
            {t('projectDetail.notFoundTitle')}
          </h1>
          <p className="detail-missing__body">
            {t('projectDetail.notFoundBody')}
          </p>
        </div>
      </section>
    );
  }

  const detail = project.detail || {};
  const overview = Array.isArray(detail.overview) ? detail.overview : [];
  const highlights = Array.isArray(detail.highlights) ? detail.highlights : [];
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];

  return (
    <article className="detail">
      <div className="container detail__head">
        <a className="detail__back" href="#projects">
          <FaArrowLeft aria-hidden="true" />
          {t('projectDetail.back')}
        </a>

        {detail.context && <p className="eyebrow detail__context">{detail.context}</p>}
        <h1 className="detail__title">{project.title}</h1>
        {detail.tagline && <p className="detail__tagline">{detail.tagline}</p>}
      </div>

      <div className="container detail__cover-wrap">
        <img
          className="detail__cover"
          src={asset(`/projects/${project.id}.webp`)}
          alt={project.title}
          width="1200"
          height="750"
          decoding="async"
        />
      </div>

      <div className="container detail__grid">
        <div className="detail__main">
          {overview.length > 0 && (
            <section className="detail__block">
              <h2 className="detail__block-title">
                {t('projectDetail.overview')}
              </h2>
              {overview.map((paragraph) => (
                <p className="detail__paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          )}

          {highlights.length > 0 && (
            <section className="detail__block">
              <h2 className="detail__block-title">
                {t('projectDetail.highlights')}
              </h2>
              <ul className="detail__highlights">
                {highlights.map((item) => (
                  <li key={item}>
                    <FaCheck aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="detail__aside">
          <div className="card detail__meta">
            {detail.role && (
              <div className="detail__meta-row">
                <dt>{t('projectDetail.role')}</dt>
                <dd>{detail.role}</dd>
              </div>
            )}
            {detail.context && (
              <div className="detail__meta-row">
                <dt>{t('projectDetail.context')}</dt>
                <dd>{detail.context}</dd>
              </div>
            )}
            <div className="detail__meta-row">
              <dt>{t('projectDetail.stack')}</dt>
              <dd>
                <ul className="detail__stack">
                  {project.technologies.map((tech) => (
                    <li className="tag" key={tech}>
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </div>

          <p className="detail__note">{t('projectDetail.privateNote')}</p>
          <a
            className="btn btn--secondary btn--block"
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
        </aside>
      </div>

      <nav className="container detail__pager" aria-label="Projects">
        <a className="detail__pager-link" href={`#/project/${prev.id}`}>
          <FaArrowLeft aria-hidden="true" />
          <span className="detail__pager-text">
            <span className="detail__pager-label">{t('projectDetail.prev')}</span>
            <span className="detail__pager-name">{prev.title}</span>
          </span>
        </a>
        <a
          className="detail__pager-link detail__pager-link--next"
          href={`#/project/${next.id}`}
        >
          <span className="detail__pager-text">
            <span className="detail__pager-label">{t('projectDetail.next')}</span>
            <span className="detail__pager-name">{next.title}</span>
          </span>
          <FaArrowRight aria-hidden="true" />
        </a>
      </nav>
    </article>
  );
};

export default ProjectDetail;
