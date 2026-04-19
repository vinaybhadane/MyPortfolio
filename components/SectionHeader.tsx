'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  num: string;
  title: string;
  subtitle?: string;
  inView: boolean;
}

export default function SectionHeader({ num, title, subtitle, inView }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="section-num mb-3"
      >
        {num}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-dim mt-4 max-w-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="mt-5 h-px w-24 bg-gradient-to-r from-accent to-accent2"
      />
    </div>
  );
}
