import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-bebas)', 'sans-serif'],
        mono: ['var(--font-montserrat)', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#1e293b',
          dark: '#0f172a',
          light: '#334155',
        },
        accent: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#93c5fd',
        },
        success: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#4ade80',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'fade-in-down': 'fadeInDown 0.6s ease-out both',
        'scale-in': 'scaleIn 0.4s ease-out both',
        'slide-in-right': 'slideInRight 0.5s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
