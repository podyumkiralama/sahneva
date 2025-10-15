// components/UtilityBar.js
"use client";

import { useEffect, useState } from "react";

const PHONE = "+90 545 304 8671";
const WHATSAPP = "905453048671";
const MAP_URL = "https://maps.google.com/?q=Sahneva";

export default function UtilityBar() {
  const [fs, setFs] = useState(100);     // font-size %
  const [hc, setHc] = useState(false);   // high-contrast
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");

  // tercihleri yükle
  useEffect(() => {
    const f = Number(localStorage.getItem("ux.fs") || "100");
    const h = localStorage.getItem("ux.hc") === "1";
    applyFs(f); setFs(f);
    applyHc(h); setHc(h);
  }, []);

  function applyFs(val) {
    const v = Math.min(130, Math.max(90, val));
    document.documentElement.style.setProperty("--fs", v + "%");
  }
  function applyHc(enabled) {
    document.documentElement.classList.toggle("hc", !!enabled);
  }
  function incFs(step) {
    const next = Math.min(130, Math.max(90, fs + step));
    setFs(next); applyFs(next);
    localStorage.setItem("ux.fs", String(next));
  }
  function toggleHc() {
    const next = !hc; setHc(next); applyHc(next);
    localStorage.setItem("ux.hc", next ? "1" : "0");
  }
  function doSearch(e) {
    e?.preventDefault();
    if (!q.trim()) return setOpen(false);
    window.location.href = `/search?q=${encodeURIComponent(q.trim())}`;
  }

  return (
    <>
      {/* Desktop: hiçbir şey göstermiyoruz; alt bar sadece mobilde */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-[60] select-none">
        <div className="mx-auto w-full max-w-xl">
          <div className="mx-3 mb-[calc(env(safe-area-inset-bottom)+12px)] rounded-2xl bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,.12)] backdrop-blur">
            {/* Satır 1 — hızlı eylemler */}
            <div className="grid grid-cols-3 divide-x divide-neutral-200">
              <BarLink
                href={`tel:${PHONE.replace(/\s/g,"")}`}
                label="Ara"
                icon="📞"
                ariaLabel="Telefon et"
              />
              <BarLink
                href={`https://wa.me/${WHATSAPP}`}
                label="WhatsApp"
                icon="💬"
                ariaLabel="WhatsApp"
                rel="noopener"
              />
              <BarLink
                href={MAP_URL}
                target="_blank"
                rel="noopener"
                label="Konum"
                icon="📍"
                ariaLabel="Konumu aç"
              />
            </div>

            {/* Satır 2 — erişilebilirlik & arama */}
            <div className="grid grid-cols-4 border-t border-neutral-200">
              <BarBtn title="Yazı küçült (A-)" onClick={() => incFs(-5)} icon="A-" />
              <BarBtn title="Yazı büyüt (A+)"  onClick={() => incFs(+5)} icon="A+" />
              <BarBtn
                title="Kontrastı artır/azalt"
                onClick={toggleHc}
                icon="⬤◯"
                ariaPressed={hc}
              />
              <BarBtn title="Sitede ara" onClick={() => setOpen(true)} icon="🔍" />
            </div>
          </div>
        </div>
      </div>

      {/* Arama modalı */}
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Site içi arama"
             className="fixed inset-0 z-[70] grid place-items-center bg-black/40 p-4"
             onClick={() => setOpen(false)}>
          <form onSubmit={doSearch}
                className="w-full max-w-lg rounded-2xl bg-white p-4 shadow-lg"
                onClick={(e)=>e.stopPropagation()}>
            <label htmlFor="q" className="block text-sm font-medium text-neutral-700">
              Sitede ara
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="q" autoFocus value={q}
                onChange={e=>setQ(e.target.value)}
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
            <button type="button" onClick={()=>setOpen(false)}
              className="mt-3 text-sm text-neutral-600 hover:underline">
              Kapat
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function BarLink({ href, label, icon, ariaLabel, ...rest }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel || label}
      className="grid h-14 place-items-center px-3 text-center text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
      {...rest}
    >
      <div className="leading-none">{icon}</div>
      <div className="text-[12px] font-medium">{label}</div>
    </a>
  );
}

function BarBtn({ title, onClick, icon, ariaPressed }) {
  return (
    <button
      type="button"
      title={title}
      aria-pressed={ariaPressed}
      onClick={onClick}
      className="grid h-12 w-full place-items-center text-sm font-semibold text-neutral-800 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40"
    >
      <span className="leading-none">{icon}</span>
    </button>
  );
}