import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#1a1625',
          soft: '#2a2438',
        },
        parchment: '#f7f3ec',
        spark: {
          DEFAULT: '#f59e0b',
          deep: '#d97706',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,12,32,0.06), 0 8px 24px -12px rgba(16,12,32,0.25)',
        'card-hover': '0 2px 4px rgba(16,12,32,0.08), 0 16px 40px -16px rgba(16,12,32,0.35)',
      },
      keyframes: {
        'toast-in': {
          '0%': { transform: 'translateY(20px) scale(0.96)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        'pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'toast-in': 'toast-in 0.35s cubic-bezier(0.22,1,0.36,1)',
        'pop': 'pop 0.3s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
