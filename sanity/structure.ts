import type {StructureResolver} from 'sanity/structure'
import {HomeIcon} from '@sanity/icons'

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
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'homePage'
      ),
    ])