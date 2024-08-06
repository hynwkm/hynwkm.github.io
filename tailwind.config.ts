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
        colors: {
            blue: {
                "50": "#edf6ff",
                "100": "#dcecfb",
                "200": "#c2defa",
                "300": "#98cbf7",
                "400": "#6daffe",
                "500": "#448eec",
                "600": "#437fc7",
                "700": "#265cce",
                "800": "#254ba8",
                "900": "#234284",
                "950": "#1a2a51",
            },
            white: "#fff",
        },
    },
    plugins: [],
} satisfies Config;
