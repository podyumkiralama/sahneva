// app/(site)/page.js
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import CorporateEvents from "../../components/CorporateEvents";
const ReviewBannerLazy = dynamic(() => import("../../components/ReviewBanner"));
const ServicesTabsLazy = dynamic(() => import("../../components/ServicesTabs"));
const ProjectsGalleryLazy = dynamic(() => import("../../components/ProjectsGallery"));

export const revalidate = 3600;

function SectionSkeleton(props) {
  const label = (props && props.label) ? props.label : "İçerik yükleniyor...";
  return (
    <div className="container py-14 md:py-16" role="status" aria-live="polite">
      <div className="h-40 rounded-2xl bg-neutral-100 animate-pulse" />
      <p className="sr-only">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded">
        Ana içeriğe atla
      </a>

      <section
        className="relative h-[360px] md:h-[460px] flex items-center justify-center bg-neutral-900 text-white"
        aria-labelledby="hero-title"
        aria-describedby="hero-desc"
      >
        <Image
          src="/img/hero-bg.webp"
          alt="Sahneva etkinlik prodüksiyon sahnesi ve ışık sistemi"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover opacity-70"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 id="hero-title" className="text-2xl md:text-4xl font-semibold tracking-tight">
            Sahneva – Etkinlik Prodüksiyon & Organizasyon
          </h1>
          <p id="hero-desc" className="mt-3 text-sm md:text-base text-neutral-200">
            Sahne, podyum, LED ekran ve ses-ışık sistemlerinde uzman ekip.
          </p>
        </div>
      </section>

      <main id="main" role="main">
        <section aria-label="Müşteri yorumları">
          <Suspense fallback={<SectionSkeleton label="Yorumlar yükleniyor" />}>
            <ReviewBannerLazy />
          </Suspense>
        </section>

        <section className="section-lazy" aria-labelledby="hizmetler-title">
          <h2 id="hizmetler-title" className="sr-only">Hizmetler</h2>
          <Suspense fallback={<SectionSkeleton label="Hizmetler yükleniyor" />}>
            <ServicesTabsLazy />
          </Suspense>
        </section>

        <section className="section-lazy" aria-labelledby="projeler-title">
          <h2 id="projeler-title" className="sr-only">Projeler</h2>
          <Suspense fallback={<SectionSkeleton label="Projeler yükleniyor" />}>
            <ProjectsGalleryLazy />
          </Suspense>
        </section>

        <section className="section-lazy" aria-labelledby="kurumsal-title">
          <h2 id="kurumsal-title" className="sr-only">Kurumsal Etkinlikler</h2>
          <CorporateEvents />
        </section>

        <section className="container py-10 md:py-14" aria-labelledby="seo-bilgi-baslik">
          <h2 id="seo-bilgi-baslik" className="sr-only">Sahneva hakkında bilgi</h2>
          <p className="text-sm leading-7 text-neutral-700">
            Türkiye genelinde sahne, podyum, LED ekran ve ses-ışık sistemleri kiralama; kurulum ve teknik operasyon desteği.
            İç ve dış mekân kurulumları, kurumsal lansman ve festival çözümleri.
          </p>
        </section>
      </main>
    </>
  );
}
