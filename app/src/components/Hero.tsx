import Image from "next/image";
import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61557471890058",
    icon: SiFacebook
  },
  {
    name: "X",
    href: "https://x.com/A_Z_Teresinska",
    icon: SiX
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aleksandratee",
    icon: SiInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@A_Z_Teresinska",
    icon: SiTiktok,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@pannaTee",
    icon: SiYoutube,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-(--border) bg-(--surface)"
    >
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
            Strona oficjalna
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-(--brand-primary) sm:text-5xl md:text-6xl">
            Aleksandra Teresińska
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-(--text-muted)">
            Przewodnicząca oddziału Nowej Nadziei w Pyrzycach 
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

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
              src="/images/hero.webp"
              alt="Aleksandra Teresińska"
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