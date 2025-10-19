// app/robots.js
export default function robots() {
  const host = "https://www.sahneva.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow örnekleri (gerekirse):
      // disallow: ["/api/", "/_next/", "/private/"],
    },
    sitemap: [
      `${host}/sitemap.xml`,
      `${host}/sitemap-images.xml`,
    ],
    host,
  };
}