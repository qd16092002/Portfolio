import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { PROFILE } from '../../../data/profile';
import { asset } from '../../../lib/asset';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{t('hero.greeting')}</p>

          <h1 className="hero__title" id="hero-title">
            {PROFILE.name}
          </h1>

          <p className="hero__role">{t('hero.role')}</p>

          <p className="hero__summary">{t('hero.subtitle')}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">
              {t('hero.viewProjects')}
            </a>
            <a
              className="btn btn--secondary"
              href={PROFILE.cvUrl}
              download
            >
              {t('hero.downloadCV')}
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__location">
              <FaMapMarkerAlt aria-hidden="true" />
              {t('contact.location')}
            </span>
            <span className="hero__divider" aria-hidden="true" />
            <ul className="hero__social">
              <li>
                <a
                  className="icon-btn"
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  className="icon-btn"
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  className="icon-btn"
                  href={`mailto:${PROFILE.email}`}
                  aria-label={t('contact.email')}
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero__portrait">
          <span className="hero__portrait-frame" aria-hidden="true" />
          <img
            src={asset('/profile.webp')}
            width="800"
            height="1000"
            alt={t('a11y.portraitAlt')}
          />
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-hidden="true" tabIndex={-1}>
        <FaArrowDown />
      </a>
    </section>
  );
};

export default Hero;
