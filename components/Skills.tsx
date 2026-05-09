'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const categories = [
  {
    label: 'Frontend',
    icon: '⬡',
    color: '#00f5ff',
    skills: [
      { name: 'HTML5 & CSS3',   level: 95 },
      { name: 'JavaScript ES2024', level: 88 },
      { name: 'React 19',       level: 85 },
      { name: 'Next.js 15',     level: 82 },
      { name: 'Tailwind CSS v4',level: 92 },
      { name: 'TypeScript 5',   level: 78 },
    ],
  },
  {
    label: 'Backend',
    icon: '⬡',
    color: '#8b00ff',
    skills: [
      { name: 'Node.js 22',     level: 80 },
      { name: 'Express.js 5',   level: 75 },
      { name: 'MongoDB 8',      level: 72 },
      { name: 'Firebase 11',    level: 80 },
      { name: 'REST APIs',      level: 85 },
      { name: 'SQL / PostgreSQL', level: 68 },
    ],
  },
  {
    label: 'Tools & Other',
    icon: '⬡',
    color: '#ff0080',
    skills: [
      { name: 'Git & GitHub',   level: 90 },
      { name: 'Figma',          level: 72 },
      { name: 'Postman',        level: 82 },
      { name: 'Vercel / Netlify', level: 78 },
      { name: 'Solidity',       level: 65 },
      { name: 'Docker',         level: 60 },
    ],
  },
];

const techIcons = [
  { name: 'Next.js 15',  color: '#fff' },
  { name: 'React 19',    color: '#61dafb' },
  { name: 'Node.js 22',  color: '#68a063' },
  { name: 'TypeScript 5',color: '#3178c6' },
  { name: 'MongoDB 8',   color: '#4db33d' },
  { name: 'Tailwind v4', color: '#06b6d4' },
  { name: 'Firebase 11', color: '#ffca28' },
  { name: 'Solidity',    color: '#5c6370' },
  { name: 'Ethers.js',   color: '#2535a0' },
  { name: 'Framer',      color: '#ff0055' },
  { name: 'PostgreSQL',  color: '#336791' },
  { name: 'Git',         color: '#f05032' },
  { name: 'Figma',       color: '#a259ff' },
  { name: 'Vercel',      color: '#fff' },
  { name: 'Docker',      color: '#2496ed' },
  { name: 'Prisma 6',    color: '#5a67d8' },
  { name: 'GraphQL',     color: '#e10098' },
  { name: 'Redux',       color: '#764abc' },
];

function SkillBar({ name, level, color, inView, delay }: {
  name: string; level: number; color: string; inView: boolean; delay: number;
}) {
  return (
    <div className="mb-5 group">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-xs text-text-dim group-hover:text-text transition-colors">{name}</span>
        <span className="font-mono text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ 
            width: '100%',
            background: `linear-gradient(90deg, ${color}80, ${color})`, 
            boxShadow: `0 0 8px ${color}60`,
            willChange: 'transform'
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent2/15 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(139,0,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label mb-3">// 03 — EXPERTISE</p>
          <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded-full" />
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6 border border-white/5 card-3d-wrap"
            >
              <div className="card-3d h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-lg"
                    style={{ background: `${cat.color}10`, border: `1px solid ${cat.color}25`, color: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-text text-sm">{cat.label}</p>
                    <p className="font-mono text-[10px] tracking-widest" style={{ color: cat.color }}>
                      {cat.skills.length} SKILLS
                    </p>
                  </div>
                </div>

                {/* Bars */}
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    inView={inView}
                    delay={ci * 0.1 + si * 0.07 + 0.3}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="section-label text-center mb-8">ALSO PROFICIENT WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.04 }}
                className="tech-badge cursor-default"
                style={{
                  borderColor: `${tech.color}30`,
                  color: tech.color,
                  boxShadow: `0 0 8px ${tech.color}15`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: tech.color }} />
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
