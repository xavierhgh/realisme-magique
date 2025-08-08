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
      'rouge': '#BD4747',
    },
    fontFamily: {
      flower: ['flowerpower'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        'primary': '-6px -10px 10px rgba(101, 189, 71, 0.4)',
        'shadowhover': '-6px -10px 10px rgba(244, 241, 236, 0.2)',
        'middle': '0px 0px 10px rgba(101, 189, 71, 0.4)',
      },
    },
  },
  plugins: [],
}