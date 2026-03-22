// sanity/lib/queries.ts
import {groq} from 'next-sanity'

export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage"][0]{
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroImageAlt,
    socialLinks[]{
      name,
      href,
      platform
    },
    sections[]{
      id,
      label,
      title,
      description,
      buttonText,
      href,
      icon,
      muted
    }
  }
`