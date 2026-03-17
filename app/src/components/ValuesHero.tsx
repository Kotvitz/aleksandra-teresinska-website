import Image from "next/image";

export default function ValuesHero() {
  return (
    <section className="relative overflow-hidden border-b border-(--border) bg-(--surface)">
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-(--brand-accent)/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
            Wartości
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-(--brand-primary) sm:text-5xl">
            To, co jest dla mnie naprawdę ważne
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-(--brand-accent)" />

          <p className="mt-6 text-lg leading-8 text-(--text-muted)">
            W działalności publicznej kieruję się zasadami, które wynikają
            zarówno z mojego doświadczenia zawodowego, jak i życia rodzinnego.
            To wartości, które przekładam na konkretne działania i sposób
            patrzenia na sprawy społeczne, gospodarcze i lokalne.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-(--brand-accent)/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface-muted-strong) shadow-xl">
            <Image
              src="/images/values-hero.webp"
              alt="Wartości i działalność Aleksandry Teresińskiej"
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