// app/(site)/page.js
import Image from "next/image";
import ServicesTabs from "../../components/ServicesTabs";
import ProjectsGallery from "../../components/ProjectsGallery";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";
import HeroCtasClient from "../../components/HeroCtasClient";

// Statik üretim: CDN’den hızlı LCP
export const revalidate = 3600; // 1 saat; istersen 0 (tam statik)

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <div className="full-bleed relative img-skeleton">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik sahnesi"
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="object-cover will-change-transform"
          quality={62}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-6">
            Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık
            sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.
          </p>

          {/* 🔗 İç bağlantılar (SEO + UX) */}
          <nav aria-label="Popüler hizmet bağlantıları" className="mb-6">
            <ul className="flex flex-wrap justify-center gap-3 text-sm text-white/95 underline underline-offset-4">
              <li><a href="/podyum-kiralama">Podyum Kiralama</a></li>
              <li><a href="/led-ekran-kiralama">LED Ekran Kiralama</a></li>
              <li><a href="/ses-isik-sistemleri">Ses &amp; Işık Sistemleri</a></li>
              <li><a href="/cadir-kiralama">Çadır Kiralama</a></li>
              <li><a href="/masa-sandalye-kiralama">Masa &amp; Sandalye</a></li>
            </ul>
          </nav>

          {/* CTA'lar — client tarafı yalnızca burada */}
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

      {/* Kat altı içerik */}
      <section className="section-lazy">
        <ServicesTabs />
      </section>

      <section className="section-lazy">
        <ProjectsGallery />
      </section>

      <section className="section-lazy">
        <div className="container py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Bizi Neden Tercih Etmelisiniz?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["⭐", "Yüksek Müşteri Memnuniyeti", "Her organizasyonda ortalama %100’e yakın müşteri memnuniyeti sağlıyoruz."],
              ["⚡", "Hızlı ve Profesyonel Kurulum", "Aynı gün içinde sahne, podyum ve ekipmanlarınızı anahtar teslim kuruyoruz."],
              ["🎤", "Güncel ve Güçlü Ekipmanlar", "LED ekran, ses-ışık sistemleri, çadır ve podyum çözümlerinde en yeni teknolojiler."],
              ["👷", "Deneyimli Teknik Ekip", "Güvenli, planlı ve sorunsuz kurulum için profesyonel ekibimiz her zaman yanınızda."],
              ["💰", "Uygun Fiyat Garantisi", "Türkiye genelinde rekabetçi fiyatlarla kaliteli hizmet sunuyoruz."],
              ["🚚", "Türkiye Geneli Hizmet", "İstanbul’dan Adana’ya, Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz."],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="card">
                <span className="text-3xl" aria-hidden>{icon}</span>
                <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
                <p className="text-sm text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-lazy">
        <CorporateEvents />
      </section>

      <section className="section-lazy">
        <Faq />
      </section>
    </main>
  );
}