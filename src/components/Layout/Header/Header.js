import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../../../hooks/useLanguage';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, t, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLangMenuOpen && !event.target.closest('.language-selector')) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangMenuOpen]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Nếu không ở trang chủ, chuyển về trang chủ trước
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span>Software Engineer</span>
          </Link>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => { setIsMenuOpen(false); scrollToSection('hero'); }}>{t('nav.home')}</Link></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); setIsMenuOpen(false); }}>{t('nav.about')}</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); setIsMenuOpen(false); }}>{t('nav.skills')}</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); setIsMenuOpen(false); }}>{t('nav.experience')}</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); setIsMenuOpen(false); }}>{t('nav.projects')}</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); setIsMenuOpen(false); }}>{t('nav.contact')}</a></li>
          </ul>

          <div className="header-actions">
            <div className="language-selector">
              <button 
                className="lang-btn" 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                aria-label="Change language"
              >
                <FaGlobe />
                <span>{language.toUpperCase()}</span>
              </button>
              {isLangMenuOpen && (
                <div className="lang-menu">
                  <button 
                    onClick={() => { changeLanguage('en'); setIsLangMenuOpen(false); }}
                    className={language === 'en' ? 'active' : ''}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => { changeLanguage('vi'); setIsLangMenuOpen(false); }}
                    className={language === 'vi' ? 'active' : ''}
                  >
                    Tiếng Việt
                  </button>
                </div>
              )}
            </div>
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

