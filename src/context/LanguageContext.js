import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import en from '../locales/en.json';
import vi from '../locales/vi.json';

const translations = { en, vi };

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'vi', label: 'Tiếng Việt', short: 'VI' },
];

const STORAGE_KEY = 'portfolio_language';

const LanguageContext = createContext(null);

const readPath = (source, path) =>
  path.split('.').reduce((value, key) => (value == null ? value : value[key]), source);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch {
      /* localStorage can be unavailable (private mode, blocked cookies). */
    }
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      /* Persisting the choice is a nicety, not a requirement. */
    }
  }, [language]);

  const t = useCallback(
    (path) => {
      const value = readPath(translations[language], path);
      if (value != null) return value;
      return readPath(translations.en, path) ?? path;
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }
  return context;
};
