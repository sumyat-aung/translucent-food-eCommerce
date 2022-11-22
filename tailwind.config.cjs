// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./*.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bla: "#0C0B08",
        yel: "#DCCA87",
      },
    },
  },
  plugins: [],
};
