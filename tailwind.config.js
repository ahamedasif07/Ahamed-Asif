/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom extra small breakpoint
        sm: "640px", // Small devices (phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops)
        xl: "1280px", // Extra-large devices (desktop)
        "2xl": "1536px", // Double extra-large devices (large desktops)
        xxl: "1600px", // Custom breakpoint for very large screens
        xxxl: "1920px", // Custom breakpoint for ultra-wide screens
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
