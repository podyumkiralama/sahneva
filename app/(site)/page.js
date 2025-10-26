// app/(site)/page.js
"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense, useCallback } from "react";

// Ağır/etkileşimli bileşenleri dinamik yükle (ilk JS yükü düşer)
const ServicesTabs = dynamic(() => import("../../components/ServicesTabs"));
const ProjectsGallery = dynamic(() => import("../../components/ProjectsGallery"));
const ReviewBanner = dynamic(() => import("../../components/ReviewBanner")); // ← EKLENDİ

// Diğerleri nispeten hafifse direkt import kalabilir:
import CorporateEvents from "../../components/CorporateEvents";
import Faq from "../../components/Faq";

// ISR (B sürümündeki değeri kullanıyorsan onu yaz)
export const revalidate = 3600;

// Basit skeleton
function SectionSkeleton({ label = "İçerik yükleniyor..." }) {
  return (
    <div className="container py-14 md:py-16" role="status" aria-live="polite">
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
      <p className="sr-only">{label}</p>
    </div>
  );
}

export default function HomePage() {
  // CTA tıklamalarında görsel geri bildirim (globals.css → .burst-particle gerekir)
  const burst = useCallback((e) => {
    try {
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? 100;
      const n = 10;
      const life = 600;

      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.35;
        const dist = 36 + Math.random() * 34;
        el.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        el.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        el.style.setProperty("--dr", `${(Math.random() * 80 - 40).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        if (i % 2 === 0) {
          el.style.setProperty("--burst-c1", "#6d28d9");
          el.style.setProperty("--burst-c2", "#22c55e");
        } else {
          el.style.setProperty("--burst-c1", "#22c55e");
          el.style.setProperty("--burst-c2", "#6d28d9");
        }
        const s = 6 + Math.random() * 6;
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), life + 80);
      }
    } catch {}
  }, []);

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
      >
        Ana içeriğe atla
      </a>

      <main id="main">
        {/* HERO */}
        <div className="full-bleed relative">
          <Image
            src="/img/hero-bg.webp"
            alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu etkinlik sahnesi"
            fill
            priority
            sizes="100vw"
            className="object-cover will-change-transform"
            quality={62}
          />
          <div className="absolute inset-0 hero-overlay" />

          <div className="relative z-10 container py-20 md:py-32 text-center">
            {/* H1 anahtar kelimeli */}
            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
            </h1>
            <p className="text-white/95 text-lg md:text-xl mb-8">
              Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık
              sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.
            </p>

            {/* CTA’lar + burst efekti */}
            <div className="flex justify-center gap-4">
              <a
                href="tel:+905453048671"
                className="btn btn-primary"
                onClick={burst}
                aria-label="Telefonla hemen ara"
              >
                Hemen Ara
              </a>
              <a
                href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
                rel="noopener noreferrer"
                className="btn btn-accent"
                aria-label="WhatsApp üzerinden teklif iste"
                onClick={burst}
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
                  <span aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <div className="text-5xl mb-3" aria-hidden="true">🎧</div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                Organizasyonunuz için Ücretsiz Danışmanlık
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto">
                Etkinliğiniz için en doğru sahne, podyum, ses-ışık ve ekran
                çözümlerini ücretsiz danışmanlıkla birlikte planlayalım.
              </p>
            </div>
          </div>
        </div>

        {/* Bölümler — dinamik yükleme + skeleton */}
        <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
          <ServicesTabs />
        </Suspense>

        <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
          <ProjectsGallery />
        </Suspense>

        {/* EKLENEN: Müşteri Yorumları / ReviewBanner */}
        <Suspense fallback={<SectionSkeleton label="Yorumlar yükleniyor" />}>
          <ReviewBanner />
        </Suspense>

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
              ["💰", "Uygun Fiyat Garantisi", "Türkiye genelinde rekabetçi fiyatlarla kaliteli hizmet sunuyoruz."],
              ["🚚", "Türkiye Geneli Hizmet", "İstanbul’dan Adana’ya, Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz."],
            ].map(([icon, title, desc], i) => (
              <div key={i} className="card">
                <span className="text-3xl" aria-hidden="true">{icon}</span>
                <h3 className="font-semibold text-lg mt-2 mb-1">{title}</h3>
                <p className="text-sm text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CorporateEvents />
        <Faq />
      </main>
    </>
  );
}
