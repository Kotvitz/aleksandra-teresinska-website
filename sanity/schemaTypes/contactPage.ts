import {defineField, defineType} from "sanity";

export default defineType({
  name: "contactPage",
  title: "Strona „Kontakt”",
  type: "document",

  initialValue: {
    introEyebrow: "Kontakt",
    introTitle: "Napisz do mnie!",
    introDescription:
      "Masz pytanie, pomysł albo sprawę, którą chcesz poruszyć? Zachęcam do kontaktu - zależy mi na rozmowie i poznaniu opinii mieszkańców.",

    infoEmailLabel: "E-mail:",
    infoEmail: "info@aleksandra-teresinska.com.pl",
    infoAddressLabel: "Adres korespondencyjny:",
    infoAddress: "„Ofi-Med” ul. Księcia Bogusława X nr 23 , 74-200 Pyrzyce",

    formTitle: "Formularz kontaktowy",
    formNamePlaceholder: "Imię i nazwisko (wymagane)",
    formEmailPlaceholder: "Adres e-mail (wymagane)",
    formSubjectPlaceholder: "Temat",
    formMessagePlaceholder: "Twoja wiadomość (wymagane)",
    formConsentText:
      "Wyrażam zgodę na przetwarzanie moich danych osobowych wysłanych za pomocą formularza kontaktowego",
    formRequiredFieldsText: "Pola oznaczone * są wymagane.",
    formSubmitText: "Wyślij wiadomość",
    formSubmittingText: "Wysyłanie...",
    formSuccessMessage: "Dziękujemy! Wiadomość została wysłana.",
    formErrorMessage: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
  },

  fields: [
    defineField({
      name: "introEyebrow",
      title: "Mały nagłówek",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introTitle",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introDescription",
      title: "Opis",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "infoEmailLabel",
      title: "Etykieta e-mail",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "infoEmail",
      title: "Adres e-mail",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "infoAddressLabel",
      title: "Etykieta adresu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "infoAddress",
      title: "Adres korespondencyjny",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "formTitle",
      title: "Tytuł formularza",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formNamePlaceholder",
      title: "Placeholder pola imię i nazwisko",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formEmailPlaceholder",
      title: "Placeholder pola e-mail",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formSubjectPlaceholder",
      title: "Placeholder pola temat",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formMessagePlaceholder",
      title: "Placeholder pola wiadomość",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formConsentText",
      title: "Treść zgody",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formRequiredFieldsText",
      title: "Tekst o wymaganych polach",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formSubmitText",
      title: "Tekst przycisku wyślij",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formSubmittingText",
      title: "Tekst podczas wysyłania",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formSuccessMessage",
      title: "Komunikat sukcesu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "formErrorMessage",
      title: "Komunikat błędu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    prepare() {
      return {title: "Kontakt"};
    },
  },
});