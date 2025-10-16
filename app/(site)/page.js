// app/page.jsx
"use client";

import ServicesTabs from "../../components/ServicesTabs";
import ProjectsGallery from "../../components/ProjectsGallery";
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <div className="full-bleed relative">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva etkinlik prodüksiyon sahnesi: ses ve ışık ekipmanlarıyla kurulu sahne"
          fill
          priority
          fetchPriority="high"
          decoding="sync"
          sizes="100vw"
          className="object-cover will-change-transform"
          quality={62}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Etkinlik Prodüksiyon &amp; Ekipman Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum
            hizmetleri. Hızlı teslim, uygun fiyat.
          </p>

          <div className="flex justify-center gap-4">
            <a href="tel:+905453048671" className="btn btn-primary">
              Hemen Ara
            </a>
            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
              rel="noopener"
              className="btn btn-accent"
              aria-label="WhatsApp üzerinden teklif iste"
            >
              WhatsApp Teklif
            </a>
          </div>

          {/* Güven rozetleri */}
          <ul className="mt-6 grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              ["⭐", "4.9 Müşteri Memnuniyeti"],
              ["🔧", "Aynı Gün Kurulum"],
              ["👷", "Profesyonel Teknik Ekip"],
            ].map(([icon, label], i) => (
              <li key={i} className="badge">
                <span>{icon}</span>
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
      </div>

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
            <div key={i} className="card">
              <span className="text-3xl">{icon}</span>
              <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
              <p className="text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CorporateEvents />
      <Faq />

      {/* ===== JSON-LD: WebSite + Organization + LocalBusiness + OfferCatalog + FAQ + Breadcrumb ===== */}
      <Script
        id="ld-home-graph"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://sahneva.com/#website",
                url: "https://sahneva.com/",
                name: "Sahneva",
                inLanguage: "tr-TR",
                publisher: { "@id": "https://sahneva.com/#organization" },
              },
              {
                "@type": "Organization",
                "@id": "https://sahneva.com/#organization",
                name: "Sahneva",
                url: "https://sahneva.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://sahneva.com/img/logo.png",
                },
                sameAs: [
                  "https://www.instagram.com/sahneva",
                  "https://www.youtube.com/@sahneva",
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    telephone: "+90 545 304 8671",
                    areaServed: "TR",
                    availableLanguage: ["Turkish"],
                  },
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://sahneva.com/#business",
                name: "Sahneva",
                image: "https://sahneva.com/img/logo.png",
                url: "https://sahneva.com",
                telephone: "+90 545 304 8671",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "İstanbul",
                  addressCountry: "TR",
                },
                priceRange: "$$",
                openingHours: "Mo-Fr 09:00-19:00",
                areaServed: "TR",
                parentOrganization: { "@id": "https://sahneva.com/#organization" },
              },
              {
                "@type": "OfferCatalog",
                "@id": "https://sahneva.com/#catalog",
                name: "Etkinlik Prodüksiyon ve Kiralama Hizmetleri",
                url: "https://sahneva.com/hizmetler",
                itemListElement: [
                  {
                    "@type": "Offer",
                    url: "https://sahneva.com/podyum-kiralama",
                    itemOffered: {
                      "@type": "Service",
                      name: "Podyum Kiralama",
                      serviceType: "Podyum Kiralama",
                      areaServed: "TR",
                      provider: { "@id": "https://sahneva.com/#business" },
                      description:
                        "Modüler podyum; kaymaz kaplama, korkuluk ve rampa seçenekleriyle güvenli kurulum.",
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://sahneva.com/led-ekran-kiralama",
                    itemOffered: {
                      "@type": "Service",
                      name: "LED Ekran Kiralama",
                      serviceType: "LED Ekran Kiralama",
                      areaServed: "TR",
                      provider: { "@id": "https://sahneva.com/#business" },
                      description:
                        "P2–P6 iç/dış mekân LED ekran; yüksek parlaklık, yayın yönetimi ve teknik ekip.",
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://sahneva.com/ses-isik-sistemleri",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ses ve Işık Sistemleri",
                      serviceType: "Ses & Işık Kiralama",
                      areaServed: "TR",
                      provider: { "@id": "https://sahneva.com/#business" },
                      description:
                        "Line array, robot ışık, DMX kontrol; kurulum ve canlı yönetim dahil.",
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://sahneva.com/sahne-kiralama",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sahne Kurulumu",
                      serviceType: "Sahne Kiralama",
                      areaServed: "TR",
                      provider: { "@id": "https://sahneva.com/#business" },
                      description:
                        "Truss ve güvenli taşıyıcı sistemler ile özel ölçü sahne kurulumu.",
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://sahneva.com/cadir-kiralama",
                    itemOffered: {
                      "@type": "Service",
                      name: "Çadır Kiralama",
                      serviceType: "Etkinlik Çadırı Kiralama",
                      areaServed: "TR",
                      provider: { "@id": "https://sahneva.com/#business" },
                      description:
                        "Endüstriyel/etkinlik tipi çadır; zemin, aydınlatma ve iklimlendirme çözümleri.",
                    },
                  },
                  {
                    "@type": "Offer",
                    url: "https://sahneva.com/masa-sandalye-kiralama",
                    itemOffered: {
                      "@type": "Service",
                      name: "Masa & Sandalye Kiralama",
                      serviceType: "Mobilya Kiralama",
                      areaServed: "TR",
                      provider: { "@id": "https://sahneva.com/#business" },
                      description:
                        "Banket, kokteyl ve konferans düzeni için kurulum ve yerleşim.",
                    },
                  },
                ],
              },
              {
                "@type": "FAQPage",
                "@id": "https://sahneva.com/#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Podyum kurulumu ne kadar sürer?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Podyum kurulumu, ölçülere ve zemin koşullarına göre genellikle 1–3 saat sürer.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "LED ekranlar dış mekanda kullanılabilir mi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Evet, IP65 korumalı LED ekranlarımız açık havada güvenle kullanılabilir.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Ses ve ışık sistemlerinde teknik ekip sağlıyor musunuz?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Evet, kurulum ve etkinlik boyunca teknik ekip desteği veriyoruz.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Çadır kiralamada kurulum ve söküm dahil mi?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Evet, kurulum ve söküm dâhil; zemin kaplama ve aksesuarlar opsiyoneldir.",
                    },
                  },
                ],
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://sahneva.com/#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Anasayfa",
                    item: "https://sahneva.com/",
                  },
                ],
              },
            ],
          }),
        }}
      />
      {/* ===== /JSON-LD ===== */}
    </main>
  );
}