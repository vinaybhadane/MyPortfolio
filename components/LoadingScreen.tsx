'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);

  const phases = ['INITIALIZING SYSTEM', 'LOADING ASSETS', 'RENDERING 3D ENGINE', 'LAUNCHING'];

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) { p = 100; clearInterval(interval); setTimeout(() => setDone(true), 600); }
      setProgress(Math.min(p, 100));
      setPhase(Math.floor((Math.min(p, 100) / 100) * (phases.length - 1)));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg circuit-bg"
        >
          {/* Corner decorations */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8 border-accent/40`}
              style={{
                borderTop: i < 2 ? '1px solid' : 'none',
                borderBottom: i >= 2 ? '1px solid' : 'none',
                borderLeft: i % 2 === 0 ? '1px solid' : 'none',
                borderRight: i % 2 === 1 ? '1px solid' : 'none',
                borderColor: 'rgba(0,245,255,0.5)',
              }}
            />
          ))}

          {/* Central logo */}
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="relative mb-10"
          >
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent2/20 border border-accent/30 flex items-center justify-center animate-neon">
              <span className="font-display font-black text-4xl gradient-text">V</span>
            </div>
            <div className="absolute inset-0 rounded-2xl animate-spin-slow border border-accent/10" 
                 style={{ margin: '-8px', borderRadius: '20px' }} />
          </motion.div>

          {/* Brand */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-sm tracking-[0.4em] text-accent/80 mb-1"
          >
            VINAY BHADANE
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="font-mono text-xs text-text-dim tracking-widest mb-10"
          >
            FULL-STACK DEVELOPER
          </motion.p>

          {/* Progress bar */}
          <div className="w-72 relative">
            <div className="loading-bar-track rounded-full overflow-hidden mb-3">
              <motion.div
                className="loading-bar-fill"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
                style={{ boxShadow: '0 0 8px rgba(0,245,255,0.8)' }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-mono text-xs text-text-dim tracking-wider">{phases[phase]}</span>
              <span className="font-mono text-xs text-accent">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
