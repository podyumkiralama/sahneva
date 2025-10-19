// app/ses-isik-sistemleri/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title:
    "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri",
  description:
    "Konser, düğün, festival ve kurumsal etkinlikler için profesyonel ses ve ışık sistemleri kiralama. Line array, robot ışık ve teknik kurulum desteği.",
  alternates: {
    canonical: "https://sahneva.com/ses-isik-sistemleri",
  },
  keywords: [
    "ses sistemleri kiralama",
    "ışık sistemleri kiralama",
    "line array kiralama",
    "robot ışık kiralama",
    "profesyonel ses ışık",
    "konser ses sistemi",
    "düğün ışık sistemi",
    "sahne sistemleri kiralama",
  ],
  openGraph: {
    title:
      "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri - Sahneva",
    description:
      "Konser, düğün ve kurumsal etkinliklerde profesyonel ses ve ışık sistemleri. Line array, robot ışık ve teknik kurulum desteği.",
    url: "https://sahneva.com/ses-isik-sistemleri",
    type: "article",
    images: [
      { url: "/img/ses-isik/hero.webp" },
    ],
  },
};

// İçerik değişiklikleri hızlı yansısın
export const revalidate = 60;

export default function SesIsikSistemleriPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="relative h-[320px] sm:h-[420px] md:h-[500px] flex items-center justify-center bg-neutral-900 text-white overflow-hidden rounded-b-3xl">
        <Image
          src="/img/ses-isik/hero.webp"
          alt="Profesyonel sahne ses ve ışık sistemleri kurulumu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        {/* okunabilirlik için degrade */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            Ses ve Işık Sistemleri Kiralama
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-100">
            Konserden düğüne, festivalden kurumsal lansmana kadar her ölçekte
            etkinlik için uçtan uca ses ve ışık çözümleri.
          </p>
        </div>
      </section>

      {/* GİRİŞ */}
      <section className="container max-w-5xl mx-auto px-4 py-12">
        <p className="text-neutral-800 leading-relaxed text-lg mb-6">
          Etkili bir etkinlik deneyiminin arkasında iyi planlanmış bir sahne
          altyapısı yatar. Sahneva olarak, konser, festival, düğün, miting,
          mezuniyet töreni veya lansman fark etmeksizin her organizasyonda
          kesintisiz <strong>ses dağılımı</strong> ve <strong>göz alıcı ışık efektleri</strong> ile
          sahne atmosferinizi güçlendiriyoruz. Profesyonel ekipman parkurumuz ve
          deneyimli teknik ekibimiz sayesinde keşiften kurulum ve canlı performansa kadar
          her aşamada yanınızdayız.
        </p>

        <p className="text-neutral-800 leading-relaxed text-lg mb-0">
          Hizmet kapsamımız;{" "}
          <strong>line array hoparlör sistemleri</strong>, dijital/analog mikserler,
          kablosuz mikrofonlar, <strong>RGBW LED spotlar</strong>, hareketli başlıklı
          <strong> robot ışıklar</strong>, <strong>truss taşıyıcı sistemleri</strong> ve
          <strong> sis makineleri</strong> dâhil sahne ışıklandırma çözümlerini içerir.
          Kurulum; etkinliğin türü, mekânın iç/dış oluşu, seyirci alanı ve akış planına göre projelendirilir.
        </p>
      </section>

      {/* SES SİSTEMLERİ */}
      <section className="container max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">🎤 Profesyonel Ses Sistemleri</h2>

        <figure className="mb-6">
          <Image
            src="/img/ses-isik/ses-sistemi.webp"
            alt="Festival sahnesinde line array ses sistemi kurulumu"
            width={1200}
            height={675}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="rounded-xl shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Festival sahnesinde line array ses sistemi kurulumu
          </figcaption>
        </figure>

        <p className="mb-6 leading-relaxed text-neutral-800">
          Profesyonel ses kurulumlarında hedef; her noktada anlaşılır ve dengeli ses elde etmektir.
          Büyük açık alanlarda <strong>line array</strong> sistemler uzak mesafelere bozulmadan
          ulaşım sağlar; düğün ve salon etkinliklerinde kompakt sistemler tercih edilir.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-neutral-800">
          <li>Line Array hoparlör sistemleri (uzun mesafe ses dağılımı)</li>
          <li>Dijital ve analog mikserler, sahne monitörleme</li>
          <li>Kablosuz, yaka ve el mikrofon sistemleri</li>
          <li>DJ setup ve çok kanallı kayıt imkânları</li>
          <li>Kurulum, ses testi ve canlı miksaj için teknik ekip</li>
        </ul>

        <p className="leading-relaxed text-neutral-800">
          Hoparlör yerleşimleri; yankı, rüzgâr ve seyirci yoğunluğu dikkate alınarak planlanır.
          Böylece alanın tamamında eşit ses dağılımı hedeflenir.
        </p>
      </section>

      {/* IŞIK SİSTEMLERİ */}
      <section className="container max-w-5xl mx-auto px-4 pb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">💡 Işık Sistemleri ve Sahne Atmosferi</h2>

        <figure className="mb-6">
          <Image
            src="/img/ses-isik/isik-sistemi.webp"
            alt="RGBW LED spotlar ve robot ışıklarla sahne aydınlatması"
            width={1200}
            height={675}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
            className="rounded-xl shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            RGBW spotlar ve robot ışıklarla sahne aydınlatması
          </figcaption>
        </figure>

        <p className="mb-6 leading-relaxed text-neutral-800">
          Işıklandırma bir etkinliğin enerjisini doğrudan etkiler.{" "}
          <strong>RGBW LED spotlar</strong>, hareketli başlıklı <strong>robot ışıklar</strong>, beam efektleri
          ve özel sis makineleriyle sahnenizi bambaşka bir boyuta taşıyoruz. Truss üzerinde kurulan
          armatürler <strong>DMX kontrol</strong> ile ritim ve akışa uygun sahneler oluşturur.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-neutral-800">
          <li>RGBW LED spot sistemleri, wash & spot kombinasyonları</li>
          <li>Hareketli başlıklı robot ışık ve beam efektleri</li>
          <li>Truss taşıyıcı sistem kurulumu ve güvenlik ekipmanları</li>
          <li>Sis/şaft makineleri ile atmosfer güçlendirme</li>
          <li>DMX ile senkronize ışık show programlaması</li>
        </ul>

        <p className="leading-relaxed text-neutral-800">
          Düğünlerde dans pisti ve sahne çevresinde dekoratif ışıklar; kurumsal lansmanlarda
          logo aydınlatmaları ve vurgu spotları, konserlerde ise yoğun beam-robot kombinasyonları tercih edilir.
        </p>
      </section>

      {/* KULLANIM ALANLARI */}
      <section className="bg-neutral-50 py-12">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            📍 Ses &amp; Işık Sistemlerinin Kullanım Alanları
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-neutral-800">
            <li>🎶 Konser ve festival organizasyonları</li>
            <li>💼 Kurumsal lansman ve toplantılar</li>
            <li>💍 Düğün ve özel davet sahneleri</li>
            <li>🏛 Belediye etkinlikleri, miting ve açılışlar</li>
            <li>🏫 Mezuniyet törenleri ve okul etkinlikleri</li>
            <li>🏢 AVM etkinlikleri, fuar ve roadshow sahneleri</li>
          </ul>
        </div>
      </section>

      {/* İLGİLİ HİZMETLER — İç link (SEO) */}
      <section className="container max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">İlgili Hizmetler</h2>
        <ul className="flex flex-wrap gap-3 text-sm">
          <li>
            <Link href="/sahne-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
              Sahne Kiralama
            </Link>
          </li>
          <li>
            <Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
              Podyum Kiralama
            </Link>
          </li>
          <li>
            <Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
              LED Ekran Kiralama
            </Link>
          </li>
          <li>
            <Link href="/cadir-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
              Çadır Kiralama
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="container max-w-5xl mx-auto px-4 pb-14">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#815be0] to-[#6d28d9] p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h3 className="text-xl md:text-2xl font-bold">
            Etkinliğiniz İçin Profesyonel Ses & Işık Sistemleri
          </h3>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-[#6d28d9] hover:opacity-90"
            >
              İletişime Geç
            </Link>
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C%20Ses%20ve%20I%C5%9F%C4%B1k%20Sistemleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
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
        id="ld-service-audio-light"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Ses ve Işık Sistemleri Kiralama",
            name: "Ses ve Işık Sistemleri Kiralama",
            description:
              "Line array, dijital mikser, kablosuz mikrofon, robot ışık, truss ve teknik operasyonla Türkiye genelinde ses & ışık sistemleri kiralama.",
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
              name: "Ses & Işık Paketleri",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Line Array + Dijital Mikser Paketi",
                  description:
                    "Line array topluluk seslendirme, sahne monitörleri ve dijital miksaj.",
                  availability: "https://schema.org/InStock",
                  priceSpecification: { "@type": "PriceSpecification", priceCurrency: "TRY" },
                },
                {
                  "@type": "Offer",
                  name: "Robot Işık + Truss Paket",
                  description:
                    "Hareketli başlıklı robot ışıklar, beam efektleri ve truss montaj.",
                  availability: "https://schema.org/InStock",
                  priceSpecification: { "@type": "PriceSpecification", priceCurrency: "TRY" },
                },
              ],
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-audio-light"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Ses ve Işık Sistemleri", item: "https://www.sahneva.com/ses-isik-sistemleri" },
            ],
          }),
        }}
      />
    </main>
  );
}