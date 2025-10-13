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
      note: "Seminer, eğitimi ve panel düzenleri için.",
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
  title: `${svc?.title ?? "Masa & Sandalye Kiralama"} | Sahneva`,
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
    images: svc?.img ? [{ url: svc.img }] : [],
  },
};

/* --- Uzun, özgün makale --- */
function LongArticleMasaSandalye() {
  return (
    <section className="container max-w-4xl mx-auto py-10 md:py-14 space-y-10">
      {/* Nedir? */}
      <article className="space-y-4 text-neutral-800 leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-extrabold">Masa & Sandalye Kiralama Nedir?</h2>
        <p>
          Bir etkinliğin akışı sadece sahneyle değil, <strong>oturma konforu ve düzeniyle</strong>
          de şekillenir. <strong>Sahneva</strong> olarak düğün, gala, konferans ve kokteyl gibi
          farklı senaryolara uygun masa–sandalye çözümlerini; <em>teslimat, kurulum ve toplama</em>{" "}
          dâhil anahtar teslim sunuyoruz. Envanterimizde Napolyon, konferans tipi ve bistro
          sandalyeler; yuvarlak banket (Ø180 cm), dikdörtgen (180×75 cm) ve kokteyl bistro
          masaları bulunur. Örtü, kılıf, runner ve numaralandırma gibi detaylarla alan estetiğini
          tamamlarız.
        </p>
      </article>

      {/* Fiyatlar */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Kiralama Fiyatları Nasıl Belirlenir?</h2>
        <p className="mt-3 text-neutral-700">
          Fiyatlar adet ve modele göre değişir; aşağıdaki parametreler bütçeyi belirler:
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2 text-neutral-800">
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" />Toplam adet ve etkinlik süresi (tek/çok gün)</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" />Model/kaplama seçimi (Napolyon, konferans, bistro, örtü/kılıf)</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" />Teslimat mesafesi, kat/erişim ve zaman penceresi</li>
          <li className="flex gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-primary" />Yerleşim planı, numaralandırma ve ekstra personel ihtiyacı</li>
        </ul>
        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            Hızlı bir teklif için; <strong>etkinlik tarihi/konumu</strong>,{" "}
            <strong>adetler</strong>, <strong>model</strong> ve varsa{" "}
            <strong>örtü–kılıf</strong> rengini paylaşmanız yeterli.
          </p>
        </div>
      </article>

      {/* Nerelerde Kullanılır */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">Nerelerde Kullanılır?</h2>
        <div className="grid md:grid-cols-2 gap-2 mt-3 text-neutral-800">
          <ul className="space-y-1">
            <li>• Düğün, nişan, kına ve davet organizasyonları</li>
            <li>• Lansman, gala ve kurumsal yemekler</li>
            <li>• Konferans, seminer, eğitimi</li>
            <li>• Fuar, AVM etkinliği ve açılışlar</li>
          </ul>
          <ul className="space-y-1">
            <li>• Kokteyl & networking alanları</li>
            <li>• Mezuniyet ve okul etkinlikleri</li>
            <li>• Açık hava belediye/dernek organizasyonları</li>
            <li>• VIP protokol ve basın oturma düzenleri</li>
          </ul>
        </div>
      </article>

      {/* Düğün & Kurumsal İpuçları */}
      <article className="rounded-2xl border bg-white p-6">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Düğün & Kurumsal Etkinliklerde Yerleşim Önerileri
        </h2>

        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-bold">Düğün / Davet</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• <strong>Yuvarlak banket</strong> masalarda 8–10 kişi idealdir; servis akışı rahatlar.</li>
              <li>• <strong>Napolyon</strong> sandalye + keten örtü/runner şık bir görüntü sağlar.</li>
              <li>• Gelin yolu/dans pisti çevresinde sirkülasyon için minimum 2,5 m boşluk bırakın.</li>
              <li>• Masa numaralandırma ve oturma planını girişten görünür yerleştirin.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">Kurumsal / Konferans</h3>
            <ul className="mt-2 space-y-1 text-neutral-800">
              <li>• Sahne görüşü için <strong>tiyatro</strong> (sıra) veya <strong>sınıf</strong> düzeni.</li>
              <li>• U tipi/boardroom toplantılarda 180×75 cm masalar doğru derinlik sağlar.</li>
              <li>• Giriş–çıkış ve acil kaçış aksları en az 1,5 m açık bırakılmalı.</li>
              <li>• İsimlik, notluk ve su servisi için masa üstü yerleşimini planlayın.</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-neutral-50 p-4 text-neutral-700">
          <p>
            <strong>İpucu:</strong> Kokteyl alanlarında bistro masalarını 2,5–3 m aralıklarla
            konumlandırmak, akışı rahatlatır; renkli kılıflar/şal ile kurumsal kimlik vurgulanabilir.
          </p>
        </div>
      </article>

      {/* Teknik Tablo */}
      <article className="rounded-2xl border bg-white p-6">
        <h3 className="text-xl font-bold mb-3">Teknik & Ürün Özeti</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-500">
                <th className="p-2">Ürün</th>
                <th className="p-2">Ölçü / Detay</th>
                <th className="p-2">Not</th>
              </tr>
            </thead>
            <tbody className="[&>tr>*]:p-2 [&>tr]:border-b">
              <tr>
                <td>Banket Masa (Yuvarlak)</td>
                <td>Ø180 cm</td>
                <td>8–10 kişi; keten/tafta örtü seçenekleri</td>
              </tr>
              <tr>
                <td>Dikdörtgen Masa</td>
                <td>180×75 cm</td>
                <td>Konferans/sınıf düzeni için ideal</td>
              </tr>
              <tr>
                <td>Bistro Kokteyl Masası</td>
                <td>Ø60–80 cm, 110 cm yükseklik</td>
                <td>Strech kılıf: beyaz/siyah/renkli</td>
              </tr>
              <tr>
                <td>Napolyon Sandalye</td>
                <td>Ahşap/PP, minderli</td>
                <td>Beyaz/krem/altın renk seçenekleri</td>
              </tr>
              <tr>
                <td>Konferans Sandalyesi</td>
                <td>Yastıklı, istiflenebilir</td>
                <td>Numaralandırma ve sıra ayracı opsiyonu</td>
              </tr>
              <tr>
                <td>Örtü & Kılıf</td>
                <td>Keten, tafta, strech kılıf</td>
                <td>Runner, fırfır, şal seçenekleri</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
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
      {/* HERO */}
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-b-3xl">
        {svc?.img && (
          <Image
            src={svc.img}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        )}
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
