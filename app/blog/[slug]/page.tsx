import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      publishedTime: article.date,
      authors: ["Haris Wadood"],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Haris Wadood",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-4 py-12">
        <Link
          href="/blog"
          className="text-sm font-semibold text-accent-soft hover:text-accent"
        >
          ← Back to blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{article.title}</h1>
        <p className="mt-3 text-sm text-slate-400">
          By Haris Wadood · {article.date} · {article.readingTime}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-300">{article.description}</p>

        <nav aria-label="Table of contents" className="mt-8 rounded-xl border border-navy-700 bg-navy-900 p-5">
          <h2 className="font-semibold text-white">In this article</h2>
          <ol className="mt-3 list-inside list-decimal space-y-1 text-sm">
            {article.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-slate-300 hover:text-accent-soft"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-3 leading-relaxed text-slate-300">
                {paragraph}
              </p>
            ))}
            {section.code ? (
              <pre className="mt-4 overflow-x-auto rounded-lg border border-navy-700 bg-charcoal-900 p-4 text-sm leading-relaxed text-slate-200">
                <code>{section.code}</code>
              </pre>
            ) : null}
          </section>
        ))}

        <footer className="mt-12 border-t border-navy-700 pt-6">
          <p className="text-sm text-slate-400">
            Written by Haris Wadood, BS Computer Science student at UET Mardan. See more in the{" "}
            <Link href="/projects" className="font-semibold text-accent-soft hover:text-accent">
              projects section
            </Link>{" "}
            or{" "}
            <Link href="/blog" className="font-semibold text-accent-soft hover:text-accent">
              back to the blog
            </Link>
            .
          </p>
        </footer>
      </article>
    </>
  );
}
