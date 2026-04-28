"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";
import type { TOCItem } from "@/lib/blog";

interface TableOfContentsProps {
  items: TOCItem[];
  /** Render only the mobile collapsible version (use when the desktop sidebar is rendered separately) */
  mobileOnly?: boolean;
}

export default function TableOfContents({ items, mobileOnly = false }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  }

  const TocList = () => (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.id} style={{ paddingLeft: item.level === 3 ? "0.875rem" : "0" }}>
          <button
            onClick={() => scrollTo(item.id)}
            className={`w-full text-left text-sm py-1 px-2 rounded transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe] ${
              activeId === item.id
                ? "text-[#056dfe] font-semibold bg-[#056dfe]/8"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            } ${item.level === 3 ? "text-[13px]" : ""}`}
          >
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop: sticky sidebar */}
      {!mobileOnly && <nav
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto"
        aria-label="Tabla de contenidos"
      >
        <div className="flex items-center gap-2 mb-4">
          <List size={14} className="text-slate-400" />
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Contenido
          </span>
        </div>
        <TocList />
      </nav>}

      {/* Mobile: collapsible */}
      <nav
        className="lg:hidden mb-8 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
        aria-label="Tabla de contenidos"
      >
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
          aria-expanded={mobileOpen}
        >
          <span className="flex items-center gap-2">
            <List size={14} className="text-slate-400" />
            Tabla de contenidos
          </span>
          <ChevronDown
            size={16}
            className={`text-slate-400 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
        {mobileOpen && (
          <div className="px-5 pb-5">
            <TocList />
          </div>
        )}
      </nav>
    </>
  );
}
