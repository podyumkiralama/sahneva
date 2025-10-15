import "../styles/global.css"; // ✅ doğru path — /styles/global.css altındaki dosya

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://sahneva.com"),
  title: {
    default: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    template: "%s | Sahneva",
  },
  description:
    "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Hızlı teslim, uygun fiyat.",
  alternates: {
    canonical: "https://sahneva.com",
  },
  openGraph: {
    title: "Sahneva – Etkinlik Prodüksiyon & Organizasyon",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Türkiye geneli kurulum.",
    url: "https://sahneva.com",
    siteName: "Sahneva",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahneva",
    description:
      "Etkinlik prodüksiyon, sahne, podyum, ses-ışık ve LED ekran çözümleri.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        {/* ✅ Google Analytics (Tag Manager değil) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J5YK10YLLC"></script>
        <script
          id="ga-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J5YK10YLLC', { anonymize_ip: true });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} scroll-smooth bg-white text-neutral-900`}>
        <Navbar />
        <main id="main" role="main" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}