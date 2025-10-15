"use client";

import { useEffect, useState } from "react";

const PHONE = "+90 545 304 8671";
const WHATSAPP = "905453048671";
const MAP_URL =
  "https://maps.google.com/?q=Sahneva";

export default function UtilityBar() {
  const [fs, setFs] = useState(100);         // font-size %
  const [hc, setHc] = useState(false);       // high-contrast
  const [showTop, setShowTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  // Load saved prefs
  useEffect(() => {
    const f = Number(localStorage.getItem("ux.fs") || "100");
    const h = localStorage.getItem("ux.hc") === "1";
    applyFs(f);
    applyHc(h);
    setFs(f);
    setHc(h);

    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function applyFs(val) {
    const clamped = Math.min(130, Math.max(90, val));
    document.documentElement.style.setProperty("--fs", clamped + "%");
  }
  function applyHc(enabled) {
    document.documentElement.classList.toggle("hc", !!enabled);
  }

  function incFs(step) {
    const next = Math.min(130, Math.max(90, fs + step));
    setFs(next);
    applyFs(next);
    localStorage.setItem("ux.fs", String(next));
  }
  function toggleHc() {
    const next = !hc;
    setHc(next);
    applyHc(next);
    localStorage.setItem("ux.hc", next ? "1" : "0");
  }

  function doSearch(e) {
    e?.preventDefault();
    if (!q.trim()) return setSearchOpen(false);
    // Varsayılan arama rotası
    window.location.href = `/search?q=${encodeURIComponent(q.trim())}`;
  }

  return (
    <>
      {/* Desktop: sağda dikey araç çubuğu */}
      <nav
        aria-label="Yardımcı araçlar"
        className="hidden lg:flex fixed right-4 top-1/3 z-[60] flex-col gap-2"
      >
        <ToolButton title="Yazı boyutu küçült (A-)" onClick={() => incFs(-5)}>
          A-
        </ToolButton>
        <ToolButton title="Yazı boyutu büyüt (A+)" onClick={() => incFs(+5)}>
          A+
        </ToolButton>
        <ToolButton
          ariaPressed={hc}
          title="Kontrastı artır / varsayılan"
          onClick={toggleHc}
        >
          ⬤◯
        </ToolButton>
        <ToolButton title="Sitede ara" onClick={() => setSearchOpen(true)}>
          🔍
        </ToolButton>
        {showTop && (
          <ToolButton
            title="Yukarı çık"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </ToolButton>
        )}
      </nav>

      {/* Mobile: alta sabit hızlı eylemler */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-[60]">
        <div className="mx-auto mb-[env(safe-area-inset-bottom)] w-full max-w-xl">
          <div className="mx-3 mb-3 rounded-2xl bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur supports-[backdrop-filter]:backdrop-blur">
            <div className="grid grid-cols-3 divide-x divide-neutral-200">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="py-3 text-center text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                aria-label="Telefon et"
              >
                📞<div className="text-xs font-medium">Ara</div>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="py-3 text-center text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                aria-label="WhatsApp"
                rel="noopener"
              >
                💬<div className="text-xs font-medium">WhatsApp</div>
              </a>
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener"
                className="py-3 text-center text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                aria-label="Konum"
              >
                📍<div className="text-xs font-medium">Konum</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Basit arama modalı */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site içi arama"
          className="fixed inset-0 z-[70] grid place-items-center bg-black/40 p-4"
          onClick={() => setSearchOpen(false)}
        >
          <form
            onSubmit={doSearch}
            className="w-full max-w-lg rounded-2xl bg-white p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <label htmlFor="q" className="block text-sm font-medium text-neutral-700">
              Sitede ara
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="q"
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Örn: LED ekran"
                className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#6d28d9] px-4 py-2 font-semibold text-white hover:bg-[#5b21b6]"
              >
                Ara
              </button>
            </div>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="mt-3 text-sm text-neutral-600 hover:underline"
            >
              Kapat
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function ToolButton({ children, title, onClick, ariaPressed }) {
  return (
    <button
      type="button"
      title={title}
      aria-pressed={ariaPressed}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-900 shadow-md transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40"
    >
      <span className="text-sm font-bold leading-none">{children}</span>
    </button>
  );
}