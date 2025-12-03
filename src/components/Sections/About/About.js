import React from 'react';
import { FaGraduationCap, FaTrophy, FaCode, FaRocket } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';
import './About.css';

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <p className="about-intro" dangerouslySetInnerHTML={{ __html: t('about.intro') }}></p>
              <p dangerouslySetInnerHTML={{ __html: t('about.description1') }}></p>
              <p>{t('about.description2')}</p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaGraduationCap />
                </div>
                <div className="highlight-content">
                  <h4>{t('about.education.title')}</h4>
                  <p>{t('about.education.university')}</p>
                  <span>{t('about.education.degree')}</span>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaTrophy />
                </div>
                <div className="highlight-content">
                  <h4>{t('about.achievements.title')}</h4>
                  <p>{t('about.achievements.achievement1')}</p>
                  <span>{t('about.achievements.achievement2')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-icon">
                <FaCode />
              </div>
              <h3>10+</h3>
              <p>{t('about.stats.projects')}</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaRocket />
              </div>
              <h3>3+</h3>
              <p>{t('about.stats.experience')}</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <FaTrophy />
              </div>
              <h3>2</h3>
              <p>{t('about.stats.awards')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

