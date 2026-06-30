/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717",       // Luxury rich dark charcoal/black
        secondary: "#B88E4A",     // Elegant gold accent
        bgLight: "#F7F7F7",       // Light background
        textDark: "#444444",      // Soft black body text
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.2em",
        widest: "0.15em",
      },
      spacing: {
        '28': '7rem',
        '36': '9rem',
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 20px 40px -15px rgba(184, 142, 74, 0.15)',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
