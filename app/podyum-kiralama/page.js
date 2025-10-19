// app/podyum-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { getService } from "@/lib/data";

const svc = getService("podyum");

const CONTENT = {
  gallery: ["/img/podyum/1.webp", "/img/podyum/2.webp", "/img/podyum/3.webp"],
  packages: [
    {
      name: "Mini Podyum — 12 m²",
      includes: [
        "6 × (1×2 m) panel – toplam 12 m²",
        "Yükseklik: 40 cm",
        "Kaymaz kaplama",
        "Kurulum + söküm",
      ],
      note: "İç mekân konuşma/mini performanslar için ideal.",
    },
    {
      name: "Orta Podyum — 24 m²",
      includes: [
        "12 × (1×2 m) panel – toplam 24 m²",
        "Yükseklik: 60 cm",
        "Kaymaz kaplama, merdiven",
        "Kurulum + söküm + yerinde dengeleme",
      ],
      note: "Kurumsal sahneler ve canlı performanslar için.",
    },
    {
      name: "Pro Podyum — 48 m²",
      includes: [
        "24 × (1×2 m) panel – toplam 48 m²",
        "Yükseklik: 80–100 cm",
        "Kaymaz kaplama, merdiven, rampa, korkuluk",
        "Kurulum + söküm + çevre etek/brandalama",
      ],
      note: "Büyük konser/miting sahneleri için.",
    },
  ],
};

/**
 * NOT:
 * Eğer root layout'ta title template kullanıyorsan (`%s | Sahneva`),
 * aşağıdaki başlık markasız kalmalı: "Podyum Kiralama".
 * Template yoksa `" | Sahneva"` ekleyebilirsin.
 */
export const metadata = {
  title: svc?.title ?? "Podyum Kiralama",
  description:
    svc?.excerpt ||
    "Podyum sahne kiralama: 1×1 ve 2×1 panellerle modüler kurulum, kaymaz kaplama, rampa/korkuluk ve profesyonel montaj.",
  alternates: { canonical: "https://sahneva.com/podyum-kiralama" },
  keywords: [
    "podyum kiralama",
    "podyum sahne kiralama",
    "modüler podyum",
    "sahne podyum platform",
    "podyum kurulumu",
    "İstanbul podyum kiralama",
  ],
  openGraph: {
    title: svc?.title ?? "Podyum Kiralama",
    description:
      svc?.desc ||
      "Konser, lansman ve düğünler için podyum sahne kiralama. Modüler 1×1 & 2×1 paneller, kaymaz kaplama.",
    url: "https://sahneva.com/podyum-kiralama",
    type: "article",
    images: [{ url: svc?.img ?? "/img/podyum/1.webp" }],
  },
};

export default function Page() {
  const title = svc?.title ?? "Podyum Kiralama";
  const desc =
    svc?.desc ??
    "Podyum sahne kiralama: 1×1 ve 2×1 panellerle modüler kurulum, kaymaz kaplama ve profesyonel ekip.";

  const heroSrc = svc?.img ?? CONTENT.gallery[0];

  return (
    <>
      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-b-3xl">
        {heroSrc && (
          <Image
            src={heroSrc}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

      {/* Kısa açıklama */}
      <section className="container max-w-4xl mx-auto py-8">
        <p className="text-neutral-700 leading-relaxed text-lg">{desc}</p>
      </section>

      {/* Uzun makale */}
      <LongArticlePodyum />

      {/* Paketler */}
      {!!CONTENT.packages.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Paket Örnekleri</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTENT.packages.map((p, i) => (
              <article key={`pkg-${i}`} className="rounded-2xl border bg-white p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-neutral-700">
                  {p.includes.map((inc, ii) => (
                    <li key={`pkgi-${i}-${ii}`} className="flex gap-2">
                      <span>•</span> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {p.note && <p className="mt-3 text-sm text-neutral-500">{p.note}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Galeri */}
      {!!CONTENT.gallery.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Kurulumdan Görseller</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.gallery.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`${title} kurulum görseli ${i + 1}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* İLGİLİ HİZMETLER (internal linking) */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li>
            <Link
              href="/sahne-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              Sahne Kiralama
            </Link>
          </li>
          <li>
            <Link
              href="/led-ekran-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              LED Ekran Kiralama
            </Link>
          </li>
          <li>
            <Link
              href="/ses-isik-sistemleri"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              Ses &amp; Işık Sistemleri
            </Link>
          </li>
          <li>
            <Link
              href="/cadir-kiralama"
              className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50"
            >
              Çadır Kiralama
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container pb-14">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl font-bold md:text-2xl">
            {title} hakkında teklif almak ister misiniz?
          </h2>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:opacity-90"
            >
              İletişime Geç
            </Link>
            <a
              href={`https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20${encodeURIComponent(
                title
              )}%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD: Service + Breadcrumb */}
      <Script
        id="ld-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Podyum Kiralama",
            name: "Podyum Kiralama",
            description:
              "Modüler 1×1 ve 2×1 panellerle podyum kiralama; kaymaz kaplama, rampa/korkuluk ve profesyonel kurulum.",
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
              name: "Podyum Paketleri",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Mini Podyum — 12 m²",
                  description:
                    "6× (1×2 m) panel, 40 cm yükseklik, kaymaz kaplama, kurulum+söküm.",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "TRY",
                  },
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Orta Podyum — 24 m²",
                  description:
                    "12× (1×2 m) panel, 60 cm yükseklik, merdiven, dengeleme, kurulum+söküm.",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "TRY",
                  },
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Pro Podyum — 48 m²",
                  description:
                    "24× (1×2 m) panel, 80–100 cm yükseklik, rampa/korkuluk, etek/brandalama.",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "TRY",
                  },
                  availability: "https://schema.org/InStock",
                },
              ],
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumb"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Anasayfa",
                item: "https://www.sahneva.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Podyum Kiralama",
                item: "https://www.sahneva.com/podyum-kiralama",
              },
            ],
          }),
        }}
      />
    </>
  );
}

/* ------------------------- ALTTA MAKALE KOMPONENTİ ------------------------ */
function LongArticlePodyum() {
  return (
    <section className="container max-w-4xl mx-auto py-10 md:py-14 space-y-10">
      {/* Podyum Kiralama Nedir? */}
      <article className="space-y-4 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">Podyum Kiralama Nedir?</h2>
        <p>
          Podyum; konuşmacıların, sanatçıların ya da sergilenecek ürünlerin izleyiciler tarafından
          rahatça görülebilmesi için oluşturulan yükseltilmiş ve <strong>güvenli</strong> platformdur.
          <strong> Sahneva</strong> olarak konser, lansman, tören, düğün ve fuar gibi etkinliklerde
          hızlı kurulan, dayanıklı ve estetik podyum çözümleri sunarız.
        </p>
        <p>
          Sistemlerimiz hem <strong>1×1 m</strong> hem de <strong>2×1 m</strong> panellerle
          kurulabilir. 1×1 paneller özellikle <strong>çadır zeminleri</strong> ve düzensiz alanlarda
          hassas dengeleme için idealdir; 2×1 paneller ise ana sahne yüzeylerinde hızlı kurulum ve
          geniş açıklık avantajı sağlar. Ayrıca orkestralar ve koro düzenleri için{" "}
          <strong>tekerlekli rizer</strong> platformlar da kurabiliyoruz.
        </p>
      </article>

      {/* Fiyatlar */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Podyum & Sahne Kiralama Fiyatları</h2>
        <p className="mt-3 text-neutral-700 leading-relaxed">
          Fiyatlar proje bazlıdır; alan keşfi ve ihtiyaca göre şekillenir. Aşağıdaki başlıklar
          maliyeti belirleyen ana kalemlerdir:
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            Kurulum alanı (m²) ve <strong>panel tipi</strong> (1×1 / 2×1)
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <strong>Yükseklik</strong> (20–100 cm) ve dengeleme gereksinimi
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <strong>Aksesuarlar</strong> (korkuluk, merdiven, rampa, ön etek/brandalama)
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <strong>Nakliye</strong> mesafesi, erişim/kat koşulları, gece vardiyası
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <strong>Kurulum süresi</strong> (tek gün / çok gün) ve saha güvenlik şartları
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <strong>İç/dış mekân</strong> ve zemin yapısı (çadır, çim, parke vb.)
          </li>
        </ul>
        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            <strong>Hızlı teklif</strong> için: alan ölçüleri, istenen yükseklik, aksesuar
            ihtiyacı ve etkinlik tarih/konum bilgilerini iletmeniz yeterlidir.
          </p>
        </div>
      </article>

      {/* Nerelerde Kullanılır */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Podyum Nerelerde Kullanılır?</h2>
        <div className="grid md:grid-cols-2 gap-2 mt-3 text-neutral-800">
          <ul className="space-y-1">
            <li>• Konser ve festival sahneleri</li>
            <li>• Kurumsal lansmanlar, basın toplantıları</li>
            <li>• Ödül törenleri, protokol podyumları</li>
            <li>• AVM etkinlikleri, roadshow ve tanıtım sahneleri</li>
          </ul>
          <ul className="space-y-1">
            <li>• Düğün &amp; özel davet sahneleri</li>
            <li>• Mezuniyet törenleri, okul etkinlikleri</li>
            <li>• Spor organizasyonları ve seremoni alanları</li>
            <li>• Çadır içi zemin düzleştirme ve geçici yürüyüş yolları</li>
          </ul>
        </div>
      </article>

      {/* Düğün & Kurumsal Kurulum İpuçları */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Düğün &amp; Kurumsal Etkinliklerde Podyum Nasıl Kurulmalı?
        </h2>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Düğün / Davet</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Yükseklik:</strong> 30–50 cm genelde yeterlidir; görüş açısı iyileşir.</li>
              <li>• <strong>Genişlik:</strong> Orkestra/DJ ve dans sahası planına göre belirleyin.</li>
              <li>• <strong>Zemin:</strong> Çadır/çim ise 1×1 panellerle dengeli yüzey oluşturun.</li>
              <li>• <strong>Aksesuar:</strong> Merdiven ve ön etek; güvenlik için kenarlarda korkuluk.</li>
              <li>• <strong>Estetik:</strong> Halı/kaplama ve brandalama ile bütünlük sağlayın.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Kurumsal / Lansman</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Yükseklik:</strong> 40–60 cm; LED ekran ve kamera için ideal.</li>
              <li>• <strong>Modülerlik:</strong> 2×1 panellerle ana yüzey; yan uzatmalar 1×1 ile tamamlanabilir.</li>
              <li>• <strong>Güvenlik:</strong> Kablo kanalları/kenar işaretleri; erişim için rampa.</li>
              <li>• <strong>Akış:</strong> Sunucu/konuşmacı/demo alanları için ayrı platformlar.</li>
              <li>• <strong>Markalama:</strong> Ön etek ve sahne yüzünde kurumsal kimlik.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            <strong>Not:</strong> Büyük sahnelerde 2×1 paneller önerilir; çadır altı/düzensiz
            zeminlerde 1×1 panellerle hassas dengeleme sağlanır. Hareketli senaryolarda
            <strong> tekerlekli rizer</strong> operasyonu hızlandırır.
          </p>
        </div>
      </article>

      {/* Teknik Tablo */}
      <article className="rounded-2xl border bg-white p-6">
        <h3 className="text-xl font-bold mb-3">Teknik Özellikler (Özet)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-500">
                <th className="p-2">Özellik</th>
                <th className="p-2">Açıklama</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:p-2 [&>tr]:border-b">
              <tr><td>Panel Ölçüleri</td><td>1×1 m (çadır zemini) ve 2×1 m (ana sahne)</td></tr>
              <tr><td>Yükseklik</td><td>20 – 100 cm (10 cm kademelerle)</td></tr>
              <tr><td>Taşıyıcı Sistem</td><td>Alüminyum/çelik modüler karkas</td></tr>
              <tr><td>Kaplama</td><td>Kaymaz yüzey; opsiyonel halı/dekoratif kaplama</td></tr>
              <tr><td>Aksesuarlar</td><td>Korkuluk, merdiven, rampa, ön etek/brandalama</td></tr>
              <tr><td>Opsiyonlar</td><td>Tekerlekli rizer, modüler yan platformlar, kablo kanalı</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}