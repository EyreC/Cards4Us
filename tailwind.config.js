const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Lexend Deca", ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [,...defaultTheme.fontFamily.mono],
      'big-shoulders': ["Big Shoulders Display", 'sans-serif']
    },
    extend: {
      minWidth: {
        'mobile':400
      },
      minHeight: {
        'desktop': '30rem'
      },
      colors: {
        'bright-orange':'#e38826',
        'dark-cyan': '	#006970',
        'very-dark-cyan': '#004241'
      },
      outline: {
        'solid-white': '2px solid white',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
