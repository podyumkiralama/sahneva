// components/PriceEstimatorPodyum.jsx
"use client";

import { useState, useMemo } from "react";

export default function PriceEstimatorPodyum({ unitPrices }) {
  const [w, setW] = useState(4);
  const [d, setD] = useState(6);

  const { area, perimeter, base, carpet, skirt, total } = useMemo(() => {
    const area = Math.max(1, Math.round(w * d));
    const perimeter = 2 * (Number(w) + Number(d));
    const base = area * unitPrices.platform_m2_week;
    const carpet = area * unitPrices.carpet_m2_week;
    const skirt = perimeter * unitPrices.skirt_ml_week;
    return { area, perimeter, base, carpet, skirt, total: base + carpet + skirt };
  }, [w, d, unitPrices]);

  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="grid grid-cols-2 gap-3">
        <label className="text-sm">
          Genişlik (m)
          <input
            type="number" min="1" step="0.5" value={w}
            onChange={(e) => setW(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border px-3 py-2"
            aria-label="Podyum genişlik (metre)"
          />
        </label>
        <label className="text-sm">
          Derinlik (m)
          <input
            type="number" min="1" step="0.5" value={d}
            onChange={(e) => setD(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border px-3 py-2"
            aria-label="Podyum derinlik (metre)"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm">
        <InfoCard label="Alan" value={`${area} m²`} />
        <InfoCard label="Çevre (skört)" value={`${perimeter} m`} />
        <InfoCard label="Baz Platform" value={formatTRY(base)} />
      </div>

      <div className="mt-3 rounded-lg bg-neutral-50 p-3 text-sm">
        <div>Halı (opsiyon): {formatTRY(carpet)}</div>
        <div>Skört (opsiyon): {formatTRY(skirt)}</div>
        <div className="mt-2 font-semibold">
          Önerilen Paket (Halı + Skört): {formatTRY(total)}
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-lg bg-neutral-50 p-3">
      <div className="text-neutral-500">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

function formatTRY(n) {
  try {
    return new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(n);
  } catch {
    return `${n} TL`;
  }
}