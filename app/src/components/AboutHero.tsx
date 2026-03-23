import Image from "next/image";
import Link from "next/link";

type AboutHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageUrl?: string;
  imageAlt: string;
};

export default function AboutHero({
  eyebrow,
  title,
  intro,
  description,
  buttonText,
  buttonHref,
  imageUrl,
  imageAlt,
}: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-(--border) bg-(--surface)">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-(--brand-accent)/10 blur-3xl" />

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
            {intro}
          </p>

          <p className="mt-4 text-lg leading-8 text-(--text-muted)">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={buttonHref}
              className="rounded-full bg-(--brand-primary) px-6 py-3 text-sm font-semibold text-(--brand-primary-contrast) transition hover:opacity-90"
            >
              {buttonText}
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-(--brand-accent)/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface-muted-strong) shadow-xl">
            <Image
              src={imageUrl || "/images/about-main.webp"}
              alt={imageAlt}
              width={1100}
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