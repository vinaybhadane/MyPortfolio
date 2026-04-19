'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeader from './SectionHeader';
import { Code2, GraduationCap, Rocket, Heart } from 'lucide-react';

const highlights = [
  { icon: GraduationCap, label: 'Diploma', value: '92% in Computer Engineering', color: 'text-accent' },
  { icon: Code2, label: 'Pursuit', value: 'B.E. in Computer Engineering', color: 'text-accent2' },
  { icon: Rocket, label: 'Passion', value: 'Real-world Web Projects', color: 'text-accent3' },
  { icon: Heart, label: 'Focus', value: 'Full-stack Development', color: 'text-green-400' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent2/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left: Visual card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Code window */}
          <div className="glass-card rounded-2xl border border-white/6 overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
              <div className="w-3 h-3 rounded-full bg-accent3/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <div className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-4 font-mono text-xs text-text-dim">about_vinay.ts</span>
            </div>

            {/* Code body */}
            <div className="p-6 font-mono text-sm leading-7">
              <p><span className="text-accent2">const</span> <span className="text-accent">vinay</span> = {'{'}</p>
              <div className="pl-5">
                <p><span className="text-text-dim">name</span>: <span className="text-green-400">"Vinay Bhadane"</span>,</p>
                <p><span className="text-text-dim">role</span>: <span className="text-green-400">"Web Developer"</span>,</p>
                <p><span className="text-text-dim">diploma</span>: <span className="text-green-400">"92% — CSE"</span>,</p>
                <p><span className="text-text-dim">pursuing</span>: <span className="text-green-400">"B.E. Engineering"</span>,</p>
                <p><span className="text-text-dim">passions</span>: [</p>
                <div className="pl-5">
                  <p><span className="text-green-400">"building websites"</span>,</p>
                  <p><span className="text-green-400">"real-world projects"</span>,</p>
                  <p><span className="text-green-400">"learning every day"</span></p>
                </div>
                <p>],</p>
                <p><span className="text-text-dim">status</span>: <span className="text-accent3">"open_to_work"</span> <span className="text-text-dim">✓</span></p>
              </div>
              <p>{'}'}</p>
              <p className="mt-4 text-text-dim/50">// Let's build something great together</p>
            </div>
          </div>

          {/* Floating stats card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-8 -right-8 glass-card rounded-xl p-4 border border-accent/15"
          >
            <p className="font-mono text-xs text-text-dim mb-1">Current Stack</p>
            <div className="flex gap-1.5 flex-wrap max-w-[140px]">
              {['Next.js', 'React', 'Node.js', 'MongoDB'].map(t => (
                <span key={t} className="tag-pill text-[10px] px-2 py-0.5">{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <div>
          <SectionHeader
            num="// 01"
            title="About Me"
            subtitle="A passionate computer engineer who loves crafting digital experiences that blend functionality with beauty."
            inView={inView}
          />

          <div className="space-y-5 mb-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-dim leading-relaxed"
            >
              I'm <span className="text-text font-medium">Vinay Bhadane</span>, a computer engineering student who completed my
              Diploma with <span className="gradient-text-blue font-semibold">92%</span> and am currently pursuing my
              Bachelor's in Engineering. My journey has been driven by curiosity and a relentless drive to build.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-text-dim leading-relaxed"
            >
              I specialize in <span className="text-accent/80">modern web development</span>, creating full-stack applications
              with real-world functionality. Every project I touch gets my complete attention — from the architecture
              to the pixel-perfect UI details.
            </motion.p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <h.icon size={18} className={`${h.color} mb-2`} />
                <p className="font-mono text-xs text-text-dim">{h.label}</p>
                <p className="text-sm text-text font-medium mt-0.5 leading-snug">{h.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
