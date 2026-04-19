'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeader from './SectionHeader';
import { Mail, Send, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    // Simulate API call — replace with your actual email service (EmailJS, Resend, etc.)
    await new Promise(res => setTimeout(res, 1800));

    // Randomly succeed for demo
    setStatus('success');
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent2/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Info */}
        <div>
          <SectionHeader
            num="// 05"
            title="Get in Touch"
            subtitle="Have a project in mind? Let's talk. I'm always open to new ideas and opportunities."
            inView={inView}
          />

          {/* Email card */}
          <motion.a
            href="mailto:vinaybhadane06@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 p-5 glass-card rounded-2xl border border-white/6 hover:border-accent/25 transition-all duration-300 group mb-6"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
              <Mail size={20} className="text-accent" />
            </div>
            <div>
              <p className="font-mono text-xs text-text-dim mb-0.5">Email me at</p>
              <p className="text-text font-medium group-hover:text-accent transition-colors">
                vinaybhadane06@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Response time badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 p-4 glass-card rounded-xl border border-white/5"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-sm text-text-dim">
              Usually responds within <span className="text-text font-medium">24 hours</span>
            </p>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pl-4 border-l-2 border-accent/40"
          >
            <p className="text-text-dim italic leading-relaxed">
              "Great things are never done by one person. They're done by a team of people."
            </p>
            <footer className="font-mono text-xs text-accent/60 mt-2">— Steve Jobs</footer>
          </motion.blockquote>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <form onSubmit={handleSubmit} className="glass-card rounded-2xl border border-white/6 p-8 space-y-5">
            {/* Name */}
            <div>
              <label className="block font-mono text-xs text-text-dim mb-2 tracking-wide">
                YOUR NAME
              </label>
              <div className="relative">
                <User
                  size={15}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                    focused === 'name' ? 'text-accent' : 'text-text-dim/40'
                  }`}
                />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  placeholder="Vinay Bhadane"
                  required
                  className="input-field w-full rounded-xl py-3.5 pl-10 pr-4 text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs text-text-dim mb-2 tracking-wide">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                    focused === 'email' ? 'text-accent' : 'text-text-dim/40'
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  placeholder="you@example.com"
                  required
                  className="input-field w-full rounded-xl py-3.5 pl-10 pr-4 text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-mono text-xs text-text-dim mb-2 tracking-wide">
                MESSAGE
              </label>
              <div className="relative">
                <MessageSquare
                  size={15}
                  className={`absolute left-4 top-4 transition-colors duration-200 ${
                    focused === 'message' ? 'text-accent' : 'text-text-dim/40'
                  }`}
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="input-field w-full rounded-xl py-3.5 pl-10 pr-4 text-sm resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-accent to-accent2 text-bg font-semibold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent/15"
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Send size={15} /> Send Message
                  </motion.span>
                )}
                {status === 'sending' && (
                  <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <motion.div
                      className="w-4 h-4 border-2 border-bg/40 border-t-bg rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <CheckCircle size={15} /> Message Sent!
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <AlertCircle size={15} /> Try Again
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Success toast */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-400/10 border border-green-400/20"
                >
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <p className="text-sm text-green-400">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
