/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  swcMinify: true,

  // Görsel optimizasyonu (Next/Image)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    minimumCacheTTL: 31536000, // 1 yıl
  },

  // Modern tarayıcı hedefi
  experimental: {
    legacyBrowsers: false,
    optimizePackageImports: ["lucide-react"],
    esmExternals: true,
  },

  // Build optimizasyonları
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    transformMixedEsModules: true,
  },

  // Tek dil
  i18n: {
    locales: ["tr"],
    defaultLocale: "tr",
  },

  async headers() {
    return [
      // ❶ HTML & dinamik rotalar — 10 dk cache
      {
        source:
          "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          // COOP ekledik (PSI uyarısını susturur, embedleri bozmaz)
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              "frame-src https://www.google.com https://maps.google.com https://www.google.com.tr",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              // JSON-LD ve Next'in küçük inline scriptleri için gerekli
              "script-src 'self' 'unsafe-inline'",
              "connect-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: "public, max-age=600" }, // 10 dk
        ],
      },

      // ❷ Hash’li statikler — 1 yıl, immutable
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // ❸ Next Image optimizer çıktısı — 1 yıl, immutable
      {
        source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // ❹ SSG JSON’ları — 1 yıl, immutable
      {
        source: "/_next/data/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // ❺ public altı varlıklar — 1 yıl, immutable
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // ❻ robots/sitemap/favicon — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },

  // Yönlendirmeleri Vercel Domains üzerinden yönetiyorsun (www/https).
  // Buraya ekstra redirect eklemedim ki çakışma olmasın.
};

// ÖNEMLİ: Next CJS bekler — ESM export kullanma
module.exports = nextConfig;
// (alternatif: dosyayı 'next.config.mjs' yapıp 'export default nextConfig' bırakabilirsin)