"use client";

import { useId, useState } from "react";
import Image from "next/image";

const HIZMET_SIZES =
  "(max-width: 640px) 320px, (max-width: 1024px) 480px, 414px";

const tabs = [
  {
    key: "podyum",
    title: "Podyum Kiralama",
    img: "/img/hizmet-podyum.webp",
    alt: "Podyum Kiralama – hizmet görseli",
    href: "/podyum-kiralama",
    desc:
      "Farklı ebat ve yükseklik seçenekleriyle etkinliğinize uygun podyum çözümleri sunuyoruz. Kaymaz kaplama, korkuluk ve rampa seçenekleri; iç/dış mekân güvenli kurulum.",
    badge: "Modüler ölçüler, hızlı kurulum, güvenli taşıyıcı sistem.",
  },
  {
    key: "led",
    title: "LED Ekran Kiralama",
    img: "/img/galeri/led-ekran-kiralama-1.webp",
    alt: "LED Ekran Kiralama – hizmet görseli",
    href: "/led-ekran-kiralama",
    desc:
      "İç/dış mekân uygun pitch değerleri, yüksek parlaklık ve yayın yönetimi ile kesintisiz görüntü.",
    badge: "İç/dış mekân, yüksek parlaklık, canlı yayın.",
  },
  {
    key: "ses-isik",
    title: "Ses & Işık Sistemleri",
    img: "/img/ses-isik/ses-sistemi.webp",
    alt: "Ses ve Işık Sistemleri – hizmet görseli",
    href: "/ses-isik-sistemleri",
    desc:
      "Line array hoparlörler, robot ışıklar, DMX kontrol ile sahnenize uygun ses ve ışık tasarımı.",
    badge: "Line array, robot ışık, DMX kontrol.",
  },
  {
    key: "sahne",
    title: "Sahne Kurulumu",
    img: "/img/kurumsal/lansman.webp",
    alt: "Sahne Kurulumu – hizmet görseli",
    href: "/sahne-kiralama",
    desc:
      "Etkinliğinize uygun ölçü ve yükseklikte güvenli sahne altyapısı; truss ve aksesuarlar.",
    badge: "Özel ölçüler, güvenli taşıyıcı, truss.",
  },
  {
    key: "cadir",
    title: "Çadır Kiralama",
    img: "/img/galeri/cadir-kiralama-1.webp",
    alt: "Çadır Kiralama – hizmet görseli",
    href: "/cadir-kiralama",
    desc:
      "Farklı ebat ve tiplerde etkinlik çadırları; hızlı kurulum, zemin çözümleri ve aydınlatma.",
    badge: "Hızlı kurulum, zemin, aydınlatma.",
  },
  {
    key: "masa-sandalye",
    title: "Masa & Sandalye Kiralama",
    img: "/img/kurumsal/konferans.webp",
    alt: "Masa ve Sandalye Kiralama – hizmet görseli",
    href: "/masa-sandalye-kiralama",
    desc:
      "Banket, kokteyl ve konferans tipinde oturma çözümleri; taşıma ve yerleşim dahil.",
    badge: "Banket/kokteyl, yerleşim, taşıma.",
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const rid = useId();

  return (
    <section className="container py-10 md:py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>

      {/* Sekme başlıkları */}
      <div
        role="tablist"
        aria-label="Hizmetler"
        className="no-scrollbar mb-6 flex gap-2 overflow-x-auto rounded-xl bg-neutral-50 p-2"
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.key}
              role="tab"
              id={`${rid}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${rid}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={[
                "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition",
                selected
                  ? "bg-[#6d28d9] text-white"
                  : "bg-white text-neutral-800 hover:bg-neutral-100",
                // 🔧 görünür odak halkası
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40",
              ].join(" ")}
            >
              {t.title}
            </button>
          );
        })}
      </div>

      {/* Paneller */}
      {tabs.map((t, i) => (
        <div
          key={t.key}
          role="tabpanel"
          id={`${rid}-panel-${i}`}
          aria-labelledby={`${rid}-tab-${i}`}
          hidden={i !== active}
          className="rounded-2xl border bg-white p-5 md:p-7 shadow-sm"
        >
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div className="relative h-52 w-full md:h-72 rounded-xl overflow-hidden">
              <Image
                src={t.img}
                alt={t.alt}
                fill
                sizes={HIZMET_SIZES}
                // ilk panel hızlı render için öncelikli
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding="async"
                quality={70}
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold">{t.title}</h3>
              <p className="mt-2 text-neutral-700">{t.desc}</p>
              <p className="mt-3 text-sm text-neutral-600">{t.badge}</p>

              <div className="mt-5 flex gap-3">
                <a
                  className="rounded-lg px-4 py-2 font-semibold text-white bg-[#6d28d9] hover:bg-[#5b21b6] transition"
                  href={t.href}
                >
                  Detaylı İncele
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}