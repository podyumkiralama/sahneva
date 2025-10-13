// app/sahne-kiralama/page.jsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sahne Kiralama – Truss, Podyum, LED, Ses & Işık | Sahneva",
  description:
    "Etkinliğinize uygun sahne kiralama: truss ve rigging, podyum, LED ekran, profesyonel ses ve ışık sistemleri. Kurulum, canlı operasyon ve söküm dahil.",
  alternates: { canonical: "https://sahneva.com/sahne-kiralama" },
  openGraph: {
    title: "Sahne Kiralama – Truss, Podyum, LED, Ses & Işık",
    description:
      "Konser, lansman, miting, festival ve kurumsal etkinlikler için anahtar teslim sahne kiralama.",
    url: "https://sahneva.com/sahne-kiralama",
    images: ["/img/og.jpg"],
    type: "article",
  },
  robots: { index: true, follow: true },
};

const GALLERY = [
  "/img/sahne/1.webp",
  "/img/sahne/2.webp",
  "/img/sahne/3.webp",
  "/img/sahne/4.webp",
];

const PACKAGES = [
  {
    name: "Mini Sahne – 16 m²",
    includes: [
      "8 × (2×1 m) podyum – 16 m²",
      "Yükseklik 40 cm, kaymaz kaplama",
      "Arka fon için 6 m düz truss",
      "2 adet LED bar + 2 adet spot",
      "Kurulum, test ve söküm",
    ],
    note: "Toplantı, söyleşi ve butik iç mekân etkinlikleri.",
  },
  {
    name: "Standart Sahne – 24 m²",
    includes: [
      "12 × (2×1 m) podyum – 24 m²",
      "Yükseklik 60 cm, ön etek kapama",
      "U şeklinde 12 m truss (ön kiriş + yanlar)",
      "4 hareketli başlık (beam/spot) + 6 wash",
      "2+1 hoparlör, dijital mikser, kablosuz mikrofon",
      "Kurulum, canlı teknik yönetim, söküm",
    ],
    note: "Kurumsal lansman, söyleşi+performans, AVM etkinlikleri.",
  },
  {
    name: "Konser Sahnesi – 48 m²",
    includes: [
      "24 × (2×1 m) podyum – 48 m² (örn. 8×6 m)",
      "Yükseklik 80–100 cm, rampa/korkuluk opsiyonları",
      "Ön kiriş 12 m + yan kuleler 8 m truss",
      "Line array PA, sahne monitörleri, backline altyapı",
      "LED ekran (örn. 5×3 m) + scaler",
      "Işık: hareketli başlıklar, wash, blinders, duman",
      "Kurulum, soundcheck, canlı yönetim, söküm",
    ],
    note: "Konser, festival, açık alan yüksek katılımlı etkinlikler.",
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/hero-sahne.webp"
            alt="Sahne kiralama - truss, podyum, LED, ses ışık"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Sahne Kiralama
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg">
            Truss &amp; rigging, podyum, LED ekran, profesyonel ses ve ışık
            sistemleriyle anahtar teslim sahne çözümleri. Kurulum, canlı teknik
            yönetim ve söküm dahil.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/iletisim"
              className="rounded-2xl bg-white text-black px-5 py-2.5 text-sm md:text-base font-medium shadow"
            >
              Teklif Al
            </Link>
            <Link
              href="/podyum-kiralama"
              className="rounded-2xl bg-white/10 backdrop-blur px-5 py-2.5 text-sm md:text-base font-medium border border-white/20"
            >
              Podyum Detayları
            </Link>
          </div>
        </div>
      </section>

      {/* ÖZET / USP */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {[
            ["Modüler Tasarım", "1×1 / 2×1 panellerle hızlı kurulum"],
            ["Güvenlik", "Korkuluk, rampa, kaymaz kaplama"],
            ["Görsellik", "LED ekran & sahne tekstili"],
            ["Tam Hizmet", "Kurulum + canlı yönetim + söküm"],
          ].map(([t, d]) => (
            <div
              key={t}
              className="rounded-2xl border border-zinc-200 p-5 shadow-sm"
            >
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-zinc-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALERİ */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid md:grid-cols-4 gap-3">
          {GALLERY.map((src) => (
            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={src}
                alt="Sahne kurulum görseli"
                fill
                sizes="(max-width:768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* PAKETLER */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <h2 className="text-2xl md:text-3xl font-semibold">Hazır Paketler</h2>
        <p className="mt-2 text-zinc-600">
          Ölçülere, etkinlik türüne ve mekân şartlarına göre paket içerikleri
          uyarlanır. İhtiyaca göre yükseltme/düşürme yapılabilir.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {PACKAGES.map((p) => (
            <div key={p.name} className="rounded-2xl border border-zinc-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm">
                {p.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {p.note && (
                <p className="mt-3 text-sm text-zinc-600">
                  <span className="font-medium">Not: </span>
                  {p.note}
                </p>
              )}
              <div className="mt-4 flex gap-2">
                <Link
                  href="/iletisim"
                  className="rounded-xl bg-black text-white px-4 py-2 text-sm"
                >
                  Teklif Al
                </Link>
                <Link
                  href="/led-ekran-kiralama"
                  className="rounded-xl border px-4 py-2 text-sm"
                >
                  LED Ekran Bilgisi
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BİLEŞENLER (Ayrıntılar) */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Sahne Bileşenleri</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Podyum</h3>
            <p className="mt-2 text-sm text-zinc-700">
              1×1 ve 2×1 modüllerle 20–100 cm yükseklik seçenekleri; kaymaz
              kaplama, etek, rampa ve korkuluk opsiyonları. Yük hesabı
              etkinlik/ekipman yoğunluğuna göre yapılır.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Kapalı alan: 40–60 cm, Açık alan: 60–100 cm önerilir</li>
              <li>Merdiven ve rampa erişimi (engelli dostu)</li>
              <li>Şase dengeleme ve noktasäl yük dağıtımı</li>
            </ul>
            <Link href="/podyum-kiralama" className="mt-3 inline-block text-sm underline">
              Podyum kiralama detayları →
            </Link>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Truss & Rigging</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Ön kiriş, yan kule, arka fon ve roof sistemleri. Askı noktaları,
              yük dağılımı ve güvenlik ekipmanları (safety) standartlara uygun
              şekilde planlanır.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Statik hesap ve güvenlik katsayıları</li>
              <li>Chains/hoist ve ground support çözümleri</li>
              <li>Backdrop, banner ve dekor askıları</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">LED Ekran</h3>
            <p className="mt-2 text-sm text-zinc-700">
              İç/dış mekân uygun P2–P6 paneller; yüksek parlaklık, scaler ve
              canlı miksaj desteği. Arka fon LED veya yan kanatlar ile kurgu.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Öneri: 3×2 m (iç mekân) / 5×3 m (açık alan)</li>
              <li>IP65 koruma (dış mekân paneller)</li>
              <li>HDMI/SDI giriş ve içerik döngüsü</li>
            </ul>
            <Link href="/led-ekran-kiralama" className="mt-3 inline-block text-sm underline">
              LED ekran kiralama →
            </Link>
          </div>

          <div className="rounded-2xl border p-5">
            <h3 className="font-semibold">Ses & Işık</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Line array PA, dijital mikser, kablosuz mikrofonlar ve hareketli
              başlıklarla sahne ışık tasarımı. Operasyon boyunca teknik ekip.
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm space-y-1">
              <li>Soundcheck ve sahne monitörlemesi</li>
              <li>Beam/spot, wash, blinder, haze/duman</li>
              <li>DMX programlama ve show control</li>
            </ul>
            <Link href="/ses-isik-sistemleri" className="mt-3 inline-block text-sm underline">
              Ses & Işık kiralama →
            </Link>
          </div>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">İş Sürecimiz</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-5">
          {[
            ["Keşif & Planlama", "Mekân ölçümü, yük ve elektrik analizi"],
            ["Projelendirme", "2D/3D sahne yerleşim ve truss planı"],
            ["Kurulum & Test", "Statik/güvenlik kontrolleri, soundcheck"],
            ["Canlı Yönetim", "Show control ve anlık teknik destek"],
          ].map(([t, d], i) => (
            <div key={t} className="rounded-2xl border p-5">
              <div className="text-sm text-zinc-500">0{i + 1}</div>
              <h3 className="font-semibold mt-1">{t}</h3>
              <p className="mt-1 text-sm text-zinc-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="mx-auto max-w-6xl px-4 pb-12 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold">Sıkça Sorulan Sorular</h2>
        <div className="mt-4 space-y-4">
          {[
            [
              "Sahne ölçüsünü nasıl belirliyorsunuz?",
              "Katılımcı sayısı, performans türü ve mekân ölçülerine göre podyum alanı, yükseklik ve truss açıklıkları belirlenir. Keşif sonrası netleştiriyoruz.",
            ],
            [
              "Açık alan konserlerinde hangi yükselti önerilir?",
              "Genellikle 80–100 cm önerilir. Seyirci görüş çizgisi ve güvenlik bariyer yerleşimi de dikkate alınır.",
            ],
            [
              "LED ekran şart mı?",
              "Büyük katılımlı etkinliklerde görünürlüğü ve sponsor görünürlüğünü artırdığı için önerilir; ancak zorunlu değildir.",
            ],
            [
              "Kurulum ne kadar sürer?",
              "Paket ve mekâna göre değişir; mini sahnede 2–4 saat, konser kurulumlarında 1 tam gün planlanır.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border p-5">
              <h3 className="font-medium">{q}</h3>
              <p className="mt-1 text-sm text-zinc-700">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/iletisim" className="inline-block rounded-2xl bg-black text-white px-6 py-3">
            Projene Uygun Sahne Tasarlayalım
          </Link>
        </div>
      </section>
    </>
  );
}

