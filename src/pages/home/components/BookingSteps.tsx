import { RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

const STEPS = [
  {
    num: "01",
    icon: "ri-scissors-2-line",
    title: "Hizmetini Seç",
    desc: "Saç kesimi, saç + sakal, sakal tasarımı ya da bakım... sana en uygun hizmeti incele.",
  },
  {
    num: "02",
    icon: "ri-calendar-check-line",
    title: "Randevu Al’a Tıkla",
    desc: "Hizmetin üzerindeki Randevu Al butonuna tek dokunuşla yönlendirmeye başla.",
  },
  {
    num: "03",
    icon: "ri-time-line",
    title: "Uygun Saatini Seç",
    desc: "Kolay Randevu üzerinden sana uyan boş saati seç, yerin saniyeler içinde hazır.",
  },
];

export default function BookingSteps() {
  return (
    <section
      id="book"
      className="border-y border-gold/20 bg-coal py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Süper Basit
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight text-bone md:text-4xl lg:text-[2.6rem]">
            3 Adımda Kolayca Randevu
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Telefon derdi, bekleme sırası yok. Randevunu birkaç saniyede oluştur,
            gelmeden önce yerin hazır olsun.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-4 lg:gap-6">
          {STEPS.map((s, i) => (
            <li key={s.num} className="relative">
              <div className="flex h-full flex-col rounded-lg border border-line/60 bg-graphite p-6 transition-colors hover:border-gold/50 md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-display text-4xl font-medium leading-none text-gold/40">
                    {s.num}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold">
                    <i className={`${s.icon} text-xl`} aria-hidden="true"></i>
                  </span>
                </div>
                <h3 className="text-base font-semibold text-bone md:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>

                {/* Connector arrow on desktop */}
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center md:flex"
                    aria-hidden="true"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-coal text-gold">
                      <i className="ri-arrow-right-line text-xs" aria-hidden="true"></i>
                    </span>
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-3 text-center md:mt-12">
          <a
            href={RESERVATION_URL}
            target={RESERVATION_TARGET}
            rel="noopener noreferrer nofollow"
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-coal transition-colors hover:bg-goldLight sm:w-auto"
          >
            <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
            Hemen Randevu Al
          </a>
          <p className="text-xs text-muted">
            Online randevu birkaç dakikanı almaz, çok daha az sürer.
          </p>
        </div>
      </div>
    </section>
  );
}