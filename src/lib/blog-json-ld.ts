import type { Post } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site-url";

const SITE_NAME = "Nuvigant";

function capitalizeSegment(s: string): string {
  if (!s) return s;
  return s
    .split(/[-_\s]+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

/** Schema.org Article for blog posts. */
export function articleJsonLd(post: Post, canonical: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: getSiteUrl(),
    },
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
