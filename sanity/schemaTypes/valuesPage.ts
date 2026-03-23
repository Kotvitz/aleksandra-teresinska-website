import {defineField, defineType} from "sanity";

export default defineType({
  name: "valuesPage",
  title: "Wartości",
  type: "document",

  initialValue: {
    heroEyebrow: "Wartości",
    heroTitle: "To, co jest dla mnie naprawdę ważne",
    heroDescription:
      "W działalności publicznej kieruję się zasadami, które wynikają zarówno z mojego doświadczenia zawodowego, jak i życia rodzinnego. To wartości, które przekładam na konkretne działania i sposób patrzenia na sprawy społeczne, gospodarcze i lokalne.",
    heroImageSrc: "/images/values-hero.webp",
    heroImageAlt: "Wartości i działalność Aleksandry Teresińskiej",

    valuesGrid: [
      {
        _key: "wolnosc",
        icon: "lightbulb",
        title: "Wolność",
        description:
          "Wierzę w większą swobodę obywateli, prostsze prawo i ograniczenie zbędnych ingerencji państwa.",
      },
      {
        _key: "przedsiebiorczosc",
        icon: "briefcaseBusiness",
        title: "Przedsiębiorczość",
        description:
          "Szanuję pracę, inicjatywę i odpowiedzialność osób, które budują firmy i miejsca pracy.",
      },
      {
        _key: "bezpieczenstwo",
        icon: "shieldCheck",
        title: "Bezpieczeństwo",
        description:
          "Bezpieczna przyszłość rodzin i dzieci jest dla mnie jedną z podstawowych spraw publicznych.",
      },
      {
        _key: "rodzina",
        icon: "heart",
        title: "Rodzina",
        description:
          "Rodzina, wychowanie i trwałe wartości mają ogromne znaczenie dla stabilnej przyszłości społeczeństwa.",
      },
      {
        _key: "odpowiedzialnosc",
        icon: "scale",
        title: "Odpowiedzialność",
        description:
          "Cenię konkret, uczciwość i odpowiedzialne podejście do spraw publicznych zamiast pustych deklaracji.",
      },
      {
        _key: "blisko-ludzi",
        icon: "users",
        title: "Blisko ludzi",
        description:
          "Ważne są dla mnie rozmowa z mieszkańcami, lokalne sprawy i realna obecność tam, gdzie potrzeba działania.",
      },
    ],

    sections: [
      {
        _key: "gospodarka-i-przedsiebiorczosc",
        eyebrow: "Gospodarka i przedsiębiorczość",
        title: "Szacunek dla pracy, inicjatywy i odpowiedzialności",
        descriptionOne: "Jako przedsiębiorca dobrze wiem, jak wiele wysiłku kosztuje prowadzenie własnej działalności. Dlatego bliskie są mi rozwiązania, które upraszczają prawo, ograniczają zbędną biurokrację i pozwalają ludziom spokojnie pracować oraz rozwijać swoje firmy.",
        descriptionTwo: "Uważam, że państwo nie powinno przeszkadzać obywatelom w codziennym życiu i działalności zawodowej. Potrzebujemy prostszych zasad, większej przewidywalności i większego szacunku dla tych, którzy biorą odpowiedzialność za siebie, swoje rodziny i swoje miejsca pracy.",
        muted: true,
      },
      {
        _key: "rodzina-edukacja-bezpieczeństwo",
        eyebrow: "Rodzina, edukacja i bezpieczeństwo",
        title: "Przyszłość trzeba budować odpowiedzialnie",
        descriptionOne: "Jako mama patrzę na wiele spraw z perspektywy przyszłości dzieci i rodzin. Zależy mi na świecie, w którym kolejne pokolenie może dorastać bezpiecznie, w stabilnym otoczeniu i w oparciu o wartości, które dają poczucie ładu i sensu.",
        descriptionTwo: "Niepokoją mnie kierunki zmian, które osłabiają bezpieczeństwo, chaos w edukacji oraz odchodzenie od zdrowego rozsądku. Wierzę, że polityka powinna odpowiadać na realne potrzeby ludzi, a nie tworzyć kolejne problemy oderwane od codziennego życia.",
        muted: false,
      },
      {
        _key: "dzialalnosc",
        eyebrow: "Działalność publiczna i wspólnota",
        title: "Merytoryka, odpowiedzialność i obecność blisko ludzi",
        descriptionOne: "W życiu publicznym cenię konkret, uczciwość i odpowiedzialność. Uważam, że polityka nie powinna opierać się na pustych hasłach ani wizerunku, ale na realnej pracy, rozmowie z ludźmi i gotowości do podejmowania trudnych tematów.",
        descriptionTwo: "Ważne są dla mnie zarówno sprawy ogólnopolskie i europejskie, jak i codzienne sprawy mieszkańców. Dlatego chcę działać nie tylko na poziomie idei, ale też tam, gdzie naprawdę potrzebna jest obecność, rozmowa i zaangażowanie.",
        muted: true,
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
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Opis",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImageSrc",
      title: "Domyślna ścieżka obrazu",
      type: "string",
      description: "Np. /images/values-hero.webp",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Nowy obraz (opcjonalnie)",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "heroImageAlt",
      title: "Opis obrazu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "valuesGrid",
      title: "Siatka wartości",
      type: "array",
      validation: (Rule) => Rule.min(1).required(),
      of: [
        defineField({
          name: "valueItem",
          title: "Karta wartości",
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Ikona",
              type: "string",
              options: {
                list: [
                  {title: "Żarówka", value: "lightbulb"},
                  {title: "Teczka", value: "briefcaseBusiness"},
                  {title: "Tarcza", value: "shieldCheck"},
                  {title: "Serce", value: "heart"},
                  {title: "Waga", value: "scale"},
                  {title: "Użytkownicy", value: "users"},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Tytuł",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Opis",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
    }),

    defineField({
      name: "sections",
      title: "Sekcje wartości",
      type: "array",
      validation: (Rule) =>
        Rule.length(3).error(
          "Na stronie „Wartości” muszą być dokładnie 3 sekcje."
        ),
      of: [
        defineField({
          name: "section",
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
              name: "descriptionOne",
              title: "Opis 1",
              type: "text",
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "descriptionTwo",
              title: "Opis 2",
              type: "text",
              rows: 4,
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
      return {title: "Wartości"};
    },
  },
});