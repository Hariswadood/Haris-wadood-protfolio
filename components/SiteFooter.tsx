import Link from "next/link";
import { EMAIL, LINKEDIN_URL, LOCATION, PHONE, SITE_NAME } from "@/lib/site";

// Evaluated once at build time (module scope) so pages stay statically prerendered.
const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="border-t border-navy-700 bg-navy-900">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-slate-400">
            Computer Networking Enthusiast | Future Network Engineer
          </p>
          <p className="mt-2 text-sm text-slate-400">{LOCATION}</p>
        </div>
        <nav aria-label="Footer navigation">
          <p className="font-semibold text-white">Explore</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/projects" className="text-slate-400 hover:text-accent-soft">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/experience" className="text-slate-400 hover:text-accent-soft">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-slate-400 hover:text-accent-soft">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-slate-400 hover:text-accent-soft">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <a href={`mailto:${EMAIL}`} className="text-slate-400 hover:text-accent-soft">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-accent-soft"
              >
                LinkedIn profile
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="text-slate-400 hover:text-accent-soft">
                {PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-700 py-4 text-center text-xs text-slate-500">
        © {CURRENT_YEAR} {SITE_NAME}. Built with Next.js.
      </div>
    </footer>
  );
}
