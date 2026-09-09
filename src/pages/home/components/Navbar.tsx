import { useEffect, useState } from "react";
import { BRAND, RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

const NAV_LINKS = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#services", label: "Hizmetler" },
  { href: "#gallery", label: "Galeri" },
  { href: "#team", label: "Ekibimiz" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-coal/95 backdrop-blur border-b border-line/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line/60 bg-ash/60">
            <img
              src={BRAND.logo}
              alt={`${BRAND.name} logo`}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold tracking-wide text-bone">
              {BRAND.shortName}
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.3em] text-gold">
              {BRAND.tagline}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Ana menü">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap text-sm font-medium text-bone/85 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={RESERVATION_URL}
            target={RESERVATION_TARGET}
            rel="noopener noreferrer nofollow"
            className="hidden whitespace-nowrap items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-coal transition-colors hover:bg-goldLight md:inline-flex"
          >
            <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
            Randevu Al
          </a>
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-line text-bone lg:hidden"
            aria-label="Menüyü aç"
          >
            <i
              className={`${open ? "ri-close-line" : "ri-menu-line"} text-xl`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line/60 bg-coal/98 px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobil menü">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/40 py-3 text-sm font-medium text-bone/90 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={RESERVATION_URL}
            target={RESERVATION_TARGET}
            rel="noopener noreferrer nofollow"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-semibold text-coal"
          >
            <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
            Randevu Al
          </a>
        </div>
      )}
    </header>
  );
}