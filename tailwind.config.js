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
        'dark': '#1f1f23',
        'darker': '#18181b',
        'darkest': '#0e0e10'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
