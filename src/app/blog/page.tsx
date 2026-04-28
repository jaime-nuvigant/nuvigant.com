import type { Metadata } from "next";
import { getAllPostsMeta, getAllTags } from "@/lib/blog";
import BlogPage from "@/components/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Nuvigant",
  description:
    "Artículos sobre gestión notarial, tecnología legal, ISR, PLD y transformación digital para fedatarios en México.",
  alternates: {
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
  openGraph: {
    title: "Blog | Nuvigant",
    description:
      "Artículos sobre gestión notarial, tecnología legal, ISR, PLD y transformación digital para fedatarios en México.",
    type: "website",
    url: "https://nuvigant.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Nuvigant",
    description: "Artículos sobre gestión notarial, tecnología legal e IA para fedatarios.",
  },
};

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
