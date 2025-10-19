// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  swcMinify: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320,360,375,414,480,640,750,828,1080,1200,1920],
    imageSizes:  [16,24,32,48,64,96,128,192,256,384,512],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    legacyBrowsers: false,
    optimizePackageImports: ["lucide-react"],
    esmExternals: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error","warn"] } : false,
    transformMixedEsModules: true,
  },

  // i18n KALDIRILDI (tek dilde gerek yok ve redirect zincirine sebep olabiliyor)

  async headers() {
    return [
      // 1) HTML & dinamik rotalar — güvenlik + 10 dk cache
      {
        source: "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
        headers: [
          // Güvenlik başlıkları
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy",value: "same-origin" },

          // CSP — 'upgrade-insecure-requests' KALDIRILDI (çifte HTTPS zorlaması döngü yapmasın)
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
              // JSON-LD ve Next'in küçük inline scriptleri için 'unsafe-inline' gerekli
              "script-src 'self' 'unsafe-inline'",
              "connect-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:"
            ].join("; "),
          },

          // Cache
          { key: "Cache-Control", value: "public, max-age=600" },
        ],
      },

      // 2) Hash’li statikler — 1 yıl, immutable
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // 3) Next Image optimizer — 1 yıl, immutable
      { source: "/_next/image", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // 4) SSG JSON — 1 yıl, immutable
      { source: "/_next/data/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // 5) public varlıkları — 1 yıl, immutable
      { source: "/img/:path*",   headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/fonts/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // 6) robots/sitemap/favicon — 1 gün
      { source: "/:file(robots.txt|sitemap.xml|favicon.ico)", headers: [{ key: "Cache-Control", value: "public, max-age=86400" }] },
    ];
  },
};

export default nextConfig;