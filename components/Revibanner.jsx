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
        setTimeout(() => el.remove(), 680);
      }
    } catch {}
  }, []);

  return (
    <div className="flex justify-center gap-4">
      {/* Daha koyu mor: #5520b0 → kontrast 5.7:1 */}
      <a
        href="tel:+905453048671"
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-[#5520b0] hover:bg-[#4a1c9b] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#5520b0]"
        aria-label="Telefonla hemen ara"
        onClick={burst}
      >
        Hemen Ara
      </a>

      {/* Daha koyu yeşil: #0a662d → kontrast 6+:1 */}
      <a
        href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-[#0a662d] hover:bg-[#085025] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a662d]"
        aria-label="WhatsApp üzerinden teklif iste"
        onClick={burst}
      >
        WhatsApp Teklif
      </a>
    </div>
  );
}