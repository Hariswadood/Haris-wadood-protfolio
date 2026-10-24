import Link from "next/link";
import { Network } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-700 bg-navy-950/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-white"
          aria-label="Haris Wadood — home"
        >
          <Network className="h-6 w-6 text-accent" aria-hidden="true" />
          {SITE_NAME}
        </Link>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-300 transition-colors hover:text-accent-soft"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
