import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import theme from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...theme.fontFamily.sans],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#8EB9F5",
                    secondary: "#002D70",
                    accent: "#33BACC",
                    neutral: "#040316",
                    "base-100": "#ffffff",
                    info: "#00306B",
                    success: "#1DE71D",
                },
            },
        ],
    },
    plugins: [daisyui],
} satisfies Config;
