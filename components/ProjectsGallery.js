"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const COVER_SIZES =
  "(max-width: 640px) 320px, (max-width: 1024px) 480px, 414px";

export default function ProjectsGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);

  // Odak tuşlarıyla (Esc, ←, →) kontrol
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % items.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const open = useCallback((idx) => {
    setActive(idx);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    // kapanış daha tepkisel olsun
    setTimeout(() => setIsOpen(false), 120);
  }, []);

  return (
    <section className="container py-14 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Yaptıklarımız</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <article key={it.slug} className="space-y-3">
            <h3 className="text-lg font-semibold">{it.title}</h3>

            <button
              type="button"
              aria-label={`${it.title} galeriyi aç`}
              onClick={() => open(idx)}
              className="group relative w-full h-44 md:h-56 overflow-hidden rounded-2xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              <Image
                src={it.cover}
                alt={`${it.title} kapak görseli`}
                fill
                sizes={COVER_SIZES}
                // 🔧 algılanan netlik için kaliteyi biraz yükselt
                quality={68}
                priority={idx === 0}
                fetchPriority={idx === 0 ? "low" : undefined}
                decoding={idx === 0 ? "async" : "async"}
                className="object-cover group-hover:scale-105 transition-transform"
              />
              {/* hover karartmayı %10 → %15 yaparak CTA/başlık okunurluğunu arttırdık */}
              <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
                {it.count} fotoğraf
              </span>
            </button>
          </article>
        ))}
      </div>

      {/* Lightbox / Dialog */}
      {isOpen && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Proje galeri"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-[92vw] max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={items[active].cover}
              alt={`${items[active].title} büyük görsel`}
              fill
              sizes="(max-width: 1024px) 92vw, 1024px"
              quality={80}
              className="object-contain"
              priority
            />

            {/* Kapat butonu — metni tam beyaz, arka planı biraz daha opak */}
            <button
              aria-label="Kapat"
              title="Kapat"
              onClick={close}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white bg-white/15 hover:bg-white/25 rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <span className="sr-only">Kapat</span>
              ✕
            </button>

            {/* Prev / Next */}
            <button
              aria-label="Önceki görsel"
              onClick={() =>
                setActive((i) => (i - 1 + items.length) % items.length)
              }
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full grid place-items-center bg-white/15 hover:bg-white/25 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              ‹
            </button>
            <button
              aria-label="Sonraki görsel"
              onClick={() => setActive((i) => (i + 1) % items.length)}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full grid place-items-center bg-white/15 hover:bg-white/25 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const items = [
  {
    slug: "podyum-kiralama",
    title: "Podyum Kiralama",
    cover: "/img/galeri/podyum-kiralama-1.webp",
    count: 36,
  },
  {
    slug: "led-ekran-kiralama",
    title: "LED Ekran Kiralama",
    cover: "/img/galeri/led-ekran-kiralama-1.webp",
    count: 36,
  },
  {
    slug: "cadir-kiralama",
    title: "Çadır Kiralama",
    cover: "/img/galeri/cadir-kiralama-1.webp",
    count: 19,
  },
];