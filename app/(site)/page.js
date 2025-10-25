import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Ağır bileşenleri (ör. hizmet sekmeleri, galeri) dinamik yükle (lazy load) etmek için Next.js dynamic fonksiyonu kullanılıyor.
// Bu sayede ilgili JS kodu ilk yüklemede gönderilmez, kullanıcı sayfayı kaydırdığında bileşen yüklenir.
const ServicesTabs = dynamic(() => import('../components/ServicesTabs'), { suspense: true });
const ProjectsGallery = dynamic(() => import('../components/ProjectsGallery'), { suspense: true });
const CorporateEvents = dynamic(() => import('../components/CorporateEvents'), { suspense: true });
const FaqSection = dynamic(() => import('../components/Faq'), { suspense: true });

// Lazy-load bileşenleri yüklenirken gösterilecek geçici iskelet görünümü (Skeleton ekran)
function SectionSkeleton() {
  return (
    <div className="container py-12 text-center text-gray-500">
      {/* Bu bölüm, yükleme sırasında geçici olarak görünecek */}
      Yükleniyor...
    </div>
  );
}

// SEO amaçlı yapılandırılmış veriler (JSON-LD) için JavaScript nesneleri
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sahneva",
  "url": "https://www.sahneva.com/",          // Placeholder URL (kullanıcı kendi alan adını eklemeli)
  "description": "Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip.",
  "telephone": "+90 000 000 0000",            // Placeholder telefon (kullanıcı gerçek telefonunu eklemeli)
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR",
    "addressLocality": "İstanbul"            // Placeholder: merkez lokasyon
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Sahne ve ekipman kurulumu ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Etkinliğin boyutuna ve türüne bağlı olarak kurulum süresi değişir. Genellikle sahne, podyum, ses ve ışık ekipmanlarının kurulumu ortalama birkaç saat içinde tamamlanır. Büyük çaplı etkinliklerde bu süre yarım günü bulabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Türkiye genelinde hizmet veriyor musunuz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. Merkezimiz İstanbul’da olsa da Türkiye’nin tüm bölgelerinde sahne, podyum, LED ekran ve ses-ışık sistemi kiralama hizmeti sunuyoruz. Lojistik planlamayla ülke çapında hızlı teslimat yapmaktayız."
      }
    }
    // Daha fazla soru-cevap çiftleri gerektiğinde buraya eklenebilir.
  ]
};

export default function HomePage() {
  return (
    <>
      {/* <Head> bileşeni içinde sayfa başlığı, meta etiketleri ve yapılandırılmış veriler tanımlanıyor */}
      <Head>
        {/* Sayfa <title> ve meta description SEO için tanımlandı */}
        <title>Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama</title>
        <meta name="description" content="Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık sistemleri ve çadır kiralama. Hızlı teslim, profesyonel teknik ekip." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Performans için font optimize: Google Fonts preconnect ve display=swap kullanımı (gerekiyorsa) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />

        {/* Yapılandırılmış veriler (JSON-LD) - Arama motorları için Organization ve FAQ şemaları */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} 
        />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
        />
      </Head>

      {/* Erişilebilirlik için gezinme menüsü (nav) ve ana içeriğe geçiş için main tanımı */}
      <header>
        <nav aria-label="Ana Menüler" className="bg-white shadow">
          <ul className="container mx-auto flex gap-6 py-4 px-4">
            {/* Örnek menü elemanları; kullanıcı gerekli sayfaları ekleyebilir */}
            <li><Link href="/"><a className="font-semibold text-gray-800">Ana Sayfa</a></Link></li>
            <li><Link href="/hizmetler"><a className="text-gray-600 hover:text-gray-800">Hizmetler</a></Link></li>
            <li><Link href="/projeler"><a className="text-gray-600 hover:text-gray-800">Projeler</a></Link></li>
            <li><Link href="/iletisim"><a className="text-gray-600 hover:text-gray-800">İletişim</a></Link></li>
          </ul>
        </nav>
      </header>

      {/* Ana içerik başlangıcı */}
      <main id="main-content">
        {/* Hero Bölümü: Dikkat çekici başlık, arka plan görseli ve CTA butonları */}
        <section className="relative bg-gray-800 text-white">
          {/* Arka plan görseli optimize olarak Next.js Image bileşeniyle eklendi (fill ile tüm bölümü kaplıyor) */}
          <Image 
            src="/img/hero-bg.jpg"        /* Placeholder arka plan görseli yolu */
            alt="Sahne, podyum, LED ekran ve ses-ışık ekipmanlarıyla kurulu bir etkinlik sahnesi" 
            layout="fill" 
            priority           /* İlk ekranda göründüğü için öncelikli yüklenecek */
            className="object-cover" 
          />
          {/* Arka plan üzerine koyu bir örtü efekti gerekiyorsa bir overlay div kullanılabilir */}
          <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" aria-hidden="true"></div>

          {/* Hero içerik */}
          <div className="relative z-10 container mx-auto py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Sahne, Podyum, LED Ekran &amp; Ses-Işık Sistemleri Kiralama
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Türkiye genelinde sahne ve podyum kurulumları, LED ekran, ses-ışık sistemleri ve çadır kiralama. 
              Hızlı teslim, profesyonel teknik ekip.
            </p>
            {/* CTA butonları */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Arama yapma butonu (telefon CTA) */}
              <a 
                href="tel:+900000000000" 
                className="btn btn-primary px-6 py-3 text-lg font-semibold rounded" 
                onClick={() => {}} /* Not: Gerçek projede, isteğe bağlı görsel geri bildirim efektleri eklenebilir */ 
                aria-label="Telefonla hemen ara"
              >
                Hemen Ara
              </a>
              {/* WhatsApp üzerinden iletişim butonu */}
              <a 
                href="https://wa.me/900000000000?text=Merhaba%2C+teklif+almak+istiyorum." 
                target="_blank" rel="noopener noreferrer"
                className="btn btn-accent px-6 py-3 text-lg font-semibold rounded" 
                aria-label="WhatsApp üzerinden teklif iste"
              >
                WhatsApp Teklif Al
              </a>
            </div>
          </div>
        </section>

        {/* Müşteri Yorumları Banner: hızlı yükleme için metin tabanlı, gerekiyorsa lazy-load */}
        <section className="bg-neutral-100 py-8 mt-4" aria-label="Müşteri Yorumları">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl font-bold mb-6">Müşteri Yorumları</h2>
            {/* Örnek bir müşteri yorumu */}
            <figure className="max-w-xl mx-auto">
              <blockquote className="text-neutral-800 text-lg italic">“Hizmet kalitesi mükemmel, teknik ekip son derece profesyoneldi. Etkinliğimiz sorunsuz geçti.”</blockquote>
              <figcaption className="mt-2 text-neutral-600">– Ali Yılmaz, <cite>ABC Etkinlik</cite></figcaption>
            </figure>
          </div>
        </section>

        {/* Hizmetler Sekmesi: Kullanıcı etkileşimiyle farklı hizmet içeriklerini gösteren sekmeler */}
        <section className="container mx-auto py-14 md:py-16" aria-labelledby="hizmetler-baslik">
          <h2 id="hizmetler-baslik" className="text-2xl md:text-3xl font-bold text-center mb-8">Hizmetlerimiz</h2>
          {/* Sekme başlıkları (tab list) */}
          <div role="tablist" aria-label="Hizmet sekmeleri" className="flex flex-wrap justify-center gap-4 mb-6">
            {/* Örnek sekme düğmeleri. ARIA özellikleri ile seçili sekme belirtilir. */}
            <button role="tab" aria-selected="true" aria-controls="panel-1" id="tab-1" className="px-4 py-2 font-medium text-white bg-blue-600 rounded">Sahne &amp; Podyum</button>
            <button role="tab" aria-selected="false" aria-controls="panel-2" id="tab-2" className="px-4 py-2 font-medium text-blue-600 bg-blue-100 rounded">LED Ekran</button>
            <button role="tab" aria-selected="false" aria-controls="panel-3" id="tab-3" className="px-4 py-2 font-medium text-blue-600 bg-blue-100 rounded">Ses &amp; Işık</button>
            <button role="tab" aria-selected="false" aria-controls="panel-4" id="tab-4" className="px-4 py-2 font-medium text-blue-600 bg-blue-100 rounded">Çadır</button>
          </div>
          {/* Sekme panelleri */}
          <div id="panel-1" role="tabpanel" aria-labelledby="tab-1">
            <h3 className="text-xl font-semibold mb-3">Sahne &amp; Podyum</h3>
            <p className="mb-4">Konser, miting ve tüm etkinlikler için farklı boyutlarda <strong>sahne</strong> ve <strong>podyum</strong> platformları kuruyoruz. Güvenlik standartlarına uygun, sağlam ve hızlı kurulumlu sahne sistemleri sunuyoruz.</p>
            <Image src="/img/sahne-podyum.jpg" alt="Sahne ve podyum kurulum örneği" width={800} height={450} className="rounded shadow-md mx-auto" loading="lazy" />
          </div>
          <div id="panel-2" role="tabpanel" aria-labelledby="tab-2" hidden>
            {/* Bu ve diğer paneller başlangıçta hidden (gizli). Sekme tıklandığında ilgili panel gösterilecek (JS ile). */}
            <h3 className="text-xl font-semibold mb-3">LED Ekran</h3>
            <p className="mb-4">İç ve dış mekanlar için yüksek çözünürlüklü LED ekran kiralama hizmeti. Farklı ebatlarda modüler LED paneller ile gündüz güneş ışığında dahi net görüntü.</p>
            <Image src="/img/led-ekran.jpg" alt="LED ekran kurulumu örneği" width={800} height={450} className="rounded shadow-md mx-auto" loading="lazy" />
          </div>
          <div id="panel-3" role="tabpanel" aria-labelledby="tab-3" hidden>
            <h3 className="text-xl font-semibold mb-3">Ses &amp; Işık Sistemleri</h3>
            <p className="mb-4">Konser kalitesinde <strong>ses sistemleri</strong>, profesyonel mikserler ve mikrofonlar; ayrıca hareketli sahne ışıkları, sahne arkası aydınlatma ve özel efekt ışık sistemleri kiralama.</p>
            <Image src="/img/ses-isik.jpg" alt="Ses ve ışık sistemi ekipmanları" width={800} height={450} className="rounded shadow-md mx-auto" loading="lazy" />
          </div>
          <div id="panel-4" role="tabpanel" aria-labelledby="tab-4" hidden>
            <h3 className="text-xl font-semibold mb-3">Çadır &amp; Diğer</h3>
            <p className="mb-4">Outdoor etkinlikler için her boyutta etkinlik çadırları, platform çevresi bariyer sistemleri ve teknik gereksinimler için ek ekipman kiralama hizmetleri.</p>
            <Image src="/img/cadir.jpg" alt="Etkinlik çadırı örneği" width={800} height={450} className="rounded shadow-md mx-auto" loading="lazy" />
          </div>
        </section>

        {/* Projeler Galerisi: Tamamlanan işlerden örnek görseller galerisi (lazy load ile optimize) */}
        <Suspense fallback={<SectionSkeleton />}>
          <section className="container mx-auto py-14 md:py-16" aria-labelledby="projeler-baslik">
            <h2 id="projeler-baslik" className="text-2xl md:text-3xl font-bold text-center mb-8">Projelerimiz</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-4">
              {/* Örnek proje görselleri - src yolları placeholder, gerçek görsellerle değiştirilecek */}
              <Image src="/img/proje1.jpg" alt="Konser etkinliği sahne kurulumu" width={400} height={300} className="w-full h-auto rounded shadow" loading="lazy" />
              <Image src="/img/proje2.jpg" alt="Açık hava etkinliği LED ekran kurulumu" width={400} height={300} className="w-full h-auto rounded shadow" loading="lazy" />
              <Image src="/img/proje3.jpg" alt="Konferans salonu sahne ve ışık düzeni" width={400} height={300} className="w-full h-auto rounded shadow" loading="lazy" />
              <Image src="/img/proje4.jpg" alt="Düğün etkinliği podyum ve ışık sistemi" width={400} height={300} className="w-full h-auto rounded shadow" loading="lazy" />
              <Image src="/img/proje5.jpg" alt="Festival alanı büyük sahne kurulumu" width={400} height={300} className="w-full h-auto rounded shadow" loading="lazy" />
              <Image src="/img/proje6.jpg" alt="Konferans LED ekran ve ses sistemi sahnesi" width={400} height={300} className="w-full h-auto rounded shadow" loading="lazy" />
            </div>
          </section>
        </Suspense>

        {/* Kurumsal Etkinlik Açıklaması: Kurumsal etkinlik hizmetleri hakkında bilgi (lazy load edilebilir) */}
        <Suspense fallback={<SectionSkeleton />}>
          <section className="container mx-auto py-14 md:py-16 flex flex-col md:flex-row items-center gap-8 px-4">
            {/* Örnek bir görsel (placeholder) ve metin açıklaması */}
            <Image src="/img/kurumsal-etkinlik.jpg" alt="Kurumsal etkinlik sahne ve ekipman kurulumu" width={600} height={400} className="rounded-lg shadow-md md:w-1/2" loading="lazy" />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Kurumsal Etkinlikler</h2>
              <p className="text-neutral-800 mb-3">Kurumsal etkinlik, lansman ve toplantılar için anahtar teslim çözümler sunuyoruz. Sahne ve teknik ekipman kurulumunu, etkinliğin konseptine uygun tasarım ve planlama ile gerçekleştiriyoruz.</p>
              <p className="text-neutral-800">20 yılı aşkın tecrübemizle, <strong>kurumsal etkinlik</strong>lerinizde kesintisiz ses ve görüntü, güvenli sahne yapıları ve yedekli teknik altyapı sağlıyoruz. Etkinlik öncesi keşif ve danışmanlık hizmetlerimizle ihtiyaçlarınıza en uygun çözümü belirliyoruz.</p>
            </div>
          </section>
        </Suspense>

        {/* SEO Metni: Arama motorları için anahtar kelime odaklı, 2 sütunlu açıklayıcı metin bölümü */}
        <section className="container mx-auto py-14 md:py-16 px-4" aria-labelledby="seo-baslik">
          <h2 id="seo-baslik" className="text-2xl md:text-3xl font-bold text-center mb-8">
            Etkinlik Prodüksiyon &amp; Organizasyon – Türkiye Geneli Teknik Çözüm Ortağınız
          </h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <article>
              <h3 className="font-semibold text-lg mb-2">Uçtan Uca Teknik Hizmet</h3>
              <p className="text-neutral-800 mb-2">
                Sahneva{" "}
                <a href="/sahne-kiralama" className="underline hover:no-underline font-medium">
                  sahne sistemleri kiralama
                </a>
                ,{" "}
                <a href="/podyum-kiralama" className="underline hover:no-underline font-medium">
                  podyum kurulumu
                </a>
                ,{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">
                  LED ekran kiralama
                </a>{" "}
                ve{" "}
                <a href="/ses-isik-sistemleri" className="underline hover:no-underline font-medium">
                  ses ışık sistemi kurulumu
                </a>{" "}
                alanlarında uçtan uca çözümler sunar. Proje keşfi, çizim, kurulum ve canlı yönetim aşamalarının tamamını profesyonel ekibimiz yürütür. Kurumsal lansman, bayi toplantısı, konser, festival ve <em>kurumsal organizasyon</em> türlerinin tümünde güvenli ve ölçeklenebilir altyapı kurarız.
              </p>
              <ul className="mt-3 text-neutral-800 list-disc list-inside">
                <li>IP65 dış mekân LED paneller – yüksek parlaklık ve esnek boyut seçenekleri</li>
                <li>Line-array ses sistemleri – dijital mikserler ve kablosuz mikrofonlar</li>
                <li>Modüler <strong>podyum</strong> ve sahne platformları – kaymaz yüzey kaplaması</li>
                <li>DMX kontrollü sahne ışıkları ve özel efekt aydınlatmaları</li>
              </ul>
            </article>
            <article>
              <h3 className="font-semibold text-lg mb-2">Hızlı Kurulum, Şeffaf Fiyat</h3>
              <p className="text-neutral-800 mb-2">
                İstanbul merkezli ekibimizle Türkiye’nin her ilinde çalışıyoruz. Aynı gün <strong>hızlı kurulum</strong>, yedekli ekipman ve 7/24 teknik destek ile riskleri minimize ederiz. İhtiyacınıza göre en uygun çözümü önerip gereksiz maliyetleri önler, talep halinde{" "}
                <a href="/led-ekran-kiralama" className="underline hover:no-underline font-medium">
                  LED ekran fiyatları
                </a>{" "}
                ve alternatif paketleri karşılaştırmalı olarak paylaşırız. Tüm işlerimiz sözleşmeli ve e-faturalıdır.
              </p>
              <p className="text-neutral-800">
                Teklif almak için hemen arayın ya da{" "}
                <a href="https://wa.me/900000000000?text=Merhaba%2C+teklif+almak+istiyorum." className="underline hover:no-underline font-medium" target="_blank" rel="noopener noreferrer">
                  WhatsApp’ten yazın
                </a>
                ; birkaç soruyla mekân, kişi sayısı ve içerik tipine göre doğru <strong>etkinlik prodüksiyon</strong> planını birlikte oluşturalım.
              </p>
            </article>
          </div>
        </section>

        {/* Sıkça Sorulan Sorular: Kullanıcıların yaygın soruları ve cevapları (lazy load uygulanabilir) */}
        <Suspense fallback={<SectionSkeleton />}>
          <section className="container mx-auto py-14 md:py-16 px-4" aria-labelledby="faq-baslik">
            <h2 id="faq-baslik" className="text-2xl md:text-3xl font-bold text-center mb-8">Sıkça Sorulan Sorular</h2>
            {/* Basit bir akordiyon için HTML5 <details> kullanıldı. Bu element erişilebilir ve JS olmadan açılıp kapanabilir. */}
            <div className="max-w-2xl mx-auto">
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-neutral-800">Sahne ve ekipman kurulumu ne kadar sürer?</summary>
                <p className="mt-2 text-neutral-700">Kurulum süresi etkinliğin büyüklüğüne göre değişir. Çoğu etkinlikte sahne, ses ve ışık sistemleri birkaç saat içinde kurulur. Daha büyük organizasyonlarda bu süre yarım günü bulabilir.</p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-neutral-800">Türkiye genelinde hizmet veriyor musunuz?</summary>
                <p className="mt-2 text-neutral-700">Evet, hizmetlerimiz Türkiye’nin tüm illerini kapsamaktadır. Lojistik ekibimiz, İstanbul’dan ülkenin her yerine hızlı kurulum ve destek sağlayacak şekilde planlama yapar.</p>
              </details>
              <details className="mb-4">
                <summary className="cursor-pointer font-semibold text-neutral-800">Etkinlik öncesi keşif hizmetiniz var mı?</summary>
                <p className="mt-2 text-neutral-700">Evet, etkinlik alanınızı önceden ziyaret edip ihtiyaçları belirlemek için ücretsiz keşif ve danışmanlık hizmeti sunuyoruz. Böylece uygun ekipman ve kurulum planını önceden hazırlıyoruz.</p>
              </details>
              <details>
                <summary className="cursor-pointer font-semibold text-neutral-800">Fiyat teklifini nasıl alabilirim?</summary>
                <p className="mt-2 text-neutral-700">Bizimle iletişim sayfamız üzerinden iletişime geçebilir veya doğrudan telefon/WhatsApp ile bize ulaşabilirsiniz. Etkinlik detaylarınızı aldıktan sonra size hızlıca kapsamlı bir fiyat teklifi sunacağız.</p>
              </details>
            </div>
          </section>
        </Suspense>
      </main>

      {/* Site alt bilgisi (footer) */}
      <footer className="bg-neutral-900 text-neutral-200 py-8">
        <div className="container mx-auto px-4 text-center text-sm">
          {/* Şirket adı ve kısa tanım */}
          <p className="mb-2"><strong>Sahneva Etkinlik Hizmetleri</strong> – Sahne, podyum, LED ekran, ses ve ışık sistemleri kiralama</p>
          {/* İletişim bilgileri ve dahili linkler */}
          <p className="mb-4">
            Tel: <a href="tel:+900000000000" className="text-neutral-100 hover:underline">+90 000 000 0000</a> – 
            E-posta: <a href="mailto:info@sahneva.com" className="text-neutral-100 hover:underline">info@sahneva.com</a>
          </p>
          <p className="text-neutral-500">&copy; 2025 Sahneva. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
}
