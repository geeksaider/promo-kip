import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{vue,ts}", "./index.html"],
  theme: {
    extend: {
      keyframes: {
        open: {
          "0%": {
            display: "flex",
            opacity: "0",
            visibility: "hidden",
          },
          "100%": {
            display: "flex",
            opacity: "1",
            visibility: "visible",
          },
        },
        close: {
          "100%": {
            display: "block",
            opacity: "1",
            visibility: "visible",
          },
          "0%": {
            display: "block",
            opacity: "0",
            visibility: "hidden",
          },
        },
      },
      animation: {
        open: "open 2s ease-in-out ",
      },
    },
    fontFamily: {
      cute: "'M PLUS Rounded 1c', serif",
    },
  },
  plugins: [],
} satisfies Config;
