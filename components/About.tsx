'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { GraduationCap, Code2, Rocket, Heart, Cpu, Globe } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'Education',  value: '92% — Diploma CSE',    color: 'text-accent',  glow: 'rgba(0,245,255,0.3)' },
  { icon: Cpu,           label: 'Pursuing',   value: 'B.E. Computer Eng.',   color: 'text-accent2', glow: 'rgba(139,0,255,0.3)' },
  { icon: Rocket,        label: 'Passion',    value: 'Real-World Projects',  color: 'text-accent3', glow: 'rgba(255,0,128,0.3)' },
  { icon: Globe,         label: 'Focus',      value: 'Full-Stack Dev',       color: 'text-gold',    glow: 'rgba(255,215,0,0.3)' },
  { icon: Code2,         label: 'Specialty',  value: 'Modern Web Apps',      color: 'text-neon',    glow: 'rgba(0,255,136,0.3)' },
  { icon: Heart,         label: 'Values',     value: 'Clean Code & Design',  color: 'text-accent',  glow: 'rgba(0,245,255,0.3)' },
];

const codeLines = [
  { text: "const vinay = {", color: "text-text" },
  { text: '  name: "Vinay Bhadane",', color: "text-neon" },
  { text: '  role: "Full-Stack Dev",', color: "text-neon" },
  { text: '  diploma: "92% — CSE",', color: "text-neon" },
  { text: '  pursuing: "B.E. Engg",', color: "text-neon" },
  { text: "  passions: [", color: "text-text" },
  { text: '    "building apps",', color: "text-accent2" },
  { text: '    "blockchain",', color: "text-accent2" },
  { text: '    "open source",', color: "text-accent2" },
  { text: "  ],", color: "text-text" },
  { text: '  status: "open_to_work ✓",', color: "text-accent3" },
  { text: "};", color: "text-text" },
  { text: "", color: "" },
  { text: "// Let's build something great!", color: "text-text-dim" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-y-1/2"
           style={{ background: 'radial-gradient(circle, rgba(139,0,255,0.05) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT: Code window */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative card-3d-wrap"
        >
          <div className="glass-card card-3d rounded-2xl overflow-hidden border border-accent/10"
               style={{ boxShadow: '0 0 40px rgba(0,245,255,0.04), inset 0 1px 0 rgba(0,245,255,0.06)' }}>
            {/* Terminal bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5"
                 style={{ background: 'rgba(0,245,255,0.02)' }}>
              <div className="w-3 h-3 rounded-full bg-accent3/80" />
              <div className="w-3 h-3 rounded-full bg-gold/80" />
              <div className="w-3 h-3 rounded-full bg-neon/80" />
              <div className="ml-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-text-dim">about_vinay.ts</span>
              </div>
              <div className="ml-auto font-mono text-[9px] text-text-dim/40 tracking-widest">TS  UTF-8</div>
            </div>

            {/* Code body */}
            <div className="p-6 font-mono text-sm leading-7 relative">
              {/* Line numbers */}
              <div className="absolute left-0 top-6 bottom-6 flex flex-col items-end pr-4 pl-3 select-none"
                   style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.65rem', lineHeight: '1.75rem', width: '42px' }}>
                {codeLines.map((_, i) => <span key={i}>{i + 1}</span>)}
              </div>

              <div className="pl-10">
                {codeLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.05 * i }}
                    className={`${line.color} leading-7`}
                  >
                    {line.text || '\u00A0'}
                  </motion.p>
                ))}
              </div>

              {/* Cursor blink */}
              <div className="absolute bottom-6 pl-10">
                <span className="font-mono text-sm text-accent animate-blink">▋</span>
              </div>
            </div>
          </div>

        </motion.div>

        {/* RIGHT: Content */}
        <div>
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <p className="section-label mb-3">// 01 — WHO AM I</p>
            <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded-full" />
          </motion.div>

          <div className="space-y-4 mb-10">
            {[
              `I'm Vinay Bhadane, a Computer Engineering student who completed my Diploma with 92% and am now pursuing my Bachelor's in Engineering. My journey is driven by relentless curiosity and passion for building.`,
              `I specialize in modern full-stack development — crafting production-grade web applications from architecture to pixel-perfect UI. Every project gets my complete attention and best effort.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="text-text-dim leading-relaxed text-sm"
                dangerouslySetInnerHTML={{
                  __html: text
                    .replace('92%', '<strong class="text-white font-semibold">92%</strong>')
                    .replace('production-grade', '<span class="text-accent/90">production-grade</span>')
                }}
              />
            ))}
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="glass-card rounded-xl p-4 border border-white/5 group card-3d-wrap"
              >
                <div className="card-3d">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                       style={{ background: `${h.glow.replace('0.3', '0.08')}`, border: `1px solid ${h.glow}` }}>
                    <h.icon size={16} className={h.color} />
                  </div>
                  <p className="font-mono text-[9px] text-text-dim tracking-widest uppercase mb-1">{h.label}</p>
                  <p className="text-xs text-text font-medium leading-snug">{h.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
