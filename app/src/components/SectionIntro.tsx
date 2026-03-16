import type { ReactNode } from "react";

type SectionIntroProps = {
  id: string;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon?: ReactNode;
  muted?: boolean;
};

export default function SectionIntro({
  id,
  label,
  title,
  description,
  buttonText,
  href,
  icon,
  muted = false,
}: SectionIntroProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden border-b border-(--border) ${
        muted ? "bg-(--surface-muted)" : "bg-(--surface)"
      }`}
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-(--brand-accent)/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            {icon && (
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--border) bg-(--surface) text-(--brand-primary) shadow-sm">
                {icon}
              </div>
            )}

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
              {label}
            </p>
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-(--brand-primary) sm:text-4xl">
            {title}
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-(--brand-accent)" />

          <p className="mt-6 text-lg leading-8 text-(--text-muted)">
            {description}
          </p>

          <a
            href={href}
            className="mt-8 inline-flex items-center rounded-full bg-(--brand-primary) px-6 py-3 text-sm font-semibold text-(--brand-primary-contrast) transition hover:opacity-90"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}