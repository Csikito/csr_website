/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "320",
        sm: "380px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        banner: "url('../src/assets/images/banner.png')",
      },

      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#081b27",
        secondBodyColor: "#112e42",
        lightText: "#ededed",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#00abf0",
      },
      boxShadow: {
        shadowOne: "8px 8px 15px #112e42, -8px -8px 15px #112e42",
        shadowResume:
          "inset 8px 8px 15px #112e42, inset -8px -8px 15px #112e42",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        wiggle: "wiggle 5s linear infinite",
        rotate: "rotate 20s linear infinite",
        "rotate-negativ": "rotate-negativ 20s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "rotate-negativ": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-3d")({ legacy: true })],
};
