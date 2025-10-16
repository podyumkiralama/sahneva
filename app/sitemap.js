// app/sitemap.js
import { services } from "@/lib/data";

const site = "https://www.sahneva.com";

export default function sitemap() {
  const now = new Date().toISOString();

  // Kanonik tekil sayfalar (hizmetler DAHİL)
  const singles = [
    "/",
    "/hizmetler",
    "/podyum-kiralama",
    "/led-ekran-kiralama",
    "/ses-isik-sistemleri",   // hiçbir alias/canonical remap YOK
    "/cadir-kiralama",
    "/masa-sandalye-kiralama",
    "/hakkimizda",
    "/iletisim",
    "/sss",
  ];

  // Servis slug'larını direkt ekle (hiçbir dönüştürme yok)
  const servicePaths = (services ?? []).map((s) => `/${s.slug}`);

  // Tekilleştir
  const uniquePaths = Array.from(new Set([...singles, ...servicePaths]));

  // Next.js sitemap çıktısı
  return uniquePaths.map((p) => ({
    url: site + p,
    lastModified: now,
  }));
}
