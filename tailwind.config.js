/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgButton: 'hsl(259, 100%, 65%)'
      }
    },
  },
  plugins: [],
}

