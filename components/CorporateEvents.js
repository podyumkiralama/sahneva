// components/CorporateEvents.js
"use client";

import Image from "next/image";
import Link from "next/link";

// Grid: <768px 1 sütun, >=768px 3 sütun -> sizes buna göre
const CARD_SIZES = "(max-width: 768px) 100vw, 33vw";

export default function CorporateEvents() {
  return (
    <section className="container py-16" aria-labelledby="kurumsal-heading">
      <h2 id="kurumsal-heading" className="text-2xl md:text-3xl font-bold text-center mb-4">
        Kurumsal Organizasyonlar
      </h2>

      <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-10">
        Lansman, konferans, bayi toplantısı ve kurumsal etkinlikleriniz için
        sahne, podyum, LED ekran, ses–ışık ve teknik operasyonu tek çatı altında sunuyoruz.
      </p>

      {/* 3 ana kullanım kartı */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Lansman */}
        <article className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="relative h-40">
            <Image
              src="/img/kurumsal/lansman.webp"
              alt="Kurumsal lansman etkinliği için sahne ve ekran kurulumu"
              fill
              sizes={CARD_SIZES}
              className="object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              quality={62}
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-1">Ürün Lansmanları</h3>
            <p className="text-sm text-neutral-600 mb-4">
              LED ekran kurgu, sahne tasarımı, ışık şovları ve canlı yayın altyapısıyla etkileyici sunumlar.
            </p>
            <Link href="/iletisim" prefetch={false} className="text-primary font-semibold hover:underline">
              Teklif Al
            </Link>
          </div>
        </article>

        {/* Konferans */}
        <article className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="relative h-40">
            <Image
              src="/img/kurumsal/konferans.webp"
              alt="Konferans ve kongre için sahne ve ses-ışık sistemleri"
              fill
              sizes={CARD_SIZES}
              className="object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              quality={62}
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-1">Konferans & Kongre</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Çoklu mikrofon, simultane çeviri, sunum yönetimi ve kayıt çözümleriyle kusursuz akış.
            </p>
            <Link href="/iletisim" prefetch={false} className="text-primary font-semibold hover:underline">
              Teklif Al
            </Link>
          </div>
        </article>

        {/* Bayi Toplantısı */}
        <article className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition overflow-hidden">
          <div className="relative h-40">
            <Image
              src="/img/kurumsal/bayi-toplantisi.webp"
              alt="Bayi toplantısı için sahne, ekran ve ışık kurulumu"
              fill
              sizes={CARD_SIZES}
              className="object-cover"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              quality={62}
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-1">Bayi & İç İletişim</h3>
            <p className="text-sm text-neutral-600 mb-4">
              Kurumsal kimliğe uygun sahne–dekor, çoklu ekran, video–ses yönetimi ve teknik ekip.
            </p>
            <Link href="/iletisim" prefetch={false} className="text-primary font-semibold hover:underline">
              Teklif Al
            </Link>
          </div>
        </article>
      </div>

      {/* Avantajlar şeridi */}
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Avantajlar">
        <div className="flex items-center gap-2 rounded-xl border bg-white p-4">
          <span className="text-2xl" aria-hidden="true">⚡</span>
          <span className="text-sm font-medium">Aynı Gün Kurulum</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border bg-white p-4">
          <span className="text-2xl" aria-hidden="true">🎛</span>
          <span className="text-sm font-medium">Güncel Ekipman Parkı</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border bg-white p-4">
          <span className="text-2xl" aria-hidden="true">👷</span>
          <span className="text-sm font-medium">Deneyimli Teknik Ekip</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border bg-white p-4">
          <span className="text-2xl" aria-hidden="true">🛡</span>
          <span className="text-sm font-medium">Güvenlik & Yedek Plan</span>
        </div>
      </div>

      {/* CTA bandı */}
      <div className="mt-10 rounded-2xl bg-primary/5 border p-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-2">Kurumsal etkinliğinizi anahtar teslim planlayalım</h3>
        <p className="text-neutral-700 mb-4">
          Sahne, podyum, LED ekran, ses–ışık ve yayın çözümleri için hemen iletişime geçin.
        </p>
        <div className="flex justify-center gap-3">
          <a href="tel:+905453048671" className="btn btn-primary" aria-label="Telefonla görüş">
            Telefonla Görüş
          </a>
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C+kurumsal+etkinlik+i%C3%A7in+teklif+almak+istiyorum."
            rel="noopener"
            className="btn btn-accent"
            aria-label="WhatsApp üzerinden teklif iste"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
