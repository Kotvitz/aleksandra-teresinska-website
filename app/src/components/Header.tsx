"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Strona główna", href: "#hero" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Wartości", href: "#wartosci" },
  { label: "Kontakt", href: "#kontakt", primary: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--surface)/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center" onClick={closeMenu}>
          <Image
            src="/images/logo-nowa-nadzieja.svg"
            alt="Aleksandra Teresińska"
            width={100}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={
                item.primary
                  ? "rounded-full bg-(--brand-primary) px-4 py-2 text-sm font-semibold text-(--brand-primary-contrast) transition hover:opacity-90"
                  : "rounded-full px-4 py-2 text-sm font-medium text-(--text) transition hover:bg-(--surface-muted) hover:text-(--brand-primary)"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full cursor-pointer border border-(--border) bg-(--surface) text-(--brand-primary) transition hover:bg-(--surface-muted) md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-(--border) bg-(--surface) md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className={
                  item.primary
                    ? "rounded-2xl bg-(--brand-primary) px-4 py-3 text-sm font-semibold text-(--brand-primary-contrast) transition hover:opacity-90"
                    : "rounded-2xl px-4 py-3 text-sm font-medium text-(--text) transition hover:bg-(--surface-muted) hover:text-(--brand-primary)"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}