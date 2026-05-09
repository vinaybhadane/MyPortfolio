'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  useEffect(() => {
    let lenis: any;
    const init = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.5,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        });
        const raf = (time: number) => { lenis?.raf(time); requestAnimationFrame(raf); };
        requestAnimationFrame(raf);
      } catch (e) { console.error(e); }
    };
    init();
    return () => lenis?.destroy();
  }, []);

  return (
    <>
      <LoadingScreen />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}