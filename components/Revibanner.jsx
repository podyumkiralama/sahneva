// components/Revibanner.jsx
"use client";

import React from "react";

export default function Revibanner() {
  return (
    <section
      className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-y"
      aria-labelledby="rb-heading"
    >
      <div className="container py-6 md:py-7 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        {/* Sol: başlık + açıklama */}
        <div className="max-w-2xl">
          <h2
            id="rb-heading"
            className="text-lg md:text-xl font-bold tracking-tight text-neutral-900"
          >
            Bizi Google’da değerlendirin
          </h2>
          <p className="text-sm md:text-base text-neutral-700 mt-1">
            Hizmetimizden memnun kaldıysanız kısa bir yorum bırakmanız bizi çok
            mutlu eder. Görüşleriniz, diğer müşterilere de yol gösterir. 🙌
          </p>
        </div>

        {/* Sağ: butonlar */}
        <div className="flex items-center gap-3">
          {/* Yüksek kontrastlı “Yorum Yaz” */}
          <a
            href="https://g.page/r/CZhkMzkNOdgnEBI/review"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google'da yorum yaz"
            className="
              inline-flex items-center gap-2 rounded-full
              px-4 py-2 font-semibold
              bg-amber-700 hover:bg-amber-800 text-white
              shadow-sm transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300
              focus-visible:ring-offset-2 focus-visible:ring-offset-white
            "
          >
            <span aria-hidden>⭐️⭐️⭐️⭐️⭐️</span>
            <span>Yorum Yaz</span>
          </a>

          {/* Konum / Yol tarifi - ikincil eylem */}
          <a
            href="https://maps.app.goo.gl/Ufpi5oUS6xenpvgu6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Haritalar'da konumu aç"
            className="
              inline-flex items-center gap-2 rounded-full
              px-4 py-2 font-semibold
              border border-neutral-300 text-neutral-900
              hover:bg-neutral-50
              focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300
              focus-visible:ring-offset-2 focus-visible:ring-offset-white
            "
          >
            <span aria-hidden>📍</span>
            <span>Haritada Aç</span>
          </a>
        </div>
      </div>
    </section>
  );
}