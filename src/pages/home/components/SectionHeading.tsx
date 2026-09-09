interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div
      className={`mb-10 flex flex-col md:mb-14 ${
        center ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-gold">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-medium leading-tight text-bone md:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}