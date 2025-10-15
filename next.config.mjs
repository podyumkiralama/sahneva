// next.config.mjs — Sahneva (Cloudflare’siz, render-blocking CSS’i azalt)

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,

  // Görsel optimizasyonu
  images: {
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 yıl
  },

  // Production’ta gereksiz console’ları at
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
    transformMixedEsModules: true,
  },

  // Modern build
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
    legacyBrowsers: false,
    esmExternals: true,

    // 🔥 Render-blocking CSS’i azalt (küçük CSS’leri inline eder)
    optimizeCss: true,
    inlineCss: true,
  },

  // Güvenlik + cache başlıkları (Cloudflare yokken yeterli)
  async headers() {
    return [
      {
        // HTML ve dinamik rotalar
        source:
          "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
        headers: [
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
              // Sadece Analytics (Tag Manager yok)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: "public, max-age=600" }, // 10 dk
        ],
      },
      // Statikler — 1 yıl, immutable
      { source: "/_next/static/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/_next/image",       headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/_next/data/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/img/:path*",        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/fonts/:path*",      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/:file(robots.txt|sitemap.xml|favicon.ico)", headers: [{ key: "Cache-Control", value: "public, max-age=86400" }] },
    ];
  },
};

export default nextConfig;