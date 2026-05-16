/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        disp: ["'Playfair Display'", 'Georgia', 'serif'],
        sans: ["'Manrope'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'monospace'],
      },
      colors: {
        ink:   { DEFAULT: '#0C0C0C', 2: '#141414', 3: '#1C1C1C' },
        ppr:   { DEFAULT: '#FAFAF8', 2: '#F2F0EB', 3: '#E8E5DE' },
        t1d:   '#EEEBE4', t2d: '#9A9590', t3d: '#5C5854',
        t1l:   '#0C0C0A', t2l: '#5C5854', t3l: '#9A9590',
        bd1:   '#232320', bd2: '#383530',
        bl1:   '#E0DDD8', bl2: '#C8C5BE',
      },
      animation: {
        ticker:      'ticker 22s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'fade-up':   'fadeUp .75s cubic-bezier(.16,1,.3,1) forwards',
      },
      keyframes: {
        ticker:   { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseDot: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.4' } },
        fadeUp:   { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
}
