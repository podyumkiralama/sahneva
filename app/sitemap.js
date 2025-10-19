// app/sitemap.js
import { services } from "@/lib/data";

const SITE = "https://www.sahneva.com";
const abs = (p) => (p.startsWith("http") ? p : `${SITE}${p}`);

// BUGÜN
const NOW_ISO = new Date().toISOString();

// ❶ Statik sayfalar (lastMod = bugün)
const STATIC_PAGES = [
  { path: "/",                       lastMod: NOW_ISO, change: "weekly",  pr: 1.0 },
  { path: "/hizmetler",              lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/podyum-kiralama",        lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/led-ekran-kiralama",     lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/ses-isik-sistemleri",    lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/cadir-kiralama",         lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/masa-sandalye-kiralama", lastMod: NOW_ISO, change: "weekly",  pr: 0.8 },
  { path: "/sahne-kiralama",         lastMod: NOW_ISO, change: "weekly",  pr: 0.9 },
  { path: "/hakkimizda",             lastMod: NOW_ISO, change: "yearly",  pr: 0.6 },
  { path: "/iletisim",               lastMod: NOW_ISO, change: "yearly",  pr: 0.6 },
  { path: "/sss",                    lastMod: NOW_ISO, change: "monthly", pr: 0.7 },
];

// ❷ Sayfa bazlı görseller
const IMAGE_MAP = {
  "/": ["/img/hero-bg.webp"],
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
  "/sahne-kiralama": ["/img/hizmet-sahne.webp"],
  "/ses-isik-sistemleri": ["/img/hizmet-sesisik.webp"],
  "/masa-sandalye-kiralama": ["/img/hizmet-masa.webp"],
  "/hizmetler": ["/img/hizmetler-ust.webp"],
  "/hakkimizda": ["/img/hakkimizda.webp"],
};

// ❸ services’ten dinamik ek (varsa)
function dynamicFromServices() {
  const seen = new Set(STATIC_PAGES.map((s) => s.path));
  return (services ?? [])
    .map((s) => ({
      path: `/${s.slug}`,
      lastMod: s?.updatedAt ?? NOW_ISO, // varsa updatedAt
      change: "weekly",
      pr: 0.9,
    }))
    .filter((x) => !seen.has(x.path));
}

// ❹ Next.js sitemap çıktısı
export default function sitemap() {
  const pages = [...STATIC_PAGES, ...dynamicFromServices()];

  return pages.map(({ path, lastMod, change, pr }) => ({
    url: abs(path),
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
    images: (IMAGE_MAP[path] ?? []).map(abs),
  }));
}