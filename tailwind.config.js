/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fdf0f3",
        panel: "#ffffff",
        border: "#f0d4db",
        text: "#2a1215",
        subtext: "#6b4a52",
        "accent-blue": "#7b6fd4",
        "accent-green": "#d44d6e",
        "accent-yellow": "#e09020",
        "accent-orange": "#e0603a",
        "accent-purple": "#c46fd4",
        "accent-cyan": "#3ab5a0",
        "accent-white": "#2a1215",
      },
      fontFamily: {
        sans: ["'Pretendard Variable'", "Pretendard", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
