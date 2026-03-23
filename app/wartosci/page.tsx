import ValuesGrid from "../src/components/ValuesGrid";
import ValuesHero from "../src/components/ValuesHero";
import ValuesSection from "../src/components/ValuesSection";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { VALUES_PAGE_QUERY } from "@/sanity/lib/queries";
import type { ValuesPage } from "@/sanity/lib/types";

export default async function ValuesPage() {
  const data = await client.fetch<ValuesPage>(VALUES_PAGE_QUERY);

  if (!data) {
    throw new Error("Brak dokumentu 'valuesPage' w Sanity.");
  }

  return (
    <main className="bg-(--surface) text-(--text)">
      <ValuesHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        description={data.heroDescription}
        imageSrc={
          data.heroImage
            ? urlFor(data.heroImage).width(900).height(1100).url()
            : data.heroImageSrc || "/images/values-hero.webp"
        }
        imageAlt={data.heroImageAlt}
      />
      <ValuesGrid values={data.valuesGrid ?? []} />

      {(data.sections ?? []).map((section, index) => (
        <ValuesSection
          key={index}
          eyebrow={section.eyebrow}
          title={section.title}
          descriptionOne={section.descriptionOne}
          descriptionTwo={section.descriptionTwo}
          muted={section.muted}
        />
      ))}

    </main>
  );
}