'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ExternalLink, X, Code2, AlertTriangle, ChevronRight, ChevronLeft } from 'lucide-react';

// Custom SVG icons
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Hostel ERP System',
    short: 'Full-featured ERP for hostel management with student, faculty & admin portals.',
    description: 'A comprehensive enterprise resource planning system built for college management. Features include student registration, attendance tracking, grade management, fee processing, and administrative dashboards. Built with scalability and real-world deployment in mind.',
    tech: ['Next.js 15', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT'],
    images: ['/screenshot/hostel1.jpg', '/screenshot/hostel2.jpg', '/screenshot/hostel3.jpg', '/screenshot/hostel4.jpg'],
    link: '',
    color: '#00f5ff',
    gradient: 'from-[#00f5ff]/20 to-[#8b00ff]/20',
    tag: 'WEB APP',
  },
  {
    id: 2,
    num: '02',
    title: 'KumbhPrashad — Nashik',
    short: 'Modern e-commerce platform for spiritual offerings and Nashik specialties.',
    description: 'A production-ready e-commerce solution for the Kumbh Mela region, featuring product listings for spiritual items, secure checkout with Stripe, and a comprehensive admin panel for inventory management and order tracking.',
    tech: ['React 19', 'Node.js', 'MongoDB', 'Stripe', 'Redux Toolkit'],
    images: ['/screenshot/Kumbh1.jpg', '/screenshot/kumbh2.jpg', '/screenshot/kumbh3.jpg'],
    link: 'https://kumbhprashad.vercel.app/',
    color: '#8b00ff',
    gradient: 'from-[#8b00ff]/20 to-[#ff0080]/20',
    tag: 'E-COMMERCE',
  },
  {
    id: 3,
    num: '03',
    title: 'Blockchain EVM',
    short: '🏆 State Level Winner — Secure & transparent decentralized voting.',
    description: 'A tamper-proof Electronic Voting Machine built on the Ethereum blockchain. Ensures voter anonymity, prevents double-voting, and provides immutable real-time results through decentralized ledgers with MetaMask wallet integration.',
    tech: ['Solidity', 'React', 'Ethereum', 'Hardhat', 'Ethers.js', 'MetaMask'],
    images: ['/screenshot/Vote1.jpg', '/screenshot/vote2.jpg', '/screenshot/vote3.jpg', '/screenshot/vote4.jpg', '/screenshot/vote5.jpg'],
    link: 'https://vote-chain-x.vercel.app/',
    color: '#ff0080',
    gradient: 'from-[#ff0080]/20 to-[#00f5ff]/20',
    tag: 'BLOCKCHAIN',
  },
  {
    id: 4,
    num: '04',
    title: 'AbhyasMitra',
    short: 'Comprehensive study companion for academic tracking and resource management.',
    description: 'A personalized learning management platform helping students organize study schedules, track academic performance via analytics dashboards, and access curated study resources with AI-powered recommendations.',
    tech: ['Next.js 15', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Gemini AI'],
    images: ['/screenshot/abhyas1.jpg', '/screenshot/abhyas2.jpg', '/screenshot/abhyas3.jpg'],
    link: 'https://abhyasmitra.in',
    color: '#00ff88',
    gradient: 'from-[#00ff88]/20 to-[#00f5ff]/20',
    tag: 'AI PLATFORM',
  },
];

function ImageSlideshow({ images, color, autoPlay = true, hoverPause = false }: { images: string[], color: string, autoPlay?: boolean, hoverPause?: boolean }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length, autoPlay, isPaused]);

  return (
    <div 
      className="relative w-full h-full overflow-hidden bg-bg"
      onMouseEnter={() => hoverPause && setIsPaused(true)}
      onMouseLeave={() => hoverPause && setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Screenshot ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.8, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ willChange: 'opacity, transform' }}
        />
      </AnimatePresence>
      
      {/* HUD Frame Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${color}20` }}>
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-50" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-50" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 opacity-50" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-50" style={{ borderColor: color }} />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-8 opacity-100' : 'w-2 opacity-30'}`} 
            style={{ backgroundColor: color, boxShadow: i === index ? `0 0 10px ${color}` : 'none' }} 
          />
        ))}
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  const [index, setIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-bg/95 backdrop-blur-2xl z-[80] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          className="glass-card border rounded-3xl p-8 max-w-2xl w-full max-h-[92vh] overflow-y-auto"
          style={{ borderColor: `${project.color}30` }}
          onClick={e => e.stopPropagation()}
        >
          {/* Interactive Slideshow */}
          <div className={`h-64 sm:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6 relative overflow-hidden border border-white/5 group`}
               style={{ boxShadow: `0 0 30px ${project.color}20` }}>
            
            <AnimatePresence initial={false} custom={index}>
              <motion.img
                key={index}
                src={project.images[index]}
                alt={`${project.title} Screenshot ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>

            {/* Slideshow Controls */}
            {project.images.length > 1 && (
              <>
                <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10 z-20">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10 z-20">
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Scanline */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.1) 3px,rgba(0,0,0,0.1) 4px)' }} />
            
            <div className="absolute top-3 left-3 z-10">
              <span className="tech-badge text-[9px] backdrop-blur-md bg-bg/50" style={{ borderColor: `${project.color}50`, color: project.color }}>
                {project.tag}
              </span>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
              {project.images.map((_, i) => (
                <button 
                  key={i} 
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 opacity-100' : 'w-2 opacity-50 hover:opacity-80'}`} 
                  style={{ backgroundColor: i === index ? project.color : '#ffffff' }} 
                />
              ))}
            </div>
          </div>

          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="font-mono text-[10px] tracking-widest mb-1" style={{ color: project.color }}>PROJECT {project.num}</p>
              <h3 className="font-display text-2xl font-black text-text">{project.title}</h3>
              <p className="text-text-dim text-sm mt-1">{project.short}</p>
            </div>
            <button onClick={onClose}
              className="w-10 h-10 rounded-xl glass-card border border-white/10 flex items-center justify-center text-text-dim hover:text-accent transition-colors flex-shrink-0 ml-4">
              <X size={16} />
            </button>
          </div>

          <p className="text-text-dim text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map(t => (
              <span key={t} className="tech-badge" style={{ borderColor: `${project.color}30`, color: project.color }}>{t}</span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl text-bg text-xs font-mono font-bold tracking-widest uppercase hover:scale-105 transition-transform"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`, boxShadow: `0 0 20px ${project.color}40` }}>
                <GlobeIcon /> OPEN WEBSITE
              </a>
            ) : (
              <span className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-text-dim/50 text-xs font-mono tracking-widest uppercase cursor-not-allowed">
                <GlobeIcon /> OFFLINE / INTERNAL
              </span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden circuit-bg" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="section-label mb-3">// 02 — MY WORK</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-black leading-tight">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-accent2 rounded-full mt-4" />
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg border border-accent3/20 bg-accent3/5 max-w-sm">
              <AlertTriangle size={16} className="text-accent3 flex-shrink-0" />
              <p className="text-[10px] text-text-dim font-mono leading-relaxed">
                Some projects might not be currently working due to expired API keys or other technical reasons.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer card-3d-wrap"
              onClick={() => setActive(project)}
            >
              <div
                className="card-3d glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-500"
                style={{
                  '--hover-glow': `${project.color}20`,
                } as any}
              >
                {/* Preview Slideshow */}
                <div className={`h-60 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <ImageSlideshow images={project.images} color={project.color} hoverPause={true} />

                  {/* Scanlines overlay */}
                  <div className="absolute inset-0 opacity-30 pointer-events-none"
                       style={{ background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.15) 2px,rgba(0,0,0,0.15) 4px)' }} />

                  {/* Hover overlay glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                       style={{ background: `radial-gradient(circle at center, ${project.color}25, transparent 70%)` }} />

                  <div className="absolute top-4 right-4 z-10 font-display font-black text-3xl opacity-30 pointer-events-none"
                       style={{ color: project.color }}>
                    {project.num}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <h3 className="font-display text-xl font-bold text-text mb-2 group-hover:transition-colors duration-300"
                      style={{ transition: 'color 0.3s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = project.color)}
                      onMouseLeave={e => (e.currentTarget.style.color = '')}>
                    {project.title}
                  </h3>
                  <p className="text-text-dim text-sm leading-relaxed mb-4 min-h-[40px]">{project.short}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="tech-badge" style={{ borderColor: `${project.color}25`, color: project.color }}>
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge" style={{ borderColor: `${project.color}25`, color: project.color }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-text-dim group-hover:transition-colors duration-300"
                       style={{ transition: 'color 0.3s' }}
                       onMouseEnter={e => (e.currentTarget.style.color = project.color)}
                       onMouseLeave={e => (e.currentTarget.style.color = '')}>
                    <Code2 size={14} />
                    <span className="tracking-widest uppercase">View Details</span>
                    <ExternalLink size={13} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 mx-6 rounded-t-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0"
                     style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`, boxShadow: `0 -2px 10px ${project.color}80` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}