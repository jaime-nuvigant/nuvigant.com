import type { Post } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site-url";

const SITE_NAME = "Nuvigant";

/** Resolve cover image to an absolute URL for JSON-LD (Schema.org expects absolute URLs). */
function absoluteArticleImage(coverImage: string): string {
  const raw = coverImage?.trim() ?? "";
  if (!raw) return raw;
  if (/^https?:\/\//i.test(raw)) return raw;
  const base = getSiteUrl().replace(/\/$/, "");
  if (raw.startsWith("/")) return `${base}${raw}`;
  return `${base}/${raw.replace(/^\//, "")}`;
}

/** Heuristic: treat author as a person unless the name clearly denotes an organization. */
function authorJsonLd(post: Post) {
  const name = post.author.name.trim();
  const looksOrg =
    /\b(S\.A\.|S\.A\. de C\.V\.|Inc\.|LLC|Ltd\.|Nuvigant|Colegio|Instituto|Gobierno|Secretaría|Departamento)\b/i.test(
      name
    );
  if (looksOrg || name.length > 60) {
    return { "@type": "Organization" as const, name, url: getSiteUrl() };
  }
  return { "@type": "Person" as const, name };
}

/** Schema.org Article for blog posts. */
export function articleJsonLd(post: Post, canonical: string) {
  const image = absoluteArticleImage(post.coverImage);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.date,
    dateModified: post.date,
    author: authorJsonLd(post),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
      logo: { "@type": "ImageObject", url: `${getSiteUrl()}/favicon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    keywords: post.tags.join(", "),
  };
}

/**
 * Schema.org BreadcrumbList. Only includes URLs that exist (home, blog index, article).
 * Category/subcategory appear in the visible trail as non-links but are omitted here
 * so every ListItem has a resolvable `item` (Google rich-result guidance).
 */
export function breadcrumbJsonLd(post: Post, canonical: string): { "@context": string; "@type": string; itemListElement: unknown[] } {
  const base = getSiteUrl();
  const items = [
    { name: "Inicio", item: `${base}/` },
    { name: "Blog", item: `${base}/blog` },
    { name: post.title, item: canonical },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}
