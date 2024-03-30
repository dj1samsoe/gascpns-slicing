/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#F7F8FA",
        primary: "#0BA7E3",
        secondary: "#293149",
        tertiary: "#E0F3FE",
        text: {
          primary: "#28293D",
          secondary: "#BFBFBF",
          tertiary: "#555770",
          quaternary: "#858688",
        },
      },
    },
  },
  plugins: [],
};
