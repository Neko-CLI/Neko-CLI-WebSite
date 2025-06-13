const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "pop-in": "popIn 0.6s ease-out forwards",
        "gradient-pulse": "gradientPulse 3s ease infinite",
        "motto-gradient-fade": "mottoGradientPulse 4s ease infinite alternate",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        gradientPulse: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        mottoGradientPulse: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "40px",
              fontWeight: "700",
            },
            h2: {
              fontSize: "24px",
              fontWeight: "600",
            },
            a: {
              marginLeft: "5px",
            },
            ".motto-h1": {
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: "800",
              textAlign: "center",
              letterSpacing: "-0.5px",
              background: "linear-gradient(90deg, #6a82fb, #fc5c7d, #00c6ff)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              animation: "motto-gradient-fade",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: "#111827",
            content1: "#212f4d",
            content2: "#394c79",
            content3: "#4a629b",
            content4: "#637cb4",
            primary: {
              50: "#e1efff",
              100: "#b2d0ff",
              200: "#83b1fc",
              300: "#5292f8",
              400: "#2473f5",
              500: "#0a5adb",
              600: "#0246ac",
              700: "#00327c",
              800: "#001e4d",
              900: "#000a1f",
              DEFAULT: "#2473f5",
            },
            secondary: "#6440a3",
            default: "#85858C",
          },
        },
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#11181C",
            content1: "#F1F5F9",
            content2: "#E2E8F0",
            content3: "#CBD5E1",
            content4: "#94A3B8",
            primary: {
              50: "#e1efff",
              100: "#b2d0ff",
              200: "#83b1fc",
              300: "#5292f8",
              400: "#2473f5",
              500: "#0a5adb",
              600: "#0246ac",
              700: "#00327c",
              800: "#001e4d",
              900: "#000a1f",
              DEFAULT: "#2473f5",
            },
            secondary: "#8B5CF6",
            default: "#334155",
          },
        },
      },
    }),
  ],
};
