/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors: {
      black: "#111111",
      white: "#ffffff",
      cream: "#C2B4A3", 
      dark: "#1A1A1A",
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
    extend: {
      backgroundImage: {
        'hompage': "url('/src/image/Image (1).png')",
      }
    },
  },
  plugins: [],
}