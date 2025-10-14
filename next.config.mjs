// next.config.mjs — Sahneva (Cloudflare olmadan tam hız + güvenlik + cache)
/** @type {import('next').NextConfig} */

const ONE_YEAR = 31536000; // saniye
const ONE_DAY = 86400;     // saniye
const TEN_MIN = 600;       // saniye

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  // ⚙️ Build optimizasyonları
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    legacyBrowsers: false,
    esmExternals: true,
  },

  // 🖼️ Görsel optimizasyonu
  images: {
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: ONE_YEAR,
  },

  // 🧱 Başlıklar — güvenlik + sıkıştırma + cache
  async headers() {
    const now = Date.now();

    return [
      // ❶ HTML & sayfalar (10 dk)
      {
        source:
          "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
        headers: [
          { key: "Content-Encoding", value: "gzip" }, // gzip göstergesi
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
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
              "script-src 'self' 'unsafe-inline' https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: `public, max-age=${TEN_MIN}` },
          { key: "Expires", value: new Date(now + TEN_MIN * 1000).toUTCString() },
        ],
      },

      // ❷ Hash’li statikler — 1 yıl, immutable
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
          { key: "Content-Encoding", value: "gzip" },
        ],
      },

      // ❸ Image optimizer — 1 yıl
      {
        source: "/_next/image",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // ❹ SSG JSON — 1 yıl
      {
        source: "/_next/data/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // ❺ public/img — 1 yıl
      {
        source: "/img/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // ❻ public/fonts — 1 yıl
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // ❼ robots/sitemap/favicon — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_DAY}` },
          { key: "Expires", value: new Date(now + ONE_DAY * 1000).toUTCString() },
        ],
      },
    ];
  },
};

export default nextConfig;
