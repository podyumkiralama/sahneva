// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/Reviewbanner";

// Dinamik (Server Components uyumlu) – ssr:false YOK
const ServicesTabsLazy = dynamic(() => import("../../components/ServicesTabs"));
const ProjectsGalleryLazy = dynamic(() => import("../../components/ProjectsGallery"));

export const revalidate = 3600;

function SectionSkeleton() {
  return (
    <div className="container py-14 md:py-16">
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
    </div>
  );
}

export default function HomePage() {
  return (
    // <main> layout.js içindeyse burada <div> kullanın (W3: tek main)
    <div className="overflow-x-hidden">
      {/* HERO (LCP optimize + okunabilir overlay) */}
      <div className="relative overflow-x-hidden" style={{ backgroundColor: "#0b0f1a" }}>
        <Image
          src="/img/hero-bg.webp"
          alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik sahnesi"
          width={1920}
          height={960}
          priority
          fetchPriority="high"
          sizes="100vw"
          placeholder="empty"
          className="w-full h-[64vh] md:h-[72vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="relative z-10 container py-16 md:py-28 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
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
                <span aria-hidden>{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

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

      {/* Google yorum banner’ı */}
      <ReviewBanner />

      {/* Hizmet Sekmeleri */}
      <section className="section-lazy" aria-labelledby="home-services">
        <h2 id="home-services" className="sr-only">Hizmetler</h2>
        <Suspense fallback={<SectionSkeleton />}>
          <ServicesTabsLazy />
        </Suspense>
      </section>

      {/* Projeler / Galeri */}
      <section className="section-lazy" aria-labelledby="home-projects">
        <h2 id="home-projects" className="sr-only">Son Projeler ve Galeri</h2>
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsGalleryLazy />
        </Suspense>
      </section>

      {/* Kurumsal Etkinlikler */}
      <section className="section-lazy" aria-labelledby="home-corporate">
        <h2 id="home-corporate" className="sr-only">Kurumsal Etkinlik Hizmetleri</h2>
        <CorporateEvents />
      </section>

      {/* SEO METİN BLOĞU (mevcut metin korunuyor) */}
      <section className="section-lazy" aria-labelledby="home-seo-text">
        <h2 id="home-seo-text" className="sr-only">
          Etkinlik Prodüksiyon ve Organizasyon Açıklaması
        </h2>

        <div className="container py-14 md:py-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Etkinlik Prodüksiyon & Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">
              <h4 className="font-semibold text-lg mb-2">Uçtan Uca Teknik Hizmet</h4>
              <p className="text-neutral-700">
                Sahneva{" "}
                <a href="/sahne-kiralama" className="underline hover:no-underline font-medium">
                  sahne sistemleri kiralama
                </a>
                ,{" "}
                <a href="/podyum-kiralama" className="underline hover:no-underline font-medium">
                  podyum kurulumu
                </a>
                ,{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">
                  LED ekran kiralama
                </a>{" "}
                ve{" "}
                <a href="/ses-isik-sistemleri" className="underline hover:no-underline font-medium">
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
              <h4 className="font-semibold text-lg mb-2">Hızlı Kurulum, Şeffaf Fiyat</h4>
              <p className="text-neutral-700">
                İstanbul merkezli ekibimizle Türkiye’nin her ilinde çalışıyoruz.
                Aynı gün <strong>hızlı kurulum</strong>, yedekli ekipman ve 7/24
                teknik destek ile riskleri minimize ederiz. İhtiyacınıza göre en
                uygun çözümü önerip gereksiz maliyetleri önler, talep halinde{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">
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

      {/* PREMIUM – PRESTİJLİ ANLATIM BLOĞU (2. dosyadan esinlenilmiş, SEO dostu) */}
      <section className="section-lazy" aria-labelledby="home-premium">
        <h2 id="home-premium" className="container text-2xl md:text-3xl font-bold mb-4 mt-2">
          Neden Yüksek Ölçekli Kurulumlarda Sahneva Tercih Ediliyor?
        </h2>
        <div className="container pb-10 md:pb-12">
          <div className="prose max-w-none text-neutral-700">
            <p>
              Büyük markalar ve protokol düzeyi etkinlikler, sadece güçlü ekipman değil
              kusursuz bir operasyon akışı gerektirir. Sahneva;{" "}
              <a href="/sahne-kiralama" className="underline font-medium">truss</a> ve
              scaff iskelet altyapısından{" "}
              <a href="/led-ekran-kiralama" className="underline font-medium">P2-P6 LED</a> ekranlara,
              <a href="/ses-isik-sistemleri" className="underline font-medium"> ses-ışık</a> optimizasyonundan
              <a href="/podyum-kiralama" className="underline font-medium"> podyum</a> geometrisine kadar,
              tüm bileşenleri tek bir teknik omurga altında birleştirir. Bu yaklaşım; görüntü kalitesi,
              akustik denge ve güvenli rigging’i aynı anda sağlar.
            </p>
            <p>
              Zaman baskısının yüksek olduğu projelerde saha koordinasyonu ve yedekli yayın
              yapısı kritik önem taşır. Keşif, planlama ve lojistiği aynı anda yürüten ekiplerimiz,
              kısa sürede kurulum yaparken güvenlik standardından ödün vermez. Böylece, açılış anında
              “sahne hazır” demek bir hedef değil, bir standart olur.
            </p>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>Yüksek parlaklık ve geniş görüş açısı için optimize <strong>LED ekran</strong> konfigürasyonları</li>
              <li>Güvenli <strong>rigging</strong>, truss ve <strong>scaff</strong> üst yapı çözümleri</li>
              <li>Alan ve akustiğe göre ölçeklenen <strong>ses-ışık</strong> tasarımı</li>
              <li>Modüler <strong>podyum</strong> ve güvenlik unsurları (korkuluk, rampa, kaymaz kaplama)</li>
              <li>Hızlı kurulum, yedekli yayın zinciri ve <strong>7/24 teknik destek</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section-lazy" aria-labelledby="home-faq">
        <h2 id="home-faq" className="sr-only">Sık Sorulan Sorular</h2>
        <Faq />
      </section>
    </div>
  );
}
