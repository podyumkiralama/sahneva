// app/(site)/page.js
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback } from "react";

// Büyük bileşenleri lazy-load (hydration sonrası)
const ServicesTabs = dynamic(() => import("../../components/ServicesTabs"), { ssr: false });
const ProjectsGallery = dynamic(() => import("../../components/ProjectsGallery"), { ssr: false });
const CorporateEvents = dynamic(() => import("../../components/CorporateEvents"), { ssr: false });
const Faq = dynamic(() => import("../../components/Faq"), { ssr: false });

export default function HomePage() {
  // CTA tıklamalarında burst efekti
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
        el.style.setProperty("--burst-c1", i % 2 ? "#22c55e" : "#6d28d9");
        el.style.setProperty("--burst-c2", i % 2 ? "#6d28d9" : "#22c55e");
        const s = 6 + Math.random() * 6;
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), life + 100);
      }
    } catch {}
  }, []);

  return (
    <main id="main" role="main">
      {/* HERO */}
      <section className="full-bleed relative isolate">
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva sahne, podyum, LED ekran ve ses-ışık sistemleriyle kurulmuş etkinlik sahnesi"
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="100vw"
          className="object-cover will-change-transform"
          quality={60}
          placeholder="blur"
          blurDataURL="/img/hero-bg.webp"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container py-20 md:py-32 text-center">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
          </h1>
          <p className="text-white/95 text-lg md:text-xl mb-8">
            Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama hizmetleri.
            Hızlı teslim, uygun fiyat, profesyonel teknik ekip.
          </p>

          {/* CTA butonları */}
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
              onClick={burst}
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
                <span aria-hidden>{icon}</span>
                <span>{label}</span>
              </li>
            ))}
          </ul>

          {/* Ek CTA */}
          <div className="mt-10 text-center">
            <div className="text-5xl mb-3" aria-hidden>
              🎧
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2">
              Organizasyonunuz için Ücretsiz Danışmanlık
            </h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Etkinliğiniz için en uygun sahne, podyum, ses-ışık ve LED ekran çözümlerini birlikte planlayalım.
            </p>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="section-lazy">
        <ServicesTabs />
      </section>

      {/* GALERİ */}
      <section className="section-lazy">
        <ProjectsGallery />
      </section>

      {/* AVANTAJLAR */}
      <section className="container py-16 section-lazy">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Bizi Neden Tercih Etmelisiniz?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["⭐", "Yüksek Müşteri Memnuniyeti", "Her organizasyonda %100’e yakın müşteri memnuniyeti sağlıyoruz."],
            ["⚡", "Hızlı ve Profesyonel Kurulum", "Aynı gün içinde sahne, podyum ve ekipmanlarınızı anahtar teslim kuruyoruz."],
            ["🎤", "Güncel ve Güçlü Ekipmanlar", "LED ekran, ses-ışık sistemleri, çadır ve podyum çözümlerinde en yeni teknolojiler."],
            ["👷", "Deneyimli Teknik Ekip", "Güvenli ve planlı kurulum için profesyonel ekibimiz her zaman yanınızda."],
            ["💰", "Uygun Fiyat Garantisi", "Türkiye genelinde rekabetçi fiyatlarla kaliteli hizmet sunuyoruz."],
            ["🚚", "Türkiye Geneli Hizmet", "İstanbul’dan Adana’ya, Türkiye’nin her yerinde etkinlik kurulumu yapıyoruz."],
          ].map(([icon, title, desc], i) => (
            <div key={i} className="card" itemScope itemType="https://schema.org/Offer">
              <span className="text-3xl" aria-hidden>
                {icon}
              </span>
              <h3 className="font-semibold text-lg mt-2 mb-1" itemProp="name">
                {title}
              </h3>
              <p className="text-sm text-neutral-600" itemProp="description">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KURUMSAL + SSS */}
      <section className="section-lazy">
        <CorporateEvents />
        <Faq />
      </section>
    </main>
  );
}