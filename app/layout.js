// app/layout.jsx
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UtilityBar from "../components/UtilityBar";
import { Inter } from "next/font/google";
import Script from "next/script";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6d28d9",
};

const inter = Inter({
  subsets: ["latin"],
  preload: false,        // render-blocking yok
  display: "optional",   // FOIT yok, sistem fontu ile başla
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://sahneva.com"),
  title: {
    default: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    template: "%s | Sahneva",
  },
  description:
    "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://sahneva.com" },
  openGraph: {
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
    url: "https://sahneva.com",
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
        {/* Minik kritik CSS (render-blocking olmadan) */}
        <style id="critical-css">{`
          .pt-16{padding-top:4rem}
          @media (min-width:768px){.md\\:pt-20{padding-top:5rem}}
          .full-bleed{position:relative;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);inline-size:100svw;width:100vw;min-height:60vh;overflow-x:clip}
          @media (min-width:768px){.full-bleed{min-height:70vh}}
          .object-cover{object-fit:cover}
          .container{max-width:1280px;margin-inline:auto;padding-inline:1rem}
        `}</style>

        {/* Küçük UX + perf iyileştirmeleri */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>

      <body className={`${inter.className} scroll-smooth`}>
        {/* Erişilebilirlik: klavye kullanıcıları için skip link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:rounded-lg focus:bg-white focus:shadow"
        >
          İçeriğe atla
        </a>

        <Navbar />

        {/* UtilityBar mobilde alta oturduğu için sayfa içeriğine alt boşluk veriyoruz */}
        <main id="main" role="main" className="pt-16 md:pt-20 mb-24 lg:mb-0">
          {children}
        </main>

        <UtilityBar />
        <Footer />

        {/* JSON-LD: Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sahneva",
              url: "https://sahneva.com",
              logo: "https://sahneva.com/img/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+90 545 304 8671",
                  contactType: "customer service",
                  areaServed: "TR",
                  availableLanguage: ["Turkish"],
                },
              ],
              sameAs: [
                "https://www.instagram.com/sahneva",
                "https://www.youtube.com/@sahneva",
              ],
            }),
          }}
        />

        {/* JSON-LD: LocalBusiness */}
        <Script
          id="ld-local"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sahneva",
              image: "https://sahneva.com/img/logo.png",
              url: "https://sahneva.com",
              telephone: "+90 545 304 8671",
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-19:00",
            }),
          }}
        />

        {/* JSON-LD: FAQPage */}
        <Script
          id="ld-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Podyum kurulumu ne kadar sürer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Podyum kurulumu, ölçülere ve zemin koşullarına göre genellikle 1–3 saat sürer.",
                  },
                },
                {
                  "@type": "Question",
                  name: "LED ekranlar dış mekanda kullanılabilir mi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Evet, IP65 korumalı LED ekranlarımız açık havada güvenle kullanılabilir.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Ses ve ışık sistemlerinde teknik ekip sağlıyor musunuz?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Evet, kurulum ve etkinlik boyunca teknik ekip desteği veriyoruz.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Çadır kiralamada kurulum ve söküm dahil mi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Evet, kurulum ve söküm dahildir; zemin kaplama ve aksesuarlar opsiyoneldir.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}