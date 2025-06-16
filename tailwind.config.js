/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        universal: '#222232',
        muted: '#313148'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};