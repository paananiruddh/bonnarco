import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B1A17",
          soft: "#33312B",
        },
        paper: {
          DEFAULT: "#FBF9F4",
          dim: "#F3EEE3",
        },
        sand: "#EFE8D8",
        stone: {
          DEFAULT: "#655F53",
          light: "#B9AF9B",
        },
        brass: {
          light: "#C9A968",
          DEFAULT: "#8A6A34",
          dark: "#6E5327",
        },
        harbour: {
          light: "#3F5F6C",
          DEFAULT: "#26404B",
          dark: "#182B33",
        },
        clay: "#A8593B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", ...defaultTheme.fontFamily.serif],
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      letterSpacing: {
        wide2: "0.08em",
        wide3: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
