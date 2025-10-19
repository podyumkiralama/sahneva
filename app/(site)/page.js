// app/(site)/page.js
import Image from "next/image";
import ServicesTabs from "../../components/ServicesTabs";
import ProjectsGallery from "../../components/ProjectsGallery";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";
import ReviewBanner from "../../components/Reviewbanner";

export const revalidate = 3600; // 1 saat

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <div className="full-bleed relative img-skeleton" style={{ backgroundColor: "#0b0f1a" }}>
        <Image
          src="/img/hero-bg.webp"
          alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik sahnesi"
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="/img/hero-bg-low.webp"
          quality={58}
          className="object-cover will-change-transform"
        />
        <div className="absolute inset-0 hero-overlay" />

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

          <ul className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["⭐", "4.9 Müşteri Memnuniyeti"],
              ["🔧", "Aynı Gün Kurulum"],
              ["👷", "Profesyonel Teknik Ekip"],
            ].map(([icon, label], i) => (
              <li key={i} className="badge">
                <span aria-hidden>{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <div className="text-5xl mb-3" aria-hidden>🎧</div>
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
        <ServicesTabs />
      </section>

      <section className="section-lazy">
        <ProjectsGallery />
      </section>

      <section className="section-lazy">
        <CorporateEvents />
      </section>

      {/* SEO METİN BLOĞU */}
      <section className="section-lazy">
        <div className="container py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Etkinlik Prodüksiyon & Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">
              <h3 className="font-semibold text-lg mb-2">Uçtan Uca Teknik Hizmet</h3>
              <p className="text-neutral-700">
                Sahneva; <a href="/sahne-kiralama" className="underline hover:no-underline font-medium">sahne sistemleri kiralama</a>,{" "}
                <a href="/podyum-kiralama" className="underline hover:no-underline font-medium">podyum kurulumu</a>,{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">LED ekran kiralama</a> ve{" "}
                <a href="/ses-isik-sistemleri" className="underline hover:no-underline font-medium">ses ışık sistemi kurulumu</a>{" "}
                alanlarında uçtan uca çözümler sunar. Proje keşfi, çizim, kurulum ve canlı
                yönetim aşamalarının tamamını profesyonel ekibimiz yürütür. Kurumsal lansman,
                bayi toplantısı, konser, festival ve <em>kurumsal organizasyon</em> türlerinin
                tümünde güvenli ve ölçeklenebilir altyapı kurarız.
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
                teknik destek ile riskleri minimize ederiz. İhtiyacınıza göre
                en uygun çözümü önerip gereksiz maliyetleri önler, talep halinde
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium"> LED ekran fiyatları</a> ve alternatif paketleri
                karşılaştırmalı olarak paylaşırız. Tüm işlerimiz sözleşmeli ve e-faturalıdır.
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

      <section className="section-lazy">
        <Faq />
      </section>
    </main>
  );
}
