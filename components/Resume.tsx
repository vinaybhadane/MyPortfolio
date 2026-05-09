'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Download, FileText, Award, Calendar, MapPin, Cpu } from 'lucide-react';

const timeline = [
  {
    year: '2024 – Present',
    title: 'B.E. Computer Engineering',
    org: 'University (SPPU)',
    desc: 'Pursuing Bachelor of Engineering in Computer Engineering with focus on advanced algorithms, system design, and modern web technologies.',
    icon: Award,
    color: '#00f5ff',
  },
  {
    year: '2021 – 2024',
    title: 'Diploma — Computer Engineering',
    org: 'Government Polytechnic Nashik',
    desc: 'Completed diploma with 92% marks. Deep-dived into programming, databases, networking, and built multiple real-world projects.',
    icon: FileText,
    color: '#8b00ff',
  },
];

const highlights = [
  { icon: Cpu,      label: 'Diploma Score', value: '92%',          color: '#00f5ff' },
  { icon: Award,    label: 'Projects',      value: '4+ Live',       color: '#8b00ff' },
  { icon: Calendar, label: 'Experience',    value: '2+ Years Dev',  color: '#ff0080' },
  { icon: MapPin,   label: 'Location',      value: 'Nashik, India', color: '#00ff88' },
];

export default function Resume() {
  const { ref, inView } = useInView();

  return (
    <section id="resume" className="py-32 relative overflow-hidden circuit-bg" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent3/15 to-transparent" />
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-3">// 04 — BACKGROUND</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight mb-4">
                Resume & <span className="gradient-text">Journey</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded-full" />
            </div>

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-accent/30 glass-card text-accent text-xs font-mono tracking-widest uppercase hover:border-accent/70 hover:bg-accent/10 hover:shadow-neon-cyan transition-all duration-300 w-fit"
            >
              <Download size={15} className="group-hover:translate-y-0.5 transition-transform" />
              DOWNLOAD CV
              <span className="text-accent/40">PDF</span>
            </a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT: Timeline */}
          <div>
            <p className="font-mono text-xs text-text-dim tracking-widest mb-8 uppercase">Education Timeline</p>
            <div className="relative">
              {/* Line */}
              <div className="absolute left-5 top-0 bottom-0 w-px"
                   style={{ background: 'linear-gradient(180deg, rgba(0,245,255,0.4), rgba(139,0,255,0.4), transparent)' }} />

              <div className="space-y-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    className="relative pl-14 group"
                  >
                    {/* Icon node */}
                    <div
                      className="absolute left-0 top-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        background: `${item.color}12`,
                        borderColor: `${item.color}30`,
                        boxShadow: `0 0 0 0 ${item.color}`,
                      }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>

                    <div className="glass-card rounded-2xl p-5 border border-white/5 group-hover:border-white/10 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] tracking-widest" style={{ color: item.color }}>
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-text text-base mb-1">{item.title}</h3>
                      <p className="font-mono text-xs text-text-dim mb-3">{item.org}</p>
                      <p className="text-text-dim text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Stats + Highlights */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-5 border border-white/5 holo-border card-3d-wrap"
                >
                  <div className="card-3d">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                         style={{ background: `${h.color}10`, border: `1px solid ${h.color}25` }}>
                      <h.icon size={16} style={{ color: h.color }} />
                    </div>
                    <p className="font-display font-black text-2xl text-white mb-1"
                       style={{ textShadow: `0 0 20px ${h.color}` }}>
                      {h.value}
                    </p>
                    <p className="font-mono text-[10px] text-text-dim tracking-widest uppercase">{h.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="glass-card rounded-2xl p-6 border border-accent/10"
              style={{ boxShadow: '0 0 30px rgba(0,245,255,0.04)' }}
            >
              <p className="font-mono text-[10px] tracking-widest text-accent/70 mb-4 uppercase">Key Achievements</p>
              {[
                '🏆 Scored 92% in Diploma — Top of class',
                '🚀 Built 4+ production-ready web apps',
                '⛓️ Implemented Blockchain EVM on Ethereum',
                '📱 Deployed apps with 100+ real users',
                '🌟 Open-source contributor & learner',
              ].map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-sm">{achievement.split(' ')[0]}</span>
                  <span className="text-text-dim text-xs">{achievement.split(' ').slice(1).join(' ')}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}