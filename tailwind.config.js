/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        serif: ["Cormorant", "sans-serif"],
      },
      screens: {
        lg: "1085px",
      },
      backgroundImage: {
        "gradient-one": "url('../public/images/background/18.jpg')",
        "gradient-two": "url('../public/images/background/18180.jpg')",
      },
    },
  },
  plugins: [],
};
