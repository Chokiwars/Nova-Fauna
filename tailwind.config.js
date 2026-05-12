/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        background: '#050505',
        secondbackground: '#161b18',
        surface: '#111111',
      },
    },
  },

  plugins: [],
}