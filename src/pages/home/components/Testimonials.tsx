import SectionHeading from "./SectionHeading";
import { REVIEW_SUMMARY, TESTIMONIALS } from "@/mocks/barberData";

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label="5 üzerinden 5 yıldız">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className="ri-star-fill text-sm" aria-hidden="true"></i>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-graphite py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Misafirlerimiz Ne Diyor?"
          description="Google üzerinden gelen gerçek değerlendirmelerle müşterilerimizin memnuniyetini paylaşıyoruz."
        />

        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="font-display text-3xl font-semibold text-bone">
            {REVIEW_SUMMARY.rating}
          </span>
          <div className="flex flex-col">
            <Stars />
            <span className="mt-1 text-xs text-muted">
              {REVIEW_SUMMARY.count} {REVIEW_SUMMARY.sourceLabel}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-line/50 bg-ash p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">
                  {t.initial}
                </span>
                <Stars />
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-bone/85">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between border-t border-line/50 pt-4">
                <span className="text-sm font-semibold text-bone">{t.name}</span>
                <span className="text-xs text-muted">{t.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}