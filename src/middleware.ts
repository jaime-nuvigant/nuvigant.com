import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  WP_QUERY_ID_TO_PATH,
  WP_QUERY_UNKNOWN_FALLBACK,
  normalizeLegacyBlogPath,
} from "@/lib/wp-query-redirects";

/**
 * Map legacy WordPress `/?p=ID` and `/?page_id=ID` to canonical paths so old
 * bookmarks and crawlers never hit a hard 404. Unknown IDs → soft redirect to /blog.
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

  const id = (rawP ?? rawPageId)?.trim();
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
  // 301 for known IDs (permanent); 302 for unknown so we never hard-404 legacy query URLs.
  const status = rawTarget ? 301 : 302;
  return NextResponse.redirect(url, status);
}

export const config = {
  matcher: ["/", "/index.php"],
};
