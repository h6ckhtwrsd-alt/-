import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#13211a',
        mist: '#f2f6f3',
        line: '#dfe7e1',
        muted: '#58665e',
        on: { DEFAULT: '#119a4f', soft: '#e5f6ec', deep: '#0b6b36' },
        off: { DEFAULT: '#d3302a', soft: '#fdeceb', deep: '#9d1f1a' },
        warn: { DEFAULT: '#a76400', soft: '#fff4de' },
      },
      fontFamily: {
        display: ['var(--font-cairo)', 'sans-serif'],
        body: ['var(--font-tajawal)', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(17,154,79,.38)' },
          '50%': { boxShadow: '0 0 0 20px rgba(17,154,79,0)' },
        },
      },
      animation: { glow: 'glow 2.8s ease-out infinite' },
    },
  },
  plugins: [],
};
export default config;
