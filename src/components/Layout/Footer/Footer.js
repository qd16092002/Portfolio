import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Trần Quang Đạo. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

