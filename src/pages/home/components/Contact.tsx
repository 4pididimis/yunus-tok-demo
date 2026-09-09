import SectionHeading from "./SectionHeading";
import {
  CONTACT,
  HOURS,
  RESERVATION_URL,
  RESERVATION_TARGET,
} from "@/mocks/barberData";

const CONTACT_CARDS = [
  {
    icon: "ri-phone-line",
    title: "Telefon",
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
    external: false,
  },
  {
    icon: "ri-whatsapp-line",
    title: "WhatsApp",
    value: CONTACT.phoneDisplay,
    href: CONTACT.whatsappHref,
    external: true,
  },
  {
    icon: "ri-instagram-line",
    title: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagramHref,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-graphite py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionHeading
          eyebrow="İletişim"
          title="Seni Salonumuzda Bekliyoruz"
          description="Soruların veya randevun için bize ulaş. Kolayca yerini ayırt, tarzını yeniden tanımlamaya başla."
        />

        {/* Ana eylemler */}
        <div className="mb-8 grid grid-cols-1 gap-3 md:mb-10 md:grid-cols-3">
          <a
            href={`${CONTACT.whatsappHref}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-md bg-emerald-600 px-5 py-4 text-sm font-semibold text-bone transition-colors hover:bg-emerald-500 md:text-base"
          >
            <i className="ri-whatsapp-line text-xl" aria-hidden="true"></i>
            WhatsApp’tan Yaz
          </a>
          <a
            href={CONTACT.mapsDirections}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-md border border-bone/40 px-5 py-4 text-sm font-semibold text-bone transition-colors hover:border-gold hover:text-gold md:text-base"
          >
            <i className="ri-navigation-line text-xl" aria-hidden="true"></i>
            Yol Tarifi Al
          </a>
          <a
            href={RESERVATION_URL}
            target={RESERVATION_TARGET}
            rel="noopener noreferrer nofollow"
            className="inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-md bg-gold px-5 py-4 text-sm font-semibold text-coal transition-colors hover:bg-goldLight md:text-base"
          >
            <i className="ri-calendar-check-line text-xl" aria-hidden="true"></i>
            Randevu Al
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left info */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {CONTACT_CARDS.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  {...(c.external
                    ? { target: "_blank", rel: "noopener noreferrer nofollow" }
                    : {})}
                  className="flex flex-col items-start rounded-lg border border-line/50 bg-ash p-5 transition-colors hover:border-gold/50"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-gold/15 text-gold">
                    <i className={`${c.icon} text-lg`} aria-hidden="true"></i>
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted">
                    {c.title}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-bone">
                    {c.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Address + hours */}
            <div className="rounded-lg border border-line/50 bg-ash p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <i className="ri-map-pin-2-line text-lg" aria-hidden="true"></i>
                </span>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-muted">
                    Adres
                  </h3>
                  <p className="mt-1 text-sm font-medium text-bone">
                    {CONTACT.address}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 border-t border-line/50 pt-5">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <i className="ri-time-line text-lg" aria-hidden="true"></i>
                </span>
                <div className="flex-1">
                  <h3 className="text-xs uppercase tracking-wider text-muted">
                    Çalışma Saatleri
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {HOURS.map((h) => (
                      <li
                        key={h.days}
                        className="flex items-center justify-between gap-4 text-sm"
                      >
                        <span className="text-bone/85">{h.days}</span>
                        <span className="font-semibold text-gold">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[320px] overflow-hidden rounded-lg border border-line/50 bg-ash lg:min-h-full">
            <iframe
              src={CONTACT.mapsEmbed}
              title="Yunus Tok Erkek Kuaförü konum haritası"
              aria-label="Yunus Tok Erkek Kuaförü Google Maps konumu"
              className="h-full w-full"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}