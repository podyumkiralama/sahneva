// app/robots.js
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sahneva.com/sitemap.xml",
    host: "https://sahneva.com",
  };
}
