// components/HeroCtasClient.jsx
"use client";
import useBurst from "@/lib/useBurst";

export default function HeroCtasClient() {
  const burst = useBurst({
    mode: "body",
    radius: 36,
    spread: 34,
    life: 600,
    lifeJitter: 140,
    size: [6, 12],
    colors: ["#6d28d9", "#22c55e"],
    fallback: () => ({ x: window.innerWidth / 2, y: 110 }),
  });

  const baseBtn =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 min-w-[164px] " +
    "font-semibold tracking-wide transition-colors shadow-sm " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  return (
    <div className="flex justify-center gap-4" role="group" aria-label="Hızlı iletişim ve teklif alma seçenekleri">
      {/* Kontrastı artırılmış: indigo-700/800 + beyaz metin */}
      <a
        href="tel:+905453048671"
        className={`${baseBtn} bg-indigo-700 hover:bg-indigo-800 text-white focus-visible:ring-indigo-300`}
        onClick={burst}
        aria-label="Hemen Ara – Telefonla bize ulaşın (+90 545 304 8671)"
        title="+90 545 304 8671"
      >
        Hemen Ara
      </a>

      {/* Kontrastı artırılmış: emerald-700/800 + beyaz metin */}
      <a
        href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
        target="_blank"
        rel="external noopener noreferrer"
        className={`${baseBtn} bg-emerald-700 hover:bg-emerald-800 text-white focus-visible:ring-emerald-300`}
        aria-label="WhatsApp Teklif – WhatsApp üzerinden teklif iste (yeni sekmede açılır)"
        onClick={burst}
      >
        WhatsApp Teklif
      </a>
    </div>
  );
}
