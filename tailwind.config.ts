import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'purple': "#8176AF",
      "indigo": "#C0B7E8",
      'backpurple': "#343045",
      'herocolor1' : '#3A3456',
      'herocolor2' : '#211E2E',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'textgrad1': "linear-gradient(90deg, #8176AF, #C0B7E8 )",
      },
      textColor: {
        "transparent": "transparent",
      }
    },
  },
  plugins: [],
};
export default config;
