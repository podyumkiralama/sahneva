// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroCtasClient from "../../components/HeroCtasClient";

// ReviewBanner ve ağır bileşenleri geç yükle (hydration yükü azalır)
const ReviewBanner = dynamic(() => import("../../components/ReviewBanner"), { ssr: false });
const ServicesTabsLazy = dynamic(() => import("../../components/ServicesTabs"), { ssr: false });
const ProjectsGalleryLazy = dynamic(() => import("../../components/ProjectsGallery"), { ssr: false });
const CorporateEventsLazy = dynamic(() => import("../../components/CorporateEvents"), { ssr: false });
const FaqLazy = dynamic(() => import("../../components/Faq"), { ssr: false });

// Statik üret + saatlik revalidate (hız/TTFB için)
export const dynamic = "force-static";
export const revalidate = 3600;

// Erişilebilirlik dostu iskelet (screen reader’lara bilgi veriyor)
function SectionSkeleton({ label = "İçerik yükleniyor" }) {
  return (
    <div className="container py-14 md:py-16" aria-busy="true" aria-live="polite" aria-label={label}>
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
    </div>
  );
}

export default function HomePage() {
  return (
    /**
     * Not: <main> layout.js içinde. Burada <div> kullanıyoruz ki tek main kuralı bozulmasın.
     * Yatay taşmayı engellemek için overflow-x-hidden ekli.
     */
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section
        className="full-bleed relative overflow-x-hidden"
        style={{ backgroundColor: "#0b0f1a" }}
        aria-labelledby="hero-title"
        aria-describedby="hero-desc"
        role="region"
      >
        <Image
          src="/img/hero-bg.webp"
          alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu profesyonel etkinlik alanı."
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          quality={60}
          // Eğer düşük çözünürlüklü blur görselin yoksa bu satırı kaldır:
          placeholder="blur"
          blurDataURL="/img/hero-bg-low.webp"
          className="object-cover"
        />

        {/* Kontrast için overlay. Pointer olaylarını engelle ki odak/fokus tuzak olmasın */}
        <div className="absolute inset-0 hero-overlay pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 id="hero-title" className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>

          <p id="hero-desc" className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık sistemleri ve çadır kiralama.
            Hızlı teslim, profesyonel teknik ekip.
          </p>

          {/* Birincil eylemler — bileşen client side; içinde buton/bağlantılar klavye ve SR dostu */}
          <HeroCtasClient />

          {/* Rozetler (liste semantiği korunur, SR için adlandırma eklendi) */}
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

          {/* Ek açıklama — ikon SR için gizli, metin okunur */}
          <div className="mt-10 text-center">
            <div className="text-5xl mb-3" aria-hidden="true">🎧</div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Organizasyonunuz için Ücretsiz Danışmanlık
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran çözümlerini ücretsiz danışmanlıkla birlikte planlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* Google yorum banner’ı — geç yüklensin (TTI daha iyi). SR’lara görünür. */}
      <Suspense fallback={null}>
        <ReviewBanner />
      </Suspense>

      {/* Kat altı içerik */}
      <section className="section-lazy" aria-labelledby="hizmetler-title" role="region">
        <h2 id="hizmetler-title" className="sr-only">Hizmet Sekmeleri</h2>
        <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
          <ServicesTabsLazy />
        </Suspense>
      </section>

      <section className="section-lazy" aria-labelledby="projeler-title" role="region">
        <h2 id="projeler-title" className="sr-only">Projeler Galerisi</h2>
        <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
          <ProjectsGalleryLazy />
        </Suspense>
      </section>

      <section className="section-lazy" aria-labelledby="kurumsal-title" role="region">
        <h2 id="kurumsal-title" className="sr-only">Kurumsal Etkinlikler</h2>
        <Suspense fallback={<SectionSkeleton label="Kurumsal içerik yükleniyor" />}>
          <CorporateEventsLazy />
        </Suspense>
      </section>

      {/* SEO METİN BLOĞU — başlık hiyerarşisi korunuyor */}
      <section className="section-lazy" aria-labelledby="seo-title" role="region">
        <div className="container py-14 md:py-16">
          <h2 id="seo-title" className="text-2xl md:text-3xl font-bold text-center mb-8">
            Etkinlik Prodüksiyon & Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="card" aria-labelledby="u2u-title">
              <h3 id="u2u-title" className="font-semibold text-lg mb-2">Uçtan Uca Teknik Hizmet</h3>
              <p className="text-neutral-700">
                Sahneva{" "}
                <a href="/sahne-kiralama" className="underline hover:no-underline font-medium">sahne sistemleri kiralama</a>,{" "}
                <a href="/podyum-kiralama" className="underline hover:no-underline font-medium">podyum kurulumu</a>,{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">LED ekran kiralama</a>{" "}
                ve{" "}
                <a href="/ses-isik-sistemleri" className="underline hover:no-underline font-medium">ses ışık sistemi kurulumu</a>{" "}
                alanlarında uçtan uca çözümler sunar. Proje keşfi, çizim, kurulum ve canlı yönetim aşamalarının tamamını profesyonel
                ekibimiz yürütür. Kurumsal lansman, bayi toplantısı, konser, festival ve <em>kurumsal organizasyon</em> türlerinin
                tümünde güvenli ve ölçeklenebilir altyapı kurarız.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-5">
                <li>IP65 dış mekân LED paneller, yüksek parlaklık ve esnek ölçüler</li>
                <li>Line-array ses sistemleri, dijital mikser ve kablosuz mikrofonlar</li>
                <li>Modüler <strong>podyum</strong> ve sahne platformları, kaymaz kaplama</li>
                <li>DMX kontrollü ışık, efekt ve ambiyans aydınlatma</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="hiz-title">
              <h3 id="hiz-title" className="font-semibold text-lg mb-2">Hızlı Kurulum, Şeffaf Fiyat</h3>
              <p className="text-neutral-700">
                İstanbul merkezli ekibimizle Türkiye’nin her ilinde çalışıyoruz. Aynı gün <strong>hızlı kurulum</strong>,
                yedekli ekipman ve 7/24 teknik destek ile riskleri minimize ederiz. İhtiyacınıza göre en uygun çözümü önerip
                gereksiz maliyetleri önler, talep halinde{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">LED ekran fiyatları</a> ve alternatif
                paketleri karşılaştırmalı olarak paylaşırız. Tüm işlerimiz sözleşmeli ve e-faturalıdır.
              </p>
              <p className="text-neutral-700 mt-3">
                Teklif almak için hemen arayın ya da{" "}
                <a
                  href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
                  className="underline hover:no-underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp’tan yazın
                </a>
                ; birkaç soru ile mekân, kişi sayısı ve içerik tipine göre doğru <strong>etkinlik prodüksiyon</strong> planını
                birlikte oluşturalım.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ — geç yükle + iskelet */}
      <section className="section-lazy" aria-labelledby="faq-title" role="region">
        <h2 id="faq-title" className="sr-only">Sıkça Sorulan Sorular</h2>
        <Suspense fallback={<SectionSkeleton label="SSS yükleniyor" />}>
          <FaqLazy />
        </Suspense>
      </section>
    </div>
  );
}