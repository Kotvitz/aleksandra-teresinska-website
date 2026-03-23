export type SocialPlatform =
  | "facebook"
  | "x"
  | "instagram"
  | "tiktok"
  | "youtube";

export type SocialLink = {
  name: string;
  href: string;
  platform: SocialPlatform;
};

export type HomeSection = {
  id: string;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  icon?: "user" | "compass" | "mail";
  muted?: boolean;
};

export type HomePage = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  socialLinks: SocialLink[];
  sections: HomeSection[];
};

export type AboutSplitSectionData = {
  imageSrc: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: unknown;
  imageAlt: string;
  imageSide?: 'left' | 'right';
  muted?: boolean;
};

export type AboutPage = {
  heroEyebrow: string;
  heroTitle: string;
  heroIntro: string;
  heroDescription: string;
  heroButtonText: string;
  heroButtonHref: string;
  heroImage?: unknown;
  heroImageAlt?: string;
  splitSections: AboutSplitSectionData[];
};

export type ValueGridIcon =
  | "lightbulb"
  | "briefcaseBusiness"
  | "shieldCheck"
  | "heart"
  | "scale"
  | "users";

export type ValuesGridItem = {
  icon: ValueGridIcon;
  title: string;
  description: string;
};

export type ValuesBottomSection = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export type ValuesSectionData = {
  eyebrow: string;
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
  muted?: boolean;
};

export type ValuesPage = {
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroImageSrc?: string;
  heroImage?: unknown;
  heroImageAlt: string;
  valuesGrid: ValuesGridItem[];
  sections: ValuesSectionData[];
};