import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import SectionHeader from '../../common/SectionHeader';
import Reveal from '../../common/Reveal';
import './Experience.css';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = t('experience.experiences');
  const list = Array.isArray(experiences) ? experiences : [];

  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow={t('experience.eyebrow')}
          title={t('experience.title')}
          id="experience-title"
        />

        <ol className="timeline">
          {list.map((item, index) => (
            <Reveal
              as="li"
              className="timeline__item"
              key={`${item.company}-${item.period}`}
              delay={index * 60}
            >
              <span
                className={`timeline__marker${index === 0 ? ' is-current' : ''}`}
                aria-hidden="true"
              />
              <article className="card timeline__card">
                <div className="timeline__heading">
                  <h3 className="timeline__role">{item.title}</h3>
                  <p className="timeline__company">{item.company}</p>
                </div>

                <div className="timeline__meta">
                  <span>
                    <FaCalendarAlt aria-hidden="true" />
                    {item.period}
                  </span>
                  <span>
                    <FaMapMarkerAlt aria-hidden="true" />
                    {t(`experience.location.${item.location}`)}
                  </span>
                </div>

                <ul className="timeline__points">
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
