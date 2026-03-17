export default function ContactIntro() {
  return (
    <section className="border-b border-(--border) bg-(--surface)">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
          Kontakt
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-(--brand-primary) sm:text-4xl">
          Napisz do mnie!
        </h1>

        <div className="mt-4 h-1 w-16 rounded-full bg-(--brand-accent)" />

        <p className="mt-6 text-lg leading-8 text-(--text-muted)">
          Masz pytanie, pomysł albo sprawę, którą chcesz poruszyć? 
          Zachęcam do kontaktu - zależy mi na rozmowie i poznaniu opinii mieszkańców.
        </p>
      </div>
    </section>
  );
}