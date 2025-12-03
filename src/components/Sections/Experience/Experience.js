import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';
import './Experience.css';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = t('experience.experiences') || [];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="experience-content">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">
                        <FaBriefcase /> {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {t(`experience.location.${exp.location}`)}
                    </span>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

