import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, Home } from "lucide-react";
import {
  getPostBySlug,
  getAllPostsMeta,
  getRelatedPosts,
  getSurroundingPosts,
  getPostUrl,
  formatDate,
} from "@/lib/blog";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import ReadingProgress from "@/components/blog/ReadingProgress";
import AuthorBio from "@/components/blog/AuthorBio";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogContent from "@/components/blog/BlogContent";
import { getSiteUrl } from "@/lib/site-url";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/blog-json-ld";

const SITE_NAME = "Nuvigant";

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  PLD: { bg: "#eff6ff", text: "#056dfe" },
  IA: { bg: "#ecfeff", text: "#0891b2" },
  Fiscal: { bg: "#fefce8", text: "#ca8a04" },
  ISR: { bg: "#f0fdf4", text: "#15803d" },
  Producto: { bg: "#faf5ff", text: "#7c3aed" },
  Tecnología: { bg: "#ecfeff", text: "#0891b2" },
  Automatización: { bg: "#f0fdf4", text: "#15803d" },
  "Reforma Legal": { bg: "#fff7ed", text: "#c2410c" },
  LFPIORPI: { bg: "#eff6ff", text: "#056dfe" },
  Compliance: { bg: "#fdf4ff", text: "#9333ea" },
};

function getTagStyle(tag: string) {
  return TAG_COLORS[tag] ?? { bg: "#f1f5f9", text: "#475569" };
}

interface Params {
  category: string;
  subcategory: string;
}

// This route handles posts that have a category but no subcategory.
// The URL is /blog/[category]/[slug] where [subcategory] param holds the slug.
export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getAllPostsMeta();
  return posts
    .filter((p) => p.category && !p.subcategory)
    .map((p) => ({
      category: p.category!,
      subcategory: p.slug, // slug lives in the subcategory segment for these posts
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { subcategory: slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Artículo no encontrado" };

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${getPostUrl(post)}`;

  return {
    title: `${post.title} | Blog | ${SITE_NAME}`,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: canonical,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { subcategory: slug } = await params;
  const [post, related, surrounding] = await Promise.all([
    getPostBySlug(slug),
    getPostBySlug(slug).then((p) =>
      p ? getRelatedPosts(slug, p.tags) : Promise.resolve([])
    ),
    getSurroundingPosts(slug),
  ]);

  if (!post) notFound();

  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${getPostUrl(post)}`;
  const articleLd = articleJsonLd(post, canonical);
  const breadcrumbLd = breadcrumbJsonLd(post, canonical);

  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <header className="relative pt-16 pb-0 overflow-hidden bg-[#0a1628]">
          <div className="relative h-[420px] sm:h-[520px] w-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 pb-12 px-6">
              <div className="max-w-3xl mx-auto">
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center gap-1 text-xs text-white/60 mb-6"
                >
                  <Link
                    href="/"
                    className="hover:text-white/90 transition-colors flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                  >
                    <Home size={11} />
                    Inicio
                  </Link>
                  <ChevronRight size={10} className="text-white/40" />
                  <Link
                    href="/blog"
                    className="hover:text-white/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                  >
                    Blog
                  </Link>
                  {post.category && (
                    <>
                      <ChevronRight size={10} className="text-white/40" />
                      <span className="text-white/60 capitalize">{post.category}</span>
                    </>
                  )}
                  <ChevronRight size={10} className="text-white/40" />
                  <span className="text-white/80 line-clamp-1 max-w-[200px]">{post.title}</span>
                </nav>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => {
                    const s = getTagStyle(tag);
                    return (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="text-xs font-semibold px-3 py-1 rounded-full transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                        style={{ background: s.bg, color: s.text }}
                      >
                        {tag}
                      </Link>
                    );
                  })}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  {post.title}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover border-2 border-white/20"
                    />
                    <span className="font-medium text-white/90">{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Body ──────────────────────────────────────────── */}
        <div className="bg-white py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex gap-16">
              <article className="flex-1 min-w-0">
                <TableOfContents items={post.toc} mobileOnly />

                <div className="mb-8 pb-8 border-b border-slate-100">
                  <ShareButtons title={post.title} url={canonical} />
                </div>

                <BlogContent html={post.contentHtml} />

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <ShareButtons title={post.title} url={canonical} />
                </div>

                <div className="mt-8">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#056dfe] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
                  >
                    <ArrowLeft size={14} />
                    Volver al blog
                  </Link>
                </div>

                {(surrounding.prev || surrounding.next) && (
                  <nav
                    className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                    aria-label="Navegación entre artículos"
                  >
                    {surrounding.prev && (
                      <Link
                        href={getPostUrl(surrounding.prev)}
                        className="group flex flex-col gap-1 p-5 rounded-xl border border-slate-100 hover:border-[#056dfe]/30 hover:shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
                      >
                        <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          <ArrowLeft size={11} />
                          Anterior
                        </span>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-[#056dfe] transition-colors line-clamp-2">
                          {surrounding.prev.title}
                        </span>
                      </Link>
                    )}
                    {surrounding.next && (
                      <Link
                        href={getPostUrl(surrounding.next)}
                        className="group flex flex-col gap-1 p-5 rounded-xl border border-slate-100 hover:border-[#056dfe]/30 hover:shadow-md transition-all text-right sm:col-start-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
                      >
                        <span className="flex items-center justify-end gap-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">
                          Siguiente
                          <ArrowRight size={11} />
                        </span>
                        <span className="text-sm font-bold text-slate-700 group-hover:text-[#056dfe] transition-colors line-clamp-2">
                          {surrounding.next.title}
                        </span>
                      </Link>
                    )}
                  </nav>
                )}

                <div className="mt-10">
                  <AuthorBio author={post.author} />
                </div>
              </article>

              <aside
                className="hidden lg:block w-64 xl:w-72 shrink-0"
                aria-label="Tabla de contenidos"
              >
                <TableOfContents items={post.toc} />
              </aside>
            </div>
          </div>
        </div>

        {/* ── Related posts ─────────────────────────────────── */}
        {related.length > 0 && (
          <section className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
              <RelatedPosts posts={related} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
