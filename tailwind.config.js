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
        "gradient-pulse": "gradientPulse 3s ease infinite", // Keep your existing
        // New motto animation
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
          // Your existing keyframe
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // New keyframe for the motto
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
            // Custom CSS for the motto H1 (if you want to override default h1)
            ".motto-h1": {
              // You'll use this class on your h1 tag
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)", // Responsive font size
              fontWeight: "800", // Extra bold
              textAlign: "center",
              letterSpacing: "-0.5px", // Slightly tighter for a sleek look
              background: "linear-gradient(90deg, #6a82fb, #fc5c7d, #00c6ff)", // Multi-color gradient
              backgroundSize: "200% 200%", // Larger background for animation
              WebkitBackgroundClip: "text", // Clip background to text shape
              WebkitTextFillColor: "transparent", // Make text transparent
              color: "transparent", // Fallback
              animation: "motto-gradient-fade", // Apply the custom animation
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
            crimson: {
              50: '#FFF0F5',
              100: '#FFE1E7',
              200: '#FFC2CD',
              300: '#FFA3B3',
              400: '#FF849A',
              500: '#DC143C',
              600: '#C71236',
              700: '#B21030',
              800: '#9C0E2A',
              900: '#870C24',
              950: '#64091B',
            },
          },
        },
      },
    }),
  ],
};
