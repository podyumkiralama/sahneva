// app/(site)/page.js
import Image from "next/image";
import ServicesTabs from "../../components/ServicesTabs";
import ProjectsGallery from "../../components/ProjectsGallery";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq"; // ✅ eklendi

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <div className="full-bleed relative">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva etkinlik prodüksiyon sahnesi: ses ve ışık ekipmanlarıyla kurulu sahne"
          fill priority fetchPriority="high" loading="eager" sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Etkinlik Prodüksiyon &amp; Ekipman Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri. Hızlı teslim, uygun fiyat.
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+905453048671" className="px-6 py-3 rounded-lg bg-[#6d28d9] text-white font-semibold hover:bg-[#5b21b6] transition">
              Hemen Ara
            </a>
            <a href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
               rel="noopener" className="px-6 py-3 rounded-lg bg-[#15803d] text-white font-semibold hover:bg-[#166534] transition">
              WhatsApp Teklif
            </a>
          </div>
          <ul className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["⭐","4.9 Müşteri Memnuniyeti"],
              ["🔧","Aynı Gün Kurulum"],
              ["👷","Profesyonel Teknik Ekip"],
            ].map(([icon,label],i)=>(
              <li key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur">
                <span>{icon}</span><span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <div className="text-5xl mb-3">🎧</div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">Organizasyonunuz için Ücretsiz Danışmanlık</h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran çözümlerini ücretsiz danışmanlık hizmetimizle öğrenin.
            </p>
          </div>
        </div>
      </div>

      {/* Bölümler */}
      <ServicesTabs />
      <ProjectsGallery />

      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Bizi Neden Tercih Etmelisiniz?</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["⭐","Yüksek Müşteri Memnuniyeti","Her organizasyonda ortalama %100’e yakın müşteri memnuniyeti sağlıyoruz."],
            ["⚡","Hızlı ve Profesyonel Kurulum","Aynı gün içinde sahne, podyum ve ekipmanlarınızı anahtar teslim kuruyoruz."],
            ["🎤","Güncel ve Güçlü Ekipmanlar","LED ekran, ses-ışık sistemleri, çadır ve podyum çözümlerinde en yeni teknolojiler."],
            ["👷","Deneyimli Teknik Ekip","Güvenli, planlı ve sorunsuz kurulum için profesyonel ekibimiz her zaman yanınızda."],
            ["💰","Uygun Fiyat Garantisi","Türkiye genelinde en rekabetçi fiyatlarla kaliteli hizmet sunuyoruz."],
            ["🚚","Türkiye Geneli Hizmet","İstanbul’dan Adana’ya, Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz."]
          ].map(([icon,title,desc],i)=>(
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <span className="text-3xl">{icon}</span>
              <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
              <p className="text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CorporateEvents />
      <Faq /> {/* ✅ artık var */}
    </main>
  );
}
