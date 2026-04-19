'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Download, FileText, Eye } from 'lucide-react';

export default function Resume() {
  const { ref, inView } = useInView();

  return (
    <section id="resume" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl border border-white/6 p-10 md:p-14 relative overflow-hidden"
        >
          {/* Gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-accent2/4" />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[80px]" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              {/* Document icon */}
              <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <FileText size={28} className="text-accent" />
              </div>

              <div>
                <p className="font-mono text-xs text-accent/70 tracking-wide mb-1">// 04</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-text">My Resume</h2>
                <p className="text-text-dim mt-2 max-w-md">
                  Get a full picture of my skills, education, and the projects I've built. Updated and ready.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <motion.a
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/10 glass-card text-text text-sm font-medium hover:border-accent/30 hover:text-accent transition-all duration-200"
              >
                <Eye size={16} />
                View Online
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Vinay_Bhadane_Resume.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent2 text-bg font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-lg shadow-accent/20"
              >
                <Download size={16} />
                Download PDF
              </motion.a>
            </div>
          </div>

          {/* Mini stats */}
          <div className="relative mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-6">
            {[
              { label: 'Diploma', value: '92%', sub: 'Computer Eng.' },
              { label: 'Projects', value: '4+', sub: 'Completed' },
              { label: 'Experience', value: '2yr', sub: 'Self-taught Dev' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-bold gradient-text-blue">{item.value}</p>
                <p className="font-mono text-xs text-text-dim mt-1">{item.label}</p>
                <p className="font-mono text-xs text-text-dim/50">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}