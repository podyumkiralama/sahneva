// next.config.mjs — Sahneva (modern build + güvenli/cache başlıklar)

/** @type {import('next').NextConfig} */
const ONE_YEAR = 31536000;  // s
const ONE_DAY  = 86400;     // s

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  // 🔧 derleme/bağımlılıklar
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    legacyBrowsers: false,   // modern tarayıcılar → gereksiz polyfill yok
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // 🖼️ resim optimizasyonu
  images: {
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: ONE_YEAR,
  },

  // 🔐 güvenlik + 🗃️ cache başlıkları
  async headers() {
    const now = Date.now();

    return [
      // 1) HTML & dinamik rotalar — güvenlik başlıkları + 10dk cache
      {
        source: "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          // CSP: GTAG için tagmanager + analytics; inline init var => 'unsafe-inline' kalıyor.
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
              // NOT: 'unsafe-eval' kaldırıldı (gerekmiyor) → daha güvenli ve Lighthouse puanı artar
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: "public, max-age=600" },
          // Pingdom “Add Expires headers” için klasik Expires da ekleyelim
          { key: "Expires", value: new Date(now + 600_000).toUTCString() },
        ],
      },

      // 2) Hash’li Next statikleri — 1 yıl, immutable
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // 3) Image optimizer çıktısı — 1 yıl
      {
        source: "/_next/image",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // 4) SSG JSON — 1 yıl
      {
        source: "/_next/data/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // 5) public/img — 1 yıl
      {
        source: "/img/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // 6) public/fonts — 1 yıl
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_YEAR}, immutable` },
          { key: "Expires", value: new Date(now + ONE_YEAR * 1000).toUTCString() },
        ],
      },

      // 7) robots/sitemap/favicon — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${ONE_DAY}` },
          { key: "Expires", value: new Date(now + ONE_DAY * 1000).toUTCString() },
        ],
      },
    ];
  },

  // 🔁 yönlendirmeler Vercel>Domains üzerinde kalsın (www ↔ apex + http→https)
};

export default nextConfig;
