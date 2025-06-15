/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // slate-900
        foreground: '#f1f5f9', // slate-100
        primary: '#7dd3fc',    // sky-300
        secondary: '#a78bfa',  // purple-400
        accent: '#38bdf8',     // sky-400
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};