/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./styles/**/*.{css}"
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
      },
    },

    extend: {
      // Renk paleti – Sahneva teması
      colors: {
        primary: "#6d28d9",   // Mor (buton ve vurgular)
        primaryDark: "#5b21b6",
        accent: "#15803d",    // WhatsApp yeşili
        accentDark: "#166534",
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },

      // Gölge ve animasyonlar
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.08)",
        md: "0 6px 16px rgba(0,0,0,0.12)",
      },

      // Font ailesi (Inter değişkeninden geliyor)
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      // Transition hızları
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },

  plugins: [
    // Daha iyi form stilleri (örnek: iletişim formu)
    require("@tailwindcss/forms"),
    // Tipografi (örnek: blog içerikleri)
    require("@tailwindcss/typography"),
  ],
};