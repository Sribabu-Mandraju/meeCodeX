/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9333EA",
        secondary: "#6E29B7",
        teritary: "#4D38F0",
        bg: "#010a1f",
        cardbg: "#292738",
      },
      fontFamily: {
        primary: ["Krona One", "sans-serif"],
      },
    },
  },
  plugins: [],
};
