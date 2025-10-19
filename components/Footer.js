"use client";

import Link from "next/link";
import { useCallback } from "react";

export default function Footer() {
  // Mini burst efekti (globals.css'teki .burst-particle ile uyumlu)
  const burst = useCallback((e) => {
    try {
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight - 80;
      const n = 10;
      const life = 600;

      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "burst-particle";
        const angle = (Math.PI * 2 * i) / n + Math.random() * 0.3;
        const dist = 36 + Math.random() * 36;
        const dx = Math.cos(angle) * dist + "px";
        const dy = Math.sin(angle) * dist + "px";
        el.style.setProperty("--dx", dx);
        el.style.setProperty("--dy", dy);
        el.style.setProperty("--dr", `${(Math.random() * 60 - 30).toFixed(1)}deg`);
        el.style.setProperty("--life", `${life}ms`);
        // renkler
        if (i % 2 === 0) {
          el.style.setProperty("--burst-c1", "#6d28d9");
          el.style.setProperty("--burst-c2", "#22c55e");
        } else {
          el.style.setProperty("--burst-c1", "#22c55e");
          el.style.setProperty("--burst-c2", "#6d28d9");
        }
        el.style.width = el.style.height = 6 + Math.random() * 6 + "px";
        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), life + 60);
      }
    } catch {}
  }, []);

  return (
    <footer className="bg-[#0f1115] bg-gradient-to-t from-[#0c0e12] to-[#12141a] text-gray-300 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6">
        {/* Sütun 1: Marka */}
        <section aria-labelledby="ft-brand">
          <h2 id="ft-brand" className="sr-only">Sahneva Hakkında</h2>
          <div className="flex items-center gap-2 text-white font-semibold mb-3">
            <span aria-hidden>⭐</span> <span>SAHNEVA</span>
          </div>
          <p className="text-sm leading-6">
            Etkinlik prodüksiyon & ekipman kiralama.
            <br />Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri.
          </p>

          {/* Sosyal */}
          <div className="flex gap-3 mt-4">
            <a
              href="https://www.instagram.com/sahnevaorganizasyon"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              onClick={burst}
            >
              <span aria-hidden>📷</span>
            </a>
            <a
              href="https://www.youtube.com/@sahneva"
              target="_blank"
              rel="noopener noreferrer me"
              aria-label="YouTube"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              onClick={burst}
            >
              <span aria-hidden>▶</span>
            </a>
          </div>
        </section>

        {/* Sütun 2: Hizmetler */}
        <nav aria-labelledby="ft-services">
          <h2 id="ft-services" className="text-white font-semibold mb-3 tracking-wide">
            Hizmetler
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/podyum-kiralama" className="hover:text-white transition-colors">Podyum Kiralama</Link></li>
            <li><Link href="/led-ekran-kiralama" className="hover:text-white transition-colors">LED Ekran Kiralama</Link></li>
            <li><Link href="/ses-isik-sistemleri" className="hover:text-white transition-colors">Ses &amp; Işık Sistemleri</Link></li>
            <li><Link href="/sahne-kiralama" className="hover:text-white transition-colors">Sahne Kiralama</Link></li>
            <li><Link href="/cadir-kiralama" className="hover:text-white transition-colors">Çadır Kiralama</Link></li>
          </ul>
        </nav>

        {/* Sütun 3: Hızlı Erişim */}
        <nav aria-labelledby="ft-quick">
          <h2 id="ft-quick" className="text-white font-semibold mb-3 tracking-wide">
            Hızlı Erişim
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
            <li><Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetler</Link></li>
            <li><Link href="/sss" className="hover:text-white transition-colors">Sık Sorulan Sorular</Link></li>
            <li><Link href="/kvkk" className="hover:text-white transition-colors">KVKK / Gizlilik</Link></li>

            {/* 🔽 EKLENDİ: Google Business bağlantıları */}
            <li>
              <a
                href="https://g.page/r/CZhkMzkNOdgnEBI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Google Haritalar'da Sahneva"
              >
                Google Haritalar’da bizi bulun
              </a>
            </li>
            <li>
              <a
                href="https://g.page/r/CZhkMzkNOdgnEBI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Google üzerinde Sahneva için yorum yazın"
              >
                Google’da yorum yaz ⭐
              </a>
            </li>
          </ul>
        </nav>

        {/* Sütun 4: İletişim */}
        <section aria-labelledby="ft-contact">
          <h2 id="ft-contact" className="text-white font-semibold mb-3 tracking-wide">
            İletişim
          </h2>

          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="opacity-70" aria-hidden>📍</span> İstanbul / Türkiye
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70" aria-hidden>📞</span>
              <a href="tel:+905453048671" className="hover:text-white font-semibold" onClick={burst}>
                +90 545 304 8671
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70" aria-hidden>✉️</span>
              <a href="mailto:info@sahneva.com" className="hover:text-white" onClick={burst}>
                info@sahneva.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70" aria-hidden>⏰</span> Hafta içi 09:00–19:00
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="tel:+905453048671"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]"
              onClick={burst}
            >
              📞 Hemen Ara
            </a>

            <a
              href="https://wa.me/905453048671?text=Merhaba%2C+teklif+almak+istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp üzerinden teklif iste"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]"
              onClick={burst}
            >
              💬 WhatsApp Teklif
            </a>
          </div>
        </section>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10 text-center text-xs text-gray-400 py-4">
        Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri.
        <br className="sm:hidden" />
        <span className="ml-2">© {new Date().getFullYear()} Sahneva — Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}