import { WHY_US, RESERVATION_URL, RESERVATION_TARGET, REVIEW_SUMMARY } from "@/mocks/barberData";

export default function WhyUs() {
  return (
    <section id="why" className="border-y border-line/40 bg-coal py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <span className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
              Neden Biz?
            </span>
            <h2 className="font-display text-3xl font-medium leading-tight text-bone md:text-4xl">
              Sıradan bir berberden
              <br />
              fazlası.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              Yunus Tok Erkek Kuaförü; sadece bir kesim değil, kendine yaptığın
              bir yatırım. Rahat ortamı, özenli hizmeti ve ustalığıyla her
              ziyaret ayrı bir deneyim.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div>
                <p className="font-display text-3xl font-semibold text-gold">15+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Yıl Deneyim
                </p>
              </div>
              <div className="h-10 w-px bg-line" aria-hidden="true"></div>
              <div>
                <p className="font-display text-3xl font-semibold text-gold">8K+</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Mutlu Müşteri
                </p>
              </div>
              <div className="h-10 w-px bg-line" aria-hidden="true"></div>
              <div>
                <p className="font-display text-3xl font-semibold text-gold">
                  {REVIEW_SUMMARY.rating}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Google Puanı
                </p>
              </div>
            </div>

            <a
              href={RESERVATION_URL}
              target={RESERVATION_TARGET}
              rel="noopener noreferrer nofollow"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-7 py-3 text-sm font-semibold text-coal transition-colors hover:bg-goldLight sm:w-auto"
            >
              <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
              Şimdi Randevunu Oluştur
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_US.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-line/50 bg-ash p-6"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-gold/15 text-gold">
                  <i className={`${f.icon} text-xl`} aria-hidden="true"></i>
                </span>
                <h3 className="text-base font-semibold text-bone">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}