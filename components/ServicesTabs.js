// components/ServicesTabs.js
"use client";

import { useState, useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const baseId = useId();

  // Telefonlarda 320px hedef (DPR=2 -> 640w), tablet/masaüstünde makul değerler
  const IMG_SIZES =
    "(max-width: 640px) 320px, " +   // phone -> 640w
    "(max-width: 1024px) 480px, " +  // tablet (iki kolon) -> ~960/1080w
    "414px";                         // ≥1024px (üç kolon) -> 828w

  return (
    <section className="container py-10 md:py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Hizmetlerimiz
      </h2>

      <div
        role="tablist"
        aria-label="Hizmetler"
        className="no-scrollbar mb-6 flex gap-2 overflow-x-auto rounded-xl bg-neutral-50 p-2"
      >
        {services.map((s, i) => (
          <button
            key={s.slug}
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={[
              "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition",
              i === active
                ? "bg-[#6d28d9] text-white"
                : "bg-white text-neutral-800 hover:bg-neutral-100",
            ].join(" ")}
          >
            {s.title}
          </button>
        ))}
      </div>

      {services.map((s, i) => {
        const isActive = i === active;
        return (
          <div
            key={s.slug}
            role="tabpanel"
            id={`${baseId}-panel-${i}`}
            aria-labelledby={`${baseId}-tab-${i}`}
            hidden={!isActive}
            className="rounded-2xl border bg-white p-5 md:p-7 shadow-sm"
          >
            {isActive && (
              <div className="grid gap-6 md:grid-cols-2 md:items-center">
                <div className="relative h-52 w-full md:h-72 rounded-xl overflow-hidden">
                  <Image
                    src={s.img}
                    alt={`${s.title} – hizmet görseli`}
                    fill
                    sizes={IMG_SIZES}
                    className="object-cover"
                    priority={i === 0}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    loading={i === 0 ? "eager" : "lazy"}
                    quality={70}             // q=70 (varsayılan 75)
                  />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-neutral-700">{s.desc}</p>
                  <p className="mt-3 text-sm text-neutral-600">{s.excerpt}</p>

                  <div className="mt-5 flex gap-3">
                    <Link
                      href={`/${s.slug}`}
                      className="rounded-lg px-4 py-2 font-semibold text-white bg-[#6d28d9] hover:bg-[#5b21b6] transition"
                    >
                      Detaylı İncele
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
