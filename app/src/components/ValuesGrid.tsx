import { ValuesGridItem } from "@/sanity/lib/types";
import {
  BriefcaseBusiness,
  Heart,
  ShieldCheck,
  Scale,
  Users,
  Lightbulb,
} from "lucide-react";

type ValuesGridProps = {
  values: ValuesGridItem[];
};

const iconMap = {
  lightbulb: <Lightbulb size={22} strokeWidth={2} />,
  briefcaseBusiness: <BriefcaseBusiness size={22} strokeWidth={2} />,
  shieldCheck: <ShieldCheck size={22} strokeWidth={2} />,
  heart: <Heart size={22} strokeWidth={2} />,
  scale: <Scale size={22} strokeWidth={2} />,
  users: <Users size={22} strokeWidth={2} />,
};

export default function ValuesGrid({values}: ValuesGridProps) {
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
                {iconMap[value.icon]}
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