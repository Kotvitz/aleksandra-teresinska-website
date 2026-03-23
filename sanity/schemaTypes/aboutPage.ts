import { defineField, defineType } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "O mnie",
  type: "document",
  initialValue: {
    heroEyebrow: "O mnie",
    heroTitle: "Kim jestem i dlaczego się angażuję?",
    heroIntro:
      "Nazywam się Aleksandra Teresińska. Jestem przedsiębiorcą w branży medycznej, mamą dwóch chłopców i osobą, która zdecydowała się wejść do życia publicznego nie z przypadku, ale z przekonania.",
    heroDescription:
      "Ta strona to miejsce, w którym chcę pokazać nie tylko swoją działalność, ale też drogę, która doprowadziła mnie do aktywności społecznej i politycznej.",
    heroButtonText: "Moje wartości",
    heroButtonHref: "/wartosci",
    heroImageAlt: "Aleksandra Teresińska",

    splitSections: [
      {
        _key: "moja-droga",
        eyebrow: "Moja droga",
        title: "Od osobistego doświadczenia do działania",
        imageSrc: '/images/about-story.webp',
        imageAlt: "Aleksandra Teresińska podczas spotkania",
        imageSide: "left",
        muted: true,
        paragraphs: [
          "Moja droga do aktywności politycznej zaczęła się od bardzo osobistego momentu. Przed wyborami parlamentarnymi w 2023 roku, będąc w zaawansowanej ciąży, stałam pod sceną na wiecu i słuchałam, co mają do powiedzenia przedstawiciele Nowej Nadziei.",
          "Interesowało mnie przede wszystkim to, co to środowisko ma do zaoferowania przedsiębiorcom takim jak ja - osobom, które na co dzień biorą odpowiedzialność za swoją pracę, firmę i rodzinę.",
          "To był moment, w którym poczułam, że nie chcę już tylko słuchać i obserwować. Chciałam stać się częścią środowiska ludzi, którzy chcą mieć realny wpływ na kierunek zmian i nie zgadzają się na bierność.",
        ],
      },
      {
        _key: "codziennosc",
        eyebrow: "Codzienność",
        title: "Perspektywa mamy i przedsiębiorcy",
        imageSrc: '/images/about-perspective.webp',
        imageAlt: "Aleksandra Teresińska w codziennej działalności",
        imageSide: "right",
        muted: false,
        paragraphs: [
          "Na co dzień łączę życie rodzinne z prowadzeniem firmy w branży medycznej. To rzeczywistość, która wymaga dobrej organizacji, odpowiedzialności i gotowości do działania praktycznie przez całą dobę.",
          "Jako mama dwóch małych chłopców patrzę na wiele spraw inaczej - przez pryzmat bezpieczeństwa, edukacji i przyszłości kolejnego pokolenia.",
          "Zależy mi na świecie, w którym dzieci mogą dorastać spokojnie, odważnie i bez lęku o to, co przyniesie przyszłość.",
        ],
      },
      {
        _key: "dzialalnosc-w-regionie",
        eyebrow: "Działalność w regionie",
        title: "Pyrzyce i budowanie lokalnego środowiska",
        imageSrc: '/images/about-local.webp',
        imageAlt: "Aleksandra Teresińska podczas działalności lokalnej",
        imageSide: "left",
        muted: true,
        paragraphs: [
          "W październiku oficjalnie otworzyłam pyrzycki oddział Nowej Nadziei i zostałam jego przewodniczącą. To ważna inicjatywa, z której jestem naprawdę dumna.",
          "Bardzo doceniam wszystkich, którzy zaangażowali się w jej tworzenie. Wierzę, że realna zmiana zaczyna się również lokalnie - od ludzi, którzy chcą rozmawiać, organizować się i brać odpowiedzialność za swoje otoczenie.",
          "Zależy mi na obecności blisko mieszkańców i na budowaniu środowiska, które nie ogranicza się do komentarzy, ale potrafi działać.",
        ],
      },
    ],
  },
  fields: [
    defineField({
      name: "heroEyebrow",
      title: "Mały nagłówek",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Tytuł główny",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroIntro",
      title: "Wstęp",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Opis pod wstępem",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroButtonText",
      title: "Tekst przycisku",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroButtonHref",
      title: "Link przycisku",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Zdjęcie główne",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroImageAlt",
      title: "Opis zdjęcia (alt)",
      type: "string",
    }),
    defineField({
      name: "splitSections",
      title: "Sekcje treści",
      type: "array",
      of: [
        defineField({
          name: "splitSection",
          title: "Sekcja",
          type: "object",
          fields: [
            defineField({
              name: "eyebrow",
              title: "Mały nagłówek",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Tytuł",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "paragraphs",
              title: "Akapity",
              type: "array",
              of: [{ type: "text" }],
              validation: (Rule) => Rule.min(1).required(),
            }),
            defineField({
            name: 'imageSrc',
            title: 'Ścieżka obrazu (domyślna)',
            type: 'string',
            description: 'Np. /images/about-story.webp',
            validation: Rule => Rule.required(),
            }),

            defineField({
            name: 'image',
            title: 'Nowy obraz (opcjonalnie)',
            type: 'image',
            options: { hotspot: true },
            }),
            defineField({
              name: "imageAlt",
              title: "Opis zdjęcia (alt)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "imageSide",
              title: "Pozycja zdjęcia",
              type: "string",
              options: {
                list: [
                  { title: "Po lewej", value: "left" },
                  { title: "Po prawej", value: "right" },
                ],
                layout: "radio",
              },
              initialValue: "right",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "muted",
              title: "Stonowane tło",
              type: "boolean",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "eyebrow",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "O mnie" };
    },
  },
});
