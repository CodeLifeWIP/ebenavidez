// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: { colors },
    boxShadow: {
      'glow': '0 0 10px #29d, 0 0 15px #29d',
    },
    blur: {
      extra: '200px',
    },
  },
  plugins: [],
}

