import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        blaze: {
          primary: "#f97316",
          secondary: "#dc2626",
          accent: "#fdba74",
          neutral: "#292524",
          "base-100": "#1c1917",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
} satisfies Config;
