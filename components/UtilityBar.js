// components/UtilityBar.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function UtilityBar() {
  const [fs, setFs] = useState(100);      // font-size %
  const [hc, setHc] = useState(false);    // high-contrast
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const pathname = usePathname();

  // ---- load preferences
  useEffect(() => {
    const s = Number(localStorage.getItem("ux:fs") || "100");
    const c = localStorage.getItem("ux:hc") === "1";
    setFs(Math.min(130, Math.max(85, s)));
    setHc(c);
  }, []);

  // ---- apply prefs to <html>
  useEffect(() => {
    const html = document.documentElement;
    html.style.setProperty("--fs", fs + "%");
    localStorage.setItem("ux:fs", String(fs));
  }, [fs]);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("hc", hc);
    localStorage.setItem("ux:hc", hc ? "1" : "0");
  }, [hc]);

  // ---- reset search input when route changes
  useEffect(() => {
    setSearchOpen(false);
    if (searchRef.current) searchRef.current.value = "";
  }, [pathname]);

  // ---- burst (patlama) efekti
  const burst = (e) => {
    const host = e.currentTarget;
    const rect = host.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const N = 14; // parçacık sayısı
    for (let i = 0; i < N; i++) {
      const el = document.createElement("span");
      el.className = "burst-particle";
      const r = 28 + Math.random() * 28; // yarıçap
      const t = Math.random() * Math.PI * 2;
      el.style.setProperty("--dx", `${Math.cos(t) * r}px`);
      el.style.setProperty("--dy", `${Math.sin(t) * r}px`);
      el.style.setProperty("--dr", `${(Math.random() * 40 - 20)}deg`);
      el.style.left = `${x}px`;
      el.style.top  = `${y}px`;
      el.style.width = el.style.height = `${6 + Math.random() * 6}px`;
      if (Math.random() > 0.5) {
        el.style.setProperty("--burst-c1", "#6d28d9");
        el.style.setProperty("--burst-c2", "#22c55e");
      } else {
        el.style.setProperty("--burst-c1", "#15803d");
        el.style.setProperty("--burst-c2", "#a78bfa");
      }
      host.appendChild(el);
      setTimeout(() => el.remove(), 600);
    }
  };

  // ---- in-page search (temel)
  const doFind = (q) => {
    if (!q) return;
    // window.find ile ilk eşleşmeye atla (basit çözüm, SSR sayfalarında da çalışır)
    const ok = window.find(q, false, false, true, false, false, false);
    if (!ok) {
      // bulunamazsa yukarı kaydırıp tekrar dene
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => window.find(q), 250);
    }
  };

  return (
    <>
      {/* Alt yardımcı çubuk (mobile-first) */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 border-t bg-white/95 backdrop-blur pb-safe shadow-sm lg:hidden"
        role="navigation"
        aria-label="Hızlı araçlar"
      >
        <div className="grid grid-cols-4">
          <button
            className="bar-item"
            onClick={(e) => { setFs((v) => Math.max(85, v - 5)); burst(e); }}
            aria-label="Yazı boyutunu küçült"
            title="Yazı -"
          >
            A-
          </button>

          <button
            className="bar-item"
            onClick={(e) => { setFs(100); burst(e); }}
            aria-label="Yazı boyutunu sıfırla"
            title="Sıfırla"
          >
            A•A
          </button>

          <button
            className="bar-item"
            onClick={(e) => { setFs((v) => Math.min(130, v + 5)); burst(e); }}
            aria-label="Yazı boyutunu büyüt"
            title="Yazı +"
          >
            A+
          </button>

          <button
            className="bar-item"
            onClick={(e) => { setHc((v) => !v); burst(e); }}
            aria-pressed={hc}
            aria-label="Kontrast modunu değiştir"
            title="Kontrast"
          >
            ⛶
          </button>
        </div>

        {/* Arama satırı aç/kapa */}
        <div className="px-3 pb-3">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            className="mt-2 w-full h-10 rounded-lg border grid place-items-center text-sm font-medium hover:bg-neutral-50"
            aria-expanded={searchOpen}
            aria-controls="utilitybar-search"
            title="Site içinde ara"
          >
            🔍 Site içinde ara
          </button>
          <div id="utilitybar-search" hidden={!searchOpen} className="mt-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = searchRef.current?.value?.trim();
                if (q) doFind(q);
              }}
              className="flex gap-2"
            >
              <input
                ref={searchRef}
                type="search"
                inputMode="search"
                placeholder="Aramak için yazın…"
                className="flex-1 h-10 rounded-lg border px-3 text-sm"
                aria-label="Sayfada ara"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-lg bg-[#6d28d9] text-white font-semibold hover:bg-[#5b21b6] transition"
                onClick={burst}
                title="Ara"
              >
                Ara
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Aynı çubuğun masaüstü sürümü (üst sabit) */}
      <div
        className="hidden lg:block fixed top-[72px] right-4 z-30"
        aria-hidden="true"
      >
        <div className="rounded-2xl border bg-white/95 backdrop-blur shadow p-2 grid gap-2">
          <button className="bar-item rounded-lg w-12" onClick={(e)=>{setFs((v)=>Math.max(85,v-5)); burst(e);}}>A-</button>
          <button className="bar-item rounded-lg w-12" onClick={(e)=>{setFs(100); burst(e);}}>A•A</button>
          <button className="bar-item rounded-lg w-12" onClick={(e)=>{setFs((v)=>Math.min(130,v+5)); burst(e);}}>A+</button>
          <button className="bar-item rounded-lg w-12" onClick={(e)=>{setHc((v)=>!v); burst(e);}}>{hc ? "HC" : "⛶"}</button>
        </div>
      </div>
    </>
  );
}