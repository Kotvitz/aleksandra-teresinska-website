import {
  BriefcaseBusiness,
  Heart,
  ShieldCheck,
  Scale,
  Users,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: <Lightbulb size={22} strokeWidth={2} />,
    title: "Wolność",
    description:
      "Wierzę w większą swobodę obywateli, prostsze prawo i ograniczenie zbędnych ingerencji państwa.",
  },
  {
    icon: <BriefcaseBusiness size={22} strokeWidth={2} />,
    title: "Przedsiębiorczość",
    description:
      "Szanuję pracę, inicjatywę i odpowiedzialność osób, które budują firmy i miejsca pracy.",
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={2} />,
    title: "Bezpieczeństwo",
    description:
      "Bezpieczna przyszłość rodzin i dzieci jest dla mnie jedną z podstawowych spraw publicznych.",
  },
  {
    icon: <Heart size={22} strokeWidth={2} />,
    title: "Rodzina",
    description:
      "Rodzina, wychowanie i trwałe wartości mają ogromne znaczenie dla stabilnej przyszłości społeczeństwa.",
  },
  {
    icon: <Scale size={22} strokeWidth={2} />,
    title: "Odpowiedzialność",
    description:
      "Cenię konkret, uczciwość i odpowiedzialne podejście do spraw publicznych zamiast pustych deklaracji.",
  },
  {
    icon: <Users size={22} strokeWidth={2} />,
    title: "Blisko ludzi",
    description:
      "Ważne są dla mnie rozmowa z mieszkańcami, lokalne sprawy i realna obecność tam, gdzie potrzeba działania.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="border-b border-(--border) bg-(--surface-muted)">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-4xl border border-(--border) bg-(--surface) p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--surface-muted) text-(--brand-primary)">
                {value.icon}
              </div>

              <h2 className="mt-5 text-xl font-semibold text-(--brand-primary)">
                {value.title}
              </h2>

              <p className="mt-3 leading-7 text-(--text-muted)">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}