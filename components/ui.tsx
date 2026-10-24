import type { ReactNode } from "react";
import { ImageOff } from "lucide-react";

/** LinkedIn brand mark as inline SVG (lucide-react no longer ships brand icons). */
export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-topology border-b border-navy-700 bg-navy-900 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
      </div>
    </div>
  );
}

export function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {description ? <p className="mt-2 max-w-3xl text-slate-400">{description}</p> : null}
    </div>
  );
}

/** Honest placeholder for an image that does not exist yet. Never a fake photo. */
export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className="flex aspect-video flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-navy-700 bg-charcoal-800 px-4 text-center"
    >
      <ImageOff className="h-8 w-8 text-slate-500" aria-hidden="true" />
      <p className="text-sm text-slate-400">{label}</p>
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`rounded-xl border border-navy-700 bg-navy-900 p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </article>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const inProgress = status === "In progress";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
        inProgress
          ? "bg-amber-400/15 text-amber-300"
          : "bg-emerald-400/15 text-emerald-300"
      }`}
    >
      {status}
    </span>
  );
}
