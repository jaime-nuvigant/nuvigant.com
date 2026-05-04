/**
 * Canonical origin for absolute URLs (metadataBase, OG, RSS, sitemap, JSON-LD).
 *
 * - Set `NEXT_PUBLIC_SITE_URL` in production (e.g. `https://nuvigant.com`).
 * - On Vercel without it, falls back to `VERCEL_URL` (preview/prod hostname).
 * - Locally: `http://localhost:$PORT` (default port 3000).
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  const port = process.env.PORT?.trim() || "3000";
  return `http://localhost:${port}`;
}

/**
 * For client components: only `NEXT_PUBLIC_SITE_URL` is available in the browser.
 * Use when resolving a relative path during SSR in a `"use client"` module.
 */
export function getClientSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const port = process.env.PORT?.trim() || "3000";
  return `http://localhost:${port}`;
}
