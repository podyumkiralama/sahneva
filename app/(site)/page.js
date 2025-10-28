// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";
import { FAQ_ITEMS } from "../../lib/faqData";

// Client bileşenlerini sadece dinamik yükle – ssr:false KULLANMIYORUZ
const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { suspense: true }
);
const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { suspense: true }
);

export const revalidate = 3600; // 1 saat

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
}).replace(/</g, "\\u003c");

function ServicesSectionFallback() {
  return (
    <section
      className="container py-10 md:py-14"
      aria-labelledby="hizmetler-heading"
      aria-busy="true"
    >
      <h2
        id="hizmetler-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-8"
      >
        Hizmetlerimiz
      </h2>
      <div role="status" aria-live="polite" className="sr-only">
        Hizmet içerikleri yükleniyor...
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="h-48 w-full rounded-xl bg-neutral-100 animate-pulse" />
            <div className="mt-5 h-4 w-3/4 rounded bg-neutral-100 animate-pulse" />
            <div className="mt-3 space-y-2">
              <div className="h-3 w-full rounded bg-neutral-100 animate-pulse" />
              <div className="h-3 w-5/6 rounded bg-neutral-100 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSectionFallback() {
  return (
    <section
      className="container py-14 md:py-16"
      aria-labelledby="projeler-heading"
      aria-busy="true"
    >
      <h2
        id="projeler-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-8"
      >
        Yaptıklarımız
      </h2>
      <div role="status" aria-live="polite" className="sr-only">
        Proje galerisi yükleniyor...
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="h-56 w-full rounded-2xl bg-neutral-100 animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-neutral-100 animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-neutral-100 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="full-bleed relative overflow-x-hidden"
        aria-labelledby="hero-title"
        aria-describedby="hero-desc"
        role="region"
      >
        <Image
          src="/img/hero-bg.webp"
          alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik alanı"
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRp4AAABXRUJQVlA4IJIAAABQBgCdASowABsAPo08lUg1pqenNVgMAKARiWRg60YZQI3+QgDv2INC0Nc6BIo+izsJB6swIhg7Nm8IkAD+/EbKxBB4dhHx41NSA7OjjbjWPuehTPNLdCqzAPMQkP86SbpYsoYSifpIhEZMQYF7EcKdLTZ9RYL8a28zC/W80sLJERgj2Jqa+NCFqVAnuBdSKgAAAA=="
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[#0b0f1a]/85"
          aria-hidden="true"
        />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1
            id="hero-title"
            className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>
          <p id="hero-desc" className="text-white text-lg md:text-xl mb-8">
            Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık
            sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.
          </p>

          {/* CTA'lar */}
          <HeroCtasClient />

          {/* Kısa özellik rozetleri */}
          <ul
            className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3"
            aria-label="Hizmet özellikleri"
          >
            {[
              ["⭐", "4.9 Müşteri Memnuniyeti"],
              ["🔧", "Aynı Gün Kurulum"],
              ["👷", "Profesyonel Teknik Ekip"],
            ].map(([icon, label], i) => (
              <li
                key={i}
                className="badge whitespace-nowrap overflow-hidden text-ellipsis"
              >
                <span aria-hidden="true">{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Alt bilgi */}
          <div className="mt-10 text-center">
            <div className="text-5xl mb-3" aria-hidden="true">
              🎧
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Organizasyonunuz için Ücretsiz Danışmanlık
            </h2>
            <p className="text-white max-w-3xl mx-auto">
              Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran
              çözümlerini ücretsiz danışmanlıkla planlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* Ana içerik başlangıcı */}
      <div id="ana-icerik">
        {/* Google yorum banner’ı */}
        <ReviewBanner />

        {/* Hizmetler sekmeleri */}
        <div className="section-lazy">
          <Suspense fallback={<ServicesSectionFallback />}>
            <ServicesTabsLazy headingId="hizmetler-heading" />
          </Suspense>
        </div>

        {/* Projeler galerisi */}
        <div className="section-lazy">
          <Suspense fallback={<ProjectsSectionFallback />}>
            <ProjectsGalleryLazy headingId="projeler-heading" />
          </Suspense>
        </div>

        {/* Kurumsal etkinlikler */}
        <div className="section-lazy">
          <CorporateEvents />
        </div>

        {/* Bizi Neden Tercih Etmelisiniz */}
        <section
          className="container py-16"
          aria-labelledby="neden-tercih-heading"
        >
          <h2
            id="neden-tercih-heading"
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            Bizi Neden Tercih Etmelisiniz?
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "⭐",
                "Yüksek Müşteri Memnuniyeti",
                "Her organizasyonda ortalama %100’e yakın müşteri memnuniyeti sağlıyoruz.",
              ],
              [
                "⚡",
                "Hızlı ve Profesyonel Kurulum",
                "Aynı gün içinde sahne, podyum ve ekipmanlarınızı anahtar teslim kuruyoruz.",
              ],
              [
                "🎤",
                "Güncel ve Güçlü Ekipmanlar",
                "LED ekran, ses-ışık sistemleri, çadır ve podyum çözümlerinde en yeni teknolojiler.",
              ],
              [
                "👷",
                "Deneyimli Teknik Ekip",
                "Güvenli, planlı ve sorunsuz kurulum için profesyonel ekibimiz her zaman yanınızda.",
              ],
              [
                "💰",
                "Uygun Fiyat Garantisi",
                "Türkiye genelinde rekabetçi fiyatlarla kaliteli hizmet sunuyoruz.",
              ],
              [
                "🚚",
                "Türkiye Geneli Hizmet",
                "Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz.",
              ],
            ].map(([icon, title, desc], i) => (
              <div
                key={i}
                className="rounded-xl border bg-white shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="text-4xl mb-4" aria-hidden="true">
                  {icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-neutral-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO METİN BLOĞU */}
        <section className="section-lazy" aria-labelledby="seo-title">
          <div className="container py-14 md:py-16">
            <h2
              id="seo-title"
              className="text-2xl md:text-3xl font-bold text-center mb-8"
            >
              Etkinlik Prodüksiyon &amp; Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="card" aria-labelledby="u2u-title">
                <h3 id="u2u-title" className="font-semibold text-lg mb-2">
                  Uçtan Uca Teknik Hizmet
                </h3>
                <p className="text-neutral-700">
                  Sahneva{" "}
                  <a
                    href="/sahne-kiralama"
                    className="underline hover:no-underline font-medium"
                  >
                    sahne sistemleri kiralama
                  </a>
                  ,{" "}
                  <a
                    href="/podyum-kiralama"
                    className="underline hover:no-underline font-medium"
                  >
                    podyum kurulumu
                  </a>
                  ,{" "}
                  <a
                    href="/led-ekran-kiralama"
                    className="underline hover:no-underline font-medium"
                  >
                    LED ekran kiralama
                  </a>{" "}
                  ve{" "}
                  <a
                    href="/ses-isik-sistemleri"
                    className="underline hover:no-underline font-medium"
                  >
                    ses ışık sistemi kurulumu
                  </a>{" "}
                  alanlarında uçtan uca çözümler sunar. Keşif, çizim, kurulum ve
                  canlı yönetim aşamalarının tamamını profesyonel ekibimiz
                  yürütür.
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-5">
                  <li>IP65 dış mekân LED paneller, yüksek parlaklık</li>
                  <li>Line-array ses sistemleri, dijital mikserler</li>
                  <li>Modüler podyum ve sahne platformları</li>
                  <li>DMX kontrollü ışık ve ambiyans aydınlatma</li>
                </ul>
              </article>

              <article className="card" aria-labelledby="hizli-title">
                <h3 id="hizli-title" className="font-semibold text-lg mb-2">
                  Hızlı Kurulum, Şeffaf Fiyat
                </h3>
                <p className="text-neutral-700">
                  İstanbul merkezli ekibimizle Türkiye’nin her ilinde çalışıyoruz.
                  Aynı gün hızlı kurulum, yedekli ekipman ve 7/24 teknik destek
                  ile riskleri minimize ederiz. Talep halinde{" "}
                  <a
                    href="/led-ekran-kiralama"
                    className="underline hover:no-underline font-medium"
                  >
                    LED ekran fiyatları
                  </a>{" "}
                  ve alternatif paketleri karşılaştırmalı olarak paylaşırız. Tüm
                  işlerimiz sözleşmeli ve e-faturalıdır.
                </p>
                <p className="text-neutral-700 mt-3">
                  Teklif almak için arayın ya da{" "}
                  <a
                    href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
                    className="underline hover:no-underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp’tan yazın (yeni sekmede açılır)"
                  >
                    WhatsApp’tan yazın
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PREMIUM BLOK */}
        <section className="section-lazy" aria-labelledby="premium-title">
          <h2
            id="premium-title"
            className="container text-2xl md:text-3xl font-bold mb-4"
          >
            Neden Yüksek Ölçekli Kurulumlarda <span className="whitespace-nowrap">Sahneva</span> Tercih Ediliyor?
          </h2>

          <div className="container pb-10 md:pb-12">
            <div className="prose max-w-none text-neutral-700">
              <p>
                Büyük ölçekli ve protokol seviyesindeki etkinliklerde yalnızca
                güçlü ekipman değil, <strong>kusursuz operasyon</strong> ve{" "}
                <strong>güvenli rigging</strong> esastır. Sahneva;{" "}
                <a href="/sahne-kiralama" className="underline font-medium">
                  sahne ve podyum
                </a>{" "}
                tasarımından{" "}
                <a href="/led-ekran-kiralama" className="underline font-medium">
                  P2–P6 LED ekran
                </a>{" "}
                konfigürasyonlarına,{" "}
                <a href="/ses-isik-sistemleri" className="underline font-medium">
                  ses-ışık
                </a>{" "}
                optimizasyonundan truss ve <em>scaff</em> üst yapılara kadar tüm
                bileşenleri tek bir teknik omurga altında birleştirir.
              </p>

              <h3 className="mt-6 text-lg md:text-xl font-semibold">
                Sahneva ile Çalışmanın Güçlü Yanları
              </h3>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                <li>
                  Yüksek parlaklık için optimize <strong>LED ekran</strong>{" "}
                  konumlandırması (P2–P6)
                </li>
                <li>
                  <strong>Truss</strong> ve <strong>scaff</strong> üst yapılarla
                  güvenli rigging
                </li>
                <li>Alan akustiğine göre ölçeklenen ses-ışık tasarımı</li>
                <li>Hızlı kurulum, risk yönetimi ve 7/24 teknik destek</li>
                <li>Şeffaf teklif ve kurumsal raporlama</li>
              </ul>

              <p className="mt-4">
                <a href="/cadir-kiralama" className="underline font-medium">
                  Çadır kurulumu
                </a>
                , zemin hazırlığı ve dekoratif uygulamalar dâhil; etkinliğinizin
                tüm teknik ihtiyaçlarını tek çatı altında yönetiriz.
              </p>
            </div>
          </div>
        </section>

        {/* SSS */}
        <div className="section-lazy">
          <Faq />
        </div>

        <script
          id="home-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLd }}
        />
      </div>
    </div>
  );
}
