/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        eBoardMGT: {
          primary: "#000011",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff"
        }
      },
      "dark",
      "cupcake"
    ]
  },
  plugins: [require("daisyui")]
};