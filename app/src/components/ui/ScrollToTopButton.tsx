"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 300;

    const onScroll = () => {
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={[
        "fixed bottom-6 right-6 z-50",
        "h-12 w-12 rounded-full cursor-pointer",
        "bg-(--brand-accent) text-(--brand-primary)",
        "border border-(--border)",
        "shadow-md",
        "hover:shadow-lg hover:-translate-y-0.5 hover:brightness-95",
        "active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-(--brand-primary)/20",
        "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  );
}
