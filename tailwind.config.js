/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/content/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer'),
  ],
}
