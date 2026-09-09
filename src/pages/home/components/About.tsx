import { ABOUT_IMAGE, RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

export default function About() {
  return (
    <section id="about" className="bg-coal py-16 md:py-24">
      <div className="mx-auto grid grid-cols-1 items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-lg border border-gold/30" aria-hidden="true"></div>
          <img
            src={ABOUT_IMAGE}
            alt="Yunus Tok Erkek Kuaförü modern salon iç mekan"
            title="Yunus Tok Erkek Kuaförü salon atmosferi"
            className="aspect-[10/11] w-full rounded-lg object-cover object-top"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col items-start">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Hakkımızda
          </span>
          <h2 className="font-display text-3xl font-medium leading-tight text-bone md:text-4xl">
            Yunus Tok'ta kesim bir ritüeldir.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
            Yunus Tok Erkek Kuaförü, erkek bakımını yeni bir anlayışla ele
alan modern bir erkek kuaförüdür. Sahip olduğumuz inanç şu: iyi bir
kesim, kendine olan güveni baştan inşa eder.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            Usta berberlerimiz, klasik teknikleri modern dokunuşlarla harmanlar;
            yüz hatlarına, saç yapısına ve tarzına uygun, tamamen sana özel bir
            görünüm tasarlar. Rahat koltuklarda, seçkin ürünlerle ve keyifli bir
            atmosferde geçen her dakika, senin için bir ayrıcalıktır.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-2 text-sm text-bone/85">
              <i className="ri-check-double-line text-gold" aria-hidden="true"></i>
              Hijyenik ortam
            </span>
            <span className="flex items-center gap-2 text-sm text-bone/85">
              <i className="ri-check-double-line text-gold" aria-hidden="true"></i>
              Sürekli eğitim
            </span>
            <span className="flex items-center gap-2 text-sm text-bone/85">
              <i className="ri-check-double-line text-gold" aria-hidden="true"></i>
              Kişiye özel bakım
            </span>
          </div>

          <a
            href={RESERVATION_URL}
            target={RESERVATION_TARGET}
            rel="noopener noreferrer nofollow"
            className="mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-7 py-3 text-sm font-semibold text-coal transition-colors hover:bg-goldLight"
          >
            <i className="ri-calendar-check-line text-base" aria-hidden="true"></i>
            Şimdi Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
}