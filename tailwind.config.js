/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neo': '3px 3px 10px #c7c7c7, -3px -3px 10px #ffffff',
        'neo-hover': '6px 6px 20px #c7c7c7, -6px -6px 20px #ffffff',
      }
    }
  },
  plugins: [require("daisyui")],
}

