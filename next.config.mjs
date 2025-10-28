// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 360, 375, 414, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    // (Next 15+) legacyBrowsers kaldırıldı; modern çıktıyı browserslist ile alıyoruz.
    optimizePackageImports: ["lucide-react"],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // ⬇️ ESKİ JS POLYFILL'LERİNİ TAMAMEN DEVRE DIŞI BIRAK
  webpack(config) {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Lighthouse "Eski JavaScript"te listelenen polyfill paketleri:
      "array.prototype.flat": false,
      "array.prototype.flatmap": false,
      "object.fromentries": false,
      "string.prototype.trimend": false,
      "string.prototype.trimstart": false,
    };
    return config;
  },

  async headers() {
    return [
      // 1) HTML & dinamik rotalar — güvenlik + 10 dk cache
      {
        source:
          "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|img/|fonts/).*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy",value: "same-origin" },

          // ✅ CSP: GA4 + Vercel/Cloudflare Insights eklendi
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'self'",
              // Harita/iframe ihtiyaçların
              "frame-src https://www.google.com https://maps.google.com https://www.google.com.tr https://static.cloudflareinsights.com",
              // Görseller
              "img-src 'self' data: blob: https: https://www.google-analytics.com https://stats.g.doubleclick.net",
              // Fontlar
              "font-src 'self' data:",
              // Scriptler (GA4/Insights dahil)
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://static.cloudflareinsights.com",
              // XHR/Fetch (GA4, Vercel, Cloudflare)
              "connect-src 'self' https://www.google-analytics.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://vitals.vercel-insights.com https://cloudflareinsights.com https://static.cloudflareinsights.com",
              // CSS
              "style-src 'self' 'unsafe-inline'",
              // Workers
              "worker-src 'self' blob:",
            ].join("; "),
          },

          { key: "Cache-Control", value: "public, max-age=600" },
        ],
      },

      // 2) Hash’li statikler — 1 yıl, immutable
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // 3) Next/Image optimizer — 1 yıl, immutable
      {
        source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // 4) SSG JSON — 1 yıl, immutable
      {
        source: "/_next/data/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // 5) public varlıkları — 1 yıl, immutable
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // 6) robots/sitemap/favicon/manifest — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico|site.webmanifest)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
