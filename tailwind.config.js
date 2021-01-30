module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#9147ff',
        'gray-dim': '#3a3a3d',
        'gray-hover': '#5d5d5f',
        'gray-light': '#5a5a5c',
        'gray-dark': '#464648',
        'gray-darker': '#303032',
        'gray-darkest': "#29292b",
        'dark': '#1f1f23',
        'darker': '#18181b',
        'darkest': '#0e0e10',
        'indigo-dark': '#772ce8',
        'indigo-darkest': '#5c16c5',
        'gray-side-hover': '#26262c',
        'red-online': '#e91916'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10'
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active']
    },
  },
  plugins: [
    require('tailwindcss-line-clamp')
  ],
}
