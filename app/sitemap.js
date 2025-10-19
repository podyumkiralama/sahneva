// app/sitemap.js
import { services } from "@/lib/data";

const SITE = "https://www.sahneva.com";

// Yardımcı
const abs = (p) => (p.startsWith("http") ? p : `${SITE}${p}`);

// ❶ Statik sayfalar
const STATIC_PAGES = [
  { path: "/",                       lastMod: "2025-01-01", change: "weekly",  pr: 1.0 },
  { path: "/hizmetler",              lastMod: "2025-01-05", change: "weekly",  pr: 0.9 },
  { path: "/podyum-kiralama",        lastMod: "2025-01-10", change: "weekly",  pr: 0.9 },
  { path: "/led-ekran-kiralama",     lastMod: "2025-02-01", change: "weekly",  pr: 0.9 },
  { path: "/ses-isik-sistemleri",    lastMod: "2025-02-05", change: "weekly",  pr: 0.9 },
  { path: "/cadir-kiralama",         lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/masa-sandalye-kiralama", lastMod: "2025-02-20", change: "weekly",  pr: 0.8 },
  { path: "/sahne-kiralama",         lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
  { path: "/hakkimizda",             lastMod: "2025-01-20", change: "yearly",  pr: 0.6 },
  { path: "/iletisim",               lastMod: "2025-01-22", change: "yearly",  pr: 0.6 },
  { path: "/sss",                    lastMod: "2025-01-23", change: "monthly", pr: 0.7 },
];

// ❷ Sayfa bazlı görseller (ilk 5’ler + içerik tepe görselleri)
const IMAGE_MAP = {
  "/": [
    "/img/hero-bg.webp",
  ],

  "/podyum-kiralama": [
    "/img/hizmet-podyum.webp",
    "/img/podyum/1.webp",
    "/img/podyum/2.webp",
    "/img/podyum/3.webp",
    "/img/galeri/podyum-kiralama-1.webp",
  ],

  "/led-ekran-kiralama": [
    "/img/hizmet-led-ekran.webp",
    "/img/led/1.webp",
    "/img/led/2.webp",
    "/img/led/3.webp",
    "/img/galeri/led-ekran-kiralama-1.webp",
  ],

  "/cadir-kiralama": [
    "/img/hizmet-cadir.webp",
    "/img/cadir/1.webp",
    "/img/cadir/2.webp",
    "/img/cadir/3.webp",
    "/img/galeri/cadir-kiralama-1.webp",
  ],

  "/sahne-kiralama": [
    "/img/hizmet-sahne.webp",
  ],

  "/ses-isik-sistemleri": [
    "/img/hizmet-sesisik.webp",
  ],

  "/masa-sandalye-kiralama": [
    "/img/hizmet-masa.webp",
  ],

  "/hizmetler": [
    "/img/hizmetler-ust.webp",
  ],

  "/hakkimizda": [
    "/img/hakkimizda.webp",
  ],
};

// ❸ services’ten dinamik ek (varsa)
// Not: duplicates engelleniyor
function dynamicFromServices() {
  const seen = new Set(STATIC_PAGES.map((s) => s.path));
  return (services ?? [])
    .map((s) => `/${s.slug}`)
    .filter((p) => !seen.has(p))
    .map((path) => ({
      path,
      lastMod: "2025-02-15",
      change: "weekly",
      pr: 0.9,
    }));
}

// ❹ Next.js metadata sitemap çıkışı
export default function sitemap() {
  const pages = [...STATIC_PAGES, ...dynamicFromServices()];

  return pages.map(({ path, lastMod, change, pr }) => {
    const images = (IMAGE_MAP[path] ?? []).map((src) => abs(src)); // << düz string dizi

    return {
      url: abs(path),
      lastModified: new Date(lastMod).toISOString(),
      changeFrequency: change,
      priority: pr,
      // Next.js resmi dokümanda 'images' alanı zorunlu değil ama
      // string[] olarak verince XML'e <image:image> olarak düzgün yazılıyor.
      images,
    };
  });
}