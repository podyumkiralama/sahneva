"use client";
import { useEffect, useRef, useCallback } from "react";

export default function HeroCtasClient() {
  const layerRef = useRef(null);

  // Overlay katmanını bir kere oluştur
  useEffect(() => {
    const layer = document.createElement("div");
    layer.className = "burst-layer";
    document.body.appendChild(layer);
    layerRef.current = layer;
    return () => layer.remove();
  }, []);

  const burst = useCallback((e) => {
    const layer = layerRef.current;
    if (!layer) return;

    // Tetik noktasını oku (tek okuma fazı)
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? 100;

    const n = 10;
    const life = 600;

    // DocumentFragment ile tek seferde ekle (DOM churn yok)
    const frag = document.createDocumentFragment();

    for (let i = 0; i < n; i++) {
      const el = document.createElement("span");
      el.className = "burst-particle";

      // renkleri değiştir
      if (i % 2 === 0) {
        el.style.setProperty("--burst-c1", "#6d28d9");
      } else {
        el.style.setProperty("--burst-c1", "#22c55e");
      }

      // başlangıç konumu
      el.style.left = `${x}px`;
      el.style.top  = `${y}px`;
      el.style.setProperty("--life", `${life}ms`);

      // hedef transform vektörleri
      const angle = (Math.PI * 2 * i) / n + Math.random() * 0.35;
      const dist  = 36 + Math.random() * 34;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist;
      const rot = (Math.random() * 80 - 40).toFixed(1);

      // İlk karede start (0)
      el.style.transform = `translate3d(0,0,0) rotate(0deg)`;

      // fragment’e ekle
      frag.appendChild(el);

      // Sonraki frame’de hedefe götür (yalnızca transform/opacity)
      requestAnimationFrame(() => {
        // compositing only → layout yok
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${rot}deg)`;
        el.style.opacity = "0";
      });

      // temizle
      setTimeout(() => el.remove(), life + 80);
    }

    // Tek seferde DOM’a ekle
    layer.appendChild(frag);
  }, []);

  return (
    <div className="flex justify-center gap-4">
      <a
        href="tel:+905453048671"
        className="btn btn-primary"
        aria-label="Telefonla hemen ara"
        onClick={burst}
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
  );
}
