"use client";

import { useEffect, useRef } from "react";
import { setConsent as persistConsent, type ConsentState } from "./cookieConsent";

export default function CookieSettingsModal({
  open,
  onClose,
  consent,
  setConsent,
}: {
  open: boolean;
  onClose: () => void;
  consent: ConsentState;
  setConsent: React.Dispatch<React.SetStateAction<ConsentState>>;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const save = () => {
    persistConsent({ analytics: consent.analytics, marketing: consent.marketing });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-9992">
      <button
        aria-label="Zamknij okno ustawień plików cookie"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        type="button"
      />
      <div className="relative mx-auto mt-24 w-[92%] max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <button
          aria-label="Zamknij"
          onClick={onClose}
          className="absolute cursor-pointer right-3 top-3 text-gray-500 hover:text-black text-lg font-bold"
          type="button"
        >
          ×
        </button>
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label="Ustawienia plików cookie"
          className="outline-none"
        >
          <h2 className="text-lg font-bold text-(--text)">Ustawienia plików cookie</h2>
          <p className="mt-2 text-sm text-(--text-muted)">
            Strona wykorzystuje pliki cookies w celu zapewnienia jej prawidłowego działania oraz - za Twoją zgodą - w celach analitycznych i wyświetlania treści zewnętrznych.
          </p>

          <div className="mt-5 space-y-4 text-sm">
            <label className="flex items-start gap-3">
              <input type="checkbox" checked disabled className="mt-1" />
              <span>
                <span className="font-semibold text-(--text)">Niezbędne</span>
                <div className="text-(--text-muted)">Zawsze aktywne</div>
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent((v) => ({ ...v, analytics: e.target.checked }))}
                className="mt-1"
              />
              <span>
                <span className="font-semibold text-(--text)">Analityczne</span>
                <div className="text-(--text-muted)">Pomagają analizować ruch na stronie</div>
              </span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent((v) => ({ ...v, marketing: e.target.checked }))}
                className="mt-1"
              />
              <span>
                <span className="font-semibold text-(--text)">Marketingowe</span>
                <div className="text-(--text-muted)">Obsługują treści z serwisów zewnętrznych</div>
              </span>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={save}
              className="rounded-full bg-(--brand-primary) cursor-pointer px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Zapisz
            </button>

            <button
              type="button"
              onClick={() => setConsent({ necessary: true, analytics: false, marketing: false })}
              className="rounded-full border border-(--border) cursor-pointer px-4 py-2 text-sm hover:bg-(--surface-muted-strong)"
            >
              Odrzuć wszystkie
            </button>

            <button
              type="button"
              onClick={() => setConsent({ necessary: true, analytics: true, marketing: true })}
              className="rounded-full bg-(--brand-primary) cursor-pointer px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Akceptuj wszystko
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
