// components/Navbar.js
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 bg-neutral-900/85 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/70 z-50">
      <div className="mx-auto max-w-screen-xl h-full px-4 flex items-center justify-between">
        <Link href="/" aria-label="Sahneva Ana Sayfa" className="flex items-center gap-2">
          <Image
            src="/img/logo.png"
            alt="Sahneva Logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            ["Hakkımızda", "/hakkimizda"],
            ["Hizmetler", "/hizmetler"],
            ["İletişim", "/iletisim"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+905453048671"
          className="hidden md:inline-block px-4 py-2 bg-[#6d28d9] hover:bg-[#5b21b6] text-white text-sm font-semibold rounded-lg shadow transition-colors"
        >
          Hemen Ara
        </a>

        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          aria-label="Menüyü Aç/Kapat"
        >
          ☰
        </button>
      </div>
    </header>
  );
}