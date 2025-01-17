import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'move-horizontal': 'moveHorizontal 8s linear infinite',
      },
      keyframes: {
        moveHorizontal: {
          '0%': { transform: 'translate(-50%, -50%) translateX(-25%)' },
          '50%': { transform: 'translate(-50%, -50%) translateX(25%)' },
          '100%': { transform: 'translate(-50%, -50%) translateX(-25%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
