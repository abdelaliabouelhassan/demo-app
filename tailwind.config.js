/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#527AFF",
          200: "#ebebeb",
        },
        secondary: {
          100: "#FF5800",
        },
        tertiary: {
          100: "#F5F7F8",
          200: "#707070",
          300: "#020731",
        },
      }
    },
  },
  plugins: [],
}
