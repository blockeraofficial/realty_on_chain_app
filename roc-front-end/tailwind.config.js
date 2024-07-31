/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '4.5': '1.125rem', // Custom height between h-4 (1rem) and h-5 (1.25rem)
      },
      colors: {
        rocPurple: {
          100: "#F7F0FF",
          200: "#F0DEFF",
          300: "#1a54da",
          400: "#9013FE",
          500: "#201abc",
          700: "#1a54da",
          800: "#000000",
        },
        rocGreen: {
          200: "#D2FF99",
          800: "#009621",
        },
        rocBlue: {
          200: "#8ED0FF",
          800: "#2F3DFF",
        },
        rocRed: {
          200: "#FFA8A8",
          800: "#E91919",
        },
        rocWhite: {
          300: "#F2F2F2",
          900: "#ffffff",
        },
        rocOrange: {
          300: "#FFA07A", // Light orange
          900: "#FF4500",
        },
        rocGray: {
          300: "#808080",
          400: "#eff2f5"
        },
        rocBlack: {
          100: "#000000",
          200: "#262e42",
        },
        rocBlue: {
          100: "#1a54da",
          200: "#06a9ae",
          300: "#8DD0FF"
        }
      },
      fontFamily: {
        prompt: ["Prompt"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
