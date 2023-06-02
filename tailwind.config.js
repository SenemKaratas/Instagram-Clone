/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-pattern":
          "url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW)",
        "logo-pattern1":
          "url(https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1-2x.png?__d=www)",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
