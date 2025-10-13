// app/sss/page.js

export const metadata = {
  title: "Sık Sorulan Sorular | Sahneva",
  description:
    "Podyum, LED ekran, ses-ışık ve çadır kiralama; organizasyon süreçleri hakkında sık sorulan sorular ve yanıtlar.",
};

const FAQ_CATEGORIES = [
  {
    id: "genel",
    icon: "🧭",
    title: "Genel & Koordinasyon",
    items: [
      {
        q: "Kurumsal etkinlik tecrübemiz var mı?",
        a: "Evet. Lansman, konferans, bayi toplantısı, miting ve konser gibi geniş yelpazede yüzlerce etkinlik deneyimimiz var.",
      },
      {
        q: "Ekipmanlarınız güncel mi? Bakımlar nasıl yapılır?",
        a: "Tüm ekipmanlar periyodik bakımdan geçirilir ve her iş öncesi fonksiyon testleri yapılır. Kritik cihazlarda yedekleme ile çalışırız.",
      },
      {
        q: "Etkinlik günü teknik ekip büyüklüğü nedir?",
        a: "Kapsama göre değişir. Küçük etkinliklerde 2–3 kişi, büyük kurulumlarda sahne, ses, ışık, görüntü ve kamera ekipleri dahil 10+ kişilik kadro görev alır.",
      },
    ],
  },
  {
    id: "podyum",
    icon: "🪜",
    title: "Podyum Kiralama",
    items: [
      {
        q: "Podyum kurulumu ne kadar sürer?",
        a: "Standart 6×4 m modüler podyumun kurulumu ortalama 60–90 dakika sürer. Ölçü, zemin ve erişime göre süre değişebilir.",
      },
      {
        q: "Zemine zarar verir mi?",
        a: "Kaymaz kaplama ve kauçuk ayaklar sayesinde podyum zemine zarar vermez. İç/dış mekânda güvenle kullanılır.",
      },
      {
        q: "Yükseklik ve ölçü seçenekleri neler?",
        a: "Modüler sistemle 20–100 cm kademeli yükseklik; 1×2 m panellerle istenen ölçüde kurulum yapılır.",
      },
    ],
  },
  {
    id: "led",
    icon: "📺",
    title: "LED Ekran",
    items: [
      {
        q: "Dış mekânda kullanılabilir mi?",
        a: "Evet. IP65 sınıfı paneller yağmur ve toza dayanıklıdır. Gündüz kullanımında yüksek parlaklık sağlanır.",
      },
      {
        q: "Hangi çözünürlükleri sunuyorsunuz?",
        a: "P2–P5 arası iç/dış mekân panellerimiz bulunur. İzleme mesafesi ve sahne genişliğine göre doğru pitch önerilir.",
      },
      {
        q: "İçerik yönetimini kim yapıyor?",
        a: "Video miksaj ve içerik geçişleri teknik ekibimiz tarafından canlı olarak yönetilir.",
      },
    ],
  },
  {
    id: "ses-isik",
    icon: "🎤",
    title: "Ses & Işık Sistemleri",
    items: [
      {
        q: "Teknik ekip sağlıyor musunuz?",
        a: "Kurulum, test ve etkinlik boyunca operatörlerimiz sahada aktif görev alır; tüm süreç teknik ekip tarafından yönetilir.",
      },
      {
        q: "Mikrofon ve kayıt çözümleri var mı?",
        a: "Kablosuz el/yaka mikrofonları, çok kanallı miksaj ve çok izli kayıt çözümlerimiz mevcut. Simultane altyapı kurulabilir.",
      },
      {
        q: "Işık tasarımı yapıyor musunuz?",
        a: "LED PAR, spot, wash ve efekt armatürleriyle mekâna uygun ışık planı hazırlanır; DMX ile sahnelenir.",
      },
    ],
  },
  {
    id: "cadir",
    icon: "🎪",
    title: "Çadır Kiralama",
    items: [
      {
        q: "Kurulum ve söküm hizmeti dâhil mi?",
        a: "Evet. Taşıma, kurulum ve söküm ekibimiz tarafından yapılır; güvenlik ankrajları ve ağırlıklandırma dâhildir.",
      },
      {
        q: "Boyut ve zemin koşulları nedir?",
        a: "Farklı açıklıklarda çadır seçenekleri vardır. Zemin beton, asfalt veya düz toprak olabilir; seviye şap ile dengelenir.",
      },
      {
        q: "Isıtma/soğutma ve aydınlatma sağlıyor musunuz?",
        a: "İsteğe bağlı klima/ısıtıcı ve genel aydınlatma sağlanır. Acil çıkış ve güvenlik şartları sağlanır.",
      },
    ],
  },
  {
    id: "ek",
    icon: "🧩",
    title: "Ek Hizmetler & Organizasyon Türleri",
    items: [
      {
        q: "Video çekim, canlı yayın ve drone hizmetleri var mı?",
        a: "Evet. Çok kameralı çekim, canlı yayın (RTMP/YouTube/Zoom), drone çekimi ve hızlı kurgu hizmeti veriyoruz.",
      },
      {
        q: "Uçak bileti ve konaklama planlıyor musunuz?",
        a: "Talebe göre ekip veya konuşmacılar için bilet–otel koordinasyon desteği verebiliyoruz.",
      },
      {
        q: "Düğün, miting, konser gibi etkinliklerde çalışıyor musunuz?",
        a: "Evet. Sahne, ses–ışık, görüntü ve güvenlik gereksinimleri doğrultusunda uçtan uca teknik hizmet sağlıyoruz.",
      },
    ],
  },
  {
    id: "sozlesme",
    icon: "🧾",
    title: "Sözleşme & Ödeme",
    items: [
      {
        q: "Keşif ve fiyatlandırma nasıl ilerler?",
        a: "İhtiyaçlar alındıktan sonra gerekirse ücretsiz keşif yapılır; net fiyat ve zaman planı sunulur.",
      },
      {
        q: "Teslimat bölgeleri ve zamanlama?",
        a: "Türkiye genelinde çalışıyoruz. İstanbul içi aynı gün kurulum mümkün; şehir dışına planlı sevkiyat yapılır.",
      },
      {
        q: "Faturalandırma ve sözleşme süreçleri?",
        a: "Tüm işler sözleşmeli ve e-faturalıdır. Rezervasyon, avans ve teslim tutanakları ile süreç tamamlanır.",
      },
    ],
  },
];

/* ——— Yardımcı bileşenler ——— */

function CategoryChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
      {FAQ_CATEGORIES.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className="faq-chip px-3 py-2 rounded-full text-sm"
        >
          <span className="mr-1">{c.icon}</span>
          {c.title}
        </a>
      ))}
    </div>
  );
}

function FaqSection({ id, icon, title, items }) {
  return (
    <section id={id} className="scroll-mt-28 mb-8 rounded-2xl faq-glass p-5 md:p-7">
      <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold mb-5">
        <span className="text-lg md:text-xl">{icon}</span>
        {title}
      </h2>

      <div className="space-y-3">
        {items.map((it, i) => (
          <details key={`${id}-${i}`} className="faq-card group rounded-xl bg-white p-4">
            <summary className="cursor-pointer select-none list-none font-semibold leading-7 flex items-center justify-between">
              <span className="pr-3">{it.q}</span>
              <svg
                className="ml-2 h-5 w-5 text-slate-500 transition-transform group-open:rotate-90"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M8 4l8 8-8 8" />
              </svg>
            </summary>
            <div className="faq-anim mt-3 text-neutral/90 leading-relaxed">{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ——— Sayfa ——— */

export default function FaqPage() {
  // JSON-LD (FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container py-10 md:py-14">
        <h1 className="text-3xl md:text-[34px] font-extrabold tracking-tight text-center mb-6">
          Sık Sorulan Sorular
        </h1>

        <CategoryChips />

        <div className="space-y-6">
          {FAQ_CATEGORIES.map((c) => (
            <FaqSection
              key={c.id}
              id={c.id}
              icon={c.icon}
              title={c.title}
              items={c.items}
            />
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:+905453048671"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:opacity-95"
          >
            📞 Hemen Teklif Al
          </a>
          <a
            href="https://wa.me/905453048671"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 font-semibold hover:bg-neutral-50"
          >
            💬 WhatsApp’tan Sor
          </a>
        </div>
      </div>
    </>
  );
}
