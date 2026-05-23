import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Anton"', '"Archivo Black"', "Impact", "system-ui", "sans-serif"],
        body: ['"DM Sans"', '"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        wasabi: {
          green: "#00b844",
          bright: "#14d855",
          deep: "#066b2a",
          wash: "#ecf9f0",
          ink: "#0a0f0c",
          inkSoft: "#1b211d",
          paper: "#ffffff",
          off: "#f5f7f5",
          line: "#e5eae6",
          muted: "#6b7670",
          gold: "#c39b4e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
