import type { Metadata } from "next";
import Link from "next/link";
import { Card, PageHeader } from "@/components/ui";
import { BLOG_POSTS, PLANNED_BLOG_IDEAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Networking articles by Haris Wadood: VLAN configuration and inter-VLAN routing, SNMP in network monitoring, and GNS3 vs Cisco Packet Tracer — plus planned article ideas.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Original technical articles based on topics I have actually studied and practised. Planned ideas below are listed as planned only — they are not articles yet."
      />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <section aria-labelledby="published-heading">
          <h2 id="published-heading" className="text-2xl font-bold text-white">
            Published Articles
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Card key={post.slug}>
                <p className="text-xs text-slate-500">
                  {post.date} · {post.readingTime}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-accent-soft"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-accent-soft hover:text-accent"
                >
                  Read article →
                </Link>
              </Card>
            ))}
          </div>
        </section>
        <section aria-labelledby="planned-heading" className="mt-12">
          <h2 id="planned-heading" className="text-2xl font-bold text-white">
            Planned Articles
          </h2>
          <p className="mt-2 max-w-3xl text-slate-400">
            These topics are planned for future writing. They are listed here as ideas only and
            do not link to articles, because those articles do not exist yet.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {PLANNED_BLOG_IDEAS.map((idea) => (
              <li
                key={idea}
                className="rounded-lg border border-dashed border-navy-700 bg-navy-900 px-4 py-3 text-sm text-slate-400"
              >
                {idea} <span className="text-slate-500">(planned)</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
