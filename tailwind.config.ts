import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "black",
        cusgray: "#070b14",
        newblue:"#001D3D"
      },
    },
    backgroundImage: {
      'custom-bg': "/images/new.jpg"
    },
    cursor: {
      custom: 'url("/images/cursor.png"), auto',
    },
    animation: {
      logo: "moveLogo 1s ease-out forwards", // Animation name and timing
    },
    keyframes: {
      moveLogo: {
        "0%": {
          transform: "translateY(100%)", // Start from bottom (offscreen)
        },
        "100%": {
          transform: "translateY(0)", // End at normal position
        },
      },
    }
  },
  plugins: [],
} satisfies Config;
