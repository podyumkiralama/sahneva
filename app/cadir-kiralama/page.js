// app/cadir-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const revalidate = 3600;

export const metadata = {
  title: "Çadır Kiralama | Pagoda, Şeffaf, Endüstriyel Çözümler - Sahneva",
  description:
    "Pagoda 5×5/6×6, şeffaf dome ve endüstriyel çadır çözümleri. Zemin, aydınlatma, elektrik ve lojistik dâhil Türkiye geneli profesyonel kurulum.",
  alternates: { canonical: "https://sahneva.com/cadir-kiralama" },
  keywords: [
    "çadır kiralama",
    "pagoda çadır",
    "şeffaf çadır",
    "dome çadır",
    "fuar çadırı",
    "endüstriyel çadır",
    "çadır kurulumu",
    "çadır zemini",
  ],
  openGraph: {
    title: "Çadır Kiralama | Sahneva",
    description:
      "Açık hava etkinlikleri için güvenli çadır sistemleri: pagoda, şeffaf, fuar ve endüstriyel çözümler. Türkiye geneli kurulum.",
    url: "https://sahneva.com/cadir-kiralama",
    type: "article",
    images: [{ url: "/img/cadir/hero.webp", width: 1200, height: 800, alt: "Sahneva Çadır Kiralama" }],
  },
};

export default function CadirKiralamaPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO (LCP) */}
      <section className="relative h-[320px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
        <Image
          src="/img/cadir/hero.webp"
          alt="Sahneva — profesyonel çadır kiralama ve kurulum"
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* okunabilirlik için koyu overlay */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">
              Çadır Kiralama
            </h1>
            <p className="mt-3 text-neutral-100 text-base sm:text-lg">
              Pagoda, şeffaf/dome ve endüstriyel çadır çözümleri. Zemin kaplama, aydınlatma ve elektrik
              altyapısıyla Türkiye geneli profesyonel kurulum.
            </p>
          </div>
        </div>
      </section>

      {/* GİRİŞ */}
      <section className="container mx-auto max-w-5xl px-4 py-10">
        <p className="text-neutral-800 leading-relaxed text-lg">
          Açık hava etkinlikleri; düğün, lansman, fuar veya konser gibi organizasyonlarda hava koşullarına
          bağlı riskler taşır. <strong>Sahneva</strong>, bu riskleri ortadan kaldırmak ve konforlu alanlar
          oluşturmak için modern, güvenli ve estetik çadır sistemleri sunar. Pagoda çadırlar, şeffaf kubbeli
          sistemler ve endüstriyel depolama çadırlarıyla her ölçekteki etkinlik için uygun çözümler üretiriz.
        </p>
        <p className="mt-5 text-neutral-800 leading-relaxed text-lg">
          Keşiften planlamaya, kurulumdan söküme kadar tüm süreç Sahneva ekibi tarafından yönetilir. Zemin
          kaplama (podyum/kontraplak), yan branda, kapı–pencere modülleri, aydınlatma ve elektrik dağıtımı gibi
          tamamlayıcı hizmetleri de <strong>tek pakette</strong> sunuyoruz.
        </p>
      </section>

      {/* ÇADIR TÜRLERİ */}
      <section className="container mx-auto max-w-5xl px-4 pb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">🏕️ Çadır Türleri</h2>

        {/* Pagoda */}
        <figure className="mb-6">
          <Image
            src="/img/cadir/pagoda.webp"
            alt="Pagoda çadır kurulumu — 5×5 / 6×6 m"
            width={1200}
            height={650}
            loading="lazy"
            decoding="async"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 1200px"
            className="rounded-lg shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Karşılama ve satış alanları için estetik Pagoda çadırlar
          </figcaption>
        </figure>
        <h3 className="font-semibold text-lg mb-2">Pagoda Çadırlar (5×5 / 6×6 m)</h3>
        <p className="mb-8 leading-relaxed text-neutral-800">
          Keskin hatlı yapısı ve yüksek tepe noktası ile estetik bir görünüm sunan pagoda çadırlar; karşılama
          alanları, satış stantları, VIP bölümler veya restoran tipi oturma düzenleri için idealdir. Modüler
          5×5 ve 6×6 m ölçüler birleştirilerek geniş alanlar oluşturulur. Yan branda, kapı–pencere panelleri,
          yağmur oluğu ve yönlendirme panolarıyla fonksiyonel hâle getirilebilir.
        </p>

        {/* Şeffaf */}
        <figure className="mb-6">
          <Image
            src="/img/cadir/seffaf.webp"
            alt="Şeffaf çadır — gece aydınlatmalı davet organizasyonu"
            width={1200}
            height={650}
            loading="lazy"
            decoding="async"
            sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 1200px"
            className="rounded-lg shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Şeffaf çadırlar davet ve lansmanlarda güçlü bir görsel etki sunar
          </figcaption>
        </figure>
        <h3 className="font-semibold text-lg mb-2">Şeffaf Çadır / Dome Sistemleri</h3>
        <p className="mb-8 leading-relaxed text-neutral-800">
          Şeffaf çadırlar, özellikle gece etkinliklerinde içten verilen ışıkla birlikte büyüleyici bir atmosfer
          yaratır. Lansmanlar, düğün organizasyonları ve özel davetlerde tercih edilir. Kubbe veya şeffaf PVC
          branda seçenekleri yağmura karşı koruma sağlarken dış mekânla görsel bağlantıyı korur.
        </p>

        {/* Endüstriyel / Fuar */}
        <h3 className="font-semibold text-lg mb-2">Endüstriyel & Depolama Çadırları</h3>
        <p className="mb-6 leading-relaxed text-neutral-800">
          Geniş açıklıklı alüminyum iskelet sistemiyle kurulan endüstriyel çadırlar; geçici depo, üretim alanı
          veya uzun süreli kullanımlar için uygundur. Forklift girişine imkân veren kapı çözümleri ve yan branda
          kombinasyonlarıyla fonksiyonel alanlar yaratılır.
        </p>

        <h3 className="font-semibold text-lg mb-2">Fuar & Sergi Çadırları</h3>
        <p className="leading-relaxed text-neutral-800">
          Fuar alanlarında hızlı kurulum, geniş iç hacim ve stand yerleşimine uygun düz zemin en önemli kriterdir.
          Sahneva fuar çadırları; yönlendirme, giriş takı, zemin kaplama ve LED aydınlatma sistemleriyle birlikte
          anahtar teslim sunulur.
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-800">
          <li>Pagoda 5×5 / 6×6 m modüller, oluklu geçiş bağlantıları</li>
          <li>Şeffaf çadır / dome (gece aydınlatmalarına uygun)</li>
          <li>Endüstriyel depolama çadırı (geniş açıklıklı iskelet)</li>
          <li>Fuar / sergi çadırı (stand yerleşimine elverişli)</li>
        </ul>
      </section>

      {/* TEKNİK ÖZELLİKLER */}
      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🔧 Teknik Özellikler & Ölçüler</h2>
          <p className="text-neutral-800 leading-relaxed mb-6">
            Sahneva’nın kullandığı tüm çadır sistemleri, <strong>TS EN</strong> standartlarına uygun alüminyum
            taşıyıcı profillerden üretilir. Alev yürütmeyen, UV dayanımlı branda sistemleri güneş ve yağmura
            karşı yüksek koruma sağlar.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Teknik Detaylar</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-800">
                <li>Alüminyum iskelet, çelik bağlantı elemanları</li>
                <li>UV dayanımlı ve alev yürütmez branda</li>
                <li>Profesyonel ankraj / ağırlıklandırma</li>
                <li>Yağmur oluğu, kapı–pencere modülleri</li>
                <li>Zemin kaplama: podyum veya kontraplak platform</li>
                <li>Aydınlatma, priz hatları ve kablo gizleme</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Ölçüler & Kombinasyonlar</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-800">
                <li>Pagoda: 5×5 / 6×6 m modüler birleşim</li>
                <li>Şeffaf: proje bazlı ölçülendirme</li>
                <li>Endüstriyel: 10–20 m arası geniş açıklık opsiyonları</li>
                <li>Yan yana/arka arkaya birleştirme ile geniş alanlar</li>
                <li>Giriş tentesi, backstage ve depolama alanı ekleri</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALERİ */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">🖼️ Galeri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["1.webp", "2.webp", "3.webp", "4.webp"].map((n, i) => (
            <figure key={i} className="overflow-hidden rounded-lg bg-white shadow">
              <Image
                src={`/img/cadir/${n}`}
                alt={`Çadır kurulumu görseli ${i + 1}`}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* KULLANIM ALANLARI */}
      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">📍 Kullanım Alanları</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-neutral-800">
            <li>🎪 Fuar, sergi, lansman ve tanıtım etkinlikleri</li>
            <li>💍 Düğün, kına, nişan ve özel davetler</li>
            <li>🎤 Konser, festival ve backstage çözümleri</li>
            <li>🏛 Belediye organizasyonları ve kurumsal etkinlikler</li>
            <li>🏭 Geçici depolama ve endüstriyel üretim alanları</li>
            <li>🏫 Okul şenlikleri ve mezuniyet törenleri</li>
          </ul>
        </div>
      </section>

      {/* HİZMET KAPSAMI & FİYATLAR + İÇ LİNKLER */}
      <section className="container mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">💬 Hizmet Kapsamı & Fiyatlar</h2>
        <p className="text-neutral-800 leading-relaxed">
          Sahneva; İstanbul, Ankara, İzmir, Bursa, Antalya başta olmak üzere Türkiye geneli hizmet verir.
          Pagoda çadır kiralama fiyatları proje kapsamına göre değişmekle birlikte genellikle{" "}
          <strong>m² bazında</strong> belirlenir. Keşif sonrası ölçü, zemin durumu, rüzgâr koşulları ve ekipman
          ihtiyaçlarına göre <strong>özel teklif</strong> hazırlanır. Kurulum, lojistik, aydınlatma, podyum ve elektrik
          altyapısı tek paket hâlinde sunulabilir.
        </p>

        {/* İlgili hizmetler: iç linkler */}
        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-3">İlgili Hizmetler</h3>
          <ul className="flex flex-wrap gap-3 text-sm">
            <li>
              <Link href="/podyum-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
                Podyum (Zemin) Kiralama
              </Link>
            </li>
            <li>
              <Link href="/led-ekran-kiralama" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
                LED Ekran Kiralama
              </Link>
            </li>
            <li>
              <Link href="/ses-isik-sistemleri" className="inline-block rounded-lg border px-3 py-2 hover:bg-neutral-50">
                Ses & Işık Sistemleri
              </Link>
            </li>
          </ul>
        </section>
      </section>

      {/* CTA (erişilebilir kontrast için optimize edildi) */}
      <section className="bg-[#6f49dc] py-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Etkinliğiniz İçin Profesyonel Çadır Kurulumu
        </h3>
        <p className="mb-6 text-neutral-100 max-w-2xl mx-auto">
          Keşif, planlama, kurulum ve söküm dâhil anahtar teslim hizmet için Sahneva ekibiyle iletişime geçin.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/iletisim"
            className="px-5 py-3 rounded-lg font-semibold bg-white text-[#6f49dc] hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90"
            aria-label="İletişime geçin"
          >
            İletişime Geç
          </Link>

          <a
            href="https://wa.me/905453048671?text=Merhaba%2C%20%C3%87ad%C4%B1r%20Kiralama%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg font-semibold bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90"
            aria-label="WhatsApp ile teklif iste"
          >
            WhatsApp Teklif
          </a>

          <a
            href="tel:+905453048671"
            className="px-5 py-3 rounded-lg font-semibold border border-white/70 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/90"
            aria-label="Telefonla arayın: 0545 304 86 71"
          >
            0545 304 86 71’i Ara
          </a>
        </div>
      </section>

      {/* JSON-LD (Service + Breadcrumb) */}
      <Script
        id="ld-service-cadir"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Çadır Kiralama",
            name: "Çadır Kiralama",
            description:
              "Pagoda, şeffaf/dome ve endüstriyel çadır çözümleri. Zemin, aydınlatma ve elektrik dâhil profesyonel kurulum.",
            areaServed: { "@type": "Country", name: "TR" },
            provider: {
              "@type": "LocalBusiness",
              name: "Sahneva",
              url: "https://www.sahneva.com",
              telephone: "+90 545 304 8671",
              address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Çadır Paketleri",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Pagoda 5×5 / 6×6 m",
                  description: "Modüler pagoda çadırlar; yan branda, kapı–pencere, yağmur oluğu seçenekleri.",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Şeffaf / Dome Çadır",
                  description: "Davet ve lansmanlar için şeffaf kubbe veya PVC branda uygulamaları.",
                  availability: "https://schema.org/InStock",
                },
                {
                  "@type": "Offer",
                  name: "Endüstriyel Depolama Çadırı",
                  description: "Geniş açıklıklı iskelet; uzun süreli kullanım, forklift girişine uygun çözümler.",
                  availability: "https://schema.org/InStock",
                },
              ],
            },
          }),
        }}
      />
      <Script
        id="ld-breadcrumb-cadir"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://www.sahneva.com" },
              { "@type": "ListItem", position: 2, name: "Çadır Kiralama", item: "https://www.sahneva.com/cadir-kiralama" },
            ],
          }),
        }}
      />
    </main>
  );
}
