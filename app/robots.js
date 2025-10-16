// app/robots.js
export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://www.sahneva.com/sitemap.xml',
    host: 'https://www.sahneva.com',
  };
}