/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      azure: '#0079FF',
      red: '#F74646',
      light: {
        black: '#222731',
        gray: '#697C9A',
        blue: '#4B6A9B',
        gunmetal: '#2B3442',
        ghostwhite: '#F6F8FF',
        white: '#FEFEFE',
      },
      dark: {
        white: '#FFFFFF',
        gunmetal: '#141D2F',
        blue: '#1E2A47',
      },
    },
    fontFamily: {
      space: ['Space Mono', 'monospace'],
    },
    extend: {
      boxShadow: {
        light: '0 16px 30px -10px rgba(70, 96, 187, 0.1986)',
      },
      fontSize: {
        'base-plus': ['1.625rem', '1.875rem'],
        xsm: ['0.8125rem', '1rem'],
        xll: ['1.375rem', '1.625rem'],
      },
      letterSpacing: {
        xxl: '2.5px',
      },
    },
  },
  plugins: [],
};
