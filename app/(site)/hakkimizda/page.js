// app/hakkimizda/page.js
import Image from "next/image";

export const metadata = {
  title: "Hakkımızda | Sahneva",
  description:
    "Sahneva; sahne, podyum, LED ekran, ses–ışık sistemleri ve çadır kiralama alanında uzman bir prodüksiyon & organizasyon firmasıdır. Türkiye genelinde hizmet veriyoruz.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Sahneva",
    description:
      "Sahne, podyum, LED ekran, ses-ışık ve çadır kiralama hizmetlerinde uzman ekibimizle kurumsal etkinlik prodüksiyonu.",
    url: "/hakkimizda",
    siteName: "Sahneva",
    images: ["/img/og.jpg"],
    type: "website",
    locale: "tr_TR",
  },
};

export default function HakkimizdaPage() {
  const STATS = [
    { n: "10+ yıl", t: "Sektör tecrübesi" },
    { n: "700+", t: "Başarılı etkinlik" },
    { n: "TR genel", t: "Kurulum & lojistik" },
  ];

  const TIMELINE = [
    { y: "2012 – Başlangıç", d: "Butik sahne ve ses hizmetleri ile ilk adımlarımızı attık." },
    { y: "2016 – Genişleme", d: "LED ekran ve görüntü sistemlerini filomuza kattık." },
    { y: "2020 – Kurumsallaşma", d: "Türkiye geneli lojistik ağımızı kurduk, büyük ölçekli etkinliklerde çözüm ortağı olduk." },
    { y: "2024 – İnovasyon", d: "Yeni nesil ekipman parkı, dijital entegrasyon ve canlı yayın çözümleriyle fark yarattık." },
  ];

  const VALUES = [
    "Güvenlik ve iş sağlığına öncelik",
    "Zamanında kurulum ve şeffaf planlama",
    "Güncel, bakımlı ekipman parkı",
    "Estetik tasarım ve teknik uyum",
    "Bütçe dostu, verimli çözümler",
    "Kesintisiz teknik destek ve danışmanlık",
  ];

  return (
    <div className="pb-12 md:pb-16">
      {/* HERO */}
     {/* Minimal alternatif: tek overlay + gölge */}
<section className="relative h-[44vh] md:h-[56vh] w-full overflow-hidden">
  <Image src="/img/hakkimizda.webp" alt="Sahneva" fill priority sizes="100vw" className="object-cover" />
  <div className="absolute inset-0 bg-black/45" /> {/* tek katman */}
  <div className="absolute inset-0 flex items-center">
    <div className="container">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
        Hakkımızda
      </h1>
      <p className="mt-2 max-w-3xl text-white/95 md:text-lg leading-relaxed">
       Türkiye genelinde <strong>sahne, podyum, LED ekran, ses–ışık</strong> sistemleri ve
            kurulum hizmetlerini <strong>tek çatı altında</strong> sunuyoruz. Kurumsal disiplin ve
            güçlü teknik ekipmanla yanınızdayız.
      </p>
    </div>
  </div>
</section>


      {/* İSTATİSTİKLER */}
      <section className="-mt-10 md:-mt-12 relative z-10">
        <div className="container grid gap-4 md:grid-cols-3">
          {STATS.map((k, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/70 backdrop-blur shadow-sm border border-white/50 p-5 md:p-6 transition hover:shadow-md"
            >
              <div className="text-2xl md:text-3xl font-extrabold tracking-tight">{k.n}</div>
              <div className="mt-1 text-neutral-700 font-medium">{k.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BİZ KİMİZ */}
      <section className="container mt-12 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Biz Kimiz?</h2>
        <p className="text-neutral-700 leading-relaxed">
          <strong>Sahneva</strong>, etkinlik prodüksiyonu ve ekipman kiralama alanında uzmanlaşmış bir organizasyon
          firmasıdır. Sahne, podyum, LED ekran, ses–ışık ve çadır kurulumlarından canlı yönetim ve yayın çözümlerine
          kadar tüm teknik süreci tek ekipte toplar. Hedefimiz; riskleri azaltan, güvenli ve estetik çözümleri
          bütçe dostu şekilde sunmaktır.
        </p>
      </section>

      {/* TARİHÇE */}
      <section className="container mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Tarihçe</h2>
        <ol className="relative border-l-2 border-neutral-200 pl-6 space-y-6">
          {TIMELINE.map((t, i) => (
            <li key={i} className="relative">
              <div className="absolute -left-2.5 mt-1 h-4 w-4 rounded-full bg-[#815be0]" />
              <h3 className="font-semibold">{t.y}</h3>
              <p className="text-neutral-700">{t.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="container mt-12 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl bg-white shadow-sm p-6 border">
          <h3 className="text-xl font-bold mb-2">Misyon</h3>
          <p className="text-neutral-700 leading-relaxed">
            Markaların ve kurumların mesajlarını, kusursuz teknik akış ve estetik sahne tasarımıyla etkileyici
            deneyimlere dönüştürmek.
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow-sm p-6 border">
          <h3 className="text-xl font-bold mb-2">Vizyon</h3>
          <p className="text-neutral-700 leading-relaxed">
            Türkiye’de referans gösterilen, uluslararası arenada tercih edilen ve sürdürülebilir çözümler üreten
            bir etkinlik teknolojileri markası olmak.
          </p>
        </div>
      </section>

      {/* DEĞERLERİMİZ */}
      <section className="container mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Değerlerimiz</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-neutral-700">
          {VALUES.map((v, i) => (
            <li key={i} className="rounded-xl bg-white p-3 shadow-sm border hover:shadow-md transition">
              • {v}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/hizmetler"
            className="px-6 py-3 bg-[#815be0] text-white rounded-lg font-semibold hover:opacity-90"
          >
            Hizmetlerimizi Keşfet
          </a>
          <a
            href="/iletisim"
            className="px-6 py-3 border rounded-lg font-semibold hover:bg-neutral-50"
          >
            Bizimle İletişime Geç
          </a>
        </div>
      </section>
    </div>
  );
}
