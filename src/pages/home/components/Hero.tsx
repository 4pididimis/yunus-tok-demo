import { HERO_IMAGE, HERO_IMAGE_ALT, RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt={HERO_IMAGE_ALT}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-coal"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-16 pt-28 md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-gold">
            <span className="h-px w-8 bg-gold/70" aria-hidden="true"></span>
            Premium Erkek Bakımı
            <span className="h-px w-8 bg-gold/70" aria-hidden="true"></span>
          </span>

          <h1 className="font-display text-5xl font-medium leading-[1.05] text-bone sm:text-6xl md:text-7xl">
            Tarzını <span className="italic text-gold">Yenile</span>, Randevunu Kolayca Oluştur.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-bone/80 md:text-lg">
            Profesyonel saç kesimi, sakal tasarımı ve erkek bakım hizmetleri.
            Kampüs bölgesinde modern ve pratik berber deneyimi.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={RESERVATION_URL}
              target={RESERVATION_TARGET}
              rel="noopener noreferrer nofollow"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-goldLight sm:w-auto"
            >
              <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
              Randevu Al
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-bone/40 px-8 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              Hizmetleri İncele
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs tracking-wide text-bone/50 transition-colors hover:text-gold md:flex"
        aria-label="Aşağı kaydır"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Keşfet</span>
        <i className="ri-arrow-down-line text-lg" aria-hidden="true"></i>
      </a>
    </section>
  );
}