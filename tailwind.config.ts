import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-background": "#5186FF",
      },
      container: {
        center: true,
        screens: {
          "1440px": "1440px"
        }
      },
      
    },
  },
  plugins: [],
} satisfies Config;
