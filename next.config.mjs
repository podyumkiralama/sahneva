/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320,360,375,414,480,640,750,828,1080,1200,1920],
    imageSizes:  [16,24,32,48,64,96,128,192,256,384,512],
    minimumCacheTTL: 31536000, // 1 yıl
  },

  experimental: {
    legacyBrowsers: false,
    optimizePackageImports: ["lucide-react"],
    esmExternals: true,
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error","warn"] } : false,
  },

  i18n: {
    locales: ["tr"],
    defaultLocale: "tr",
  },

  async headers() {
    return [
      // HTML & dinamik rotalar — 10 dk cache
      {
        source:
          "/((?!_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|img/|fonts/).*)",
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
              // JSON-LD için inline, Next işçileri için blob:
              "script-src 'self' 'unsafe-inline' blob:",
              "connect-src 'self'",
              "style-src 'self' 'unsafe-inline'",
              "worker-src 'self' blob:",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          { key: "Cache-Control", value: "public, max-age=600" },
        ],
      },

      // Hash’li statikler — 1 yıl
      { source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // Image optimizer — 1 yıl
      { source: "/_next/image",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // SSG JSON — 1 yıl
      { source: "/_next/data/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // public/img & public/fonts — 1 yıl
      { source: "/img/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },

      // robots/sitemap/favicon — 1 gün
      { source: "/:file(robots.txt|sitemap.xml|favicon.ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }] },

      // manifest — 1 yıl (opsiyonel ama güzel)
      { source: "/site.webmanifest",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};

export default nextConfig;