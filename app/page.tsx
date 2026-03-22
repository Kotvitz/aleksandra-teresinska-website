import Hero from "./src/components/Hero";
import SectionIntro from "./src/components/SectionIntro";
import { User, Compass, Mail } from "lucide-react";
import { HomePage } from "@/sanity/lib/types";
import { client } from "@/sanity/lib/client";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const iconMap = {
  user: <User size={22} strokeWidth={2} />,
  compass: <Compass size={22} strokeWidth={2} />,
  mail: <Mail size={22} strokeWidth={2} />,
};

export default async function Home() {
  const data = await client.fetch<HomePage>(HOME_PAGE_QUERY);

  if (!data) {
    throw new Error("Brak dokumentu 'homePage' w Sanity.");
  }
  

  return (
    <main className="bg-(--surface) text-(--text)">
      <Hero
        eyebrow={data.heroEyebrow}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        socialLinks={data.socialLinks}
        imageUrl={
          data?.heroImage
            ? urlFor(data.heroImage).width(900).height(1100).url()
            : undefined
        }
        imageAlt={data.heroImageAlt || data.heroTitle}
      />

      {data.sections.map((section) => (
        <SectionIntro
          key={section.id}
          id={section.id}
          label={section.label}
          title={section.title}
          description={section.description}
          buttonText={section.buttonText}
          href={section.href}
          icon={section.icon ? iconMap[section.icon] : undefined}
          muted={section.muted}
        />
      ))}
    </main>
  );
}