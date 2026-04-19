'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import SectionHeader from './SectionHeader';
import { ExternalLink, X, Play, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hostel ERP System',
    short: 'Full-featured ERP for hostel management with student, faculty & admin portals.',
    description: 'A comprehensive enterprise resource planning system built for college management. Features include student registration, attendance tracking, grade management, fee processing, and administrative dashboards. Built with scalability and real-world use in mind.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    video: '/videos/project1.mp4',
    gradient: 'from-accent/20 to-accent2/20',
    accent: '#00d4ff',
  },
  {
    id: 2,
    title: 'KumbhPrashad - Nashik',
    short: 'Modern e-commerce platform for spiritual offerings and Nashik specialties.',
    description: 'A production-ready solution for the Kumbh Mela region, featuring product listings for spiritual items, secure checkout, and a comprehensive admin panel for inventory management and order tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    video: '/videos/project2.mp4',
    gradient: 'from-accent2/20 to-accent3/20',
    accent: '#7b2fff',
  },
  {
    id: 3,
    title: 'Fully Working EVM using Blockchain',
    short: 'Secure and transparent decentralized voting system using Smart Contracts.',
    description: 'A tamper-proof Electronic Voting Machine (EVM) built on blockchain technology. It ensures voter anonymity, prevents double-voting, and provides immutable, real-time results through decentralized ledgers.',
    tech: ['Solidity', 'React', 'Ethereum', 'Hardhat', 'Ethers.js'],
    video: '/videos/project3.mp4',
    gradient: 'from-accent3/20 to-accent/20',
    accent: '#ff3d6e',
  },
  {
    id: 4,
    title: 'AbhyasMitra',
    short: 'Comprehensive study companion for academic tracking and resource management.',
    description: 'A personalized learning management platform that helps students organize study schedules, track academic performance via analytics, and access a curated repository of study materials.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    video: '/videos/project4.mp4',
    gradient: 'from-green-400/20 to-accent/20',
    accent: '#4ade80',
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-bg/90 backdrop-blur-xl z-[80] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="glass-card border border-white/8 rounded-3xl p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Video preview area */}
          <div className={`h-52 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 relative overflow-hidden flex items-center justify-center border border-white/5`}>
            <video 
              src={project.video} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-text">{project.title}</h3>
              <p className="text-text-dim text-sm mt-1">{project.short}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl glass-card border border-white/8 flex items-center justify-center text-text-dim hover:text-accent transition-colors flex-shrink-0 ml-4"
            >
              <X size={16} />
            </button>
          </div>

          <p className="text-text-dim leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-text text-sm hover:border-accent/30 hover:text-accent transition-all">
              <Code2 size={14} />
              Source Code
            </button>
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-bg text-sm font-semibold"
              style={{ background: project.accent }}
            >
              <ExternalLink size={14} />
              Live Demo
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-28 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          num="// 02"
          title="My Projects"
          subtitle="Real-world applications built with modern tech stacks — each one a story of problem-solving and craft."
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              <div className="glass-card rounded-2xl border border-white/6 overflow-hidden hover:border-white/12 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 card-3d">
                {/* Video/Preview area */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <video 
                    src={project.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at center, ${project.accent}15, transparent 70%)` }}
                  />

                  {/* Project number */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-white/30 z-10">
                    0{project.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-4">{project.short}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tag-pill">+{project.tech.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-text-dim text-xs font-mono group-hover:text-accent transition-colors duration-300">
                    <span>View details</span>
                    <ExternalLink size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}