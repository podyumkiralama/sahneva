// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/ReviewBanner";

// Client bileşenlerini sadece dinamik yükle – ssr:false KULLANMIYORUZ
const ServicesTabsLazy = dynamic(
  () => import("../../components/ServicesTabs"),
  { loading: () => <SectionSkeleton label="Hizmetler yükleniyor" /> }
);
const ProjectsGalleryLazy = dynamic(
  () => import("../../components/ProjectsGallery"),
  { loading: () => <SectionSkeleton label="Projeler yükleniyor" /> }
);

export const revalidate = 3600; // 1 saat

function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div
      className="container py-12"
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <div className="h-10 w-40 mb-4 rounded bg-neutral-100 animate-pulse" />
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Klavye kullanıcıları için “içeriğe atla” */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-3 focus:left-3 focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
      >
        Ana içeriğe atla
      </a>

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
          blurDataURL="/img/hero-bg-low.webp"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[#0b0f1a]/70"
          aria-hidden="true"
        />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1
            id="hero-title"
            className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>
          <p id="hero-desc" className="text-white/95 text-lg md:text-xl mb-8">
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
            <p className="text-white/90 max-w-3xl mx-auto">
              Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran
              çözümlerini ücretsiz danışmanlıkla planlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* Ana içerik başlangıcı (landmark) */}
      <div id="main" role="main" />

      {/* Google yorum banner’ı */}
      <ReviewBanner />

      {/* Hizmetler sekmeleri */}
      <section className="section-lazy" aria-labelledby="hizmetler-title">
        <h2 id="hizmetler-title" className="sr-only">
          Hizmetler
        </h2>
        <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
          <ServicesTabsLazy />
        </Suspense>
      </section>

      {/* Projeler galerisi */}
      <section className="section-lazy" aria-labelledby="projeler-title">
        <h2 id="projeler-title" className="sr-only">
          Projeler
        </h2>
        <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
          <ProjectsGalleryLazy />
        </Suspense>
      </section>

      {/* Kurumsal etkinlikler */}
      <section className="section-lazy" aria-labelledby="kurumsal-title">
        <h2 id="kurumsal-title" className="sr-only">
          Kurumsal Etkinlikler
        </h2>
        <CorporateEvents />
      </section>

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
              <p className="text-sm text-neutral-600">{desc}</p>
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
            Etkinlik Prodüksiyon &amp; Organizasyon – Türkiye Geneli Teknik
            Çözüm Ortağınız
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
      <section className="section-lazy" aria-labelledby="faq-title">
        <h2 id="faq-title" className="sr-only">
          Sıkça Sorulan Sorular
        </h2>
        <Faq />
      </section>
    </div>
  );
}
