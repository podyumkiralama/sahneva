// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0f1115] bg-gradient-to-t from-[#0c0e12] to-[#12141a] text-gray-300 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-6">

        {/* Sütun 1: Marka */}
        <div>
          <div className="flex items-center gap-2 text-white font-semibold mb-3">
            <span>⭐</span> <span>SAHNEVA</span>
          </div>
          <p className="text-sm leading-6">
            Etkinlik prodüksiyon & ekipman kiralama.
            <br />Sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri.
          </p>

          {/* Sosyal */}
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition">📷</a>
            <a href="#" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition">▶</a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition">💼</a>
          </div>
        </div>

        {/* Sütun 2: Hizmetler */}
        <div>
          <p role="heading" aria-level={2} className="text-white font-semibold mb-3 tracking-wide">
  Hizmetler
</p>

          <ul className="space-y-2 text-sm">
            <li><a href="/podyum-kiralama" className="hover:text-white transition-colors">Podyum Kiralama</a></li>
            <li><a href="/led-ekran-kiralama" className="hover:text-white transition-colors">LED Ekran Kiralama</a></li>
            <li><a href="/ses-isik-sistemleri" className="hover:text-white transition-colors">Ses & Işık Sistemleri</a></li>
            <li><a href="/sahne-kiralama" className="hover:text-white transition-colors">Sahne Kiralama</a></li>
            <li><a href="/cadir-kiralama" className="hover:text-white transition-colors">Çadır Kiralama</a></li>
          </ul>
        </div>

        {/* Sütun 3: Hızlı Erişim */}
        <div>
          <p role="heading" aria-level={2} className="text-white font-semibold mb-3 tracking-wide">
  Hızlı Erişim
</p>

          <ul className="space-y-2 text-sm">
            <li><a href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</a></li>
            <li><a href="/hizmetler" className="hover:text-white transition-colors">Hizmetler</a></li>
            <li><a href="/sss" className="hover:text-white transition-colors">Sık Sorulan Sorular</a></li>
            <li><a href="/kvkk" className="hover:text-white transition-colors">KVKK / Gizlilik</a></li>
          </ul>
        </div>

        {/* Sütun 4: İletişim */}
        <div>
          <p role="heading" aria-level={2} className="text-white font-semibold mb-3 tracking-wide">
  İletişim
</p>

          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="opacity-70">📍</span> İstanbul / Türkiye
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70">📞</span>
              <a href="tel:+905453048671" className="hover:text-white font-semibold">
                +90 545 304 8671
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70">✉️</span>
              <a href="mailto:info@sahneva.com" className="hover:text-white">
                info@sahneva.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="opacity-70">⏰</span> Hafta içi 09:00–19:00
            </li>
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="tel:+905453048671"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition"
            >
              📞 Hemen Ara
            </a>
           {/* Kontrast uyarısını çözen düzeltilmiş WhatsApp butonu */}
<a
  href="https://wa.me/905453048671"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp üzerinden teklif iste"
  className="inline-flex items-center gap-2 rounded-full
             bg-green-700 hover:bg-green-800
             text-white font-semibold px-4 py-2
             transition-colors focus:outline-none
             focus-visible:ring-2 focus-visible:ring-white/70
             focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1115]"
>
  💬 WhatsApp Teklif
</a>


          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10 text-center text-xs text-gray-400 py-4">
        Türkiye genelinde sahne, podyum, LED ekran, ses-ışık ve kurulum hizmetleri.
        <br className="sm:hidden" />
        <span className="ml-2">© {new Date().getFullYear()} Sahneva — Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
