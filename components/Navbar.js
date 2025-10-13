// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const serviceLinks = [
  { href: "/podyum-kiralama", label: "Podyum Kiralama" },
  { href: "/led-ekran-kiralama", label: "LED Ekran Kiralama" },
  { href: "/ses-isik-sistemleri", label: "Ses ışık sistemleri" },
  { href: "/cadir-kiralama", label: "Çadır Kiralama" },
  { href: "/masa-sandalye-kiralama", label: "Masa Sandalye Kiralama" },
  { href: "/sahne-kiralama", label: "Sahne Kiralama" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);             // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);                 // mobile menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile accordion
  const dropdownRef = useRef(null);
  const hoverTimer = useRef(null);

  // Scroll durumu
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC ile kapatma
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // Rota değişince menüleri kapat
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Mobil menü açıkken body scroll kilidi
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Desktop dropdown dışına tıklayınca kapat
  useEffect(() => {
    function onClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [servicesOpen]);

  const active = (href) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  // --- Hover intent helpers (flicker önler)
  const openNow = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };
  const closeWithDelay = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-colors border-b",
          scrolled || mobileOpen
            ? "bg-white/95 backdrop-blur border-neutral-200 shadow-sm"
            : "bg-white border-transparent",
        ].join(" ")}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
          <div className="flex items-center justify-between h-16 overflow-visible">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="Sahneva Anasayfa">
              <Image
                src="/img/logo.png"
                alt="Sahneva"
                width={160}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </Link>

            {/* Masaüstü Menü */}
            <nav className="hidden md:flex items-center gap-6 overflow-visible">
              <Link
                href="/hakkimizda"
                className={[
                  "text-sm font-medium transition",
                  active("/hakkimizda") ? "text-[#815be0]" : "text-neutral-800",
                  "hover:text-[#815be0]",
                ].join(" ")}
              >
                Hakkımızda
              </Link>

              {/* Hizmetler Dropdown (Desktop) */}
              <div
                className="relative overflow-visible"
                ref={dropdownRef}
                onMouseEnter={openNow}
                onMouseLeave={closeWithDelay}
                onFocus={openNow}
                onBlur={closeWithDelay}
              >
                <button
                  type="button"
                  className={[
                    "text-sm font-medium px-1 py-2 transition rounded",
                    active("/hizmetler") ? "text-[#815be0]" : "text-neutral-800",
                    "hover:text-[#815be0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#815be0]/30",
                  ].join(" ")}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((s) => !s)} // tıklamayla da aç/kapat
                >
                  Hizmetler
                </button>

                {/* GAP KÖPRÜSÜ: buton ile panel arasındaki boşluğu köprüler */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-full h-2"
                  onMouseEnter={openNow}
                />

                {servicesOpen && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 bg-white border border-neutral-200 rounded-lg shadow-lg z-[60]"
                    onMouseEnter={openNow}
                    onMouseLeave={closeWithDelay}
                  >
                    <ul className="py-1">
                      {serviceLinks.map(({ href, label }) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="block px-4 py-2 text-sm text-neutral-800 hover:bg-[#f3f0ff] hover:text-[#815be0]"
                            onClick={() => setServicesOpen(false)}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/iletisim"
                className={[
                  "text-sm font-medium transition",
                  active("/iletisim") ? "text-[#815be0]" : "text-neutral-800",
                  "hover:text-[#815be0]",
                ].join(" ")}
              >
                İletişim
              </Link>

              {/* WhatsApp CTA (Desktop) */}
              <a
                href="https://wa.me/905453048671"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center rounded-lg px-3 py-2 text-white text-sm font-semibold 
                           bg-[#15803d] hover:bg-[#166534] transition"
              >
                WhatsApp Teklif
              </a>
            </nav>

            {/* Hamburger Menü (SVG) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#815be0]/40"
              aria-label="Menüyü aç/kapat"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-7 w-7 text-neutral-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay – boş alana tıklayınca kapanır */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Menüyü kapat"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Mobil Menü Paneli */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false); // panel boşluğu tıklayınca kapat
        }}
        className={[
          "md:hidden fixed z-50 left-0 right-0 top-16",
          "bg-white border-t border-neutral-200 rounded-b-2xl shadow-lg",
          "transition-all duration-300",
          mobileOpen ? "max-h-[70vh]" : "max-h-0 overflow-hidden",
        ].join(" ")}
      >
        <div className="px-4 py-3 space-y-3 max-h-[70vh] overflow-y-auto">
          <Link
            href="/hakkimizda"
            onClick={() => setMobileOpen(false)}
            className="block py-3 border-b text-neutral-800 font-medium"
          >
            Hakkımızda
          </Link>

          {/* Hizmetler (Mobil Akordeon) */}
          <div className="py-2">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((s) => !s)}
              aria-expanded={mobileServicesOpen}
              className="w-full flex items-center justify-between gap-3 py-3 text-base font-semibold text-neutral-900"
            >
              <span>Hizmetler</span>
              <svg
                className={`h-5 w-5 shrink-0 text-neutral-700 transition-transform ${
                  mobileServicesOpen ? "rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 5l8 7-8 7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-[max-height] duration-300 ${
                mobileServicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50">
                {serviceLinks.map(({ href, label }) => (
                  <li key={href} className="border-b last:border-b-0 border-neutral-200">
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-neutral-800 hover:bg-[#f3f0ff] hover:text-[#815be0]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="block py-3 border-t text-neutral-800 font-medium"
          >
            İletişim
          </Link>

          {/* WhatsApp CTA (Mobil) */}
          <a
            href="https://wa.me/905453048671"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-3 rounded-lg px-3 py-2 text-white text-sm font-semibold 
                       bg-[#15803d] hover:bg-[#166534] transition"
            onClick={() => setMobileOpen(false)}
          >
            WhatsApp Teklif
          </a>
        </div>
      </div>
    </>
  );
}
