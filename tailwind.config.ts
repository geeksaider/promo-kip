import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{vue,ts}", "./index.html"],
    theme: {
        extend: {
            colors: {
                nud: {
                    100: "#f9f9f9",
                    200: "#e0e0e0",
                },
            },
        },
        fontFamily: {
            cute: "'M PLUS Rounded 1c', serif",
            lora: "'Lora', serif",
            inter: "'Inter', serif",
        },
    },
    plugins: [],
} satisfies Config;
