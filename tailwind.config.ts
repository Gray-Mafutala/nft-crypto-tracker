import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // shadcn ui
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // my styles
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

      // shadcn ui
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marqueeLeft: "marqueeLeft 80s linear infinite",
        marqueeRight: "marqueeRight 80s linear infinite",
        smoothAppearVertical: "smooth-appear-vertical .6s ease forwards",
        smoothAppearHorizontal: "smooth-appear-horizontal .6s ease forwards",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

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

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
