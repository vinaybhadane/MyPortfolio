'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeader from './SectionHeader';

const skillCategories = [
  {
    label: 'Frontend',
    icon: '🎨',
    color: 'accent',
    skills: [
      { name: 'HTML & CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 80 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    color: 'accent2',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
      { name: 'MongoDB', level: 70 },
      { name: 'Firebase', level: 78 },
      { name: 'SQL', level: 65 },
    ],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    color: 'accent3',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'VS Code', level: 92 },
      { name: 'Figma', level: 70 },
      { name: 'Postman', level: 80 },
      { name: 'Vercel / Deployment', level: 75 },
    ],
  },
];

const techBadges = [
  'Next.js', 'React', 'Node.js', 'MongoDB', 'Express',
  'Tailwind CSS', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
  'Git', 'GitHub', 'Figma', 'Postman', 'Vercel',
  'REST API', 'SQL', 'VS Code', 'Linux', 'JWT',
];

const colorMap: Record<string, string> = {
  accent: '#00d4ff',
  accent2: '#7b2fff',
  accent3: '#ff3d6e',
};

function SkillBar({ name, level, color, inView, delay }: {
  name: string; level: number; color: string; inView: boolean; delay: number;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-text-dim">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent2/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          num="// 03"
          title="My Skills"
          subtitle="A toolkit forged through building real projects — always expanding, always improving."
          inView={inView}
        />

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6 border border-white/6"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${colorMap[cat.color]}15`, border: `1px solid ${colorMap[cat.color]}25` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <p className="font-display font-semibold text-text">{cat.label}</p>
                  <p className="font-mono text-xs" style={{ color: colorMap[cat.color] }}>
                    {cat.skills.length} skills
                  </p>
                </div>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={colorMap[cat.color]}
                  inView={inView}
                  delay={ci * 0.1 + si * 0.08 + 0.3}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-mono text-xs text-text-dim text-center mb-6 tracking-widest uppercase">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
                className="tag-pill cursor-default hover:scale-105 transition-transform duration-200"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
