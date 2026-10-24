import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Page not found</h1>
      <p className="mx-auto mt-3 max-w-md text-slate-400">
        The page you are looking for does not exist or has moved. Use the links below to get
        back to the portfolio.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-accent px-5 py-2.5 font-semibold text-navy-950 transition-colors hover:bg-accent-soft"
        >
          Back to Home
        </Link>
        <Link
          href="/projects"
          className="rounded-lg border border-accent px-5 py-2.5 font-semibold text-accent-soft transition-colors hover:bg-navy-800"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
}
