"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  primary?: boolean;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const navigation: NavItem[] = isHomePage
    ? [
        { label: "Strona główna", href: "#hero" },
        { label: "O mnie", href: "#o-mnie" },
        { label: "Wartości", href: "#wartosci" },
        { label: "Kontakt", href: "#kontakt", primary: true },
      ]
    : [
        { label: "Strona główna", href: "/" },
        { label: "O mnie", href: "/o-mnie" },
        { label: "Wartości", href: "/wartosci" },
        { label: "Kontakt", href: "/kontakt", primary: true },
      ];

  const closeMenu = () => setIsOpen(false);

  const linkClass = (primary?: boolean) =>
    primary
      ? "rounded-full bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-[var(--brand-primary-contrast)] transition hover:opacity-90"
      : "rounded-full px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--brand-primary)]";

  const mobileLinkClass = (primary?: boolean) =>
    primary
      ? "rounded-2xl bg-[var(--brand-primary)] px-4 py-3 text-sm font-semibold text-[var(--brand-primary-contrast)] transition hover:opacity-90"
      : "rounded-2xl px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--brand-primary)]";

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--surface)/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo-nowa-nadzieja.svg"
            alt="Aleksandra Teresińska"
            width={100}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) =>
            isHomePage ? (
              <a
                key={item.label}
                href={item.href}
                className={linkClass(item.primary)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={linkClass(item.primary)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center cursor-pointer rounded-full border border-(--border) bg-(--surface) text-(--brand-primary) transition hover:bg-(--surface-muted) md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-(--border) bg-(--surface) md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navigation.map((item) =>
              isHomePage ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={mobileLinkClass(item.primary)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={mobileLinkClass(item.primary)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}