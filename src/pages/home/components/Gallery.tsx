import SectionHeading from "./SectionHeading";
import { CONTACT, INSTAGRAM_POSTS } from "@/mocks/barberData";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-coal py-16 md:py-24">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Çalışmalarımız"
          title="Gerçek Çalışmalarımız"
          description="Instagram'daki son kesim ve tasarımlarımızdan seçilmiş kareler. Beğendiğin çalışmaya dokun, gönderiye git ve daha fazlasını keşfet."
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.postUrl}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-lg border border-line/30 bg-graphite"
              aria-label={`${post.alt} - Instagram gönderisini yeni sekmede aç (${CONTACT.instagramHandle})`}
            >
              <img
                src={post.imageUrl}
                alt={post.alt}
                title={`${post.alt} - Yunus Tok Erkek Kuaförü`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-xs font-medium text-bone">
                  <i className="ri-instagram-line text-sm" aria-hidden="true"></i>
                  Instagram&apos;da aç
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={CONTACT.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-gold/50 px-6 py-3 text-sm font-medium text-gold transition-colors duration-300 hover:bg-gold hover:text-coal"
          >
            <i className="ri-instagram-line text-base" aria-hidden="true"></i>
            Instagram&apos;da Daha Fazlasını Gör
          </a>
        </div>
      </div>
    </section>
  );
}