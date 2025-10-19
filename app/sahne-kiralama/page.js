// app/sahne-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

// ---------- META ----------
export const metadata = {
  title: "Sahne Kiralama – Truss, Podyum, LED, Ses & Işık | Sahneva",
  description:
    "Konser, lansman, miting, festival ve kurumsal etkinlikler için sahne kiralama. Truss & rigging, podyum, LED ekran, profesyonel ses ve ışık. Kurulum, canlı operasyon ve söküm dahil.",
  alternates: { canonical: "https://sahneva.com/sahne-kiralama" },
  keywords: [
    "sahne kiralama",
    "truss kiralama",
    "podyum kiralama",
    "sahne ses ışık",
    "led ekran sahne",
    "konser sahnesi",
  ],
  openGraph: {
    title: "Sahne Kiralama – Truss, Podyum, LED, Ses & Işık",
    description:
      "Konser, lansman, miting, festival ve kurumsal etkinlikler için anahtar teslim sahne kiralama.",
    url: "https://sahneva.com/sahne-kiralama",
    images: [{ url: "/img/hero-sahne.webp" }], // OG fallback
    type: "article",
  },
  robots: { index: true, follow: true },
};

export const revalidate = 60;

// ---------- VERİ ----------
const GALLERY = [
  "/img/sahne/1.webp",
  "/img/sahne/2.webp",
  "/img/sahne/3.webp",
  "/img/sahne/4.webp",
];

const PACKAGES = [
  {
    name: "Mini Sahne – 16 m²",
    includes: [
      "8 × (2×1 m) podyum – 16 m²",
      "Yükseklik 40 cm, kaymaz kaplama",
      "Arka fon için 6 m düz truss",
      "2 LED bar + 2 spot",
      "Kurulum, test ve söküm",
    ],
    note: "Toplantı, söyleşi ve butik iç mekân etkinlikleri.",
  },
  {
    name: "Standart Sahne – 24 m²",
    includes: [
      "12 × (2×1 m) podyum – 24 m²",
      "Yükseklik 60 cm, ön etek kapama",
      "U şeklinde 12 m truss (ön kiriş + yanlar)",
      "4 hareketli başlık + 6 wash",
      "2+1 hoparlör, dijital mikser, kablosuz mikrofon",
      "Kurulum, canlı teknik yönetim, söküm",
    ],
    note: "Kurumsal lansman, söyleşi+performans, AVM etkinlikleri.",
  },
  {
    name: "Konser Sahnesi – 48 m²",
    includes: [
      "24 × (2×1 m) podyum – 48 m² (örn. 8×6 m)",
      "Yükseklik 80–100 cm, rampa/korkuluk opsiyonları",
      "Ön kiriş 12 m + yan kuleler 8 m truss",
      "Line array PA, sahne monitörleri, backline altyapı",
      "LED ekran (örn. 5×3 m) + scaler",
      "Işık: hareketli başlıklar, wash, blinders, duman",
      "Kurulum, soundcheck, canlı yönetim, söküm",
    ],
    note: "Konser, festival, açık alan yüksek katılımlı etkinlikler.",
  },
];

// ---------- SAYFA ----------
export default function Page() {
  return (
    <>
      {/* HERO (LCP için kısaltılmış yükseklik + güçlü overlay) */}
      <section className="relative h-[260px] md:h-[360px] overflow-hidden rounded-b-3xl">
        <Image
          src="/img/hero-sahne.webp"
          alt="Sahne kiralama: truss, podyum, LED, ses ve ışık sistemleri"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex flex-col items-start justify-center text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            Sahne Kiralama
          </h1>
          <p className="mt-3 md:mt-4 max-w-3xl text-base md:text-lg text-neutral-100">
            Truss &amp; rigging, podyum, LED ekran, profesyonel ses ve ışık
            sistemleriyle anahtar teslim sahne çözümleri. Kurulum, canlı teknik
            yönetim ve söküm dahil.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white text-black px-5 py-2.5 text-sm md:text-base font-semibold shadow hover:opacity-90"
              aria-label="Sahne kiralama için teklif iste"
            >
              Teklif Al
            </Link>
            <Link
              href="/podyum-kiralama"
              className="rounded-lg bg-white/10 backdrop-blur px-5 py-2.5 text-sm md:text-base font-medium border border-white/30 hover:bg-white/15"
            >
              Podyum Detayları
            </Link>
          </div>
        </div>
      </section>

      {/* ÖZET / USP */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {[
            ["Modüler Tasarım", "1×1 / 2×1 panellerle hızlı kurulum"],
            ["Güvenlik", "Korkuluk, rampa, kaymaz kaplama"],
            ["Görsellik", "LED ekran & sahne tekstili"],
            ["Tam Hizmet", "Kurulum + canlı yönetim + söküm"],
          ].map(([t, d]) => (
            <article
              key={t}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-zinc-600">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GALERİ */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid md:grid-cols-4 gap-3">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt={`Sahne kurulum görseli ${i + 1}`}
                fill
                loading="lazy"
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* PAKETLER */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Hazır Paketler</h2>
        <p className="mt-2 text-zinc-600">
          Ölçülere, etkinlik türüne ve mekân şartlarına göre paket içerikleri
          uyarlanır. İhtiyaca göre yükseltme/düşürme yapılabilir.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                {p.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {p.note && (
                <p className="mt-3 text-sm text-zinc-600">
                  <span className="font-medium">Not: </span>
                  {p.note}
                </p>
              )}
              <div className="mt-4 flex gap-2">
                <Link
                  href="/iletisim"
                  className="rounded-xl bg-black text-white px-4 py-2 text-sm hover:opacity-90"
                  aria-label={`${p.name} için teklif iste`}
                >
                  Teklif Al
                </Link>
                <Link
                  href="/led-ekran-kiralama"
                  className="rounded-xl border px-4 py-2 text-sm hover:bg-neutral-50"
                >
                  LED Ekran Bilgisi
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BİLEŞENLER (Ayrıntılar) */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Sahne Bileşenleri</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">Podyum</h3>
            <p className="mt-2 text-sm text-zinc-700">
              1×1 ve 2×1 modüllerle 20–100 cm yükseklik seçenekleri; kaymaz
              kaplama, etek, rampa ve korkuluk opsiyonları. Yük hesabı
              etkinlik/ekipman yoğunluğuna göre yapılır.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Kapalı alan: 40–60 cm, açık alan: 60–100 cm önerilir</li>
              <li>Merdiven ve rampa erişimi (engelli dostu)</li>
              <li>Şase dengeleme ve noktasal yük dağıtımı</li>
            </ul>
            <Link href="/podyum-kiralama" className="mt-3 inline-block text-sm underline">
              Podyum kiralama detayları →
            </Link>
          </article>

          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">Truss &amp; Rigging</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Ön kiriş, yan kule, arka fon ve roof sistemleri. Askı noktaları,
              yük dağılımı ve güvenlik ekipmanları (safety) standartlara uygun
              şekilde planlanır.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Statik hesap ve güvenlik katsayıları</li>
              <li>Chain/hoist ve ground support çözümleri</li>
              <li>Backdrop, banner ve dekor askıları</li>
            </ul>
          </article>

          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">LED Ekran</h3>
            <p className="mt-2 text-sm text-zinc-700">
              İç/dış mekân uygun P2–P6 paneller; yüksek parlaklık, scaler ve
              canlı miksaj desteği. Arka fon LED veya yan kanatlar ile kurgu.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Öneri: 3×2 m (iç mekân) / 5×3 m (açık alan)</li>
              <li>IP65 koruma (dış mekân paneller)</li>
              <li>HDMI/SDI giriş ve içerik döngüsü</li>
            </ul>
            <Link href="/led-ekran-kiralama" className="mt-3 inline-block text-sm underline">
              LED ekran kiralama →
            </Link>
          </article>

          <article className="rounded-2xl border p-5">
            <h3 className="font-semibold">Ses &amp; Işık</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Line array PA, dijital mikser, kablosuz mikrofonlar ve hareketli
              başlıklarla sahne ışık tasarımı. Operasyon boyunca teknik ekip.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Soundcheck ve sahne monitörlemesi</li>
              <li>Beam/spot, wash, blinder, haze/duman</li>
              <li>DMX programlama ve show control</li>
            </ul>
            <Link href="/ses-isik-sistemleri" className="mt-3 inline-block text-sm underline">
              Ses &amp; Işık kiralama →
            </Link>
          </article>
        </div>
      </section>

      {/* İLGİLİ HİZMETLER */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <h2 className="text-2xl font-semibold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li><Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Podyum Kiralama</Link></li>
          <li><Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">LED Ekran Kiralama</Link></li>
          <li><Link href="/ses-isik-sistemleri" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Ses &amp; Işık Sistemleri</Link></li>
          <li><Link href="/cadir-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">Çadır Kiralama</Link></li>
        </ul>
      </section>

      {/* SÜREÇ */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">İş Sürecimiz</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-5">
          {[
            ["Keşif & Planlama", "Mekân ölçümü, yük ve elektrik analizi"],
            ["Projelendirme", "2D/3D sahne yerleşim ve truss planı"],
            ["Kurulum & Test", "Statik/güvenlik kontrolleri, soundcheck"],
            ["Canlı Yönetim", "Show control ve anlık teknik destek"],
          ].map(([t, d], i) => (
            <article key={t} className="rounded-2xl border p-5">
              <div className="text-sm text-zinc-500">0{i + 1}</div>
              <h3 className="font-semibold mt-1">{t}</h3>
              <p className="mt-1 text-sm text-zinc-700">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SSS + CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Sıkça Sorulan Sorular</h2>
        <div className="mt-4 space-y-4">
          {[
            [
              "Sahne ölçüsünü nasıl belirliyorsunuz?",
              "Katılımcı sayısı, performans türü ve mekân ölçülerine göre podyum alanı, yükseklik ve truss açıklıkları belirlenir. Keşif sonrası netleştiriyoruz.",
            ],
            [
              "Açık alan konserlerinde hangi yükselti önerilir?",
              "Genellikle 80–100 cm önerilir. Seyirci görüş çizgisi ve güvenlik bariyer yerleşimi de dikkate alınır.",
            ],
            [
              "LED ekran şart mı?",
              "Büyük katılımlı etkinliklerde görünürlüğü ve sponsor görünürlüğünü artırdığı için önerilir; zorunlu değildir.",
            ],
            [
              "Kurulum ne kadar sürer?",
              "Paket ve mekâna göre değişir; mini sahnede 2–4 saat, konser kurulumlarında 1 tam gün planlanır.",
            ],
          ].map(([q, a]) => (
            <article key={q} className="rounded-2xl border p-5">
              <h3 className="font-medium">{q}</h3>
              <p className="mt-1 text-sm text-zinc-700">{a}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/iletisim"
            className="inline-block rounded-2xl bg-black text-white px-6 py-3 hover:opacity-90"
            aria-label="Sahne projeniz için teklif isteyin"
          >
            Projene Uygun Sahne Tasarlayalım
          </Link>
        </div>
      </section>

      {/* JSON-LD (Service + Breadcrumb) */}
      <Script
        id="ld-service-sahne"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Sahne Kiralama",
            name: "Sahne Kiralama",
            description:
              "Truss & rigging, podyum, LED ekran, profesyonel ses ve ışık ile sahne kiralama. Kurulum, canlı yönetim ve söküm dahil.",
            areaServed: { "@type": "Country", name: "TR" },
            provider: {
              "@type": "LocalBusiness",
              name: "Sahneva",
              url: "https://www.sahneva.com",
              telephone: "+90 545 304 8671",
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Sahne Paketleri",
              itemListElement: PACKAGES.map((p) => ({
                "@type": "Offer",
                name: p.name,
                description: p.includes.join(", "),
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "TRY",
                },
                availability: "https://schema.org/InStock",
              })),
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-sahne"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Sahne Kiralama", item: "https://www.sahneva.com/sahne-kiralama" },
            ],
          }),
        }}
      />
    </>
  );
}