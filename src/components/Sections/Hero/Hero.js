import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import profileImage from '../../../assets/profile.jpg';
import { useLanguage } from '../../../hooks/useLanguage';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {t('hero.greeting')} <br /><span className="highlight">{t('hero.name')}</span>
            </h1>
            
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                {t('hero.viewProjects')}
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                {t('hero.contact')}
              </button>
              <a 
                href="/CV_TranQuangDao.pdf" 
                download="CV_TranQuangDao.pdf"
                className="btn btn-outline"
              >
                <FaDownload /> {t('hero.downloadCV')}
              </a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/qd16092002" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/qd16092002/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:tranquangdao16092002@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img src={profileImage} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

