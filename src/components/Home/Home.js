import React, { useEffect } from 'react';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import Skills from '../Sections/Skills';
import Experience from '../Sections/Experience';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';

const Home = () => {
  /* When Home mounts with a section in the hash, jump to it. This only fires on
     a fresh mount (arriving from a detail page, or a direct deep-link) — the
     one case the browser can't scroll, because the target wasn't in the DOM at
     hashchange time. Same-page nav clicks don't remount Home, so they keep the
     browser's native smooth-scroll. The jump is retried once as layout settles. */
  useEffect(() => {
    const section = window.location.hash.replace(/^#\/?/, '');
    if (!section || section.startsWith('project/')) return undefined;

    const go = () => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'instant' });
    };

    const raf = requestAnimationFrame(go);
    const retry = setTimeout(go, 250);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(retry);
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
