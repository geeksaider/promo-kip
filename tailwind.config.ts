import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{vue,ts}", "./index.html"],
  theme: {
    extend: {},
    fontFamily: {
      cute: "'M PLUS Rounded 1c', serif",
      lora: "'Lora', serif",
      inter: "'Inter', serif",
    },
  },
  plugins: [],
} satisfies Config;
