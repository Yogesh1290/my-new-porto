
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Templates from '../components/Templates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import SlidingText from '../components/SlidingText';

const Index = () => {
  // Add dark mode detection and initialization
  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SlidingText direction="right" text="DEVELOPER • DESIGNER • INNOVATOR" />
        <About />
        <SlidingText direction="left" text="TYPESCRIPT • REACT • NODE.JS • TAILWIND" />
        <Skills />
        <SlidingText direction="right" text="READY-TO-USE • TEMPLATES • UI KITS" />
        <Templates />
        <SlidingText direction="left" text="FEATURED • PROJECTS • CASE STUDIES" />
        <Projects />
        <SlidingText direction="right" text="LET'S CREATE SOMETHING AMAZING TOGETHER" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
