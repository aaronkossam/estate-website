/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Title: ["cal sans", "sans-serif"],
        body: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
