// app/projeler/kapali-alan-led-sahne-kurulumu/page.js
import Image from "next/image";
import CaseGallery from "../../../components/CaseGallery";

export const metadata = {
  title:
    "Devlet Protokolüne Uygun Kapalı Alan LED ve Sahne Kurulumu — Teknik Referans | Sahneva",
  description:
    "Kapalı alan (40’lık çadır) üzerinde 24×8 m sahne/podyum, 24×6 m P2 LED ekran, scaff ve truss altyapısı ile 2 günde, 60 kişilik teknik ekiple tamamlanan büyük ölçekli kurulum.",
  alternates: { canonical: "/projeler/kapali-alan-led-sahne-kurulumu" },
  openGraph: {
    type: "article",
    title:
      "Devlet Protokolüne Uygun Kapalı Alan LED ve Sahne Kurulumu — Teknik Referans",
    description:
      "24×6 m P2 LED, 24×8 m sahne/podyum, scaff ve truss ile büyük ölçekli kapalı alan kurulumu.",
    images: ["/img/projeler/kapali-alan-led/01.webp"],
    url: "https://www.sahneva.com/projeler/kapali-alan-led-sahne-kurulumu",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Devlet Protokolüne Uygun Kapalı Alan LED ve Sahne Kurulumu — Teknik Referans",
    description:
      "Kapalı alan (40’lık çadır) üzerinde 24×6 m P2 LED ve 24×8 m sahne/podyum kurulum referansı.",
    images: ["/img/projeler/kapali-alan-led/01.webp"],
  },
};

const IMAGES = [
  {
    src: "/img/projeler/kapali-alan-led/01.webp",
    alt: "Kapalı alan çadır içinde 24×6 m P2 ana LED ekran ve 24×8 m sahne/podyum",
  },
  {
    src: "/img/projeler/kapali-alan-led/02.webp",
    alt: "Scaff iskelet sistemi ve truss üst yapı ile kurulan sahne",
  },
  {
    src: "/img/projeler/kapali-alan-led/03.webp",
    alt: "Protokol standardında aydınlatma ve görsel yayın düzeni",
  },
  {
    src: "/img/projeler/kapali-alan-led/04.webp",
    alt: "40’lık çadır iç zemin hazırlığı ve halı kaplama detayları",
  },
  {
    src: "/img/projeler/kapali-alan-led/05.webp",
    alt: "Büyük ölçekli kapalı alan kurulumundan genel görünüm",
  },
];

export default function CasePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative bg-neutral-950">
        <Image
          src={IMAGES[0].src}
          alt="Kapalı alan çadır içinde 24×6 m P2 ana LED ekran ve 24×8 m sahne/podyum"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="relative z-10 container py-20 md:py-28 text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Kapalı Alan LED & Sahne Kurulumu (Protokol Seviyesi)
          </h1>
          <p className="mt-4 max-w-3xl text-white/90">
            40’lık çadır içinde 24×8 m sahne/podyum ve 24×6 m P2 (2&nbsp;mm) ana LED ekran ile,
            scaff ve truss üst yapısı kullanılarak gerçekleştirilmiş büyük ölçekli kurulum.
            İçerik tamamen teknik referans amaçlıdır; kampanya adı kullanılmaz.
          </p>
        </div>
      </section>

      {/* ÖZET KARTLARI */}
      <section aria-labelledby="ozet-baslik" className="container py-10 md:py-14">
        <h2 id="ozet-baslik" className="sr-only">
          Kurulum Özeti
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="p-5 rounded-2xl border bg-white">
            <h3 className="font-semibold mb-2">Teknik Ölçüler</h3>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-4">
              <li>Sahne / Podyum: <strong>24 × 8 m</strong></li>
              <li>LED Ekran: <strong>24 × 6 m</strong></li>
              <li>Piksel Aralığı: <strong>P2 (2 mm)</strong></li>
              <li>Üst Yapı: <strong>Truss</strong> + Scaff iskelet</li>
            </ul>
          </article>

          <article className="p-5 rounded-2xl border bg-white">
            <h3 className="font-semibold mb-2">Alan & Altyapı</h3>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-4">
              <li>Kurulum Yeri: Dış alana kurulu <strong>40’lık çadır</strong></li>
              <li>İç Zemin: Özel hazırlık + <strong>halı kaplama</strong></li>
              <li>Ses & Işık: Line-array, robot ışık, sahne aydınlatma</li>
            </ul>
          </article>

          <article className="p-5 rounded-2xl border bg-white">
            <h3 className="font-semibold mb-2">Operasyon</h3>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-4">
              <li>Ekip Büyüklüğü: <strong>60 kişi</strong></li>
              <li>Kurulum Süresi: <strong>2 iş günü</strong></li>
              <li>Etkinlik Ölçeği: Protokol seviyesi (üst düzey katılım)</li>
            </ul>
            <p className="text-xs text-neutral-500 mt-2">
              Not: Sayfa bir teknik referanstır; belirli bir kampanya/kurum adı içermez.
            </p>
          </article>
        </div>
      </section>

      {/* AÇIKLAMA */}
      <section aria-labelledby="aciklama-baslik" className="container pb-10 md:pb-12">
        <h2 id="aciklama-baslik" className="text-xl md:text-2xl font-bold mb-4">
          Uygulama ve Yaklaşım
        </h2>
        <div className="prose max-w-none text-neutral-700">
          <p>
            Kurulum; dış alan üzerine inşa edilen 40’lık çadır içinde, güvenli rigging ve
            hızlı montaj öncelikleriyle planlandı. Zemin hazırlığı tamamlandıktan sonra sahne
            ve LED taşıyıcı iskelet (scaff) kuruldu; truss üst yapı ile ses ve aydınlatma
            elemanlarının konumlandırılması yapıldı. Yüksek parlaklık ve geniş görüş açısı için
            P2 (2&nbsp;mm) piksel aralıklı 24×6 m ana LED ekran tercih edildi.
          </p>
          <p>
            Operasyon, 60 kişilik teknik ekiple 2 iş gününde tamamlandı. Yayın zinciri yedekli
            kurgulandı; protokol standardı dikkate alınarak sahne görünürlüğü, akustik ve ışık
            dengesi test edildi. İçerik yalnızca teknik referans amaçlıdır; kurulum, üst düzey
            katılım beklenen resmi bir etkinlik protokolüne uygun şekilde gerçekleştirilmiştir.
          </p>
        </div>
      </section>

      {/* GALERİ */}
      <section aria-labelledby="galeri-baslik" className="container pb-14 md:pb-16">
        <h2 id="galeri-baslik" className="text-xl md:text-2xl font-bold mb-6">
          Görsel Galeri
        </h2>
        <CaseGallery images={IMAGES} />
      </section>

      {/* JSON-LD: Project (nötr, kampanya adı yok) */}
      <script
        type="application/ld+json"
        // HTML5 validator uyarıları tetiklemesin diye inline JSON.stringify
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Project",
            name: "Kapalı Alan LED ve Sahne Kurulumu (Protokol Seviyesi)",
            description:
              "40’lık çadır içinde 24×8 m sahne/podyum ve 24×6 m P2 LED ekranla scaff ve truss altyapısı kullanılan, 2 günde 60 kişilik ekiple tamamlanan büyük ölçekli kurulum.",
            image: IMAGES.map((i) => `https://www.sahneva.com${i.src}`),
            creator: { "@type": "Organization", name: "Sahneva" },
            additionalProperty: [
              { "@type": "PropertyValue", name: "Sahne/Podyum", value: "24×8 m" },
              { "@type": "PropertyValue", name: "LED Ekran", value: "24×6 m (P2)" },
              { "@type": "PropertyValue", name: "Altyapı", value: "Scaff + Truss" },
              { "@type": "PropertyValue", name: "Alan", value: "40’lık çadır (kapalı alan)" },
              { "@type": "PropertyValue", name: "Kurulum Süresi", value: "2 iş günü" },
              { "@type": "PropertyValue", name: "Ekip", value: "60 kişi" },
              { "@type": "PropertyValue", name: "Ses & Işık", value: "Line-array, robot ışık, sahne ışıkları" },
            ],
          }),
        }}
      />
    </div>
  );
}

