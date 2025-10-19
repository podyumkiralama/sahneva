// components/Reviewbanner.jsx
"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const REVIEW_URL = "https://g.page/r/CZhkMzkNOdgnEBI/review";
const LS_KEY = "rvb.dismissed.v1";

export default function ReviewBanner({
  mode = "sticky",        // "sticky" | "inline"
  className = "",
  title = "Sahneva Organizasyon’u Google’da değerlendirin",
  subtitle = "Görüşünüz bizim için çok değerli. 1 dakikanızı ayırır mısınız?",
  ctaLabel = "⭐ Yorum Yaz",
}) {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // İlk render’da LS kontrolü
    const dismissed = typeof window !== "undefined" && localStorage.getItem(LS_KEY) === "1";
    setHidden(dismissed);
  }, []);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(LS_KEY, "1");
    } catch {}
    setHidden(true);
  }, []);

  if (hidden) return null;

  // Ortak içerik
  const Content = () => (
    <div className="flex items-center gap-3">
      <div
        aria-hidden
        className="hidden sm:flex items-center justify-center rounded-full bg-yellow-400/15 text-yellow-500 w-10 h-10 text-xl"
      >
        ★
      </div>
      <div className="min-w-0">
        <p className="text-sm sm:text-base font-semibold text-neutral-900">
          {title}
        </p>
        <p className="text-xs sm:text-sm text-neutral-600">
          {subtitle}
        </p>
      </div>

      <div className="flex-1" />

      <a
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 inline-flex items-center gap-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40"
        aria-label="Google’da yorum yaz"
      >
        ⭐ {ctaLabel}
      </a>

      <button
        type="button"
        onClick={dismiss}
        className="ml-2 -mr-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300"
        aria-label="Bu bildirimı kapat"
      >
        ✕
      </button>
    </div>
  );

  if (mode === "inline") {
    return (
      <section
        className={`container my-6 rounded-2xl border bg-white shadow-sm p-4 sm:p-5 ${className}`}
        role="region"
        aria-label="Google yorum daveti"
      >
        <Content />
      </section>
    );
  }

  // default: sticky bottom
  return (
    <div
      role="region"
      aria-label="Google yorum daveti"
      className={`fixed bottom-3 left-3 right-3 z-[60] ${className}`}
    >
      <div className="mx-auto max-w-3xl rounded-2xl border bg-white shadow-lg p-3 sm:p-4">
        <Content />
      </div>
    </div>
  );
}
