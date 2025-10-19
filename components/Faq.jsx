// components/Faq.jsx
"use client";

import { useMemo } from "react";

export default function Faq() {
  // SEO’ya optimize 4 soru-cevap + kalıcı anchor slug
  const items = useMemo(
    () => [
      {
        q: "Podyum kurulumu ne kadar sürer ve kurulumda kaç kişilik ekip görev alır?",
        a: "Standart bir etkinlik podyumunun kurulumu genellikle 20–90 dakika arasında tamamlanır. Ölçüye göre ekip sayısı artırılarak süreç hızlandırılır.",
        slug: "podyum-kurulumu-sure-ve-ekip",
      },
      {
        q: "LED ekranlar dış mekânda kullanılabilir mi ve hava koşullarına dayanıklı mı?",
        a: "Evet, IP65 sınıfı dış mekân LED ekranlar yağmur, güneş ve toza dayanıklıdır. Parlaklık değeri yüksek paneller sayesinde gündüz dahi net görünür.",
        slug: "led-ekran-dis-mekan-dayaniklilik",
      },
      {
        q: "Ses ve ışık sistemlerinde teknik ekip ve operatör desteği sağlıyor musunuz?",
        a: "Kurulumdan etkinlik sonuna kadar ses ve ışık operatörleri sahada aktif görev alır. Canlı miks ve ışık senaryoları profesyonel ekip tarafından yönetilir.",
        slug: "ses-isik-teknik-ekip-operator",
      },
      {
        q: "Çadır kiralamada kurulum ve söküm hizmeti dâhil mi, ekstra ücret olur mu?",
        a: "Taşıma, kurulum ve söküm standart hizmet kapsamındadır. Özel dekor veya iklimlendirme talebi olduğunda ekstra maliyetlendirme yapılabilir.",
        slug: "cadir-kurulum-sokum-ucret",
      },
    ],
    []
  );

  // JSON-LD (mini FAQ – yalnızca ana sayfa bloğu için)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="container py-14 md:py-20" aria-labelledby="faq-heading">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-center mb-10">
        Sık Sorulan Sorular
      </h2>

      <div className="mx-auto max-w-3xl space-y-4">
        {items.map(({ q, a, slug }) => (
          <details key={slug} id={slug} className="faq-card group border rounded-lg p-4 open:shadow-sm">
            <summary
              className="flex cursor-pointer items-center justify-between gap-3 font-semibold text-neutral-900
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40 rounded-md"
            >
              <span>{q}</span>
              <svg
                className="ml-2 h-5 w-5 shrink-0 text-neutral-800 transition-transform group-open:rotate-90"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 5l8 7-8 7" />
              </svg>
            </summary>

            <div className="mt-2 text-neutral-700">
              <p>{a}</p>
              <div className="mt-3 text-xs text-neutral-500">
                <a
                  href={`#${slug}`}
                  className="hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/30 rounded"
                  aria-label="Bu soruya kalıcı bağlantı"
                >
                  Bu soruya bağlantı
                </a>
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="/sss"
          className="inline-block rounded-lg bg-[#6d28d9] px-6 py-3 font-semibold text-white shadow
                     transition hover:bg-[#5b21b6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6d28d9]/40"
        >
          Tüm Soruları Gör
        </a>
      </div>
    </section>
  );
}