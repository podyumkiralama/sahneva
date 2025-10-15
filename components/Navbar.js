"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const h = (e) => { if (open && ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", h);
    return () => document.removeEventListener("click", h);
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="nav-glass">
      <nav ref={ref} className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2" aria-label="Sahneva anasayfa">
          <Image src="/img/logo.png" alt="Sahneva" width={36} height={36} priority />
          <span className="sr-only">Sahneva</span>
        </Link>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 rounded-lg text-white/90 hover:text-white focus-visible:outline"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label="Menüyü aç/kapat"
        >
          ☰
        </button>

        <ul
          id="primary-menu"
          className={`${
            open ? "block" : "hidden"
          } absolute left-0 right-0 top-16 mx-4 rounded-xl border bg-white/95 shadow md:static md:mx-0 md:flex md:border-0 md:bg-transparent md:shadow-none`}
        >
          {[
            ["/", "Ana Sayfa"],
            ["/hakkimizda", "Hakkımızda"],
            ["/hizmetler", "Hizmetler"],
            ["/iletisim", "İletişim"],
          ].map(([href, label]) => (
            <li key={href} className="md:ml-6">
              <Link
                href={href}
                className={`block px-4 py-3 md:py-2 ${
                  pathname === href ? "text-[var(--brand)] font-semibold" : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}