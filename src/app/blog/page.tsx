import type { Metadata } from "next";
import { getAllPostsMeta, getAllTags } from "@/lib/blog";
import BlogPage from "@/components/BlogPage";
import { getSiteUrl } from "@/lib/site-url";
import { ogMetadataSpread } from "@/lib/canonical-metadata";
const BASE_DESCRIPTION =
  "Artículos sobre gestión notarial, tecnología legal, ISR, PLD y transformación digital para fedatarios.";

interface SearchParams {
  tag?: string;
  page?: string;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { tag, page } = await searchParams;
  const currentPage = Math.max(1, parseInt(page ?? "1"));

  const tagLabel = tag ? `${tag} — ` : "";
  const pageLabel = currentPage > 1 ? ` — Página ${currentPage}` : "";
  const title = `${tagLabel}Blog${pageLabel} | Nuvigant`;

  const description = tag
    ? `Artículos sobre ${tag} en el blog de Nuvigant: tecnología legal, gestión notarial y cumplimiento para fedatarios en México.`
    : BASE_DESCRIPTION;

  const canonicalParams = new URLSearchParams();
  if (tag) canonicalParams.set("tag", tag);
  if (currentPage > 1) canonicalParams.set("page", String(currentPage));
  const qs = canonicalParams.toString();
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}/blog${qs ? `?${qs}` : ""}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      types: { "application/rss+xml": "/blog/rss.xml" },
    },
    // Paginated pages beyond page 1 carry duplicate-content risk; noindex them.
    robots: currentPage > 1 ? { index: false, follow: true } : undefined,
    ...ogMetadataSpread({
      title,
      description,
      pathname: "/blog",
      openGraphUrl: canonical,
    }),
  };
}

const PER_PAGE = 10;

interface PageProps {
  searchParams: Promise<{ tag?: string; page?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const { tag, page } = await searchParams;
  const allPosts = await getAllPostsMeta();
  const allTags = await getAllTags();

  const filtered = tag ? allPosts.filter((p) => p.tags.includes(tag)) : allPosts;
  const currentPage = Math.max(1, parseInt(page ?? "1"));
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <BlogPage
      posts={paginated}
      allTags={allTags}
      activeTag={tag}
      currentPage={currentPage}
      totalPages={totalPages}
      totalPosts={filtered.length}
    />
  );
}
