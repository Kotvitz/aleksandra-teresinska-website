"use client";

import { useEffect, useState } from "react";
import { getConsent, type ConsentState } from "../cookies/cookieConsent";
import CookieSettingsModal from "../cookies/CookieSettingsModal";
import { FaCookieBite } from "react-icons/fa";

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieSettingsButton() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(() => getConsent() ?? DEFAULT_CONSENT);

  const handleOpen = () => {
    setConsent(getConsent() ?? DEFAULT_CONSENT);
    setOpen(true);
  };

  useEffect(() => {
    const onOpen = () => {
      setConsent(getConsent() ?? DEFAULT_CONSENT);
      setOpen(true);
    };

    window.addEventListener("cookie:open-settings", onOpen);
    return () => window.removeEventListener("cookie:open-settings", onOpen);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Ustawienia plików cookie"
        className="
        fixed left-0 top-1/2 z-50
        -translate-y-1/2

        flex items-center gap-2
        rounded-r-2xl cursor-pointer border border-l-0 border-(--brand-primary)
        bg-(--brand-accent)
        font-semibold text-(--brand-primary)
        shadow-lg transition-all duration-300 ease-out

        translate-x-[calc(-100%+1.75rem)]
        px-3 py-2 text-xs

        md:translate-x-[calc(-100%+2.5rem)]
        md:px-4 md:py-3 md:text-sm

        hover:translate-x-0
        focus:translate-x-0
        active:translate-x-0

        focus:outline-none focus:ring-2 focus:ring-(--brand-accent)
      "
      >
        <span>Zarządzaj zgodą</span>
        <FaCookieBite size={14} />
      </button>

      <CookieSettingsModal
        open={open}
        onClose={() => setOpen(false)}
        consent={consent}
        setConsent={setConsent}
      />
    </>
  );
}
