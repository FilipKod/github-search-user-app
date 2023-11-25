/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      space: ['Space Mono', 'monospace'],
    },
    extend: {
      boxShadow: {
        light: '0 16px 30px -10px rgba(70, 96, 187, 0.1986)',
      },
      colors: {
        'light-white': '#FEFEFE',
      },
    },
  },
  plugins: [],
};
