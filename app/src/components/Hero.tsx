import Image from "next/image";
import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";

type SocialPlatform = "facebook" | "x" | "instagram" | "tiktok" | "youtube";

type SocialLink = {
  name: string;
  href: string;
  platform: SocialPlatform;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  socialLinks: SocialLink[];
  imageUrl?: string;
  imageAlt: string;
};

const iconMap = {
  facebook: SiFacebook,
  x: SiX,
  instagram: SiInstagram,
  tiktok: SiTiktok,
  youtube: SiYoutube,
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  socialLinks,
  imageUrl,
  imageAlt,
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-(--border) bg-(--surface)"
    >
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
            {eyebrow}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-(--brand-primary) sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-(--text-muted)">
            {subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.platform];

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--brand-primary) transition hover:border-(--brand-accent) hover:text-(--brand-accent)"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#o-mnie"
              className="rounded-full bg-(--brand-primary) px-6 py-3 text-sm font-semibold text-(--brand-primary-contrast) transition hover:opacity-90"
            >
              O mnie
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-4xl bg-(--brand-accent)/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border border-(--border) bg-(--surface-muted-strong) shadow-xl">
            <Image
              src={imageUrl || "/images/hero.webp"}
              alt={imageAlt}
              width={900}
              height={1100}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}