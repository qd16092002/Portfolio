import React, { useEffect } from 'react';
import './App.css';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { useHashRoute } from './hooks/useHashRoute';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home';
import ProjectDetail from './components/Sections/ProjectDetail';

const Portfolio = () => {
  const { t } = useLanguage();
  const route = useHashRoute();
  const isProject = route.name === 'project';

  /* A detail page always starts at the top. Home sections are handled inside
     Home (on mount) so the browser's native smooth-scroll still drives
     same-page nav clicks. */
  useEffect(() => {
    if (isProject) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route, isProject]);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        {t('a11y.skipToContent')}
      </a>
      <Header showSectionNav={!isProject} />
      <main id="main">
        {isProject ? <ProjectDetail id={route.id} /> : <Home />}
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <LanguageProvider>
    <Portfolio />
  </LanguageProvider>
);

export default App;
