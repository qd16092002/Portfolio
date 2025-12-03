import React from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Skills from '../components/Sections/Skills';
import Experience from '../components/Sections/Experience';
import Projects from '../components/Sections/Projects';
import Contact from '../components/Sections/Contact';

const Home = () => {
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

