// sanity/lib/types.ts

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