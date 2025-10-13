// app/layout.js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  preload: false,
  display: "optional",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata = {
  metadataBase: new URL("https://sahneva.com"),
  title: { default: "Sahneva – Etkinlik Prodüksiyon & Organizasyon", template: "%s | Sahneva" },
  description: "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli.",
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
  const GA_ID = "G-J5YK10YLLC";

  return (
    <html lang="tr">
      <head>
        {/* Kritik birkaç yardımcı kural */}
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

        {/* Sadece GTM için preconnect (GA domainine gerek yok) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />

        {/* GA4 – kritik yol dışında */}
        <Script
          id="ga4-src"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="ga4-init"
          strategy="lazyOnload"
        >{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: location.pathname + location.search });

          (function(history){
            const send = () => { if (!window.gtag) return; gtag('config','${GA_ID}',{page_path:location.pathname+location.search}); };
            const wrap = t => { const o=history[t]; return function(){ const r=o.apply(this,arguments); try{send()}catch(e){} return r; } };
            history.pushState = wrap('pushState');
            history.replaceState = wrap('replaceState');
            addEventListener('popstate', send);
          })(window.history);
        `}</Script>

        {/* Trusted Types */}
        <Script id="tt-policy" strategy="beforeInteractive">{`
          (function () {
            if (!window.trustedTypes) return;
            try {
              if (!trustedTypes.getPolicy('nextjs#bundler')) {
                trustedTypes.createPolicy('nextjs#bundler', {
                  createHTML: s => s, createScript: s => s, createScriptURL: s => s
                });
              }
              if (!trustedTypes.getPolicy('default')) {
                trustedTypes.createPolicy('default', {
                  createHTML: s => s, createScript: s => s, createScriptURL: s => s
                });
              }
            } catch (e) {}
          })();
        `}</Script>
      </head>

      <body className={`${inter.className} scroll-smooth`}>
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />

        {/* JSON-LD: Organization (children ile, no dangerouslySetInnerHTML) */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
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
          })}
        </Script>

        {/* JSON-LD: LocalBusiness */}
        <Script id="ld-local" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
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
          })}
        </Script>

        {/* JSON-LD: FAQPage */}
        <Script id="ld-faq" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Podyum kurulumu ne kadar sürer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Podyum kurulumu, ölçülere ve zemin koşullarına göre değişmekle birlikte genellikle 1–3 saat arasında tamamlanır. Teknik ekibimiz güvenli ve hızlı montaj yapar.",
                },
              },
              {
                "@type": "Question",
                name: "LED ekranlar dış mekanda kullanılabilir mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Evet, IP65 korumalı LED ekranlarımız yağmur ve güneş ışığına karşı dayanıklıdır. Açık hava konserleri, mitingler ve festivaller için güvenle kullanılabilir.",
                },
              },
              {
                "@type": "Question",
                name: "Ses ve ışık sistemlerinde teknik ekip sağlıyor musunuz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Evet, profesyonel ses ve ışık sistemleri kiralama hizmetimizde her zaman teknik ekip desteği sunuyoruz. Kurulum, canlı yönetim ve etkinlik boyunca anlık destek dahildir.",
                },
              },
              {
                "@type": "Question",
                name: "Çadır kiralamada kurulum ve söküm hizmeti dahil mi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Evet, çadır kiralama hizmetimizde kurulum ve söküm hizmeti fiyata dahildir. Ayrıca zemin kaplama, güvenlik önlemleri ve yan aksesuarlar da talebe göre eklenebilir.",
                },
              },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
