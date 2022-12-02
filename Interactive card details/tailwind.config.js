/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': { 'raw': '(max-width: 640px)' },
        // => @media (max-width: 640px) { ... }
      }
    }
  },
  plugins: [],
}
