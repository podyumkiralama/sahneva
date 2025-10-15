// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  preload: false,     // kritik yolu kısalt
  display: "swap",    // FOUT azalt
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://sahneva.com"),
  title: { default: "Sahneva – Etkinlik Prodüksiyon & Organizasyon", template: "%s | Sahneva" },
  description: "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
  alternates: { canonical: "https://sahneva.com" },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description: "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    url: "https://sahneva.com",
    siteName: "Sahneva",
    images: ["/img/og.jpg"],
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description: "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    images: ["/img/og.jpg"],
    creator: "@sahneva",
  },
  verification: { google: "H9p1RO-W1U3JDTjp0mM32blFkYABaTHNFnxVKKFfo08" },
};

export default function RootLayout({ children }) {
  // Sadece GA (Tag Manager yok)
  const GA_SRC = "https://www.google-analytics.com/analytics.js";

  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Küçük kritik CSS – ilk boyamayı hızlandırır */}
        <style id="critical-css">{`
          .pt-16{padding-top:4rem}
          @media (min-width:768px){.md\\:pt-20{padding-top:5rem}}
          .full-bleed{position:relative;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);inline-size:100svw;width:100vw;min-height:60vh;overflow-x:clip}
          @media (min-width:768px){.full-bleed{min-height:70vh}}
          .object-cover{object-fit:cover}
          .text-white{color:#fff}
          .container{max-width:1280px;margin-inline:auto;padding-inline:1rem}
          .text-center{text-align:center}
          .font-extrabold{font-weight:800}
        `}</style>

        {/* GA (Tag Manager değil) — kritik yol dışında */}
        <Script id="ga-src" strategy="lazyOnload" src={GA_SRC} />
        <Script id="ga-init" strategy="lazyOnload">{`
          if (typeof window !== 'undefined') {
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create','UA-XXXXXX-X','auto'); // GA4 kullanmıyorsan UA id'ni gir; GA4 ise bu bloğu kaldır.
            ga('send','pageview');
          }
        `}</Script>
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        <main id="main" role="main" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}