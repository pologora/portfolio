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
        roboto: ['Lato', 'sans-serif'],
      },
    },
    colors: {
      home: '#6C5858',
      about: '#4E8E70',
      projects: '#4978F2',
      contact: '#CF9707',
      text_main: '#100C0C',
      background_main: '#FFFAFA',
    },
  },

  plugins: [],
};
