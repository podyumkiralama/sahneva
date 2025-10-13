// lib/data.js

export const services = [
  {
    slug: "podyum-kiralama",
    title: "Podyum Kiralama",
    excerpt: "Modüler ölçüler, hızlı kurulum, güvenli taşıyıcı sistem.",
    img: "/img/hizmet-podyum.webp",
    desc: "Farklı ebat ve yükseklik seçenekleriyle etkinliğinize uygun podyum çözümleri sunuyoruz. Kaymaz kaplama, korkuluk ve rampa gibi güvenlik detaylarıyla birlikte, hem iç hem de dış mekân etkinliklerinde güvenle kullanılabilir. Kurulum ve söküm teknik ekibimiz tarafından yapılır."
  },
  {
    slug: "led-ekran-kiralama",
    title: "LED Ekran Kiralama",
    excerpt: "P2–P6 seçenekleri, iç/dış mekan, teknik ekip dahil.",
    img: "/img/hizmet-led-ekran.webp",
    desc: "Yüksek parlaklık ve netlik sağlayan LED ekranlarımız iç ve dış mekânlara uygundur. P2–P6 çözünürlük aralığındaki paneller, gündüz güneş ışığında dahi net görünürlük sağlar. Profesyonel içerik yönetimi, canlı miksaj ve 7/24 teknik destek ile hizmetinizdeyiz."
  },
  {
    slug: "ses-isik-sistemleri",
    title: "Ses & Işık Sistemleri",
    excerpt: "Line array, dijital mikser, profesyonel ışık çözümleri.",
    img: "/img/hizmet-sesisik.webp",
    desc: "Konser, lansman ve kurumsal etkinlikler için optimize edilmiş ses ve ışık sistemleri. Line array hoparlörler, dijital mikserler, kablosuz mikrofonlar ve DMX kontrollü ışık sistemleri ile yüksek kaliteli bir deneyim sunuyoruz. Kurulum, test ve etkinlik boyunca teknik ekibimiz aktiftir."
  },
  {
    slug: "sahne-kiralama",
    title: "Sahne Kurulumu",
    excerpt: "Truss, rigging, platform ve güvenlik ekipmanları.",
    img: "/img/hizmet-sahne.webp",
    desc: "Truss sistemleri, rigging çözümleri, backline ve sahne tekstili dahil olmak üzere anahtar teslim sahne kurulumları gerçekleştiriyoruz. Uluslararası güvenlik standartlarına uygun taşıyıcı sistemler kullanıyor, dekoratif ve fonksiyonel sahne tasarımları sunuyoruz."
  },
  {
    slug: "cadir-kiralama",
    title: "Çadır Kiralama",
    excerpt: "Etkinlik çadırları, iklimlendirme ve aydınlatma çözümleri.",
    img: "/img/hizmet-cadir.webp",
    desc: "Her mevsime uygun endüstriyel ve etkinlik tipi çadır seçenekleri. İhtiyaca göre klima/ısıtıcı, zemin kaplama, aydınlatma ve güvenlik ekipmanlarıyla birlikte teslim edilir. Çadır kurulum ve söküm işlemleri saha ekibimiz tarafından güvenli şekilde yapılır."
  },
  {
    slug: "masa-sandalye-kiralama",
    title: "Masa & Sandalye Kiralama",
    excerpt: "Toplantı, düğün ve konser düzenine uygun setler.",
    img: "/img/hizmet-masa.webp",
    desc: "Banket, düğün, konferans ve fuar düzenleri için dayanıklı masa ve sandalye çözümleri sunuyoruz. Napolyon sandalye, banket masa ve katlanır sistemler dahil geniş ürün yelpazemizle, kurulum ve yerleşim hizmeti birlikte sağlanır."
  }
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
