// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}", // varsa
    "./styles/**/*.{css}"
  ],

  theme: {
    // Container’ı merkezle ve XL’ı 1200px yap
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px"
      }
    },

    extend: {
      // XL breakpoint’i 1200px’e çeker (max-w-screen-xl da buna uyum sağlar)
      screens: {
        xl: "1200px"
      },

      colors: {
        primary: "#6d28d9",
        accent:  "#15803d",
        neutral: "#0f172a"
      }
    }
  },

  plugins: []
};
