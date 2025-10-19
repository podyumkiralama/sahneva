// app/sitemap.js
import { services } from "@/lib/data";

const site = "https://www.sahneva.com";

export default function sitemap() {
  // Statik sayfalar (son düzenlenme tarihleri örnek; istersen güncelleyebiliriz)
  const staticPages = [
    { path: "/",                       lastMod: "2025-01-01", change: "weekly",  pr: 1.0 },
    { path: "/hizmetler",              lastMod: "2025-01-05", change: "weekly",  pr: 0.9 },
    { path: "/podyum-kiralama",        lastMod: "2025-01-10", change: "weekly",  pr: 0.9 },
    { path: "/led-ekran-kiralama",     lastMod: "2025-02-01", change: "weekly",  pr: 0.9 },
    { path: "/ses-isik-sistemleri",    lastMod: "2025-02-05", change: "weekly",  pr: 0.9 },
    { path: "/cadir-kiralama",         lastMod: "2025-02-15", change: "weekly",  pr: 0.9 },
    { path: "/masa-sandalye-kiralama", lastMod: "2025-02-20", change: "weekly",  pr: 0.8 },
    { path: "/hakkimizda",             lastMod: "2025-01-20", change: "yearly",  pr: 0.6 },
    { path: "/iletisim",               lastMod: "2025-01-22", change: "yearly",  pr: 0.6 },
    { path: "/sss",                    lastMod: "2025-01-23", change: "monthly", pr: 0.7 },
  ];

  // Dinamik servisler (varsa updatedAt kullan)
  const dynamicServices = (services ?? []).map((s) => ({
    path: `/${s.slug}`,
    lastMod: s?.updatedAt ?? "2025-02-15",
    change: "weekly",
    pr: 0.9,
  }));

  return [...staticPages, ...dynamicServices].map(({ path, lastMod, change, pr }) => ({
    url: site + path,
    lastModified: new Date(lastMod).toISOString(),
    changeFrequency: change,
    priority: pr,
  }));
}