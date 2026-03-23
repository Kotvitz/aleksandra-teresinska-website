import type {StructureResolver} from 'sanity/structure'
import {BulbOutlineIcon, HomeIcon, UserIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Zawartość')
    .items([
      S.listItem()
        .title('Strona główna')
        .icon(HomeIcon)
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Strona główna')
        ),

      S.listItem()
        .title('O mnie')
        .icon(UserIcon)
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('O mnie')
        ),

      S.listItem()
        .title('Wartości')
        .icon(BulbOutlineIcon)
        .child(
          S.document()
            .schemaType('valuesPage')
            .documentId('valuesPage')
            .title('Wartości')
        ),

      ...S.documentTypeListItems().filter(
        (item) => !['homePage', 'aboutPage', 'valuesPage'].includes(item.getId() || '')
      ),
    ])