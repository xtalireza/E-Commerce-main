/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto","serif"]
    },
    colors: {
      black: "#111111",
      white: "#ffffff",
      cream: "#C2B4A3", 
      dark: "#1A1A1A",
      gray:"#81807E",
      paleGray: "#B3B3B2",
      grey: "#B3B3B2",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '1rem',
      },
    },
    extend: {},
  },
  plugins: [],
}