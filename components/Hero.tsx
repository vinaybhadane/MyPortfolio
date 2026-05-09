'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FolderOpen, Terminal, Cpu } from 'lucide-react';
import Image from 'next/image';

const roles = [
  'Full-Stack Developer',
  'React & Next.js Engineer',
  'Blockchain Builder',
  'UI/UX Architect',
];

/* ─── Animated 3-D particles canvas ─── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = (canvas.width  = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const COLORS = ['rgba(0,245,255,', 'rgba(139,0,255,', 'rgba(255,0,128,'];
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.6 + 0.2,
      z: Math.random(),
    }));

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,245,255,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * (0.5 + p.z * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.shadowColor = p.color + '1)';
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => { window.removeEventListener('resize', onResize); cancelAnimationFrame(frame); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.9 }} />;
}

/* ─── Rotating 3D Ring system ─── */
function ProfileOrb() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 380, height: 380 }}>
      {/* Outermost ring */}
      <div
        className="absolute inset-0 rounded-full border border-accent/10 animate-orbit-rev"
        style={{ boxShadow: 'inset 0 0 30px rgba(0,245,255,0.03)' }}
      />

      {/* Outer ring with dots */}
      <div className="absolute rounded-full border border-accent/20 animate-orbit"
        style={{ inset: 24, boxShadow: '0 0 20px rgba(0,245,255,0.05)' }}>
        {/* Dot on orbit */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent"
             style={{ boxShadow: '0 0 8px rgba(0,245,255,1)' }} />
      </div>

      {/* Mid ring */}
      <div className="absolute rounded-full border border-accent2/25 animate-orbit-rev"
        style={{ inset: 52 }}>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent2"
             style={{ boxShadow: '0 0 10px rgba(139,0,255,1)' }} />
      </div>

      {/* Inner ring */}
      <div className="absolute rounded-full border border-accent3/20 animate-orbit"
        style={{ inset: 78, animationDuration: '8s' }}>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent3"
             style={{ boxShadow: '0 0 8px rgba(255,0,128,1)' }} />
      </div>

      {/* Profile image */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
        style={{ width: 200, height: 200 }}
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-accent2/20 to-accent3/20 blur-2xl scale-110" />

        {/* Image frame */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden holo-border"
          style={{ border: '2px solid rgba(0,245,255,0.3)' }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Vinay Bhadane"
            fill
            className="object-cover"
            priority
          />
          {/* Scan line overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
              animate={{ top: ['0%', '100%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>

        {/* Badge: Available */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3.5, type: 'spring', stiffness: 300 }}
          className="absolute -top-3 -left-6 glass-card px-3 py-2 rounded-xl border border-neon/30"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="font-mono text-xs text-neon">OPEN TO WORK</span>
          </div>
        </motion.div>

        {/* Badge: Score */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3.7, type: 'spring', stiffness: 300 }}
          className="absolute -bottom-3 -right-6 glass-card px-3 py-2 rounded-xl border border-accent/20"
        >
          <p className="font-mono text-[10px] text-text-dim">Diploma</p>
          <p className="font-display font-bold text-sm gradient-text-cyan">92%</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex]  = useState(0);
  const [displayed, setDisplayed]  = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex]  = useState(0);

  // Typewriter
  useEffect(() => {
    const current = roles[roleIndex];
    let t: NodeJS.Timeout;
    if (!isDeleting && charIndex <= current.length) {
      t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(p => p + 1);
        if (charIndex === current.length) setTimeout(() => setIsDeleting(true), 2000);
      }, 65);
    } else if (isDeleting && charIndex >= 0) {
      t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(p => p - 1);
        if (charIndex === 0) { setIsDeleting(false); setRoleIndex(p => (p + 1) % roles.length); }
      }, 35);
    }
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg">
      <ParticleField />

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(139,0,255,0.05) 0%, transparent 70%)', animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/2 w-[400px] h-[400px] rounded-full"
             style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.04) 0%, transparent 70%)' }} />
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-24 left-8 hidden xl:block">
        <div className="border-l border-t border-accent/20 p-3 rounded-tl-lg">
          <div className="flex items-center gap-2 mb-2">
            <Cpu size={12} className="text-accent/60" />
            <span className="font-mono text-[10px] text-accent/60 tracking-widest">SYSTEM STATUS</span>
          </div>
          {['CPU: 98% Creative', 'RAM: Full of Ideas', 'SSD: Code Stored'].map((s, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2 + i * 0.15 }}
              className="font-mono text-[9px] text-text-dim/60 leading-relaxed">{s}</motion.p>
          ))}
        </div>
      </div>

      <div className="absolute top-24 right-8 hidden xl:block">
        <div className="border-r border-t border-accent/20 p-3 rounded-tr-lg text-right">
          <div className="flex items-center gap-2 justify-end mb-2">
            <span className="font-mono text-[10px] text-accent/60 tracking-widest">LOCATION</span>
            <Terminal size={12} className="text-accent/60" />
          </div>
          {['Nashik, India', 'UTC+05:30', 'Remote Ready ✓'].map((s, i) => (
            <motion.p key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2 + i * 0.15 }}
              className="font-mono text-[9px] text-text-dim/60 leading-relaxed">{s}</motion.p>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-24">
        {/* LEFT */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border border-accent/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-neon animate-ping opacity-75" />
              <span className="w-2 h-2 rounded-full bg-neon" />
            </span>
            <span className="font-mono text-xs text-accent/90 tracking-widest">AVAILABLE FOR HIRE</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs text-text-dim tracking-[0.4em] mb-3 uppercase">Hello, World! I'm</p>
            <h1 className="font-display font-black leading-[0.9] tracking-tight">
              <span className="block text-6xl sm:text-7xl lg:text-8xl text-white mb-1">VINAY</span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl gradient-text text-glow-cyan">BHADANE</span>
              <span className="block text-2xl sm:text-3xl text-text-dim/70 mt-3 font-display font-medium tracking-widest">.</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.3 }}
            className="flex items-center gap-3 mt-6 mb-8"
          >
            <span className="font-mono text-xs text-accent/60 tracking-wider">$ role =</span>
            <span className="font-mono text-sm text-accent">
              "{displayed}<span className="animate-blink">_</span>"
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            className="text-text-dim text-base max-w-lg leading-relaxed mb-10"
          >
            Diploma in Computer Engineering with{' '}
            <strong className="text-white font-semibold">92%</strong> — engineering the future
            with{' '}
            <span className="text-accent/90">cutting-edge web experiences</span>{' '}
            that push boundaries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-xs tracking-widest font-bold uppercase text-bg transition-all duration-300 hover:scale-[1.03] hover:shadow-neon-cyan"
              style={{ background: 'linear-gradient(135deg, #00f5ff, #8b00ff)', boxShadow: '0 0 20px rgba(0,245,255,0.3)' }}
            >
              <FolderOpen size={15} className="group-hover:rotate-12 transition-transform" />
              VIEW PROJECTS
            </button>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass-card border border-accent/30 text-accent text-xs font-mono tracking-widest uppercase hover:border-accent/70 hover:bg-accent/10 hover:shadow-neon-cyan transition-all duration-300"
            >
              <Download size={15} />
              DOWNLOAD CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.9 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5"
          >
            {[
              { num: '92%', label: 'Diploma Score', color: 'text-accent' },
              { num: '4+',  label: 'Projects Built', color: 'text-accent2' },
              { num: '∞',   label: 'Ambition',       color: 'text-accent3' },
            ].map(stat => (
              <div key={stat.label} className="group">
                <p className={`font-display text-3xl font-black ${stat.color}`}
                   style={{ textShadow: `0 0 20px currentColor` }}>
                  {stat.num}
                </p>
                <p className="font-mono text-[10px] text-text-dim mt-1 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: 3D Profile Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 3.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <ProfileOrb />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-mono text-[10px] text-text-dim tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-accent"
            animate={{ height: ['0%', '100%'], top: ['0%', '100%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <ArrowDown size={14} className="text-accent/60 group-hover:text-accent animate-float" />
      </motion.div>
    </section>
  );
}