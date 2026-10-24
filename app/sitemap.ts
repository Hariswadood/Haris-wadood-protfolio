import type { MetadataRoute } from "next";
import { BLOG_POSTS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = [
    "",
    "/about",
    "/skills",
    "/experience",
    "/certifications",
    "/projects",
    "/blog",
    "/contact",
    "/privacy-policy",
  ];
  const entries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
  }));
  for (const post of BLOG_POSTS) {
    entries.push({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    });
  }
  return entries;
}
