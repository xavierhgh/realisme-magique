/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'noir': '#1D201F',
      'noirclair': '#272C28',
      'blanc': '#F4F1EC',
      'blanc60': '#F4F1EC opacity(0.6)',
      'primary': '#65BD47',
      'secondary': '#3F742F',
      'accentuation': '#6FBA40',
    },
    fontFamily: {
      flower: ['flowerpower'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}