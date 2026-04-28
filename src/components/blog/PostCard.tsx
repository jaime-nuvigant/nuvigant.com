import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { PostMeta } from "@/lib/blog";
import { formatDate, getPostUrl } from "@/lib/blog";

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
  "Firma Electrónica": { bg: "#f0fdf4", text: "#15803d" },
  FIEL: { bg: "#ecfeff", text: "#0891b2" },
};

function getTagStyle(tag: string) {
  return TAG_COLORS[tag] ?? { bg: "#f1f5f9", text: "#475569" };
}

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const primaryTag = post.tags[0] ?? "";
  const tagStyle = getTagStyle(primaryTag);

  return (
    <Link
      href={getPostUrl(post)}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
    >
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Tag + Date */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ background: tagStyle.bg, color: tagStyle.text }}
          >
            {primaryTag}
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Calendar size={12} />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#056dfe] transition-colors line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={28}
              height={28}
              className="rounded-full object-cover"
            />
            <span className="text-xs font-medium text-slate-600">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-[#056dfe] text-xs font-semibold">
            <Clock size={11} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1 text-[#056dfe] text-sm font-semibold">
          Leer artículo
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
