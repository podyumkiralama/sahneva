// next.config.mjs — Sahneva Production (redirects kaldırıldı)

/** @type {import('next').NextConfig} */
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
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  async headers() {
    return [
      {
        // HTML ve dinamik rotalar
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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: "public, max-age=600" }, // 10 dk
        ],
      },

      // Next statikleri — 1 yıl
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // Next Image çıktısı — 1 yıl
      {
        source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // SSG JSON — 1 yıl
      {
        source: "/_next/data/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // public/img — 1 yıl
      {
        source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // fonts — 1 yıl
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },

      // robots/sitemap/favicon — 1 gün
      {
        source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },

  // ⚠️ redirects BLOĞU YOK – Vercel domain ayarları yönetsin
};

export default nextConfig;
