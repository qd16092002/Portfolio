import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';
import { useLanguage, LANGUAGES } from '../../../context/LanguageContext';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import './Header.css';

const NAV_ITEMS = ['about', 'skills', 'experience', 'projects', 'contact'];
const SPY_IDS = ['hero', ...NAV_ITEMS];

const Header = ({ showSectionNav = true }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);
  const activeId = useScrollSpy(showSectionNav ? SPY_IDS : []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock the page behind the mobile menu so it cannot scroll underneath. */
  useEffect(() => {
    document.body.classList.toggle('is-scroll-locked', isMenuOpen);
    return () => document.body.classList.remove('is-scroll-locked');
  }, [isMenuOpen]);

  /* Escape closes whichever overlay is open. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setIsLangOpen(false);
      setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!isLangOpen) return undefined;
    const onPointerDown = (event) => {
      if (!langRef.current?.contains(event.target)) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [isLangOpen]);

  /* The menu is desktop-only above 900px — close it if the user resizes. */
  useEffect(() => {
    const query = window.matchMedia('(min-width: 901px)');
    const onChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const handleNavClick = useCallback(() => setIsMenuOpen(false), []);

  const chooseLanguage = (code) => {
    setLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#hero" className="logo" onClick={handleNavClick}>
          <span className="logo__mark" aria-hidden="true">
            QĐ
          </span>
          <span className="logo__text">Trần Quang Đạo</span>
        </a>

        <nav
          id="primary-navigation"
          className={`nav${isMenuOpen ? ' nav--open' : ''}`}
          aria-label={t('a11y.mainNav')}
        >
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`nav__link${activeId === item ? ' is-active' : ''}`}
                  aria-current={activeId === item ? 'true' : undefined}
                  onClick={handleNavClick}
                >
                  {t(`nav.${item}`)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="lang" ref={langRef}>
            <button
              type="button"
              className="lang__trigger"
              onClick={() => setIsLangOpen((open) => !open)}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
              aria-label={t('a11y.changeLanguage')}
            >
              <FaGlobe aria-hidden="true" />
              <span>{language.toUpperCase()}</span>
              <FaChevronDown className="lang__caret" aria-hidden="true" />
            </button>
            {isLangOpen && (
              <ul className="lang__menu" role="listbox">
                {LANGUAGES.map(({ code, label }) => (
                  <li key={code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={language === code}
                      className={`lang__option${language === code ? ' is-active' : ''}`}
                      onClick={() => chooseLanguage(code)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMenuOpen ? t('a11y.closeMenu') : t('a11y.openMenu')}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`nav__scrim${isMenuOpen ? ' is-visible' : ''}`}
        tabIndex={-1}
        aria-hidden="true"
        onClick={handleNavClick}
      />
    </header>
  );
};

export default Header;
