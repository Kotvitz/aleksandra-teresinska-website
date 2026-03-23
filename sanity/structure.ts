import type {StructureResolver} from 'sanity/structure'
import {HomeIcon, UserIcon} from '@sanity/icons'

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

      ...S.documentTypeListItems().filter(
        (item) => !['homePage', 'aboutPage'].includes(item.getId() || '')
      ),
    ])