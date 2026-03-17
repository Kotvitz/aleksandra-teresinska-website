type ValuesSectionProps = {
  eyebrow: string;
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  muted?: boolean;
};

export default function ValuesSection({
  eyebrow,
  title,
  descriptionOne,
  descriptionTwo,
  muted = false,
}: ValuesSectionProps) {
  return (
    <section
      className={`border-b border-(--border) ${
        muted ? "bg-(--surface-muted)" : "bg-(--surface)"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--brand-primary)">
            {title}
          </h2>

          <div className="mt-4 h-1 w-16 rounded-full bg-(--brand-accent)" />

          <p className="mt-6 text-lg leading-8 text-(--text-muted)">
            {descriptionOne}
          </p>

          <p className="mt-4 text-lg leading-8 text-(--text-muted)">
            {descriptionTwo}
          </p>
        </div>
      </div>
    </section>
  );
}