/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './styles/*.css',
    './**/*.html',       // catch all HTML files
    './script/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#F0F0F0',
        'border-main': '#D9D9D9',
        'aws-yellow': '#F3E307',
        'our-work-bg-color': '#FFF7F1',
        'our-work-title-color': '#604100',
        'visit-us-title': '#3E3E3E',
      },
      translate: {
        'center': '-50%,-50%',
      },
      fontFamily: {
        'oxanium': ['Oxanium', 'sans-serif'],
        'work-sans': ['"Work Sans"', 'sans-serif'],
        'strait': ['Strait', 'sans-serif'],
        'robotomono': ['"Roboto Mono"', 'sans-serif'],
        'pixelify': ['"Pixelify Sans"', 'sans-serif'],
        'bebasnue': ['"Bebas Neue"', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
