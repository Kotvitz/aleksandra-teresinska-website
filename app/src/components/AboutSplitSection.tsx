import type { ReactNode } from "react";
import Image from "next/image";

type AboutSplitSectionProps = {
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
  imageSide?: "left" | "right";
  muted?: boolean;
};

export default function AboutSplitSection({
  eyebrow,
  title,
  imageSrc,
  imageAlt,
  children,
  imageSide = "right",
  muted = false,
}: AboutSplitSectionProps) {
  const isImageLeft = imageSide === "left";

  return (
    <section
      className={`border-b border-(--border) ${
        muted ? "bg-(--surface-muted)" : "bg-(--surface)"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div className={isImageLeft ? "order-2 md:order-1" : "order-2"}>
          <div className="overflow-hidden rounded-4xl border border-(--border) bg-(--surface-muted) shadow-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className={isImageLeft ? "order-1 md:order-2" : "order-1"}>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-primary)">
              {eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-(--brand-primary)">
              {title}
            </h2>

            <div className="mt-4 h-1 w-16 rounded-full bg-(--brand-accent)" />

            <div className="mt-6 space-y-4 text-lg leading-8 text-(--text-muted)">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}