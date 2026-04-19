'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:vinaybhadane06@gmail.com' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-14 overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center">
                <span className="font-display font-bold text-bg text-lg">V</span>
              </div>
              <span className="font-display font-semibold text-text">
                Vinay<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-text-dim leading-relaxed max-w-xs">
              Computer Engineer & Web Developer, crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-widest uppercase mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-text-dim hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-white/10 group-hover:bg-accent group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-widest uppercase mb-4">Connect</p>
            <div className="flex gap-3 mb-5">
              {socials.map(social => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass-card border border-white/6 flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/25 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:vinaybhadane06@gmail.com"
              className="font-mono text-xs text-accent/70 hover:text-accent transition-colors"
            >
              vinaybhadane06@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-mono text-xs text-text-dim text-center sm:text-left">
            © {new Date().getFullYear()} Vinay Bhadane. Built with{' '}
            <span className="text-accent/70">Next.js</span> &{' '}
            <span className="text-accent2/70">Tailwind CSS</span>.
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card border border-white/6 text-xs text-text-dim hover:text-accent hover:border-accent/25 transition-all duration-200 font-mono"
          >
            <ArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
