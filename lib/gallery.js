// lib/gallery.js
import fs from "fs";
import path from "path";

// slug → /public/img klasör adı eşlemesi
const DIR_BY_SLUG = {
  "podyum-kiralama": "podyum",
  "led-ekran-kiralama": "led",
  "ses-isik-sistemleri": "ses-isik",
  "sahne-kiralama": "sahne",
  "cadir-kiralama": "cadir",
  "masa-sandalye-kiralama": "sandalye",
};

const IMG_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

export function getServiceImages(slug, limit = 5) {
  const dirName = DIR_BY_SLUG[slug];
  if (!dirName) return [];
  try {
    const base = path.join(process.cwd(), "public", "img", dirName);
    const files = fs.readdirSync(base, { withFileTypes: true })
      .filter((d) => d.isFile())
      .map((d) => d.name)
      .filter((n) => IMG_EXT.has(path.extname(n).toLowerCase()));

    // Sıralama: ada göre stabil; istersen tarih/numara mantığına göre değiştir
    const firstFive = files.slice(0, 5);
    return firstFive.map((f) => `/img/${dirName}/${f}`);
  } catch {
    return [];
  }
}