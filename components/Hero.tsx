'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen, Sparkles } from 'lucide-react';
import Image from 'next/image';

const roles = ['Computer Engineer', 'Web Developer', 'Problem Solver', 'UI Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(prev => prev + 1);
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      }, 70);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(prev => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }
      }, 40);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent2/5 blur-[80px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-3/4 left-1/2 w-[300px] h-[300px] rounded-full bg-accent3/4 blur-[60px] animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating orbital elements */}
      <motion.div
        className="absolute top-24 right-24 w-2 h-2 rounded-full bg-accent/60 hidden lg:block"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-1.5 h-1.5 rounded-full bg-accent2/60 hidden lg:block"
        animate={{ y: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-12 w-px h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden xl:block"
        animate={{ scaleY: [0, 1, 0], opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
        {/* LEFT: Text */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.7 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-8"
          >
            <Sparkles size={12} className="text-accent" />
            <span className="font-mono text-xs text-accent/80 tracking-wide">Open to opportunities</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-4"
          >
            Hi, I'm{' '}
            <br />
            <span className="gradient-text">Vinay</span>
            <br />
            <span className="text-text/90">Bhadane.</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="font-mono text-sm text-text-dim tracking-wider">$ role =</span>
            <span className="font-mono text-sm text-accent">
              "{displayed}
              <span className="animate-blink">|</span>
              "
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.4 }}
            className="text-text-dim text-lg max-w-lg leading-relaxed mb-10"
          >
            Diploma in Computer Engineering with <strong className="text-text">92%</strong> — now engineering my next chapter,
            building <span className="text-accent/80">real-world web experiences</span> that make a difference.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent2 text-bg font-semibold text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-accent/20"
            >
              <FolderOpen size={16} />
              View Projects
            </button>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/10 glass-card text-text text-sm font-medium hover:border-accent/30 hover:text-accent transition-all duration-200"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/5"
          >
            {[
              { num: '92%', label: 'Diploma Score' },
              { num: '4+', label: 'Projects Built' },
              { num: '∞', label: 'Passion' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold gradient-text-blue">{stat.num}</p>
                <p className="text-xs text-text-dim mt-0.5 font-mono">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 m-[-20px] rounded-full border border-dashed border-accent/15"
            />
            {/* Second ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 m-[-44px] rounded-full border border-accent/8"
            />

            {/* Orbiting dots */}
            {[0, 120, 240].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full"
                style={{
                  background: i === 0 ? '#00d4ff' : i === 1 ? '#7b2fff' : '#ff3d6e',
                  marginTop: -5,
                  marginLeft: -5,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                transformTemplate={({ rotate }) =>
                  `rotate(${rotate}) translateX(${110 + i * 22}px) rotate(-${rotate})`
                }
              />
            ))}

            {/* Profile image container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 sm:w-80 sm:h-80"
            >
              {/* Glow behind */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/30 to-accent2/30 blur-2xl" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-full border-2 border-accent/20 overflow-hidden glass-card">
                <Image 
                  src="/images/profile.jpg" 
                  alt="Vinay Bhadane" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>

              {/* Badge card */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 4.2, type: 'spring', stiffness: 300 }}
                className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 border border-white/8"
              >
                <p className="text-xs text-text-dim font-mono">Diploma Score</p>
                <p className="font-display font-bold text-xl gradient-text-blue">92%</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 4.4, type: 'spring', stiffness: 300 }}
                className="absolute -top-4 -left-4 glass-card rounded-2xl px-4 py-3 border border-white/8"
              >
                <p className="text-xs text-text-dim font-mono">Status</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="font-mono text-xs text-green-400">Available</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-mono text-xs text-text-dim tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}