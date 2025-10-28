// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";

const SITE_URL = "https://www.sahneva.com";
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

const CRITICAL_CSS = [
  ".pt-16{padding-top:4rem}",
  "@media (min-width:768px){.md\\:pt-20{padding-top:5rem}}",
  ".full-bleed{position:relative;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);inline-size:100svw;width:100vw;min-height:60vh;overflow-x:clip}",
  "@media (min-width:768px){.full-bleed{min-height:70vh}}",
  ".object-cover{object-fit:cover}",
  ".container{max-width:1280px;margin-inline:auto;padding-inline:1rem}",
].join("");

const LD_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: "Sahneva",
  url: SITE_URL,
  image: `${SITE_URL}/img/og.jpg`,
  telephone: "+90 545 304 8671",
  priceRange: "₺₺",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/img/logo.png`,
    width: 512,
    height: 512,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Anadolu Cd. 61/A, Hamidiye",
    addressLocality: "Kağıthane",
    addressRegion: "İstanbul",
    postalCode: "34400",
    addressCountry: "TR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 41.0961692, longitude: 28.9792127 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/sahnevaorganizasyon",
    "https://www.youtube.com/@sahneva",
    "https://g.page/r/CZhkMzkNOdgnEBI",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+90 545 304 8671",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
  ],
};

const LD_LOCAL_BUSINESS_JSON = JSON.stringify(LD_LOCAL_BUSINESS);

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

// Font: preload + swap (FOIT yok, render-blocking minimum)
// Kullandığın ağırlıkları ekle; gereksiz ağırlık ekleme
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  preload: true,     // ✅ Preload aktif
  display: "optional", // ✅ LCP bloklanmadan render et
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://www.sahneva.com"),
  title: {
    default: "Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva",
    template: "%s | Sahneva",
  },
  description:
    "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama. Hızlı kurulum, profesyonel teknik ekip, uygun fiyat. Hemen teklif alın!",
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://www.sahneva.com" },
  openGraph: {
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    url: "https://www.sahneva.com",
    siteName: "Sahneva",
    images: ["/img/og.jpg"],
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    images: ["/img/og.jpg"],
    creator: "@sahneva",
  },
  verification: { google: "H9p1RO-W1U3JDTjp0mM32blFkYABaTHNFnxVKKFfo08" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        {/* Minik kritik CSS */}
        <style id="critical-css">{CRITICAL_CSS}</style>
      </head>
      <body className={`${inter.className} scroll-smooth`}>
        {/* Skip Link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-white focus:shadow"
        >
          İçeriğe atla
        </a>

        <Navbar />
        <main id="main" role="main" className="pt-16 md:pt-20 mb-24 lg:mb-0">
          {children}
        </main>
        <UtilityBar />
        <Footer />

        {/* JSON-LD: Tekil LocalBusiness */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: LD_LOCAL_BUSINESS_JSON }}
        />

      </body>
    </html>
  );
}
