// app/sitemap.js
import { services } from "@/lib/data";

const SITE = "https://www.sahneva.com";

// --- Görsel eşlemesi ---------------------------------------------------------
// Not: Aşağıdaki dosyaların /public altında mevcut olduğundan emin olun.
// - Sayfa içi:    /podyum/1.webp ... /podyum/3.webp vb.
// - Galeri:       /img/galeri/<slug>-<n>.webp
//
// Galerisi olanlar: podyum, led-ekran, cadir (ilk 5 foto eklendi)
// Diğer hizmetlerde yalnızca sayfa içi 3 görsel yer alıyor.
const IMAGE_MAP = {
  "/": [],
  "/hizmetler": [],

  // Podyum Kiralama — 3 sayfa içi + galeri ilk 5
  "/podyum-kiralama": [
    "/podyum/1.webp",
    "/podyum/2.webp",
    "/podyum/3.webp",
    "/img/galeri/podyum-kiralama-1.webp",
    "/img/galeri/podyum-kiralama-2.webp",
    "/img/galeri/podyum-kiralama-3.webp",
    "/img/galeri/podyum-kiralama-4.webp",
    "/img/galeri/podyum-kiralama-5.webp",
  ],

  // LED Ekran Kiralama — 3 sayfa içi + galeri ilk 5
  "/led-ekran-kiralama": [
    "/led/1.webp",
    "/led/2.webp",
    "/led/3.webp",
    "/img/galeri/led-ekran-kiralama-1.webp",
    "/img/galeri/led-ekran-kiralama-2.webp",
    "/img/galeri/led-ekran-kiralama-3.webp",
    "/img/galeri/led-ekran-kiralama-4.webp",
    "/img/galeri/led-ekran-kiralama-5.webp",
  ],

  // Ses & Işık — 3 sayfa içi
  "/ses-isik-sistemleri": [
    "/ses-isik/1.webp",
    "/ses-isik/2.webp",
    "/ses-isik/3.webp",
  ],

  // Sahne — 3 sayfa içi
  "/sahne-kiralama": [
    "/sahne/1.webp",
    "/sahne/2.webp",
    "/sahne/3.webp",
  ],

  // Çadır — 3 sayfa içi + galeri ilk 5
  "/cadir-kiralama": [
    "/cadir/1.webp",
    "/cadir/2.webp",
    "/cadir/3.webp",
    "/img/galeri/cadir-kiralama-1.webp",
    "/img/galeri/cadir-kiralama-2.webp",
    "/img/galeri/cadir-kiralama-3.webp",
    "/img/galeri/cadir-kiralama-4.webp",
    "/img/galeri/cadir-kiralama-5.webp",
  ],

  // Masa & Sandalye — 3 sayfa içi
  "/masa-sandalye-kiralama": [
    "/masa/1.webp",
    "/masa/2.webp",
    "/masa/3.webp",
  ],

  "/hakkimizda": [],
  "/iletisim": [],
  "/sss": [],
};

// --- Statik sayfalar (tarih/öncelik örnekleri) -------------------------------
const STATIC_PAGES = [
  { path: "/",                       lastMod: "2025-01-01", change: "weekly",  pr: 1.0 },
  { path: "/hizmetler",              lastMod: "2025-01-05", change: "weekly",  pr: 0.9 },
  { path: "/podyum-kiralama",        lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/led-ekran-kiralama",     lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/ses-isik-sistemleri",    lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/sahne-kiralama",         lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/cadir-kiralama",         lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/masa-sandalye-kiralama", lastMod: "2025-02-20", change: "weekly",  pr: 0.8 },
  { path: "/hakkimizda",             lastMod: "2025-01-20", change: "yearly",  pr: 0.6 },
  { path: "/iletisim",               lastMod: "2025-01-22", change: "yearly",  pr: 0.6 },
  { path: "/sss",                    lastMod: "2025-01-23", change: "monthly", pr: 0.7 },
];

// --- Servisleri de dahil et (varsa updatedAt kullan) -------------------------
function dedupe(arr) {
  return Array.from(new Set(arr));
}

function toAbs(urlPath) {
  return urlPath.startsWith("http") ? urlPath : SITE + urlPath;
}

export default function sitemap() {
  // data.js’teki servisleri ekle (zaten statiklerle aynı olabilir; yine de tekilleştiriyoruz)
  const dynamic = (services ?? []).map((s) => ({
    path: `/${s.slug}`,
    lastMod: s?.updatedAt ?? "2025-02-15",
    change: "weekly",
    pr: 0.9,
  }));

  // Tekilleştir (aynı path hem STATIC’te hem services’teyse bir kez kalsın)
  const byPath = new Map();
  [...STATIC_PAGES, ...dynamic].forEach((item) => {
    byPath.set(item.path, item);
  });

  // Next.js sitemap dön
  return Array.from(byPath.values()).map(({ path, lastMod, change, pr }) => {
    // images alanını absolute URL’e çevir
    const images = (IMAGE_MAP[path] ?? []).map((src) => ({
      url: toAbs(src),
    }));

    return {
      url: toAbs(path),
      lastModified: new Date(lastMod).toISOString(),
      changeFrequency: change,
      priority: pr,
      // Next 13+ app router sitemap’ta image:image çıktısı için:
      images, // [{ url: "https://..." }]
    };
  });
}