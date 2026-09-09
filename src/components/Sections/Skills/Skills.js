import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import SectionHeader from '../../common/SectionHeader';
import Reveal from '../../common/Reveal';
import { SKILL_GROUPS } from '../../../data/skills';
import './Skills.css';

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="section section--subtle skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <SectionHeader
          eyebrow={t('skills.eyebrow')}
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
          id="skills-title"
        />

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, index) => (
            <Reveal
              className="card skills__group"
              key={group.key}
              delay={index * 70}
            >
              <h3 className="skills__group-title">
                {t(`skills.categories.${group.key}`)}
              </h3>
              <ul className="skills__list">
                {group.skills.map((skill) => (
                  <li className="skills__item" key={skill.name}>
                    <span className="skills__icon" aria-hidden="true">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
