import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

/**
 * Absolute canonical URL fragment for App Router `metadata`.
 */
export function canonicalAlternates(pathname: string): Pick<Metadata, "alternates"> {
  const base = getSiteUrl().replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalized = path === "/" ? "/" : path.replace(/\/$/, "");
  return { alternates: { canonical: `${base}${normalized}` } };
}
