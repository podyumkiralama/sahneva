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
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px"
      }
    },

    extend: {
      screens: {
        xl: "1200px"
      },

      colors: {
        primary: "#6d28d9",   // Mor: arama butonu
        accent:  "#128C7E",   // WhatsApp yeşili (kontrastı artırdık)
        neutral: "#0f172a"
      },

      // ✅ Daha yumuşak ve performanslı animasyonlar (GPU friendly)
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.25, 0.1, 0.25, 1)"
      },
    }
  },

  corePlugins: {
    preflight: true, // Normalize.css benzeri reset (kritik stiller)
  },

  future: {
    hoverOnlyWhenSupported: true, // mobilde gereksiz hover yükünü kaldırır
  },

  plugins: [],
};