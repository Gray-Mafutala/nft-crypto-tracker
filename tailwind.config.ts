import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#fffc",
        yellow: "#cbfe00",
        "off-black": "#0f0f0f",
      },

      backgroundImage: {
        "gradient-yellow": "linear-gradient(180deg, #cbfe00 4%, #fbe700 96%);",
        "gradient-silver":
          "linear-gradient(to right, #dbdbdb, #f9f9f9, #dbdbdb);",
        "gradient-transparent":
          "linear-gradient(to right, transparent, transparent, transparent);",
        "yello-circle":
          'url("../assets/images/home-page/hero-section/yellow-circle.svg")',
        "gray-grid":
          'url("../assets/images/home-page/hero-section/gray-grid.svg")',
      },

      fontFamily: {
        poppins: ["var(--font-poppins)"],
        "techno-chain": ["var(--font-techno-chain)"],
        "tt-firs-neue": ["var(--font-tt-firs-neue)"],
      },

      animation: {
        marqueeLeft: "marqueeLeft 80s linear infinite",
        marqueeRight: "marqueeRight 80s linear infinite",
        smoothAppearVertical: "smooth-appear-vertical .6s ease forwards",
        smoothAppearHorizontal: "smooth-appear-horizontal .6s ease forwards",
      },

      keyframes: {
        marqueeLeft: {
          from: { transform: "translateX(0)" },
          to: {
            transform: "translateX(calc(-100% - 5rem))",
          },
        },

        marqueeRight: {
          from: { transform: "translateX(calc(-100% - 5rem))" },
          to: { transform: "translateX(0)" },
        },

        "smooth-appear-vertical": {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "smooth-appear-horizontal": {
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },

      transitionTimingFunction: {
        "custom-carousel": "cubic-bezier(.42,.97,.52,1.49)",
      },

      screens: {
        mobile: "320px",
        mobileM: "475px",
        mobileL: "580px",
        mobileXL: "640px",
        tablet: "768px",
        tabletM: "896px",
        tabletL: "920px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
