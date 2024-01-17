import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Using modern rgb
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        // Using modern hsl
        // primary: 'hsl(var(--color-primary) / <alpha-value>)',
        // secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        // Using legacy rgba
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
