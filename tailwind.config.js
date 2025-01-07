/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
      fontFamily: {
        liberty: ["Liberty", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 5%, 6.5%, 8%, 100%": {
            opacity: "1",
            transform: "translate(-0.2rem, 1rem) rotate(10deg)",
          },
          "5.5%, 7%": {
            opacity: "0",
            transform: "translate(-0.2rem, 1rem) rotate(10deg)",
          },
          "50%": {
            opacity: "1",
            transform: "translate(-0.2rem, 1rem) rotate(13deg)",
          },
        },
      },
      animation: {
        flicker: "flicker 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
