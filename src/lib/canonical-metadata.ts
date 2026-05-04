import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const DEFAULT_OG_IMAGE = "/og-image.png";

/**
 * Absolute canonical URL fragment for App Router `metadata`.
 */
export function canonicalAlternates(pathname: string): Pick<Metadata, "alternates"> {
  const base = getSiteUrl().replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return { alternates: { canonical: `${base}${normalized}` } };
}

function absoluteOgImage(pathOrUrl: string): string {
  const s = pathOrUrl.trim();
  if (!s) return absoluteOgImage(DEFAULT_OG_IMAGE);
  if (/^https?:\/\//i.test(s)) return s;
  const base = getSiteUrl().replace(/\/$/, "");
  return `${base}${s.startsWith("/") ? s : `/${s}`}`;
}

/** Shared Open Graph + Twitter fragments for marketing pages (merges with root `metadata`). */
export function ogMetadataSpread(opts: {
  title: string;
  description: string;
  pathname: string;
  image?: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const base = getSiteUrl().replace(/\/$/, "");
  const rawPath = opts.pathname.startsWith("/") ? opts.pathname : `/${opts.pathname}`;
  const pathNoTrailing = rawPath.replace(/\/+$/, "") || "/";
  const pageUrl = pathNoTrailing === "/" ? `${base}/` : `${base}${pathNoTrailing}`;
  const imageUrl = absoluteOgImage(opts.image ?? DEFAULT_OG_IMAGE);

  return {
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: opts.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [imageUrl],
    },
  };
}
