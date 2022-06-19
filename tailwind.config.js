/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cabin: 'Cabin, Arial, sans-serif',
      },
      colors: {
        primary: '#237068',
        light: '#fae4cd',
      },
    },
  },
  plugins: [],
};
