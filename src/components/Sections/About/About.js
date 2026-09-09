import React from 'react';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import SectionHeader from '../../common/SectionHeader';
import Reveal from '../../common/Reveal';
import './About.css';

/**
 * The intro copy carries <strong> emphasis. The markup is authored by us in
 * src/locales, never user input, so injecting it is safe here.
 */
const RichText = ({ html, className }) => (
  <p className={className} dangerouslySetInnerHTML={{ __html: html }} />
);

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t('about.stats.projectsValue'), label: t('about.stats.projects') },
    {
      value: t('about.stats.experienceValue'),
      label: t('about.stats.experience'),
    },
    {
      value: t('about.stats.technologiesValue'),
      label: t('about.stats.technologies'),
    },
    { value: t('about.stats.awardsValue'), label: t('about.stats.awards') },
  ];

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          id="about-title"
        />

        <div className="about__grid">
          <Reveal className="about__prose">
            <RichText className="about__lead" html={t('about.intro')} />
            <RichText html={t('about.description1')} />
            <RichText html={t('about.description2')} />
          </Reveal>

          <div className="about__aside">
            <Reveal className="card about__card" delay={80}>
              <span className="about__card-icon" aria-hidden="true">
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="about__card-title">{t('about.education.title')}</h3>
                <p className="about__card-primary">
                  {t('about.education.university')}
                </p>
                <p className="about__card-secondary">
                  {t('about.education.degree')}
                </p>
              </div>
            </Reveal>

            <Reveal className="card about__card" delay={140}>
              <span className="about__card-icon" aria-hidden="true">
                <FaTrophy />
              </span>
              <div>
                <h3 className="about__card-title">
                  {t('about.achievements.title')}
                </h3>
                <p className="about__card-primary">
                  {t('about.achievements.achievement1')}
                </p>
                <p className="about__card-primary">
                  {t('about.achievements.achievement2')}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal as="dl" className="about__stats" delay={80}>
          {stats.map((stat) => (
            <div className="about__stat" key={stat.label}>
              <dt className="about__stat-value">{stat.value}</dt>
              <dd className="about__stat-label">{stat.label}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default About;
