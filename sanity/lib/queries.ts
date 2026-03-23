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

export const ABOUT_PAGE_QUERY = groq`
  *[_type == "aboutPage"][0]{
    heroEyebrow,
    heroTitle,
    heroIntro,
    heroDescription,
    heroButtonText,
    heroButtonHref,
    heroImage,
    heroImageAlt,
    splitSections[]{
      eyebrow,
      title,
      paragraphs,
      imageSrc,
      image,
      imageAlt,
      imageSide,
      muted
    }
  }
`