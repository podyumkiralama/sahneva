// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
// DİKKAT: Dosya adı büyük/küçük harf uyumlu olmalı
import ReviewBanner from "../../components/ReviewBanner";

// ⚠️ Server Component'ta `ssr:false` kullanmayız. Sadece dinamik import + Suspense kullan.
const ServicesTabsLazy = dynamic(() => import("../../components/ServicesTabs")); // "use client" olmalı
const ProjectsGalleryLazy = dynamic(() => import("../../components/ProjectsGallery")); // "use client" olmalı

export const revalidate = 3600; // 1 saat

function SectionSkeleton() {
  return (
    <div className="container py-14 md:py-16">
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
    </div>
  );
}

export default function HomePage() {
  return (
    // W3C: yalnızca 1 adet <main> olsun; bunu layout.js içinde tutuyoruz → burada <div> kullanıyoruz
    <div className="overflow-x-hidden">
      {/* HERO */}
      <div
        className="full-bleed relative overflow-x-hidden"
        style={{ backgroundColor: "#0b0f1a" }}
      >
        <Image
          src="/img/hero-bg.webp"
          alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik sahnesi"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/img/hero-bg-low.webp" // mevcut değilse kaldır veya dosyayı ekle
          className="object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 hero-overlay pointer-events-none" />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık
            sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.
          </p>

          {/* CTA'lar */}
          <HeroCtasClient />

          {/* Rozetler */}
          <ul
            className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3"
            aria-label="Hizmet Özellikleri"
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
                <span aria-hidden>{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Alt bilgi */}
          <div className="mt-10 text-center">
            <div className="text-5xl mb-3" aria-hidden>
              🎧
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Organizasyonunuz için Ücretsiz Danışmanlık
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran
              çözümlerini ücretsiz danışmanlıkla birlikte planlayalım.
            </p>
          </div>
        </div>
      </div>

      {/* Google yorum banner’ı (sticky) */}
      <ReviewBanner />

      {/* Kat altı içerik */}
      <section className="section-lazy">
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesTabsLazy />
        </Suspense>
      </section>

      <section className="section-lazy">
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsGalleryLazy />
        </Suspense>
      </section>

      <div className="section-lazy">
        <CorporateEvents />
      </div>

      {/* SEO METİN BLOĞU */}
      <section className="section-lazy">
        <div className="container py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Etkinlik Prodüksiyon & Organizasyon – Türkiye Geneli Teknik Çözüm
            Ortağınız
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="font-semibold text-lg mb-2">Uçtan Uca Teknik Hizmet</h3>
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
                alanlarında uçtan uca çözümler sunar. Proje keşfi, çizim,
                kurulum ve canlı yönetim aşamalarının tamamını profesyonel
                ekibimiz yürütür. Kurumsal lansman, bayi toplantısı, konser,
                festival ve <em>kurumsal organizasyon</em> türlerinin tümünde
                güvenli ve ölçeklenebilir altyapı kurarız.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-neutral-700 list-disc pl-5">
                <li>IP65 dış mekân LED paneller, yüksek parlaklık ve esnek ölçüler</li>
                <li>Line-array ses sistemleri, dijital mikser ve kablosuz mikrofonlar</li>
                <li>Modüler <strong>podyum</strong> ve sahne platformları, kaymaz kaplama</li>
                <li>DMX kontrollü ışık, efekt ve ambiyans aydınlatma</li>
              </ul>
            </article>

            <article className="card">
              <h3 className="font-semibold text-lg mb-2">Hızlı Kurulum, Şeffaf Fiyat</h3>
              <p className="text-neutral-700">
                İstanbul merkezli ekibimizle Türkiye’nin her ilinde çalışıyoruz.
                Aynı gün <strong>hızlı kurulum</strong>, yedekli ekipman ve 7/24
                teknik destek ile riskleri minimize ederiz. İhtiyacınıza göre en
                uygun çözümü önerip gereksiz maliyetleri önler, talep halinde{" "}
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
                Teklif almak için hemen arayın ya da{" "}
                <a
                  href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
                  className="underline hover:no-underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp’tan yazın
                </a>
                ; birkaç soru ile mekân, kişi sayısı ve içerik tipine göre doğru
                <strong> etkinlik prodüksiyon</strong> planını birlikte oluşturalım.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PREMIUM BLOK */}
      <section className="section-lazy" aria-labelledby="premium-title">
        <h2 id="premium-title" className="container text-2xl md:text-3xl font-bold mb-4">
          Neden Yüksek Ölçekli Kurulumlarda <span className="whitespace-nowrap">Sahneva</span> Tercih Ediliyor?
        </h2>

        <div className="container pb-10 md:pb-12">
          <div className="prose max-w-none text-neutral-700">
            <p>
              Büyük ölçekli ve protokol seviyesindeki etkinliklerde yalnızca güçlü ekipman değil,
              <strong> kusursuz operasyon</strong> ve <strong>güvenli rigging</strong> esastır. Sahneva;{" "}
              <a href="/sahne-kiralama" className="underline font-medium">sahne ve podyum</a> tasarımından{" "}
              <a href="/led-ekran-kiralama" className="underline font-medium">P2–P6 LED ekran</a> konfigürasyonlarına,{" "}
              <a href="/ses-isik-sistemleri" className="underline font-medium">ses-ışık</a> optimizasyonundan
              truss ve <em>scaff</em> üst yapılara kadar tüm bileşenleri tek bir teknik omurga altında birleştirir.
              Sonuç; net görüntü, dengeli akustik ve her koşulda güven veren bir sahne mimarisidir.
            </p>

            <p className="mt-4">
              Zaman baskısının yüksek olduğu projelerde <strong>planlama, lojistik ve canlı yayın zinciri</strong> aynı anda
              yönetilir. İstanbul merkezli operasyon ekibimiz, Türkiye genelinde eş zamanlı kurulumları kısa sürede
              tamamlayacak kapasitededir. Her proje; alan keşfi, yük hesabı, taşıyıcı sistem yerleşimi ve kapsamlı
              testlerle teslim edilir. Standart hedefimiz basittir: <em>açılış anında sahne kusursuz çalışır.</em>
            </p>

            <h3 className="mt-6 text-lg md:text-xl font-semibold">
              Sahneva ile Çalışmanın Güçlü Yanları
            </h3>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>
                Yüksek parlaklık ve geniş görüş açısı için optimize <strong>LED ekran</strong> konumlandırması
                (P2–P6 seçenekleri)
              </li>
              <li>
                <strong>Truss</strong> ve <strong>scaff</strong> üst yapılarla güvenli rigging; zorlu alanlara uygun
                modüler çözümler
              </li>
              <li>
                Alan akustiğine göre ölçeklenen <strong>ses-ışık</strong> tasarımı ve yedekli yayın mimarisi
              </li>
              <li>
                <strong>Hızlı kurulum</strong>, risk yönetimi ve etkinlik boyunca 7/24 teknik destek
              </li>
              <li>
                Şeffaf teklif yapısı; gereksiz maliyeti önleyen planlama ve <strong>kurumsal raporlama</strong>
              </li>
            </ul>

            <p className="mt-4">
              <a href="/cadir-kiralama" className="underline font-medium">Çadır kurulumu</a>, zemin hazırlığı ve dekoratif
              uygulamalar dâhil; etkinliğinizin tüm teknik ihtiyaçlarını tek çatı altında yönetiriz. İster kurumsal lansman,
              ister üst düzey protokol daveti olsun, Sahneva her detayda <strong>premiyum bir deneyim</strong> üretir.
            </p>
          </div>
        </div>
      </section>

      <div className="section-lazy">
        <Faq />
      </div>
    </div>
  );
}
