// app/(site)/page.js
import Image from "next/image";
import ServicesTabs from "../../components/ServicesTabs";
import ProjectsGallery from "../../components/ProjectsGallery";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="full-bleed relative will-change-transform">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva etkinlik prodüksiyon sahnesi: ses ve ışık ekipmanlarıyla kurulu sahne"
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.45)_35%,rgba(0,0,0,.6))]" />
        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Etkinlik Prodüksiyon &amp; Ekipman Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri.
            Hızlı teslim, uygun fiyat.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+905453048671"
              className="px-6 py-3 rounded-lg bg-[#6d28d9] text-white font-semibold shadow-md hover:bg-[#5b21b6] hover:shadow-lg transition-colors"
            >
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
              rel="noopener"
              className="px-6 py-3 rounded-lg bg-[#15803d] text-white font-semibold shadow-md ring-1 ring-white/20 hover:bg-[#166534] hover:shadow-lg transition-colors"
            >
              WhatsApp Teklif
            </a>
          </div>
        </div>
      </section>

      {/* İçerikler */}
      <ServicesTabs />
      <ProjectsGallery />

      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Bizi Neden Tercih Etmelisiniz?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["⭐", "Yüksek Müşteri Memnuniyeti", "Her organizasyonda ortalama %100’e yakın müşteri memnuniyeti sağlıyoruz."],
            ["⚡", "Hızlı ve Profesyonel Kurulum", "Aynı gün içinde sahne, podyum ve ekipmanlarınızı anahtar teslim kuruyoruz."],
            ["🎤", "Güncel ve Güçlü Ekipmanlar", "LED ekran, ses-ışık sistemleri, çadır ve podyum çözümlerinde en yeni teknolojiler."],
            ["👷", "Deneyimli Teknik Ekip", "Güvenli, planlı ve sorunsuz kurulum için profesyonel ekibimiz her zaman yanınızda."],
            ["💰", "Uygun Fiyat Garantisi", "Türkiye genelinde en rekabetçi fiyatlarla kaliteli hizmet sunuyoruz."],
            ["🚚", "Türkiye Geneli Hizmet", "İstanbul’dan Adana’ya, Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz."],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-transform will-change-transform"
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