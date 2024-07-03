module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black: '#101010',
        dark: '#232323',
        gray: '#868686',
        light: '#F3F3F3',
        white: '#F3F3F3',
        green: '#9EFFBF',
        purple: '#7941A7',
        pink: '#E2BEFF',
        blue: '#1059C8',
      },
      fontFamily: {
        sans: ['TT Commons Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
