// components/ProjectsGallery.js
"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";

// Kart kapakları için hedef genişlikler (750w yerine 640/828/1080 seçilsin)
const COVER_SIZES =
  "(max-width: 640px) 320px, " +   // telefon -> DPR=2 ≈ 640w
  "(max-width: 1024px) 480px, " +  // tablet (2 sütun) -> DPR=2 ≈ 960w (~1080w seçilir)
  "414px";                         // ≥1024px, 3 sütun -> DPR=2 ≈ 828w


// Lightbox büyük görsel
const LIGHTBOX_SIZES = "(max-width: 1024px) 100vw, 1024px";

// Görseller /public/img/galeri altında
const GALLERIES = {
  "Podyum Kiralama": [
    "/img/galeri/podyum-kiralama-1.webp",
    "/img/galeri/podyum-kiralama-2.webp",
    "/img/galeri/podyum-kiralama-3.webp",
    "/img/galeri/podyum-kiralama-4.webp",
    "/img/galeri/podyum-kiralama-5.webp",
    "/img/galeri/podyum-kiralama-6.webp",
    "/img/galeri/podyum-kiralama-7.webp",
    "/img/galeri/podyum-kiralama-8.webp",
    "/img/galeri/podyum-kiralama-9.webp",
    "/img/galeri/podyum-kiralama-10.webp",
    "/img/galeri/podyum-kiralama-11.webp",
    "/img/galeri/podyum-kiralama-12.webp",
    "/img/galeri/podyum-kiralama-13.webp",
    "/img/galeri/podyum-kiralama-14.webp",
    "/img/galeri/podyum-kiralama-15.webp",
    "/img/galeri/podyum-kiralama-16.webp",
    "/img/galeri/podyum-kiralama-17.webp",
    "/img/galeri/podyum-kiralama-18.webp",
    "/img/galeri/podyum-kiralama-19.webp",
    "/img/galeri/podyum-kiralama-20.webp",
    "/img/galeri/podyum-kiralama-21.webp",
    "/img/galeri/podyum-kiralama-22.webp",
    "/img/galeri/podyum-kiralama-23.webp",
    "/img/galeri/podyum-kiralama-24.webp",
    "/img/galeri/podyum-kiralama-25.webp",
    "/img/galeri/podyum-kiralama-26.webp",
    "/img/galeri/podyum-kiralama-27.webp",
    "/img/galeri/podyum-kiralama-28.webp",
    "/img/galeri/podyum-kiralama-29.webp",
    "/img/galeri/podyum-kiralama-30.webp",
    "/img/galeri/podyum-kiralama-31.webp",
    "/img/galeri/podyum-kiralama-32.webp",
    "/img/galeri/podyum-kiralama-33.webp",
    "/img/galeri/podyum-kiralama-34.webp",
    "/img/galeri/podyum-kiralama-35.webp",
    "/img/galeri/podyum-kiralama-36.webp",
  ],
  "LED Ekran Kiralama": [
    "/img/galeri/led-ekran-kiralama-1.webp",
    "/img/galeri/led-ekran-kiralama-2.webp",
    "/img/galeri/led-ekran-kiralama-3.webp",
    "/img/galeri/led-ekran-kiralama-4.webp",
    "/img/galeri/led-ekran-kiralama-5.webp",
    "/img/galeri/led-ekran-kiralama-6.webp",
    "/img/galeri/led-ekran-kiralama-7.webp",
    "/img/galeri/led-ekran-kiralama-8.webp",
    "/img/galeri/led-ekran-kiralama-9.webp",
    "/img/galeri/led-ekran-kiralama-10.webp",
    "/img/galeri/led-ekran-kiralama-11.webp",
    "/img/galeri/led-ekran-kiralama-12.webp",
    "/img/galeri/led-ekran-kiralama-13.webp",
    "/img/galeri/led-ekran-kiralama-14.webp",
    "/img/galeri/led-ekran-kiralama-15.webp",
    "/img/galeri/led-ekran-kiralama-16.webp",
    "/img/galeri/led-ekran-kiralama-17.webp",
    "/img/galeri/led-ekran-kiralama-18.webp",
    "/img/galeri/led-ekran-kiralama-19.webp",
    "/img/galeri/led-ekran-kiralama-20.webp",
    "/img/galeri/led-ekran-kiralama-21.webp",
    "/img/galeri/led-ekran-kiralama-22.webp",
    "/img/galeri/led-ekran-kiralama-23.webp",
    "/img/galeri/led-ekran-kiralama-24.webp",
    "/img/galeri/led-ekran-kiralama-25.webp",
    "/img/galeri/led-ekran-kiralama-26.webp",
    "/img/galeri/led-ekran-kiralama-27.webp",
    "/img/galeri/led-ekran-kiralama-28.webp",
    "/img/galeri/led-ekran-kiralama-29.webp",
    "/img/galeri/led-ekran-kiralama-30.webp",
    "/img/galeri/led-ekran-kiralama-31.webp",
    "/img/galeri/led-ekran-kiralama-32.webp",
    "/img/galeri/led-ekran-kiralama-33.webp",
    "/img/galeri/led-ekran-kiralama-34.webp",
    "/img/galeri/led-ekran-kiralama-35.webp",
    "/img/galeri/led-ekran-kiralama-36.webp",
  ],
  "Çadır Kiralama": [
    "/img/galeri/cadir-kiralama-1.webp",
    "/img/galeri/cadir-kiralama-2.webp",
    "/img/galeri/cadir-kiralama-3.webp",
    "/img/galeri/cadir-kiralama-4.webp",
    "/img/galeri/cadir-kiralama-5.webp",
    "/img/galeri/cadir-kiralama-6.webp",
    "/img/galeri/cadir-kiralama-7.webp",
    "/img/galeri/cadir-kiralama-8.webp",
    "/img/galeri/cadir-kiralama-9.webp",
    "/img/galeri/cadir-kiralama-10.webp",
    "/img/galeri/cadir-kiralama-11.webp",
    "/img/galeri/cadir-kiralama-12.webp",
    "/img/galeri/cadir-kiralama-13.webp",
    "/img/galeri/cadir-kiralama-14.webp",
    "/img/galeri/cadir-kiralama-15.webp",
    "/img/galeri/cadir-kiralama-16.webp",
    "/img/galeri/cadir-kiralama-17.webp",
    "/img/galeri/cadir-kiralama-18.webp",
    "/img/galeri/cadir-kiralama-19.webp",
  ],
};

export default function ProjectsGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const open = (groupTitle, images, startIndex = 0) => {
    setTitle(groupTitle);
    setItems(images);
    setIndex(startIndex);
    setIsOpen(true);
    requestAnimationFrame(() => setAnim(true));
  };

  const close = useCallback(() => {
    setAnim(false);
    setTimeout(() => setIsOpen(false), 180);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) prev();
    else next();
  };

  return (
    <section className="container py-14 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Yaptıklarımız</h2>

      {/* 1 / 2 / 3 sütun grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(GALLERIES).map(([groupTitle, images]) => {
          const cover = images[0];
          return (
            <div key={groupTitle} className="space-y-3">
              <h3 className="text-lg font-semibold">{groupTitle}</h3>

              <button
                type="button"
                onClick={() => open(groupTitle, images, 0)}
                className="group relative w-full h-44 md:h-56 overflow-hidden rounded-2xl border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
                aria-label={`${groupTitle} galeriyi aç`}
              >
                <Image
                  src={cover}
                  alt={`${groupTitle} kapak görseli`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes={COVER_SIZES}
                  quality={60}
                  decoding="async"
                  fetchPriority="low"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
                  {images.length} fotoğraf
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${
            anim ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} lightbox`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2"
            onClick={close}
            aria-label="Kapat"
          >
            ✕
          </button>

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-3xl md:text-5xl shadow-lg transition"
            onClick={prev}
            aria-label="Önceki"
          >
            ‹
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-3xl md:text-5xl shadow-lg transition"
            onClick={next}
            aria-label="Sonraki"
          >
            ›
          </button>

          <div
            className={`relative w-full max-w-5xl aspect-[16/10] transform transition-transform duration-200 ${
              anim ? "scale-100" : "scale-95"
            }`}
          >
            <Image
              key={items[index]}
              src={items[index]}
              alt={`${title} görseli ${index + 1}`}
              fill
              className="object-contain"
              sizes={LIGHTBOX_SIZES}
              quality={80}
              priority
              decoding="async"
            />
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white/90 text-sm">
            {title} — {index + 1}/{items.length}
          </div>
        </div>
      )}
    </section>
  );
}


