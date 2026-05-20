import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#F7F5F0',
          gold: '#9A7420',
          'gold-light': '#C6A56A',
          navy: '#0D1B2A',
          text: '#374151',
          muted: '#6B7480',
          border: '#E5DDD0',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      boxShadow: {
        goldGlow: '0 6px 24px rgba(198,165,106,0.5)',
        appCardHover: '0 12px 40px rgba(13,27,42,0.12), 0 0 0 1px rgba(154,116,32,0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
