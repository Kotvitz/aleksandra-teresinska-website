import {
  SiFacebook,
  SiX,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    { icon: SiFacebook, href: "https://www.facebook.com/profile.php?id=61557471890058" },
    { icon: SiX, href: "https://x.com/A_Z_Teresinska" },
    { icon: SiInstagram, href: "https://www.instagram.com/aleksandratee" },
    { icon: SiTiktok, href: "https://www.tiktok.com/@A_Z_Teresinska" },
    { icon: SiYoutube, href: "https://www.youtube.com/@pannaTee" },
  ];

  return (
    <footer className="bg-(--brand-primary) text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <div className="flex justify-center gap-5">
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-white transition hover:text-(--brand-accent)"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-white/70">
          © {new Date().getFullYear()} Aleksandra Teresińska. Wszelkie prawa zastrzeżone
        </p>
      </div>
    </footer>
  );
}