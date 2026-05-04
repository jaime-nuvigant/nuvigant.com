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

function capitalizeSegment(s: string): string {
  if (!s) return s;
  return s
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
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

type BreadcrumbItem = { name: string; item?: string };

/** Schema.org BreadcrumbList aligned with on-page breadcrumb trail. */
export function breadcrumbJsonLd(post: Post, canonical: string): { "@context": string; "@type": string; itemListElement: unknown[] } {
  const base = getSiteUrl();
  // Category/subcategory steps omit `item` until dedicated hub routes exist (see .cursor/rules/blog-routing.mdc).
  const items: BreadcrumbItem[] = [
    { name: "Inicio", item: `${base}/` },
    { name: "Blog", item: `${base}/blog` },
  ];
  if (post.category) {
    items.push({ name: capitalizeSegment(post.category) });
  }
  if (post.subcategory) {
    items.push({ name: capitalizeSegment(post.subcategory) });
  }
  items.push({ name: post.title, item: canonical });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  };
}
