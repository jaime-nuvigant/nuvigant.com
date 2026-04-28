"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

function IconTwitterX({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedin({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    typeof window !== "undefined"
      ? url.startsWith("http") ? url : `${window.location.origin}${url}`
      : url.startsWith("http") ? url : `https://nuvigant.com${url}`;

  function copyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mr-1">
        Compartir:
      </span>

      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#056dfe] hover:text-[#056dfe] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
        aria-label="Copiar enlace"
        title="Copiar enlace"
      >
        {copied ? <Check size={13} className="text-green-500" /> : <Link2 size={13} />}
        {copied ? "¡Copiado!" : "Copiar"}
      </button>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#1d9bf0] hover:text-[#1d9bf0] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
        aria-label="Compartir en Twitter/X"
        title="Compartir en Twitter/X"
      >
        <IconTwitterX size={13} />
        Twitter
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-[#0a66c2] hover:text-[#0a66c2] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#056dfe]"
        aria-label="Compartir en LinkedIn"
        title="Compartir en LinkedIn"
      >
        <IconLinkedin size={13} />
        LinkedIn
      </a>
    </div>
  );
}
