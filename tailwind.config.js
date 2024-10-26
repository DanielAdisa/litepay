const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great' : ['GreatVibes', 'cursive'],
        'grey-reg' : ['Aon-Reg','sans-serif'],
        'grey-med' : ['Aon-Med','sans-serif'],
        'grey-lit' : ['Aon-Light','sans-serif'],
        'grey-bold' : ['Aon-Bold','sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll1": "loop-scroll1 75s linear infinite",
        // "stop-scroll": "stop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-35%)"},
        },
        "loop-scroll1": {
          from: { transform: "translateX(1920)"},
          to: { transform: "translateX(-35%)"},
        },
        // "stop-scroll": {
        //   from: { transform: "translateX(0)"},
        //   to: { transform: "translateX()"},
        // },
      },
      
    },
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

