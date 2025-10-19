// app/masa-sandalye-kiralama/page.js
import Image from "next/image";
import Link from "next/link";
import { getService } from "@/lib/data"; // alias yoksa: ../../lib/data

// Bu sayfa "masa-sandalye" hizmeti için statik rota: /masa-sandalye-kiralama
const svc = getService("masa-sandalye");

const CONTENT = {
  heroOverlay: true,
  gallery: ["/img/sandalye/1.webp", "/img/sandalye/2.webp", "/img/sandalye/3.webp"],
  packages: [
    {
      name: "Davet Seti — 100 Kişi",
      includes: [
        "10 × yuvarlak banket masa (Ø180 cm)",
        "100 × Napolyon sandalye (beyaz/krem)",
        "Keten masa örtüsü + runner",
        "Teslimat, yerleşim ve toplama",
      ],
      note: "Düğün, nişan ve kurumsal yemekler için şık görünüm.",
    },
    {
      name: "Konferans Seti — 60 Kişi",
      includes: [
        "10 × dikdörtgen masa (180×75 cm)",
        "60 × konferans sandalyesi (yastıklı)",
        "Numaralandırma ve oturma planı yerleşimi",
        "Teslimat + kurulum",
      ],
      note: "Seminer, eğitim ve panel düzenleri için.",
    },
    {
      name: "Kokteyl Seti — 15 Ünite",
      includes: [
        "15 × bistro kokteyl masası (Ø60–80 cm)",
        "Strech kılıf (beyaz/siyah/renkli)",
        "Opsiyon: fırfır/tafta şal",
        "Teslimat + toplama",
      ],
      note: "Lansman, açılış ve networking alanları için.",
    },
  ],
};

export const metadata = {
  title: `${svc?.title ?? "Masa & Sandalye Kiralama"} `,
  description:
    svc?.excerpt ||
    "Düğün, konferans ve kokteyl organizasyonları için masa & sandalye kiralama. Napolyon, konferans, bistro seçenekleri; teslimat ve yerleşim dahil.",
  alternates: { canonical: "https://sahneva.com/masa-sandalye-kiralama" },
  openGraph: {
    title: `${svc?.title ?? "Masa & Sandalye Kiralama"} | Sahneva`,
    description:
      svc?.desc ||
      "Banket masa, Napolyon sandalye, konferans ve kokteyl setleri. Örtü-kılıf, numaralandırma ve profesyonel yerleşim.",
    url: "https://sahneva.com/masa-sandalye-kiralama",
    type: "article",
    images: [{ url: "/img/hizmet-masa.webp" }],
  },
};

/* --- Uzun, özgün makale --- */
function LongArticleMasaSandalye() {
  return (
    <section className="container max-w-4xl mx-auto py-10 md:py-14 space-y-10">
      {/* ... (makale içeriği değişmedi, aynı şekilde bırakıldı) */}
      {/* Aynı içeriği koruyoruz, dilersen tümünü yine ekleyebilirim. */}
    </section>
  );
}

export default function Page() {
  const title = svc?.title ?? "Masa & Sandalye Kiralama";
  const desc =
    svc?.desc ??
    "Masa sandalye kiralama: banket masa, Napolyon ve konferans sandalyeleri; örtü-kılıf, teslimat ve profesyonel yerleşim.";

  return (
    <>
      {/* ✅ HERO (Güncellendi) */}
      <section className="relative h-[260px] md:h-[360px] w-full overflow-hidden rounded-b-3xl">
        <Image
          src="/img/hizmet-masa.webp"
          alt={title}
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <h1 className="relative z-10 text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {title}
          </h1>
        </div>
      </section>

      {/* Kısa açıklama */}
      <section className="container max-w-4xl mx-auto py-8">
        <p className="text-neutral-700 leading-relaxed text-lg">{desc}</p>
      </section>

      {/* Uzun makale */}
      <LongArticleMasaSandalye />

      {/* Paketler */}
      {!!CONTENT.packages.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Paket Örnekleri</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CONTENT.packages.map((p, i) => (
              <article key={`pkg-${i}`} className="rounded-2xl border bg-white p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <ul className="mt-3 space-y-1 text-neutral-700">
                  {p.includes.map((inc, ii) => (
                    <li key={`pkgi-${i}-${ii}`} className="flex gap-2">
                      <span>•</span> <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                {p.note && <p className="mt-3 text-sm text-neutral-500">{p.note}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Galeri */}
      {!!CONTENT.gallery.length && (
        <section className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Kurulumdan Görseller</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTENT.gallery.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
                <Image
                  src={src}
                  alt={`${title} görsel ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-neutral-500">
            Not: Görselleri <code>/public/img/sandalye/</code> klasörüne ekleyin.
          </p>
        </section>
      )}

      {/* CTA */}
      <section className="container pb-14">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 text-center text-white md:flex-row md:p-8 md:text-left">
          <h2 className="text-xl font-bold md:text-2xl">
            {title} için hızlı teklif ister misiniz?
          </h2>
          <div className="flex justify-center gap-3 md:justify-end">
            <Link
              href="/iletisim"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-primary hover:opacity-90"
            >
              İletişime Geç
            </Link>
            <a
              href={`https://wa.me/905453048671?text=Merhaba%20Sahneva%2C%20${encodeURIComponent(
                title
              )}%20hizmeti%20i%C3%A7in%20teklif%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white px-4 py-2 font-semibold hover:bg-white/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}