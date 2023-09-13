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
        navy: "#0a192f",
        lightest_slate: "#ccd6f6",
        light_slate: "#a8b2d1",
        lightest_navy: "#233554",
        mint_green: "#64ffda",
      },
      fontFamily: {
        lato: "Lato",
      },
      fontSize: {
        clamp: "clamp(40px, 8vw, 80px)",
      },
    },
  },
  plugins: [],
};
