'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Mail, Send, CheckCircle, AlertCircle, User, MessageSquare, ArrowUpRight } from 'lucide-react';

/* ── Custom SVG brand icons ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const socials = [
  { icon: GithubIcon,    label: 'GitHub',    href: 'https://github.com/vinaybhadane',              color: '#e2e8f0' },
  { icon: LinkedinIcon,  label: 'LinkedIn',  href: 'https://linkedin.com/in/vinaybhadane',          color: '#0077b5' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com/vinaybhadane06',          color: '#e1306c' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      }
    } catch {
      setErrorMessage('Network error. Please email me directly.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden circuit-bg" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(139,0,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <p className="section-label mb-3">// 05 — LET'S TALK</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded-full mb-6" />
            <p className="text-text-dim leading-relaxed text-sm">
              Have a project idea, collaboration in mind, or just want to say hi?
              My inbox is always open. I respond within{' '}
              <span className="text-white font-medium">24 hours</span>.
            </p>
          </motion.div>

          {/* Email card */}
          <motion.a
            href="mailto:vinaybhadane06@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 p-5 glass-card rounded-2xl border border-white/5 hover:border-accent/30 transition-all duration-300 group mb-4"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                 style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.2)' }}>
              <Mail size={20} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[10px] text-text-dim tracking-widest mb-1">DIRECT EMAIL</p>
              <p className="text-text font-medium text-sm group-hover:text-accent transition-colors truncate">
                vinaybhadane06@gmail.com
              </p>
            </div>
            <ArrowUpRight size={16} className="text-text-dim group-hover:text-accent transition-colors flex-shrink-0" />
          </motion.a>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 p-4 glass-card rounded-xl border border-neon/15 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inset-0 rounded-full bg-neon animate-ping opacity-60" />
              <span className="w-3 h-3 rounded-full bg-neon" />
            </span>
            <p className="font-mono text-xs">
              <span className="text-neon">OPEN TO WORK</span>
              <span className="text-text-dim ml-2">— Freelance & Full-time</span>
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="font-mono text-[10px] text-text-dim tracking-widest mb-4 uppercase">Find me online</p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl border border-white/5 hover:border-white/15 transition-all duration-300"
                  aria-label={s.label}
                >
                  <span style={{ color: s.color }}><s.icon /></span>
                  <span className="font-mono text-xs text-text-dim group-hover:text-text transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 pl-4 border-l-2 border-accent/30"
          >
            <p className="text-text-dim text-sm italic leading-relaxed">
              "The best way to predict the future is to invent it."
            </p>
            <footer className="font-mono text-[10px] text-accent/60 mt-2">— Alan Kay</footer>
          </motion.blockquote>
        </div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl border border-accent/10 p-8 space-y-5"
            style={{ boxShadow: '0 0 40px rgba(0,245,255,0.04), inset 0 1px 0 rgba(0,245,255,0.06)' }}
          >
            <p className="font-display font-bold text-lg text-text mb-6">Send a Message</p>

            {/* Name */}
            <div>
              <label className="font-mono text-[10px] text-text-dim tracking-widest uppercase mb-2 block">Your Name</label>
              <div className="relative">
                <User size={14} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused === 'name' ? 'text-accent' : 'text-text-dim/40'}`} />
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                  placeholder="Vinay Bhadane"
                  required
                  className="neo-input w-full rounded-xl py-3.5 pl-10 pr-4 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="font-mono text-[10px] text-text-dim tracking-widest uppercase mb-2 block">Email Address</label>
              <div className="relative">
                <Mail size={14} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused === 'email' ? 'text-accent' : 'text-text-dim/40'}`} />
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  placeholder="you@example.com"
                  required
                  className="neo-input w-full rounded-xl py-3.5 pl-10 pr-4 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="font-mono text-[10px] text-text-dim tracking-widest uppercase mb-2 block">Message</label>
              <div className="relative">
                <MessageSquare size={14} className={`absolute left-4 top-4 transition-colors ${focused === 'message' ? 'text-accent' : 'text-text-dim/40'}`} />
                <textarea
                  name="message" value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project..."
                  rows={5} required
                  className="neo-input w-full rounded-xl py-3.5 pl-10 pr-4 text-sm resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-mono text-xs tracking-widest font-bold uppercase text-bg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #00f5ff, #8b00ff)',
                boxShadow: '0 0 30px rgba(0,245,255,0.3)',
              }}
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Send size={14} />SEND MESSAGE
                  </motion.span>
                )}
                {status === 'sending' && (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <motion.div className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full"
                      animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                    TRANSMITTING...
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <CheckCircle size={14} />MESSAGE SENT!
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <AlertCircle size={14} />TRY AGAIN
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Feedback messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{ background: 'rgba(0,255,136,0.06)', borderColor: 'rgba(0,255,136,0.2)' }}
                >
                  <CheckCircle size={15} className="text-neon flex-shrink-0" />
                  <p className="font-mono text-xs text-neon">Message received! I'll respond within 24 hours.</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-xl border"
                  style={{ background: 'rgba(255,0,128,0.06)', borderColor: 'rgba(255,0,128,0.2)' }}
                >
                  <AlertCircle size={15} className="text-accent3 flex-shrink-0" />
                  <p className="font-mono text-xs text-accent3">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
