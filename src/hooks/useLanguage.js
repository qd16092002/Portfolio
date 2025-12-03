import { useState, useEffect } from 'react';
import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

const translations = {
  en: enTranslations,
  vi: viTranslations
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    // Mặc định là tiếng Anh
    const saved = localStorage.getItem('portfolio_language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Nếu không tìm thấy, thử lấy từ tiếng Anh
    if (!value) {
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    return value || key;
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return { language, t, changeLanguage };
};

