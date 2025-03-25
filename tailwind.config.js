/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        greatvibes: ['"Great Vibes"', "cursive"],
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
