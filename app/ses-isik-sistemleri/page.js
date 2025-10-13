import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ses ve Işık Sistemleri Kiralama | Profesyonel Sahne Çözümleri - Sahneva",
  description:
    "Konser, düğün, festival ve kurumsal etkinliklerde profesyonel ses ve ışık sistemleri kiralama. Truss, spot, line array, robot ışık, mikser, sis makineleri ve teknik destek hizmetleriyle Türkiye genelinde kurulum yapıyoruz.",
  alternates: {
    canonical: "https://sahneva.com/ses-isik-sistemleri",
  },
};

export default function SesIsikSistemleriPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative h-[340px] flex items-center justify-center bg-neutral-900 text-white">
        <Image
          src="/img/ses-isik/hero.webp"
          alt="Profesyonel sahne ses ve ışık sistemleri kurulumu"
          fill
          priority
          className="object-cover object-center opacity-60"
        / sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
            Ses ve Işık Sistemleri Kiralama
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-neutral-200">
            Konserden düğüne, festivalden kurumsal lansmana kadar her ölçekte etkinlik için ses ve ışık sistemleri çözümleri.
          </p>
        </div>
      </section>

      {/* GİRİŞ */}
      <section className="container mx-auto px-4 py-12 max-w-5xl">
        <p className="text-neutral-800 leading-relaxed text-lg mb-6">
          Etkili bir etkinlik deneyiminin arkasında iyi planlanmış bir sahne altyapısı yatar. 
          Sahneva olarak, konser, festival, düğün, miting, mezuniyet töreni veya lansman fark etmeksizin 
          her türlü organizasyonda kusursuz bir ses dağılımı ve göz alıcı ışık efektleriyle 
          sahne atmosferinizi güçlendiriyoruz. Profesyonel ekipman parkurumuz ve deneyimli teknik ekibimiz 
          sayesinde kurulumdan canlı performans sürecine kadar her aşamada yanınızdayız.
        </p>

        <p className="text-neutral-800 leading-relaxed text-lg mb-6">
          Ses ve ışık sistemleri kiralama hizmetimiz; <strong>line array hoparlör sistemleri</strong>, 
          dijital mikserler, kablosuz mikrofonlar, RGBW LED spotlar, hareketli başlıklı robot ışıklar, 
          truss taşıyıcı sistemleri ve sahne sis makinelerini kapsar. Tüm bu ekipmanlar, organizasyonun 
          büyüklüğüne, iç veya dış mekân olmasına ve hedeflenen sahne efektlerine göre planlanır.
        </p>
      </section>

      {/* SES SİSTEMLERİ */}
      <section className="container mx-auto px-4 pb-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">🎤 Profesyonel Ses Sistemleri</h2>

        <figure className="mb-6">
          <Image
            src="/img/ses-isik/ses-sistemi.webp"
            alt="Line array ses sistemi kurulumu"
            width={900}
            height={500}
            className="rounded-lg shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            Festival sahnesinde line array ses sistemi kurulumu
          </figcaption>
        </figure>

        <p className="mb-6 leading-relaxed text-neutral-800">
          Profesyonel ses sistemleri, açık ve kapalı alanlarda maksimum netlik, yönlendirme ve ses dağılımı 
          sağlamak üzere kurulur. <strong>Line array sistemleri</strong>, sesin uzak mesafelere bozulmadan 
          ulaşmasını sağlar. Düğünlerde daha kompakt sistemler tercih edilirken; konser ve mitinglerde 
          yüksek watt gücüne sahip sistemlerle geniş alanlar desteklenir.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-neutral-800">
          <li>Line Array hoparlör sistemleri (uzun mesafe ses dağılımı)</li>
          <li>Dijital ve analog mikserler</li>
          <li>Kablosuz, yaka ve el mikrofon sistemleri</li>
          <li>DJ setupları, sahne monitörleri</li>
          <li>Kurulum, ses testi ve teknik personel desteği</li>
        </ul>

        <p className="leading-relaxed text-neutral-800">
          Ses kurulumunda, sahne önü ve arkası hoparlör konumları yankı, rüzgâr yönü, seyirci yoğunluğu 
          gibi unsurlara göre planlanır. Böylece her noktada eşit ses dağılımı sağlanır.
        </p>
      </section>

      {/* IŞIK SİSTEMLERİ */}
      <section className="container mx-auto px-4 pb-12 max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">💡 Işık Sistemleri ve Sahne Atmosferi</h2>

        <figure className="mb-6">
          <Image
            src="/img/ses-isik/isik-sistemi.webp"
            alt="RGBW LED spotlar ve robot ışıklarla sahne aydınlatması"
            width={900}
            height={500}
            className="rounded-lg shadow-md object-cover w-full"
          />
          <figcaption className="mt-2 text-sm text-neutral-600 text-center">
            RGBW spotlar ve robot ışıklarla sahne aydınlatması
          </figcaption>
        </figure>

        <p className="mb-6 leading-relaxed text-neutral-800">
          Işıklandırma, bir etkinliğin enerjisini doğrudan etkileyen en önemli unsurlardan biridir. 
          Sahneva olarak, <strong>RGBW LED spotlar</strong>, hareketli başlıklı robot ışıklar, beam sistemleri 
          ve özel efekt makineleriyle sahnenizi bambaşka bir boyuta taşıyoruz. 
          Truss taşıyıcı sistemler üzerine kurulan ışıklar, DMX kontrol panelleriyle senkronize edilir. 
          Böylece ritimle uyumlu geçişler, vurgular ve özel sahne efektleri oluşturulur.
        </p>

        <ul className="list-disc list-inside space-y-2 mb-6 text-neutral-800">
          <li>RGBW LED spot sistemleri</li>
          <li>Hareketli başlıklı robot ışıklar</li>
          <li>Beam ve efekt ışıkları</li>
          <li>Truss taşıyıcı sistem kurulumu</li>
          <li>Sis makineleriyle atmosfer güçlendirme</li>
        </ul>

        <p className="leading-relaxed text-neutral-800">
          Düğünlerde genellikle sahne ve dans pisti çevresine dekoratif ışıklar yerleştirilirken, 
          kurumsal lansmanlarda logo aydınlatması ve spot vurgular öne çıkar. Konserlerde ise yoğun beam, 
          robot ışık ve efekt kombinasyonları tercih edilir.
        </p>
      </section>

      {/* KULLANIM ALANLARI */}
      <section className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-semibold mb-6">📍 Ses & Işık Sistemlerinin Kullanım Alanları</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-neutral-800">
            <li>🎶 Konser ve festival organizasyonları</li>
            <li>💼 Kurumsal lansman ve toplantılar</li>
            <li>💍 Düğün ve özel davet sahneleri</li>
            <li>🏛 Belediye etkinlikleri, miting ve açılışlar</li>
            <li>🏫 Mezuniyet törenleri ve okul etkinlikleri</li>
            <li>🏢 AVM etkinlikleri, fuar ve roadshow sahneleri</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#815be0] py-12 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Etkinliğiniz İçin Profesyonel Ses ve Işık Sistemleri</h3>
        <p className="mb-6 text-neutral-100 max-w-2xl mx-auto">
          Teknik keşif, planlama, kurulum ve canlı destek dahil eksiksiz hizmet için bizimle iletişime geçin. 
          Sahneva ekibi Türkiye genelinde yanınızda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/iletisim"
            className="bg-white text-[#815be0] px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            İletişime Geç
          </Link>
          <a
            href="https://wa.me/905453048671?text=Merhaba%2C%20Ses%20ve%20Işık%20Sistemleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
          >
            WhatsApp Teklif
          </a>
        </div>
      </section>
    </main>
  );
}
