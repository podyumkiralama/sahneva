// app/(site)/page.js
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dinamik olarak yüklenecek bileşenler (lazy load)
const ServicesTabs = dynamic(() => import('../../components/ServicesTabs'), {
  loading: () => <div>Yükleniyor...</div>,
});
const ProjectsGallery = dynamic(() => import('../../components/ProjectsGallery'), {
  loading: () => <div>Yükleniyor...</div>,
});
const CorporateEvents = dynamic(() => import('../../components/CorporateEvents'), {
  loading: () => <div>Yükleniyor...</div>,
});
const Faq = dynamic(() => import('../../components/Faq'), {
  loading: () => <div>Yükleniyor...</div>,
});

// Statik meta veriler (SEO için başlık ve açıklama)
export const metadata = {
  title: 'Etkinlik Fabrikası – Kurumsal Etkinlik Hizmetleri',
  description: 'Etkinlik Fabrikası, konferanslardan ürün lansmanlarına kadar her türlü kurumsal etkinliği planlar, yönetir ve unutulmaz kılar.',
};

// Ana sayfa bileşeni
export default function Page() {
  // JSON-LD yapılandırılmış veriler (Organization ve FAQ)
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Etkinlik Fabrikası',
    'url': 'https://www.etkinlikfabrikasi.com',  // Örnek domain
    'logo': 'https://www.etkinlikfabrikasi.com/logo.png',
    'sameAs': [
      'https://www.linkedin.com/company/etkinlikfabrikasi',
      'https://www.instagram.com/etkinlikfabrikasi',
    ],
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Etkinlik Fabrikası hangi hizmetleri sunuyor?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Etkinlik Fabrikası; kurumsal toplantılar, konferanslar, ürün lansmanları, şirket içi eğitimler ve takım geliştirme aktiviteleri dahil çeşitli etkinliklerin planlanması ve yönetimini sunar.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Etkinlikler için mekan ve ekipman sağlıyor musunuz?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Evet, ihtiyacınıza uygun mekan seçiminden ses ve ışık sistemlerine kadar tüm altyapıyı sağlıyoruz. Çözüm ortaklarımızla birlikte etkinliğinizin kusursuz bir ortamda gerçekleşmesini temin ederiz.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Teklif almak ve planlama yapmak için nasıl iletişime geçebilirim?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Teklif almak için bize iletişim sayfamızdan ulaşabilir veya doğrudan info@etkinlikfabrikasi.com adresine e-posta gönderebilirsiniz. Proje ekibimiz en kısa sürede size dönüş yapacaktır.',
        },
      },
    ],
  };

  return (
    <>
      {/* Erişilebilirlik: Klavye kullanıcıları için "İçeriğe atla" bağlantısı */}
      <a 
        href="#main-content" 
        className="sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:m-4 focus:block focus:bg-indigo-600 focus:text-white focus:p-2"
      >
        İçeriğe Atla
      </a>

      {/* Üst gezinme - Header */}
      <header>
        <nav aria-label="Ana menü">
          {/* Navbar bileşeni site logosu ve menü linklerini içerir */}
          <Navbar />
        </nav>
      </header>

      {/* Ana içerik alanı */}
      <main id="main-content">
        {/* Hero Bölümü */}
        <section 
          className="relative bg-black text-white text-center flex items-center justify-center"
          style={{ minHeight: '60vh' }} 
          aria-labelledby="hero-heading"
        >
          {/* Arkaplan görseli (Next Image ile optimize) */}
          <Image 
            src="/hero.jpg" 
            alt="Büyük bir kurumsal etkinlikten kalabalık sahne manzarası"
            fill 
            priority 
            quality={80}
            sizes="100vw"
            className="object-cover object-center brightness-50" 
          />
          {/* Hero metinleri ve CTA */}
          <div className="relative z-10 px-4 py-8 max-w-2xl">
            <h1 id="hero-heading" className="text-3xl sm:text-5xl font-bold mb-4">
              Kurumsal Etkinliklerde Uzman Çözüm Ortağınız
            </h1>
            <p className="text-lg sm:text-2xl mb-6">
              Konferanslardan ürün lansmanlarına, şirketiniz için yaratıcı ve unutulmaz etkinlikler düzenliyoruz.
            </p>
            <a 
              href="#services" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Hizmetlerimizi Keşfedin
            </a>
          </div>
        </section>

        {/* Hizmetler Sekmesi Bölümü */}
        <section id="services" className="py-16 px-4 bg-gray-50" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="services-heading" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              Hizmetlerimiz
            </h2>
            {/* ServicesTabs bileşeni: farklı hizmet kategorilerini sekmelerle gösterir */}
            <ServicesTabs />
          </div>
        </section>

        {/* Projeler Galerisi Bölümü */}
        <section id="projects" className="py-16 px-4" aria-labelledby="projects-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="projects-heading" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              Tamamladığımız Projeler
            </h2>
            {/* ProjectsGallery bileşeni: önceki etkinliklerden fotoğraflar galerisi */}
            <ProjectsGallery />
          </div>
        </section>

        {/* Müşteri Yorumları Banner */}
        <section className="py-12 px-4 bg-indigo-600 text-white text-center" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-bold mb-6">
            Müşteri Görüşleri
          </h2>
          {/* ReviewBanner bileşeni: müşteri yorumları veya değerlendirme yıldızları */}
          <ReviewBanner />
        </section>

        {/* Kurumsal Etkinlikler Hakkında Bölümü */}
        <section id="corporate-events" className="py-16 px-4 bg-gray-100" aria-labelledby="corporate-heading">
          <div className="max-w-5xl mx-auto text-center">
            <h2 id="corporate-heading" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Kurumsal Etkinlik Deneyimimiz
            </h2>
            {/* CorporateEvents bileşeni: kurumsal etkinlik planlama uzmanlığını anlatan bölüm */}
            <CorporateEvents />
          </div>
        </section>

        {/* SSS Bölümü */}
        <section id="faq" className="py-16 px-4" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              Sıkça Sorulan Sorular
            </h2>
            {/* Faq bileşeni: sıkça sorulan sorular akordeon veya liste şeklinde */}
            <Faq />
          </div>
        </section>

        {/* JSON-LD Yapılandırılmış verileri sayfaya ekleme */}
        <script 
          type="application/ld+json"
          // Organization schema
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c') }}
        />
        <script 
          type="application/ld+json"
          // FAQ schema
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
        />
      </main>

      {/* Alt bilgi - Footer */}
      <footer className="bg-gray-800 text-gray-100 py-8" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Alt Bilgi</h2>
        {/* Footer bileşeni site alt içeriklerini (iletişim, sosyal medya linkleri vs.) içerir */}
        <Footer />
      </footer>
    </>
  );
}