import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      s: "390px",
      xs: "450px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryB: "#000",
        secondaryW: "#fff",
        tertiaryBTN: "#90e0ef",
        typingText: "#f8ce96",
      },

      // animation: {
      //   rightL: "right 1.2s infinite alternate",
      // },

      // keyframes: {
      //   right: {
      //     "0%": { transform: "translateX(0)" },
      //     "100%": { transform: "translateX(10px)" },
      //   },
      // },

      // keyframes: {
      //   topdown: {
      //     "0%": { transform: "translateY(0)" },
      //     "100%": { transform: "translateY(-10px)" },
      //   },
      // },

      // animation: {
      //   topdown1: "topdown 1.2s infinite alternate",
      // },

      animation: {
        text: "text 5s ease infinite",
      },

      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },

      boxShadow: {
        card: "0px 0px 10px 2px rgba(90, 100, 229, 1)",
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;
