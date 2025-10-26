// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CorporateEvents from "../../components/CorporateEvents";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";
import Script from "next/script";

// Ağır client bileşenleri ("use client" bu dosyaların içinde olmalı)
const ServicesTabsLazy = dynamic(() => import("../../components/ServicesTabs"));
const ProjectsGalleryLazy = dynamic(() => import("../../components/ProjectsGallery"));

// ISR (Server Component'ta geçerli)
export const revalidate = 3600;

// SSS verisi (görünür içerik + JSON-LD aynı)
const FAQ_ITEMS = [
  { q: "Türkiye’nin her yerine hizmet veriyor musunuz?", a: "Evet. İstanbul merkezli ekibimizle Türkiye genelinde kurulum ve teknik operasyon hizmeti veriyoruz." },
  { q: "Aynı gün kurulum yapabilir misiniz?", a: "Stok ve ekip uygunluğuna bağlı olarak aynı gün içinde keşif ve kurulum yapabiliyoruz." },
  { q: "LED ekran piksel aralığı ve boyutu nasıl belirlenir?", a: "Mekan, izleme mesafesi ve ışık koşullarına göre P2–P6 aralığında, iç/dış mekân tiplerinde öneri sunuyoruz." },
  { q: "Sahne ve podyum ölçüleri neler?", a: "Standart paneller 1×2 m, 1×1 m ve 2×1 m’dir. Modüler yapıda ihtiyaca göre ölçeklenir; kaymaz kaplama kullanırız." },
  { q: "Fiyatlandırma nasıl yapılır?", a: "Proje kapsamına (ölçüler, ekipman, kurulum süresi, lojistik) göre kalem kalem şeffaf fiyatlandırma yapıyoruz." },
];

function SectionSkeleton({ label = "İçerik yükleniyor..." }) {
  return (
    <div className="container py-14 md:py-16" role="status" aria-live="polite">
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
      <p className="sr-only">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
      >
        Ana içeriğe atla
      </a>

      {/* FAQ JSON-LD (Rich Result) */}
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ITEMS.map(({ q, a }) => ({
              "@type": "Question",
              "name": q,
              "acceptedAnswer": { "@type": "Answer", "text": a },
            })),
          }),
        }}
      />

      <main id="main" className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative w-full overflow-clip" style={{ backgroundColor: "#0b0f1a" }}>
          <Image
            src="/img/hero-bg.webp"
            alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik sahnesi"
            fill
            priority
            fetchPriority="high"       // LCP önceliği
            sizes="100vw"
            placeholder="blur"
            blurDataURL="/img/hero-bg-low.webp"
            quality={58}
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay pointer-events-none" />
          <div className="relative z-10 container py-20 md:py-32 text-center">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
            </h1>
            <p className="text-white/95 text-lg md:text-xl mb-8">
              Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık
              sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.
            </p>
            <HeroCtasClient />
            <ul className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ["⭐", "4.9 Müşteri Memnuniyeti"],
                ["🔧", "Aynı Gün Kurulum"],
                ["👷", "Profesyonel Teknik Ekip"],
              ].map(([icon, label], i) => (
                <li key={i} className="badge whitespace-nowrap overflow-hidden text-ellipsis">
                  <span aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ReviewBanner */}
        <Suspense fallback={<SectionSkeleton label="Yorumlar yükleniyor" />}>
          <ReviewBanner />
        </Suspense>

        {/* Hizmetler / Projeler */}
        <section className="section-lazy">
          <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
            <ServicesTabsLazy />
          </Suspense>
        </section>

        <section className="section-lazy">
          <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
            <ProjectsGalleryLazy />
          </Suspense>
        </section>

        {/* Kurumsal */}
        <div className="section-lazy">
          <CorporateEvents />
        </div>

        {/* ⭐ BİZİ NEDEN TERCİH ETMELİSİNİZ? — Kurumsalın HEMEN ALTINDA */}
        <section className="container py-16" aria-labelledby="neden-title">
          <h2 id="neden-title" className="text-2xl md:text-3xl font-bold text-center mb-10">
            Bizi Neden Tercih Etmelisiniz?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["⭐", "Yüksek Müşteri Memnuniyeti", "Her organizasyonda ortalama %100’e yakın müşteri memnuniyeti sağlıyoruz."],
              ["⚡", "Hızlı ve Profesyonel Kurulum", "Aynı gün içinde sahne, podyum ve ekipmanlarınızı anahtar teslim kuruyoruz."],
              ["🎤", "Güncel ve Güçlü Ekipmanlar", "LED ekran, ses-ışık sistemleri, çadır ve podyum çözümlerinde en yeni teknolojiler."],
              ["👷", "Deneyimli Teknik Ekip", "Güvenli, planlı ve sorunsuz kurulum için profesyonel ekibimiz her zaman yanınızda."],
              ["💰", "Uygun Fiyat Garantisi", "Türkiye genelinde rekabetçi fiyatlarla kaliteli hizmet sunuyoruz."],
              ["🚚", "Türkiye Geneli Hizmet", "Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz."],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="card">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
                <p className="text-sm text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO METİN — Neden biz’in ALTINDA, SSS’nin ÜSTÜNDE */}
        <section className="section-lazy" aria-labelledby="seo-bilgi-baslik">
          <div className="container py-14 md:py-16">
            <h2 id="seo-bilgi-baslik" className="text-2xl md:text-3xl font-bold text-center mb-8">
              Etkinlik Prodüksiyon & Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="card">
                <h3 className="font-semibold text-lg mb-2">Uçtan Uca Teknik Hizmet</h3>
                <p className="text-neutral-700">
                  Sahneva{" "}
                  <a href="/sahne-kiralama" className="underline hover:no-underline font-medium">sahne sistemleri kiralama</a>,{" "}
                  <a href="/podyum-kiralama" className="underline hover:no-underline font-medium">podyum kurulumu</a>,{" "}
                  <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">LED ekran kiralama</a> ve{" "}
                  <a href="/ses-isik-sistemleri" className="underline hover:no-underline font-medium">ses ışık sistemi kurulumu</a>{" "}
                  alanlarında uçtan uca çözümler sunar. Proje keşfi, çizim, kurulum ve canlı yönetim aşamalarını profesyonel ekibimiz yürütür.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-5">
                  <li>IP65 dış mekân LED paneller; yüksek parlaklık, esnek ölçüler</li>
                  <li>Line-array ses sistemleri, dijital mikser ve kablosuz mikrofonlar</li>
                  <li>Modüler podyum ve sahne platformları, kaymaz kaplama</li>
                  <li>DMX kontrollü ışık, efekt ve ambiyans aydınlatma</li>
                </ul>
              </article>

              <article className="card">
                <h3 className="font-semibold text-lg mb-2">Hızlı Kurulum, Şeffaf Fiyat</h3>
                <p className="text-neutral-700">
                  İstanbul merkezli ekibimizle Türkiye’nin her ilinde çalışıyoruz.
                  Aynı gün <strong>hızlı kurulum</strong>, yedekli ekipman ve 7/24 teknik destek ile riskleri minimize ederiz.
                </p>
                <p className="text-neutral-700 mt-3">
                  Teklif almak için{" "}
                  <a href="tel:+905453048671" className="underline hover:no-underline font-medium">hemen arayın</a> ya da{" "}
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
                    className="underline hover:no-underline font-medium"
                    target="_blank" rel="noopener noreferrer"
                  >
                    WhatsApp’tan yazın
                  </a>.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SSS — SEO metninin HEMEN ALTINDA (JSON-LD ile eşleşir) */}
        <section className="container py-12 md:py-16" aria-labelledby="sss-title">
          <h2 id="sss-title" className="text-2xl md:text-3xl font-bold text-center mb-8">
            Sık Sorulan Sorular
          </h2>
          <div className="mx-auto max-w-3xl divide-y divide-neutral-200">
            {FAQ_ITEMS.map(({ q, a }, idx) => (
              <details key={idx} className="group py-4">
                <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                  <span>{q}</span>
                  <span aria-hidden="true" className="transition group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-neutral-700">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* SIK KULLANILANLAR — en sonda */}
        <section className="container pb-8" aria-labelledby="popular-title">
          <h2 id="popular-title" className="text-xl md:text-2xl font-semibold mb-4">
            Sık Kullanılanlar
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Podyum Kiralama", "/podyum-kiralama"],
              ["LED Ekran Kiralama", "/led-ekran-kiralama"],
              ["Ses & Işık Sistemleri", "/ses-isik-sistemleri"],
              ["Sahne Kiralama", "/sahne-kiralama"],
              ["Çadır Kiralama", "/cadir-kiralama"],
              ["İletişim", "/iletisim"],
            ].map(([label, href], i) => (
              <li key={i}><a className="link" href={href}>{label}</a></li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
