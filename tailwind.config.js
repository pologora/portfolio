/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
    },
    colors: {
      home: '#A52A2A',
      about: '#138808',
      projects: '#4978F2',
      contact: '#CF9707',
      text_main: '#010B13',
      text_secondary: '#343434',
      background_main: '#FFFAFA',
    },
  },

  plugins: [],
};
