import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Speaking from '../components/Speaking';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Starfield from '../components/Starfield';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative">
      <Starfield />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Speaking />
        <Skills />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;