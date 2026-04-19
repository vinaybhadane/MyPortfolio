'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      trail.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
      rafId = requestAnimationFrame(animateTrail);
    };

    const onEnterLink = () => {
      cursor.style.transform += ' scale(2.5)';
      cursor.style.background = 'rgba(0, 212, 255, 0.5)';
      trail.style.opacity = '0';
    };

    const onLeaveLink = () => {
      cursor.style.background = 'rgba(0, 212, 255, 0.9)';
      trail.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMove);
    animateTrail();

    const links = document.querySelectorAll('a, button, [data-hover]');
    links.forEach(l => {
      l.addEventListener('mouseenter', onEnterLink);
      l.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent/90 pointer-events-none z-[9998] transition-transform duration-75 mix-blend-screen hidden md:block"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent/30 pointer-events-none z-[9997] hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
