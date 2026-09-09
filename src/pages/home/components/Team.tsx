import SectionHeading from "./SectionHeading";
import { TEAM, RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

export default function Team() {
  return (
    <section id="team" className="bg-graphite py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Ustalık Elinden Çıkar"
          description="Her biri kendi alanında uzmanlaşmış, tutkuyla çalışan Yunus Tok Erkek Kuaförü ekibiyle tanış."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-lg border border-line/40 bg-ash"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.src}
                  alt={m.alt}
                  title={`${m.name} Yunus Tok Erkek Kuaförü`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <h3 className="font-display text-2xl font-medium text-bone">
                    {m.name}
                  </h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-muted">{m.desc}</p>
                <a
                  href={RESERVATION_URL}
                  target={RESERVATION_TARGET}
                  rel="noopener noreferrer nofollow"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold/15 px-4 py-2.5 text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-coal"
                >
                  <i className="ri-calendar-check-line text-sm" aria-hidden="true"></i>
                  Randevu Al
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}