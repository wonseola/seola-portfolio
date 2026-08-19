/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // 웜 뉴트럴 팔레트. 토큰 이름은 그대로 두고 값만 갈아끼워서
        // 기존 화면들이 자동으로 따라오게 했다.
        bg: "#f6f4f0",
        sunken: "#efece5",
        panel: "#ffffff",
        border: "#e3ded4",
        hairline: "#edeae2",
        "border-strong": "#cac3b6",
        "border-dash": "#d9d3c8",
        muted: "#9a9285",
        text: "#23211d",
        "text-hi": "#3a362f",
        subtext: "#625c52",
        "teal-soft": "#eaf2ef",

        // 분류 색 전용. 채도를 낮춰서 글자와 같이 놓아도 안 튄다.
        "accent-blue": "#5b6bb0",
        "accent-green": "#a8566a",
        "accent-yellow": "#a67c2c",
        "accent-orange": "#b06040",
        "accent-purple": "#87609b",
        "accent-cyan": "#3f8a7d",
        "accent-white": "#23211d",
      },
      fontFamily: {
        sans: ["'Pretendard Variable'", "Pretendard", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
