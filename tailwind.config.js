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
    },
  },
  plugins: [],
};
