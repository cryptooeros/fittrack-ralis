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
      'lime':'#84cc16',
      'slate':'#94a3b8'
    },
}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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