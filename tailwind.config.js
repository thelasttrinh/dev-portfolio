/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        text: "#012323",
        background: "#F0F4F4",
        primary: "#7d9bca",
        secondary: "#d3cfed",
        accent: "#46a0aa",
      },
    },
  },
  plugins: [],
};
