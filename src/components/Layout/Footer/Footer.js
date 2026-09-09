import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import { PROFILE } from '../../../data/profile';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <p className="footer__name">{PROFILE.name}</p>
          <p className="footer__role">{t('hero.role')}</p>
        </div>

        <ul className="footer__social">
          <li>
            <a
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
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${PROFILE.email}`} aria-label={t('contact.email')}>
              <FaEnvelope />
            </a>
          </li>
        </ul>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {PROFILE.name}. {t('footer.copyright')}
          </p>
          <a className="footer__top" href="#hero">
            {t('footer.backToTop')}
            <FaArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
