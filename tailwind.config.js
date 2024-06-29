/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColorBlue: '#130e4a',
        customColorPurple: '#8b81ff',
        customColorBlueTwo: '#2a1ea8',
        customColorGreen: '#166534',
      },
      screens: {
        'sm': {'max': '516px'},
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}

