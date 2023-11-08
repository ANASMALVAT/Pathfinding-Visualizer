/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '40': 'repeat(40, minmax(0, 1fr))',
        '45': 'repeat(45, minmax(0, 1fr))',
        '50': 'repeat(50, minmax(0, 1fr))',

      },
    }
  },
  plugins: [],
}