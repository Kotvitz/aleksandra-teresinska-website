import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Strona główna',
  type: 'document',

  initialValue: {
    heroEyebrow: 'Strona oficjalna',
    heroTitle: 'Aleksandra Teresińska',
    heroSubtitle: 'Przewodnicząca oddziału Nowej Nadziei w Pyrzycach',
    heroImageAlt: 'Aleksandra Teresińska',

    socialLinks: [
      {
        _key: 'facebook',
        name: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61557471890058',
        platform: 'facebook',
      },
      {
        _key: 'x',
        name: 'X',
        href: 'https://x.com/A_Z_Teresinska',
        platform: 'x',
      },
      {
        _key: 'instagram',
        name: 'Instagram',
        href: 'https://www.instagram.com/aleksandratee',
        platform: 'instagram',
      },
      {
        _key: 'tiktok',
        name: 'TikTok',
        href: 'https://www.tiktok.com/@A_Z_Teresinska',
        platform: 'tiktok',
      },
      {
        _key: 'youtube',
        name: 'YouTube',
        href: 'https://www.youtube.com/@pannaTee',
        platform: 'youtube',
      },
    ],

    sections: [
      {
        _key: 'o-mnie',
        id: 'o-mnie',
        label: 'O mnie',
        title: 'Kim jestem?',
        description:
          'Wierzę, że Polska może być krajem wolnych i odpowiedzialnych ludzi. Dlatego angażuję się w działalność publiczną i wspieram rozwiązania, które dają obywatelom więcej wolności, mniej biurokracji i większy wpływ na własne życie.',
        buttonText: 'Więcej',
        href: '/o-mnie',
        icon: 'user',
        muted: true,
      },
      {
        _key: 'wartosci',
        id: 'wartosci',
        label: 'Wartości',
        title: 'Wolność, odpowiedzialność, rozwój',
        description:
          'W centrum mojej działalności jest wolność obywateli i silna gospodarka oparta na przedsiębiorczości. Popieram niższe podatki, prostsze prawo i państwo, które nie przeszkadza ludziom w pracy i realizowaniu własnych pomysłów.',
        buttonText: 'Więcej',
        href: '/wartosci',
        icon: 'compass',
        muted: false,
      },
      {
        _key: 'kontakt',
        id: 'kontakt',
        label: 'Kontakt',
        title: 'Pozostańmy w kontakcie!',
        description:
          'Masz pytanie, propozycję współpracy lub chcesz podzielić się swoją opinią? Skontaktuj się bezpośrednio.',
        buttonText: 'Więcej',
        href: '/kontakt',
        icon: 'mail',
        muted: false,
      },
    ],
  },

  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Mały nagłówek nad tytułem',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Główny tytuł',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Podtytuł',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Opis zdjęcia (alt)',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Linki społecznościowe',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Link społecznościowy',
          fields: [
            defineField({
              name: 'name',
              title: 'Nazwa',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Adres URL',
              type: 'url',
            }),
            defineField({
              name: 'platform',
              title: 'Platforma',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'X', value: 'x'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'YouTube', value: 'youtube'},
                ],
              },
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sekcje strony głównej',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Sekcja',
          fields: [
            defineField({
              name: 'id',
              title: 'Id sekcji',
              type: 'string',
            }),
            defineField({
              name: 'label',
              title: 'Etykieta',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Tytuł',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Opis',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'buttonText',
              title: 'Tekst przycisku',
              type: 'string',
            }),
            defineField({
              name: 'href',
              title: 'Link przycisku',
              type: 'string',
            }),
            defineField({
              name: 'icon',
              title: 'Ikona',
              type: 'string',
              options: {
                list: [
                  {title: 'Użytkownik', value: 'user'},
                  {title: 'Kompas', value: 'compass'},
                  {title: 'Mail', value: 'mail'},
                ],
              },
            }),
            defineField({
              name: 'muted',
              title: 'Stonowane tło',
              type: 'boolean',
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {title: 'Strona główna'}
    },
  },
})