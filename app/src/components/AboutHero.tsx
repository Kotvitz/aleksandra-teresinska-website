import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-(--border) bg-(--surface)">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-(--brand-accent)/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
            O mnie
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-(--brand-primary) sm:text-5xl">
            Kim jestem i dlaczego się angażuję?
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-(--brand-accent)" />

          <p className="mt-6 text-lg leading-8 text-(--text-muted)">
            Nazywam się Aleksandra Teresińska. Jestem przedsiębiorcą w branży
            medycznej, mamą dwóch chłopców i osobą, która zdecydowała się wejść
            do życia publicznego nie z przypadku, ale z przekonania.
          </p>

          <p className="mt-4 text-lg leading-8 text-(--text-muted)">
            Ta strona to miejsce, w którym chcę pokazać nie tylko swoją
            działalność, ale też drogę, która doprowadziła mnie do aktywności
            społecznej i politycznej.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/wartosci"
              className="rounded-full bg-(--brand-primary) px-6 py-3 text-sm font-semibold text-(--brand-primary-contrast) transition hover:opacity-90"
            >
              Moje wartości
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-(--brand-accent)/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface-muted-strong) shadow-xl">
            <Image
              src="/images/about-main.webp"
              alt="Aleksandra Teresińska"
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