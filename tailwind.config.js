module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      recipeCard: '240px',
    },
    extend: {
      fontFamily: {
        notoSerifJa: ['Noto Serif Japanese'],
      },
    },
  },
  plugins: [],
}
