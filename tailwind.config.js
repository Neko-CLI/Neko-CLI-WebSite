// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
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
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      themes: {
        dark: {
          colors: {
            background: '#111827',
            content1: '#212f4d',
            content2: '#394c79',
            content3: '#4a629b',
            content4: '#637cb4',
            primary: {
              50: '#e1efff',
              100: '#b2d0ff',
              200: '#83b1fc',
              300: '#5292f8',
              400: '#2473f5',
              500: '#0a5adb',
              600: '#0246ac',
              700: '#00327c',
              800: '#001e4d',
              900: '#000a1f',
              DEFAULT: '#2473f5'
            },
            secondary: '#6440a3',
            default: '#85858C'
          },
        }
      },
    })
  ],
};