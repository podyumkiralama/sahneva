// app/sitemap.js
export default async function sitemap() {
  const base = "https://sahneva.com";
  const now = new Date().toISOString();
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/hizmetler`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/projeler`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`,  lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
  ];
}
