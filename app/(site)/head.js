// app/(site)/head.js
export default function Head() {
  const title =
    "Sahne, Podyum, LED Ekran & Ses-Işık Kiralama | Sahneva";
  const description =
    "Türkiye genelinde sahne, podyum, LED ekran, ses-ışık sistemleri ve çadır kiralama. Hızlı kurulum, profesyonel teknik ekip, uygun fiyat. Hemen teklif alın!";
  const keywords = [
    "sahne kiralama",
    "podyum kiralama",
    "LED ekran kiralama",
    "ses ışık sistemleri",
    "çadır kiralama",
    "organizasyon ekipman kiralama",
    "etkinlik prodüksiyon",
    "istanbul sahne kiralama",
  ].join(", ");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* SEOptimer için keywords + canonical */}
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://sahneva.com/" />
    </>
  );
}