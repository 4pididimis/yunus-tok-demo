import { CONTACT, RESERVATION_URL, RESERVATION_TARGET } from "@/mocks/barberData";

export default function MobileBar() {
  const wa = `${CONTACT.whatsappHref}?text=${encodeURIComponent(CONTACT.whatsappText)}`;
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-coal/95 px-3 py-2 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-emerald-600/90 px-4 py-3 text-sm font-semibold text-bone transition-colors hover:bg-emerald-600"
        >
          <i className="ri-whatsapp-line text-lg" aria-hidden="true"></i>
          WhatsApp
        </a>
        <a
          href={RESERVATION_URL}
          target={RESERVATION_TARGET}
          rel="noopener noreferrer nofollow"
          className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold px-4 py-3 text-sm font-semibold text-coal transition-colors hover:bg-goldLight"
        >
          <i className="ri-calendar-check-line text-lg" aria-hidden="true"></i>
          Randevu Al
        </a>
      </div>
    </div>
  );
}