import SectionHeading from "./SectionHeading";
import { SERVICES, SERVICES_PRICE_NOTE, RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

export default function Services() {
  return (
    <section id="services" className="bg-graphite py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Sana Özel Hizmetler"
          description="Her hizmet, alanında uzman berberler tarafından premium ürünlerle, tam sana göre uygulanır."
        />
        <p className="mb-6 flex items-center justify-center gap-1.5 text-center text-xs text-muted">
          <i className="ri-information-line text-sm" aria-hidden="true"></i>
          {SERVICES_PRICE_NOTE}
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group flex flex-col rounded-lg border border-line/50 bg-ash p-6 transition-colors hover:border-gold/50 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <i className={`${s.icon} text-2xl`} aria-hidden="true"></i>
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <i className="ri-time-line text-sm" aria-hidden="true"></i>
                  {s.duration}
                </span>
              </div>

              <h3 className="font-display text-2xl font-medium text-bone">
                {s.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-line/60 pt-5">
                <span className="flex items-baseline gap-1">
                  <span className="text-xs uppercase tracking-wider text-muted">
                    Başlangıç
                  </span>
                  <span className="ml-2 text-xl font-semibold text-gold">
                    {s.price}
                  </span>
                </span>
              </div>

              <a
                href={RESERVATION_URL}
                target={RESERVATION_TARGET}
                rel="noopener noreferrer nofollow"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-4 py-3 text-sm font-semibold text-coal transition-colors hover:bg-goldLight"
              >
                <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
                Randevu Al
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-gold transition-colors hover:text-goldLight"
          >
            Hizmet seçiminde kararsız mısın? Ustalara danış
            <i className="ri-arrow-right-line text-base" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>
  );
}