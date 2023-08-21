/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        text: "#1d160c",
        background: "#f9f6f1",
        primary: "#7d9bca",
        secondary: "#d3cfed",
        accent: "#46a0aa",
      },
    },
  },
  plugins: [],
};
