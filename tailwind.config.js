/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        seashell: 'rgb(249, 247, 238)',
        y3: 'rgb(243, 176, 28)',
        'seashell-lite': '#fef4e0',
      },
    },
  },
  plugins: [],
};
