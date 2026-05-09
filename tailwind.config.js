/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      colors: {
        bg:       '#020408',
        surface:  '#070d14',
        accent:   '#00f5ff',
        accent2:  '#8b00ff',
        accent3:  '#ff0080',
        gold:     '#ffd700',
        neon:     '#00ff88',
        text:     '#e2e8f0',
        'text-dim': '#7a8da0',
      },
      animation: {
        'float':       'float 5s ease-in-out infinite',
        'float-rev':   'floatReverse 6s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'spin-slow2':  'spin 32s linear infinite',
        'shimmer':     'shimmer 2.5s linear infinite',
        'blink':       'blink 1s step-end infinite',
        'orbit':       'rotateOrbit 15s linear infinite',
        'orbit-rev':   'rotateOrbitReverse 22s linear infinite',
        'neon-pulse':  'neonPulse 2s ease-in-out infinite',
        'data-stream': 'dataStream 8s linear infinite',
        'border-pulse':'borderPulse 2s ease-in-out infinite',
        'scan-line':   'scanLine 4s linear infinite',
      },
      keyframes: {
        float:               { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(-18px)' } },
        floatReverse:        { '0%,100%': { transform:'translateY(0)' }, '50%': { transform:'translateY(18px)' } },
        pulseGlow:           { '0%,100%':{ opacity:'0.6',transform:'scale(1)' }, '50%':{ opacity:'1',transform:'scale(1.05)' } },
        shimmer:             { '0%':{ transform:'translateX(-100%)' }, '100%':{ transform:'translateX(100%)' } },
        blink:               { '0%,100%':{ opacity:'1' }, '50%':{ opacity:'0' } },
        rotateOrbit:         { from:{ transform:'rotate(0deg)' }, to:{ transform:'rotate(360deg)' } },
        rotateOrbitReverse:  { from:{ transform:'rotate(0deg)' }, to:{ transform:'rotate(-360deg)' } },
        neonPulse: {
          '0%,100%': { boxShadow:'0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 20px #00f5ff' },
          '50%':      { boxShadow:'0 0 10px #00f5ff, 0 0 30px #00f5ff, 0 0 60px #00f5ff' },
        },
        dataStream: {
          '0%':   { transform:'translateY(-100%)', opacity:'0' },
          '10%':  { opacity:'1' },
          '90%':  { opacity:'1' },
          '100%': { transform:'translateY(100vh)', opacity:'0' },
        },
        borderPulse: {
          '0%,100%': { borderColor:'rgba(0,245,255,0.2)' },
          '50%':      { borderColor:'rgba(0,245,255,0.6)' },
        },
        scanLine: {
          '0%':   { top:'-5%' },
          '100%': { top:'105%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-cyan': `linear-gradient(rgba(0,245,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,245,255,0.04) 1px,transparent 1px)`,
      },
      boxShadow: {
        'neon-cyan':   '0 0 20px rgba(0,245,255,0.5), 0 0 60px rgba(0,245,255,0.2)',
        'neon-purple': '0 0 20px rgba(139,0,255,0.5), 0 0 60px rgba(139,0,255,0.2)',
        'neon-pink':   '0 0 20px rgba(255,0,128,0.5), 0 0 60px rgba(255,0,128,0.2)',
        'card-3d':     '20px 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,245,255,0.1)',
      },
    },
  },
  plugins: [],
};
