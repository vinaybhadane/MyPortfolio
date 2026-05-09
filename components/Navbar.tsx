'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Resume',   href: '#resume' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-accent/10 py-3 shadow-lg shadow-accent/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-accent2 opacity-80 group-hover:opacity-100 transition-opacity animate-neon" />
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center">
                <span className="font-display font-black text-bg text-xl z-10">V</span>
              </div>
              <div className="absolute inset-[-3px] rounded-[14px] border border-accent/20 animate-spin-slow" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-sm tracking-widest text-text">
                VINAY<span className="text-accent">.</span>DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href} className="relative">
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`font-mono text-xs tracking-widest uppercase transition-all duration-300 pb-1 ${
                      isActive ? 'text-accent' : 'text-text-dim hover:text-accent'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeBar"
                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                        style={{ boxShadow: '0 0 6px rgba(0,245,255,0.8)' }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('#contact')}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg border border-accent/40 text-accent text-xs font-mono tracking-widest uppercase hover:bg-accent/10 hover:border-accent/70 transition-all duration-300 hover:shadow-neon-cyan"
            >
              <Zap size={13} />
              HIRE ME
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-text-dim hover:text-accent transition-colors p-2"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-bg/80 backdrop-blur-md z-[60]"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed right-0 top-0 bottom-0 w-80 glass z-[70] flex flex-col p-8 border-l border-accent/10"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="font-display text-sm tracking-widest text-accent">MENU</span>
                <button onClick={() => setMobileOpen(false)} className="text-text-dim hover:text-accent">
                  <X size={22} />
                </button>
              </div>
              <ul className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <button
                      onClick={() => handleNav(link.href)}
                      className="font-display text-2xl font-bold text-text hover:text-accent transition-colors group flex items-center gap-3"
                    >
                      <span className="text-accent/40 font-mono text-xs">0{i+1}</span>
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pt-8 border-t border-white/5 space-y-2">
                <p className="font-mono text-xs text-text-dim">vinaybhadane06@gmail.com</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                  <p className="font-mono text-xs text-neon">Available for hire</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
