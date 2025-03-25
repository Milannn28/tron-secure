/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          "0%": { "background-position-x": "0%", "background-position-y": "50%" },
          "50%": { "background-position-x": "100%", "background-position-y": "50%" },
          "100%": { "background-position-x": "0%", "background-position-y": "50%" },
        },
      },
      animation: {
        gradient: "gradientMove 15s ease infinite",
      },
    },
  },
  plugins: [],
}

