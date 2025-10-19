// components/HeroCtasClient.jsx
"use client";
import { useCallback } from "react";

export default function HeroCtasClient() {
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
        el.style.setProperty("--life", `600ms`);
        el.style.setProperty("--burst-c1", "#22c55e");
        el.style.setProperty("--burst-c2", "#6d28d9");
        const s = 6 + Math.random() * 6;
        el.style.width = el.style.height = s + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 680);
      }
    } catch {}
  }, []);

  return (
    <div
      className="
        mx-auto max-w-xl
        flex flex-col sm:flex-row items-stretch sm:items-center
        gap-3 sm:gap-4
      "
    >
      <a
        href="tel:+905453048671"
        className="
          w-full sm:w-auto
          inline-flex justify-center items-center
          rounded-xl px-5 py-3 text-base font-semibold
          text-white bg-[#4f46e5] hover:bg-[#4338ca]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f]
          shadow-[0_6px_20px_-6px_rgba(79,70,229,.6)]
        "
        onClick={burst}
        aria-label="Telefonla hemen ara"
      >
        Hemen Ara
      </a>

      <a
        href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-full sm:w-auto
          inline-flex justify-center items-center
          rounded-xl px-5 py-3 text-base font-semibold
          text-white bg-[#15803d] hover:bg-[#166534]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f]
          shadow-[0_6px_20px_-6px_rgba(21,128,61,.6)]
        "
        aria-label="WhatsApp üzerinden teklif iste"
        onClick={burst}
      >
        WhatsApp Teklif
      </a>
    </div>
  );
}