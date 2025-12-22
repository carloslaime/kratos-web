import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003B30",
        secondary: "#35383B",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}

export default config
