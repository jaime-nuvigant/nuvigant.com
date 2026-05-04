import Link from "next/link";
import { ArrowRight, ArrowLeft, Rss } from "lucide-react";
import { Suspense } from "react";
import type { PostMeta } from "@/lib/blog";
import PostCard from "@/components/blog/PostCard";
import TagFilter from "@/components/blog/TagFilter";
import { getPostUrl } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site-url";

const SITE_NAME = "Nuvigant";

interface BlogPageProps {
  posts: PostMeta[];
  allTags: string[];
  activeTag?: string;
  currentPage: number;
  totalPages: number;
  totalPosts: number;
}

export default function BlogPage({
  posts,
  allTags,
  activeTag,
  currentPage,
  totalPages,
  totalPosts,
}: BlogPageProps) {
  const siteUrl = getSiteUrl();
  return (
    <div className="min-h-screen bg-white">
      {/* Skip-to-content */}
      <a
        href="#blog-posts"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#056dfe] focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Saltar al contenido
      </a>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24"
        style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)" }}
      >
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full" />
            Recursos y aprendizaje
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-slate-900">Bienvenid@ a nuestro </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)",
              }}
            >
              Blog
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Desde inteligencia artificial y tecnología notarial hasta compliance y resúmenes de
            eventos: aquí encontrarás todo.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/blog/rss.xml"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#f97316] transition-colors"
              aria-label="Feed RSS del blog"
            >
              <Rss size={14} />
              RSS Feed
            </Link>
          </div>
        </div>
      </section>

      {/* ── Posts ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white" id="blog-posts">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Filter bar */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Suspense fallback={<div className="h-8" />}>
              <TagFilter tags={allTags} activeTag={activeTag} />
            </Suspense>
            <p className="text-sm text-slate-400 shrink-0">
              {totalPosts} artículo{totalPosts !== 1 ? "s" : ""}
              {activeTag ? ` en "${activeTag}"` : ""}
            </p>
          </div>

          {/* Schema.org ItemList */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: `Blog ${SITE_NAME}`,
                itemListElement: posts.map((p, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `${siteUrl}${getPostUrl(p)}`,
                  name: p.title,
                })),
              }),
            }}
          />

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">
                No hay artículos{activeTag ? ` con la etiqueta "${activeTag}"` : ""}.
              </p>
              {activeTag && (
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-[#056dfe] font-semibold text-sm hover:underline"
                >
                  Ver todos los artículos
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              className="mt-14 flex items-center justify-center gap-3"
              aria-label="Paginación del blog"
            >
              {currentPage > 1 && (
                <Link
                  href={`/blog?${activeTag ? `tag=${encodeURIComponent(activeTag)}&` : ""}page=${currentPage - 1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-[#056dfe] hover:text-[#056dfe] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
                >
                  <ArrowLeft size={14} />
                  Anterior
                </Link>
              )}

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/blog?${activeTag ? `tag=${encodeURIComponent(activeTag)}&` : ""}page=${page}`}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe] ${
                      page === currentPage
                        ? "bg-[#056dfe] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                    aria-current={page === currentPage ? "page" : undefined}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages && (
                <Link
                  href={`/blog?${activeTag ? `tag=${encodeURIComponent(activeTag)}&` : ""}page=${currentPage + 1}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:border-[#056dfe] hover:text-[#056dfe] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
                >
                  Siguiente
                  <ArrowRight size={14} />
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#51d2e9] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            Mantente al día
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Recibe nuestros{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #51d2e9, #2ea4f2)" }}
            >
              artículos
            </span>{" "}
            directo en tu email
          </h2>
          <p className="text-slate-300 mb-8 text-base leading-relaxed">
            Temas de ISR, PLD, inteligencia artificial y novedades de Nuvigant. Sin spam.
          </p>
          <a
            href="mailto:hola@nuvigant.com?subject=Quiero recibir el blog de Nuvigant"
            className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
          >
            Suscribirme al blog
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
