/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': 'Roboto'
      },
      boxShadow: {
        'card': '0px 4px 8px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

