const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    const scriptSrc = isProd
      ? ["'self'", "blob:", "https://www.googletagmanager.com", "https://www.google-analytics.com"].join(' ')
      : ["'self'", "'unsafe-inline'", "'unsafe-eval'", "blob:", "https://www.googletagmanager.com", "https://www.google-analytics.com"].join(' ');

    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline' blob:",
      "style-src-elem 'self' 'unsafe-inline' blob:",
      "style-src-attr 'unsafe-inline'",
      `script-src ${scriptSrc}`,
      "connect-src 'self' blob: https://www.google-analytics.com https://region1.google-analytics.com https://stats.g.doubleclick.net",
      "worker-src 'self' blob:"
      // Trusted Types intentionally disabled to avoid mobile runtime issues
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'sahneva.com' }],
        permanent: true,
        destination: 'https://www.sahneva.com/:1',
      },
      { source: '/services', destination: '/hizmetler', permanent: true },
      { source: '/services/podyum', destination: '/podyum-kiralama', permanent: true },
      { source: '/services/led-ekran', destination: '/led-ekran-kiralama', permanent: true },
      { source: '/services/ses-isik', destination: '/ses-isik-sistemleri', permanent: true },
      { source: '/contact', destination: '/iletisim', permanent: true },
    ];
  },
};

module.exports = nextConfig;
