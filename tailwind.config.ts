import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#071223',
          gold: '#C6A56A',
          white: '#F8F8F8',
          muted: '#A0A7B2',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        goldGlow: '0 0 40px rgba(198,165,106,0.5)',
        appCardHover: '0 8px 40px rgba(0,0,0,0.5), 0 0 24px rgba(198,165,106,0.15)',
      },
    },
  },
  plugins: [],
};
export default config;
