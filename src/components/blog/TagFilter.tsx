"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TagFilterProps {
  tags: string[];
  activeTag?: string;
}

export default function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleTag(tag: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (tag === activeTag) {
      params.delete("tag");
    } else {
      params.set("tag", tag);
      params.delete("page");
    }
    setOpen(false);
    router.push(`/blog?${params.toString()}`);
  }

  function clearFilter() {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tag");
    params.delete("page");
    setOpen(false);
    router.push(`/blog?${params.toString()}`);
  }

  const label = activeTag ?? "Todas las categorías";

  return (
    <div className="flex items-center gap-2" ref={ref}>
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide shrink-0">
        Categoría:
      </span>

      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe] bg-white text-slate-700 border-slate-200 hover:border-[#056dfe] hover:text-[#056dfe] whitespace-nowrap"
        >
          <span
            className={`inline-block max-w-[180px] truncate ${activeTag ? "text-[#056dfe]" : ""}`}
          >
            {label}
          </span>
          {activeTag ? (
            <X
              size={12}
              className="shrink-0 text-[#056dfe]"
              onClick={(e) => {
                e.stopPropagation();
                clearFilter();
              }}
            />
          ) : (
            <ChevronDown
              size={12}
              className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
            />
          )}
        </button>

        {open && (
          <div
            role="listbox"
            aria-label="Categorías"
            className="absolute left-0 top-full mt-1 z-50 bg-white border border-slate-200 rounded-xl shadow-lg py-1 min-w-[200px] max-h-72 overflow-y-auto"
          >
            <button
              role="option"
              aria-selected={!activeTag}
              onClick={clearFilter}
              className={`w-full text-left text-xs font-semibold px-4 py-2 transition-colors ${
                !activeTag
                  ? "text-[#056dfe] bg-blue-50"
                  : "text-slate-600 hover:bg-slate-50 hover:text-[#056dfe]"
              }`}
            >
              Todas las categorías
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                role="option"
                aria-selected={activeTag === tag}
                onClick={() => handleTag(tag)}
                className={`w-full text-left text-xs font-semibold px-4 py-2 transition-colors ${
                  activeTag === tag
                    ? "text-[#056dfe] bg-blue-50"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#056dfe]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
