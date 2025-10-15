// next.config.mjs — Sahneva (Cloudflare’siz, sade ve güvenli)

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  images: {
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 yıl
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    transformMixedEsModules: true,
  },

  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    legacyBrowsers: false,
    esmExternals: true,
  },

  async headers() {
    return [
      // 1) Next statikleri (hash’li) — 1 yıl, immutable
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // 2) Next Image çıktısı — 1 yıl, immutable
      {
        source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // 3) SSG JSON — 1 yıl, immutable
      {
        source: "/_next/data/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // 4) Public görseller — 1 yıl, immutable
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // 5) Fontlar — 1 yıl, immutable
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      // 6) robots/sitemap/favicon — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      // 7) Geri kalan tüm sayfalar (HTML/dinamik) — güvenlik + kısa cache
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              // Harita/Google widget kullanıyorsan frame-src açık kalsın; yoksa silebilirsin
              "frame-src https://www.google.com https://maps.google.com https://www.google.com.tr",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              // GA4 ‘gtag.js’ (googletagmanager.com) + ölçüm endpointleri
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://static.cloudflareinsights.com/ https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          // HTML’lerde kısa cache: 10 dk
          { key: "Cache-Control", value: "public, max-age=600" },
        ],
      },
    ];
  },
};

export default nextConfig;
