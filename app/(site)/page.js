// app/(site)/page.js
import Image from "next/image";
import ServicesTabs from "../../components/ServicesTabs";
import ProjectsGallery from "../../components/ProjectsGallery";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";

// 1x1 çok küçük blur (inline) – hero için
const BLUR =
  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICAAAACQAgCdASoQAAkAAUAmJQBOgB3AA==";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="full-bleed relative isolate"
        // CLS ve render-delay’i azaltmak için makul bir yükseklik
        style={{ minHeight: "64svh" }}
      >
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva etkinlik prodüksiyon sahnesi: ses ve ışık ekipmanlarıyla kurulu sahne"
          fill
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={BLUR}
          sizes="(max-width:768px) 100vw, 100vw"
          className="object-cover object-center"
        />
        {/* Daha hafif overlay (kontrast sabit, parlaklık korunur) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.55),rgba(0,0,0,.35),rgba(0,0,0,.55))]" />

        <div className="relative z-10 container py-20 md:py-28 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Etkinlik Prodüksiyon &amp; Ekipman Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum
            hizmetleri. Hızlı teslim, uygun fiyat.
          </p>

          {/* CTA’lar – kontrast ve canlılık arttı */}
          <div className="flex justify-center gap-4">
            <a
              href="tel:+905453048671"
              aria-label="Hemen ara"
              className="px-6 py-3 rounded-lg bg-violet-600 text-white font-semibold
                         shadow-md ring-1 ring-white/20
                         hover:bg-violet-700 hover:shadow-lg
                         transition will-change-transform hover:-translate-y-[1px]
                         motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Hemen Ara
            </a>

            <a
  href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
  rel="noopener"
  aria-label="WhatsApp teklif al"
  className="px-6 py-3 rounded-lg bg-[#128C7E] text-white font-semibold
             shadow-md ring-1 ring-white/20
             hover:bg-[#0f7a6e] hover:shadow-lg
             transition will-change-transform hover:-translate-y-[1px]
             motion-reduce:transition-none motion-reduce:hover:translate-y-0"
>
  WhatsApp Teklif
</a>
          </div>

          <ul className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["⭐", "4.9 Müşteri Memnuniyeti"],
              ["🔧", "Aynı Gün Kurulum"],
              ["👷", "Profesyonel Teknik Ekip"],
            ].map(([icon, label], i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-white/12 text-white border border-white/20 backdrop-blur
                           shadow-[0_1px_6px_rgba(0,0,0,.25)]"
              >
                <span aria-hidden>{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <div className="text-5xl mb-3">🎧</div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Organizasyonunuz için Ücretsiz Danışmanlık
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran
              çözümlerini ücretsiz danışmanlık hizmetimizle öğrenin.
            </p>
          </div>
        </div>
      </section>

      {/* Bölümler */}
      <ServicesTabs />
      <ProjectsGallery />

      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
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
              "Türkiye genelinde en rekabetçi fiyatlarla kaliteli hizmet sunuyoruz.",
            ],
            [
              "🚚",
              "Türkiye Geneli Hizmet",
              "İstanbul’dan Adana’ya, Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz.",
            ],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
            >
              <span className="text-3xl">{icon}</span>
              <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
              <p className="text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CorporateEvents />
      <Faq />
    </main>
  );
}