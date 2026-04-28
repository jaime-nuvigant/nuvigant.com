"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";

interface TagFilterProps {
  tags: string[];
  activeTag?: string;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleTag(tag: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === activeTag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
      params.delete("page");
    }
    router.push(`/blog?${params.toString()}`);
  }

  function clearFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tag");
    params.delete("page");
    router.push(`/blog?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por categoría">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mr-1">
        Categoría:
      </span>

      <button
        onClick={clearFilter}
        className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe] ${
          !activeTag
            ? "bg-[#056dfe] text-white border-[#056dfe] shadow-sm"
            : "bg-white text-slate-600 border-slate-200 hover:border-[#056dfe] hover:text-[#056dfe]"
        }`}
        aria-pressed={!activeTag}
      >
        Todos
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTag(tag)}
          className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe] ${
            activeTag === tag
              ? "bg-[#056dfe] text-white border-[#056dfe] shadow-sm"
              : "bg-white text-slate-600 border-slate-200 hover:border-[#056dfe] hover:text-[#056dfe]"
          }`}
          aria-pressed={activeTag === tag}
        >
          {tag}
          {activeTag === tag && <X size={10} className="inline ml-1 -mt-px" />}
        </button>
      ))}
    </div>
  );
}
