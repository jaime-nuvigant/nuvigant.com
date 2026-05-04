import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  WP_QUERY_ID_TO_PATH,
  WP_QUERY_UNKNOWN_FALLBACK,
  normalizeLegacyBlogPath,
} from "@/lib/wp-query-redirects";

/**
 * Legacy WordPress query URLs on `/` or `/index.php`:
 * - `page_id` → always `/blog` (we do not resolve numeric page IDs anymore).
 * - `p` (post ID) → mapped canonical path when known; unknown → `/blog` (302).
 */
export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const rawP = searchParams.get("p");
  const rawPageId = searchParams.get("page_id");
  if (rawP === null && rawPageId === null) {
    return NextResponse.next();
  }

  const isWpStylePath =
    pathname === "/" ||
    pathname === "" ||
    pathname === "/index.php" ||
    pathname.endsWith("/index.php");
  if (!isWpStylePath) {
    return NextResponse.next();
  }

  const pageId = rawPageId?.trim();
  if (pageId !== undefined && pageId !== "" && /^\d+$/.test(pageId)) {
    const url = request.nextUrl.clone();
    url.pathname = "/blog";
    url.search = "";
    return NextResponse.redirect(url, 301);
  }

  const id = rawP?.trim();
  if (!id || !/^\d+$/.test(id)) {
    return NextResponse.next();
  }

  const rawTarget = WP_QUERY_ID_TO_PATH[id];
  const pathnameOut = rawTarget
    ? normalizeLegacyBlogPath(rawTarget)
    : WP_QUERY_UNKNOWN_FALLBACK;

  const url = request.nextUrl.clone();
  url.pathname = pathnameOut;
  url.search = "";
  const status = rawTarget ? 301 : 302;
  return NextResponse.redirect(url, status);
}

export const config = {
  matcher: ["/", "/index.php"],
};
