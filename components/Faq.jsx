// components/Faq.jsx
export default function Faq() {
  const items = [
    ["Podyum kurulumu ne kadar sürer?",
     "Podyum kurulumu, ölçülere ve zemin koşullarına göre değişmekle birlikte genellikle 1–3 saat arasında tamamlanır. Teknik ekibimiz güvenli ve hızlı montaj yapar."],
    ["LED ekranlar dış mekanda kullanılabilir mi?",
     "Evet, IP65 korumalı LED ekranlarımız yağmur ve güneş ışığına karşı dayanıklıdır. Açık hava konserleri, mitingler ve festivaller için güvenle kullanılabilir."],
    ["Ses ve ışık sistemlerinde teknik ekip sağlıyor musunuz?",
     "Evet, profesyonel ses ve ışık sistemleri kiralama hizmetimizde her zaman teknik ekip desteği sunuyoruz. Kurulum, canlı yönetim ve etkinlik boyunca anlık destek dahildir."],
    ["Çadır kiralamada kurulum ve söküm hizmeti dahil mi?",
     "Evet, çadır kiralama hizmetimizde kurulum ve söküm hizmeti fiyata dahildir. Ayrıca zemin kaplama, güvenlik önlemleri ve yan aksesuarlar da talebe göre eklenebilir."],
  ];
  return (
    <section className="container py-14 md:py-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Sık Sorulan Sorular</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {items.map(([q,a],i)=>(
          <details key={i} className="faq-card group border rounded-lg p-4 [&>summary::-webkit-details-marker]:hidden">
            <summary className="flex justify-between items-center cursor-pointer">
              <span className="font-semibold">{q}</span>
              <svg className="ml-2 h-5 w-5 shrink-0 text-neutral-800 transition-transform group-open:rotate-90"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 5l8 7-8 7" />
              </svg>
            </summary>
            <p className="faq-anim mt-2 text-neutral-600">{a}</p>
          </details>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="/sss" className="inline-block px-6 py-3 bg-[#6d28d9] text-white font-semibold rounded-lg shadow hover:bg-[#5b21b6] transition">
          Tüm Soruları Gör
        </a>
      </div>
    </section>
  );
}
