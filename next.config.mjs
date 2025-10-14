// next.config.mjs — Sahneva Production (modern build + güvenli başlıklar)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  // ⚡ Görsel optimizasyonu — uzun ömürlü cache
  images: {
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 yıl (saniye)
  },

  // 🧹 Prod’da gereksiz console logları temizle (error/warn hariç)
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    transformMixedEsModules: true, // ESM bağımlılıklarında daha doğru ağaç sarsma
  },

  // 🚀 Modern tarayıcılar için build (gereksiz polyfill/transpile'ı azaltır)
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    legacyBrowsers: false, // kritik: IE/çok eski Android için polyfill’leri bırak
    esmExternals: true,    // ESM bağımlılıklarını ESM olarak tut
  },

  // ✅ Güvenlik + Cache başlıkları
  async headers() {
    return [
      // ❶ HTML ve dinamik rotalar (10 dk cache — güvenli)
      {
        source:
          "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
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
              "frame-src https://www.google.com https://maps.google.com https://www.google.com.tr",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: "public, max-age=600" }, // 10 dk
        ],
      },

      // ❷ Next statikleri (hash’li dosyalar) — 1 yıl, immutable
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

      // ❺ public/img altındaki görseller — 1 yıl, immutable
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // ❻ (Varsa) font dosyaları — 1 yıl, immutable
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // ❼ robots/sitemap/favicon — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },

  // ⚠️ Redirects burada yok.
  // www → sahneva.com ve http → https yönlendirmelerini
  // Vercel > Project > Settings > Domains üzerinden yönet.
};

export default nextConfig;
