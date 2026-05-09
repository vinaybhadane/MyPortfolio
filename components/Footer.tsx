'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Resume',   href: '#resume' },
  { label: 'Contact',  href: '#contact' },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socials = [
  { Icon: GithubIcon,    href: 'https://github.com/vinaybhadane',        label: 'GitHub' },
  { Icon: LinkedinIcon,  href: 'https://linkedin.com/in/vinaybhadane',   label: 'LinkedIn' },
  { Icon: InstagramIcon, href: 'https://instagram.com/vinaybhadane06',   label: 'Instagram' },
  { Icon: Mail,          href: 'mailto:vinaybhadane06@gmail.com',         label: 'Email', isLucide: true },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center"
                   style={{ boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}>
                <span className="font-display font-black text-bg text-xl">V</span>
              </div>
              <div>
                <p className="font-display font-bold text-sm tracking-widest">VINAY BHADANE</p>
                <p className="font-mono text-[10px] text-text-dim tracking-widest">FULL-STACK DEVELOPER</p>
              </div>
            </div>
            <p className="text-text-dim text-xs leading-relaxed max-w-xs">
              Building futuristic web experiences with modern tech. Open to new opportunities and collaborations.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-mono text-xs text-text-dim hover:text-accent transition-colors tracking-wider"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-5">Connect</p>
            <div className="space-y-3">
              <a href="mailto:vinaybhadane06@gmail.com"
                className="flex items-center gap-2 font-mono text-xs text-text-dim hover:text-accent transition-colors">
                <Mail size={12} />vinaybhadane06@gmail.com
              </a>
              <div className="flex gap-3 pt-2">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg glass-card border border-white/8 flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/30 transition-all duration-300"
                    aria-label={s.label}>
                    {s.isLucide ? <Mail size={15} /> : <s.Icon />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-text-dim tracking-widest">
            © {new Date().getFullYear()} VINAY BHADANE — CRAFTED WITH ❤️ & NEXT.JS 15
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-[10px] text-neon tracking-widest">AVAILABLE FOR HIRE</span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-9 h-9 rounded-xl glass-card border border-accent/20 flex items-center justify-center text-accent hover:border-accent/50 hover:shadow-neon-cyan transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
