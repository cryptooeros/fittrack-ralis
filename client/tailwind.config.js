/** @type {import('tailwindcss').Config} */

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
      'orange': '#FF9800',
      'amber' : '#fbbf24',
      'yellow': '#eab308',
      'gray': '#111827',
      'green':'#22c55e',
    },
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./public/index.html',
  ],
  theme: {
      colors:colors,
    },
    extend: {},
  plugins: [],
}

// 'orange': '#f97316',

// 'orange': '#FF9800',
//         'amber' : '#fbbf24',
//         'yellow': '#eab308',
//         'gray': '#111827',
//         'green':'#22c55e',