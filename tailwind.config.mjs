// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6d28d9",
        accent: "#15803d",
        neutral: "#0f172a",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
