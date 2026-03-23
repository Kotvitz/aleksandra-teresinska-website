import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ABOUT_PAGE_QUERY } from "@/sanity/lib/queries";
import type { AboutPage } from "@/sanity/lib/types";
import AboutHero from "../src/components/AboutHero";
import AboutSplitSection from "../src/components/AboutSplitSection";

export default async function AboutPage() {
  const data = await client.fetch<AboutPage>(ABOUT_PAGE_QUERY);

  if (!data) {
    throw new Error("Brak dokumentu 'aboutPage'");
  }

  return (
    <main className="bg-(--surface) text-(--text)">

      <AboutHero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        intro={data.heroIntro}
        description={data.heroDescription}
        buttonText={data.heroButtonText}
        buttonHref={data.heroButtonHref}
        imageUrl={
          data.heroImage
            ? urlFor(data.heroImage).width(900).url()
            : undefined
        }
        imageAlt={data.heroImageAlt || data.heroTitle}
      />

    {(data.splitSections ?? []).map((section, index) => (
      <AboutSplitSection
        key={index}
        eyebrow={section.eyebrow}
        title={section.title}
        imageSrc={
          section.image
            ? urlFor(section.image).width(800).url()
            : section.imageSrc
        }
        imageAlt={section.imageAlt}
        imageSide={section.imageSide}
        muted={section.muted}
      >
        <div className="space-y-6 text-lg leading-8 text-(--text-muted)">
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph}</p>
          ))}
        </div>
      </AboutSplitSection>
    ))}

    </main>
  );
}