import {
  BRAND,
  CONTACT,
  RESERVATION_URL,
  RESERVATION_TARGET,
} from "@/mocks/barberData";

const QUICK_LINKS = [
  { label: "Hizmetler", href: "#services", external: false },
  { label: "Galeri", href: "#gallery", external: false },
  { label: "Ekibimiz", href: "#team", external: false },
  { label: "İletişim", href: "#contact", external: false },
];

const SOCIALS = [
  {
    icon: "ri-instagram-line",
    label: "Instagram",
    href: CONTACT.instagramHref,
  },
  {
    icon: "ri-whatsapp-line",
    label: "WhatsApp",
    href: CONTACT.whatsappHref,
  },
  {
    icon: "ri-google-fill",
    label: "Google Maps",
    href: CONTACT.mapsDirections,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/50 bg-[#0f0e0d] pt-12 md:pt-16">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 pb-10 text-center md:grid-cols-3 md:items-start md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line/60 bg-ash/60">
                <img
                  src={BRAND.logo}
                  alt={`${BRAND.name} logo`}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="leading-none text-left">
                <span className="block font-display text-lg font-semibold tracking-wide text-bone">
                  {BRAND.shortName}
                </span>
                <span className="block text-[10px] font-semibold tracking-[0.3em] text-gold">
                  {BRAND.tagline}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              İstediğin stile uygun kesimler ve bakım. Randevunu kolayca
              oluştur, tarzını yenilenmiş bir özgüvenle taşı.
            </p>
            <a
              href={RESERVATION_URL}
              target={RESERVATION_TARGET}
              rel="noopener noreferrer nofollow"
              className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-coal transition-colors hover:bg-goldLight"
            >
              <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
              Randevu Al
            </a>
          </div>

          {/* Quick nav */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Site Haritası
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href + l.label}>
                  <a
                    href={l.href}
                    className="whitespace-nowrap text-sm text-bone/80 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={RESERVATION_URL}
                  target={RESERVATION_TARGET}
                  rel="noopener noreferrer nofollow"
                  className="whitespace-nowrap text-sm font-semibold text-gold transition-colors hover:text-goldLight"
                >
                  Randevu Al
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Bizi Takip Et
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-ash text-bone/85 transition-colors hover:border-gold hover:text-gold"
                  aria-label={s.label}
                >
                  <i className={`${s.icon} text-lg`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm text-bone/80">Çalışma Saatleri</p>
            <p className="mt-1 text-xs text-muted">Pzt – Cmt: 10:00 – 20:00</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line/50 py-6 sm:flex-row">
          <p className="text-xs text-muted">
            © 2026 Yunus Tok Erkek Kuaförü. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#services" className="whitespace-nowrap text-xs text-muted transition-colors hover:text-gold">
              Hizmetler
            </a>
            <a href="#contact" className="whitespace-nowrap text-xs text-muted transition-colors hover:text-gold">
              İletişim
            </a>
            <a href="#home" className="whitespace-nowrap text-xs text-muted transition-colors hover:text-gold">
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}