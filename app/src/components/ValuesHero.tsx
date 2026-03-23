import Image from "next/image";

type ValuesHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ValuesHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: ValuesHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-(--border) bg-(--surface)">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-(--brand-accent)/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
            {eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-(--brand-primary) sm:text-5xl">
            {title}
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-(--brand-accent)" />

          <p className="mt-6 text-lg leading-8 text-(--text-muted)">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-(--brand-accent)/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface-muted-strong) shadow-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={900}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}