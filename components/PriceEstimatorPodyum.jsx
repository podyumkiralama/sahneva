// components/PriceEstimatorPodyum.jsx
"use client";

import { useMemo, useState } from "react";

export default function PriceEstimatorPodyum({ unitPrices }) {
  const [w, setW] = useState(4);
  const [d, setD] = useState(6);

  const presets = [
    { w: 3, d: 4, label: "3×4" },
    { w: 4, d: 6, label: "4×6" },
    { w: 6, d: 8, label: "6×8" },
  ];

  const { area, perimeter, base, carpet, skirt, total } = useMemo(() => {
    const area = Math.max(1, Math.round(Number(w) * Number(d)));
    const perimeter = 2 * (Number(w) + Number(d));
    const base = area * unitPrices.platform_m2_week;
    const carpet = area * unitPrices.carpet_m2_week;
    const skirt = perimeter * unitPrices.skirt_ml_week;
    return { area, perimeter, base, carpet, skirt, total: base + carpet + skirt };
  }, [w, d, unitPrices]);

  return (
    <div
      className="
        mx-auto max-w-md rounded-2xl border bg-white/80 shadow-sm
        ring-1 ring-black/5 backdrop-blur px-4 py-4 sm:px-5 sm:py-5
      "
      aria-labelledby="podyum-fiyat-hesaplayici"
    >
      {/* Preset çipleri */}
      <div className="mb-3 flex flex-wrap gap-2">
        {presets.map((p) => {
          const isActive = p.w === w && p.d === d;
          return (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setW(p.w);
                setD(p.d);
              }}
              className={[
                "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                "transition-[background,transform] active:scale-[.98]",
                isActive
                  ? "border-primary/20 bg-primary/10 text-primary"
                  : "border-neutral-200 hover:bg-neutral-50 text-neutral-700",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      {/* Girişler */}
      <div className="grid grid-cols-2 gap-3">
        <Field
          label="Genişlik (m)"
          value={w}
          onChange={(v) => setW(sanitizeNum(v))}
          inputProps={{ min: 1, step: 0.5, "aria-label": "Podyum genişlik metre" }}
        />
        <Field
          label="Derinlik (m)"
          value={d}
          onChange={(v) => setD(sanitizeNum(v))}
          inputProps={{ min: 1, step: 0.5, "aria-label": "Podyum derinlik metre" }}
        />
      </div>

      {/* Özet kutuları */}
      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <Info label="Alan" value={`${area} m²`} />
        <Info label="Çevre" value={`${perimeter} m`} />
        <Info label="Platform" value={formatTRY(base)} />
      </div>

      {/* Ayrıntı + Toplam */}
      <div className="mt-3 rounded-xl bg-neutral-50/70 p-3 text-sm">
        <div className="flex items-center justify-between">
          <span>Halı (ops.)</span>
          <span className="font-medium">{formatTRY(carpet)}</span>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span>Skört (ops.)</span>
          <span className="font-medium">{formatTRY(skirt)}</span>
        </div>
        <div className="mt-2 h-px w-full bg-neutral-200" />
        <div className="mt-2 flex items-baseline justify-between">
          <span className="text-[13px] text-neutral-600">Önerilen Paket (Halı + Skört)</span>
          <span className="text-base font-semibold tracking-tight">
            {formatTRY(total)}
          </span>
        </div>
      </div>

      {/* İnce satır CTA */}
      <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
        <span>Fiyatlar haftalıktır.</span>
        <a
          href="https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20Podyum%20fiyat%20hesaplay%C4%B1c%C4%B1s%C4%B1ndan%20yaz%C4%B1yorum."
          className="rounded-lg border border-neutral-200 px-2 py-1 hover:bg-neutral-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp’tan Sor
        </a>
      </div>
    </div>
  );
}

/* ---- Küçük yardımcı bileşenler ---- */

function Field({ label, value, onChange, inputProps = {} }) {
  return (
    <label className="text-xs">
      <span className="block text-neutral-600">{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-1 w-full rounded-xl border border-neutral-200
          bg-white px-3 py-2 text-sm
          outline-none ring-0 focus:border-primary/40 focus:bg-white
        "
        {...inputProps}
      />
    </label>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-2">
      <div className="text-[11px] text-neutral-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function sanitizeNum(v) {
  const n = Number(v);
  if (Number.isNaN(n) || n <= 0) return 1;
  return Math.round(n * 2) / 2; // 0.5 adım
}

function formatTRY(n) {
  try {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(n);
  } catch {
    return `${n} TL`;
  }
}
