"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const css = `
  :root {
    --nf-navy-deep: #0a1628;
    --nf-navy:      #0f1d33;
    --nf-ink:       #1a2638;
    --nf-slate:     #4a5567;
    --nf-slate-soft:#7a8497;
    --nf-rule:      #e3e7ee;
    --nf-paper:     #ffffff;
    --nf-brand:     #056dfe;
    --nf-brand-glow:#3989ff;
  }

  /* ─── HERO ─────────────────────────────────────────── */
  .nf-hero {
    position: relative;
    min-height: 88vh;
    background:
      linear-gradient(180deg, rgba(10,22,40,.55) 0%, rgba(10,22,40,.85) 55%, var(--nf-navy-deep) 100%),
      radial-gradient(1200px 700px at 70% 20%, #16345e 0%, transparent 60%),
      radial-gradient(900px 600px at 10% 90%, #0c2a52 0%, transparent 55%),
      var(--nf-navy-deep);
    color: #fff;
    overflow: hidden;
    isolation: isolate;
    cursor: crosshair;
  }
  .nf-hero::after {
    content: "";
    position: absolute; inset: 0;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(255,255,255,.04) 0, transparent 1px),
      radial-gradient(circle at 80% 70%, rgba(255,255,255,.04) 0, transparent 1px),
      radial-gradient(circle at 40% 80%, rgba(255,255,255,.03) 0, transparent 1px);
    background-size: 5px 5px, 7px 7px, 11px 11px;
    pointer-events: none;
    mix-blend-mode: overlay;
    opacity: .5;
  }

  /* breadcrumb strip */
  .nf-crumbs {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 56px;
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(255,255,255,.55);
  }
  .nf-crumbs a { color: rgba(255,255,255,.55); text-decoration: none; transition: color .2s; }
  .nf-crumbs a:hover { color: #fff; }
  .nf-crumbs span { margin: 0 6px; }

  /* hero content */
  .nf-hero-grid {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 80px;
    padding: 32px 56px 80px;
    max-width: 1480px;
    margin: 0 auto;
  }
  .nf-eyebrow {
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    letter-spacing: .3em;
    text-transform: uppercase;
    color: rgba(255,255,255,.5);
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 28px;
  }
  .nf-eyebrow .nf-err {
    background: var(--nf-brand);
    color: #fff;
    padding: 4px 10px;
    border-radius: 2px;
    letter-spacing: .2em;
    box-shadow: 0 0 24px rgba(5,109,254,.4);
  }
  .nf-eyebrow .nf-sep {
    width: 24px; height: 1px;
    background: rgba(255,255,255,.3);
  }

  /* The giant "404" */
  .nf-big {
    position: relative;
    font-family: var(--font-fraunces), serif;
    font-weight: 300;
    font-size: clamp(180px, 28vw, 420px);
    line-height: .82;
    letter-spacing: -0.06em;
    color: #fff;
    margin: -20px 0 0 -8px;
    cursor: grab;
    user-select: none;
    transition: text-shadow .3s;
  }
  .nf-big:active { cursor: grabbing; }
  .nf-digit {
    display: inline-block;
    transition: transform .35s cubic-bezier(.2,.9,.2,1.2);
  }
  .nf-digit:hover {
    transform: translateY(-12px) rotate(-3deg);
    color: var(--nf-brand-glow);
    text-shadow: 0 0 60px rgba(5,109,254,.6);
  }
  .nf-zero {
    font-style: italic;
    position: relative;
  }
  .nf-zero::after {
    content: "";
    position: absolute;
    inset: 14% 18% 14% 18%;
    border: 2px dashed rgba(255,255,255,.18);
    border-radius: 50%;
    animation: nf-spin 24s linear infinite;
  }
  @keyframes nf-spin { to { transform: rotate(360deg) } }

  .nf-headline {
    font-family: var(--font-fraunces), serif;
    font-weight: 300;
    font-style: italic;
    font-size: clamp(36px, 4.4vw, 64px);
    line-height: 1.02;
    letter-spacing: -0.02em;
    margin: 32px 0 0;
    max-width: 780px;
    text-wrap: balance;
  }
  .nf-headline em {
    font-style: normal;
    font-weight: 400;
    color: var(--nf-brand-glow);
  }
  .nf-headline .nf-strike {
    position: relative;
    color: rgba(255,255,255,.4);
  }
  .nf-headline .nf-strike::after {
    content: "";
    position: absolute;
    left: -2%; right: -2%;
    top: 55%; height: 2px;
    background: rgba(255,255,255,.4);
    transform: rotate(-2deg);
  }

  /* meta strip */
  .nf-meta {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid rgba(255,255,255,.12);
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(255,255,255,.6);
  }
  .nf-author {
    display: flex; align-items: center; gap: 12px;
  }
  .nf-avatar {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--nf-brand), #1a3d8c);
    display: grid; place-items: center;
    font-family: var(--font-fraunces), serif;
    font-style: italic;
    font-size: 14px;
    color: #fff;
    box-shadow: 0 0 0 2px rgba(255,255,255,.1);
    text-transform: none;
    letter-spacing: 0;
    flex-shrink: 0;
  }
  .nf-author-name {
    color: #fff;
    text-transform: none;
    font-family: var(--font-inter), system-ui, sans-serif;
    letter-spacing: .02em;
    font-size: 13px;
    font-weight: 500;
  }
  .nf-author-role { font-size: 10px; color: rgba(255,255,255,.5); margin-top: 2px; }
  .nf-dot-sm { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,.3); flex-shrink: 0; }

  /* tags */
  .nf-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
  .nf-tag {
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 10px;
    letter-spacing: .18em;
    text-transform: uppercase;
    padding: 5px 11px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 20px;
    color: rgba(255,255,255,.7);
    background: rgba(255,255,255,.04);
    backdrop-filter: blur(4px);
    cursor: pointer;
    transition: all .2s;
  }
  .nf-tag:hover {
    background: var(--nf-brand);
    border-color: var(--nf-brand);
    color: #fff;
  }

  /* sidebar — notario animation */
  .nf-notario {
    position: relative;
    background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
    border: 1px solid rgba(255,255,255,.10);
    border-radius: 8px;
    backdrop-filter: blur(12px);
    overflow: hidden;
    align-self: start;
    margin-top: 48px;
  }
  .nf-notario-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: rgba(0,0,0,.25);
    border-bottom: 1px solid rgba(255,255,255,.08);
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 10px;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: rgba(255,255,255,.55);
  }
  .nf-notario-live {
    display: flex; align-items: center; gap: 6px;
    color: #3fcf72;
  }
  .nf-notario-live::before {
    content: ""; width: 6px; height: 6px; border-radius: 50%;
    background: #3fcf72; box-shadow: 0 0 8px #3fcf72;
    animation: nf-pulse 1.6s ease-in-out infinite;
  }
  .nf-stage {
    position: relative;
    aspect-ratio: 1 / 1.05;
    background:
      radial-gradient(circle at 50% 35%, rgba(5,109,254,.10), transparent 60%),
      linear-gradient(180deg, #0c1a30, #081224);
    overflow: hidden;
  }
  .nf-caption {
    padding: 14px 18px 18px;
    font-family: var(--font-fraunces), serif;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.45;
    color: rgba(255,255,255,.78);
    border-top: 1px solid rgba(255,255,255,.06);
    text-align: center;
    min-height: 54px;
    transition: opacity .3s ease;
  }

  /* SVG elements */
  .nf-doc-paper { fill: #f4ead4; stroke: #c9b893; stroke-width: 1; filter: drop-shadow(0 8px 24px rgba(0,0,0,.4)); }
  .nf-doc-line { stroke: #a99672; stroke-width: 1; opacity: .55; }
  .nf-doc-title { fill: #5a4a2a; font-family: var(--font-fraunces), serif; font-style: italic; font-size: 11px; letter-spacing: .1em; text-anchor: middle; }
  .nf-doc-folio { fill: #8a7550; font-family: var(--font-jetbrains-mono), monospace; font-size: 7px; letter-spacing: .18em; text-anchor: middle; }
  .nf-seal { fill: #a82c2c; stroke: #6a1818; stroke-width: 1; }
  .nf-seal-inner { fill: none; stroke: #6a1818; stroke-width: .6; }
  .nf-seal-text { fill: #5a0e0e; font-family: var(--font-fraunces), serif; font-size: 8px; letter-spacing: .05em; font-weight: 500; }
  .nf-stamp-handle { fill: #3d2914; stroke: #1f1408; stroke-width: .8; }
  .nf-stamp-grip { fill: #5a3d1f; stroke: #1f1408; stroke-width: .6; }
  .nf-stamp-base { fill: #2a1a0a; stroke: #1f1408; stroke-width: .6; }
  .nf-stamp-pad { fill: #a82c2c; }
  .nf-pen-body { fill: #1a1208; stroke: #000; stroke-width: .5; }
  .nf-pen-nib { fill: #c0a050; }

  .nf-badge-ring {
    transform-origin: 130px 100px;
    animation: nf-badgeSpin 18s linear infinite;
    opacity: .18;
  }
  @keyframes nf-badgeSpin { to { transform: rotate(360deg); } }

  .nf-stamp {
    transform-origin: 130px 30px;
    animation: nf-stampDown 4s cubic-bezier(.55,.1,.4,1) infinite;
  }
  @keyframes nf-stampDown {
    0%, 25%  { transform: translateY(0) scale(1); }
    35%      { transform: translateY(58px) scale(1.04); }
    40%      { transform: translateY(58px) scale(1.04); }
    55%      { transform: translateY(0) scale(1); }
    100%     { transform: translateY(0) scale(1); }
  }

  .nf-impact {
    transform-origin: 130px 100px;
    opacity: 0;
    animation: nf-impactRing 4s ease-out infinite;
  }
  @keyframes nf-impactRing {
    0%, 35%  { opacity: 0; transform: scale(.4); }
    40%      { opacity: .8; transform: scale(.6); }
    60%      { opacity: 0; transform: scale(1.6); }
    100%     { opacity: 0; transform: scale(1.6); }
  }

  .nf-seal-group {
    transform-origin: 130px 100px;
    opacity: 0;
    animation: nf-sealReveal 4s ease-out infinite;
  }
  @keyframes nf-sealReveal {
    0%, 38%  { opacity: 0; transform: scale(.6); }
    44%      { opacity: 1; transform: scale(1.08); }
    52%      { opacity: 1; transform: scale(1); }
    95%      { opacity: 1; transform: scale(1); }
    100%     { opacity: 0; transform: scale(1); }
  }

  .nf-puff circle {
    fill: #fff;
    opacity: 0;
    animation: nf-puff 4s ease-out infinite;
  }
  @keyframes nf-puff {
    0%, 38% { opacity: 0; transform: translate(0,0) scale(0); }
    42%     { opacity: .7; transform: translate(0,0) scale(.5); }
    60%     { opacity: 0; transform: translate(var(--tx,12px), var(--ty,-8px)) scale(1.4); }
    100%    { opacity: 0; }
  }

  .nf-pen {
    transform-origin: 200px 175px;
    animation: nf-penWiggle 4s ease-in-out infinite;
  }
  @keyframes nf-penWiggle {
    0%, 100% { transform: rotate(0); }
    50%      { transform: rotate(-3deg); }
  }

  /* floating debris */
  .nf-debris {
    position: absolute; inset: 0;
    pointer-events: none;
    z-index: 2;
  }
  .nf-debris span {
    position: absolute;
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    color: rgba(255,255,255,.18);
    letter-spacing: .05em;
    white-space: nowrap;
    animation: nf-drift linear infinite;
  }
  @keyframes nf-drift {
    0%   { transform: translateY(0) rotate(var(--r,0deg)); opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(-120vh) rotate(var(--r,0deg)); opacity: 0; }
  }

  @keyframes nf-pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

  /* ─── BODY ─────────────────────────────────────────── */
  .nf-body { background: #fff; color: var(--nf-ink); padding: 96px 56px 120px; }
  .nf-body-grid {
    display: grid;
    grid-template-columns: 1fr 240px;
    gap: 80px;
    max-width: 1100px;
    margin: 0 auto;
  }
  .nf-article {
    font-size: 17px;
    line-height: 1.75;
    color: var(--nf-slate);
    text-align: justify;
    hyphens: auto;
  }
  .nf-article h2 {
    font-family: var(--font-fraunces), serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 1.15;
    letter-spacing: -0.015em;
    color: var(--nf-ink);
    margin: 48px 0 18px;
    text-align: left;
  }
  .nf-article h2:first-child { margin-top: 0; }
  .nf-article p { margin: 0 0 18px; }
  .nf-article a { color: var(--nf-brand); text-decoration: none; border-bottom: 1px solid currentColor; }
  .nf-article a:hover { background: rgba(5,109,254,.08); }
  .nf-article blockquote {
    margin: 32px 0;
    padding: 4px 0 4px 24px;
    border-left: 3px solid var(--nf-brand);
    font-family: var(--font-fraunces), serif;
    font-style: italic;
    font-size: 21px;
    line-height: 1.5;
    color: var(--nf-ink);
    text-align: left;
  }
  .nf-article ul { list-style: none; padding: 0; margin: 0 0 24px; text-align: left; }
  .nf-article ul li {
    padding: 14px 0;
    border-bottom: 1px solid var(--nf-rule);
    display: grid;
    grid-template-columns: 28px 1fr auto;
    gap: 14px;
    align-items: baseline;
    font-size: 15px;
  }
  .nf-num {
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    color: var(--nf-slate-soft);
    letter-spacing: .1em;
  }
  .nf-stat {
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    color: var(--nf-brand);
    letter-spacing: .1em;
  }

  /* TOC */
  .nf-toc {
    position: sticky;
    top: 48px;
    align-self: start;
    font-size: 13px;
  }
  .nf-toc-label {
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 10px;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--nf-slate-soft);
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--nf-rule);
  }
  .nf-toc a {
    display: block;
    color: var(--nf-slate);
    text-decoration: none;
    padding: 8px 0 8px 14px;
    margin-left: -14px;
    border-left: 2px solid transparent;
    transition: all .2s;
    line-height: 1.4;
  }
  .nf-toc a:hover, .nf-toc a.active {
    color: var(--nf-brand);
    border-left-color: var(--nf-brand);
  }

  /* CTA */
  .nf-report-card {
    margin-top: 64px;
    padding: 32px 36px;
    background: #f7f9fc;
    border: 1px solid var(--nf-rule);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    text-align: left;
  }
  .nf-report-card h3 {
    font-family: var(--font-fraunces), serif;
    font-weight: 400;
    font-size: 22px;
    margin: 0 0 6px;
    color: var(--nf-ink);
  }
  .nf-report-card p { margin: 0; font-size: 14px; color: var(--nf-slate); line-height: 1.5; }
  .nf-report-btn {
    background: var(--nf-brand);
    color: #fff;
    padding: 14px 24px;
    border-radius: 4px;
    font-family: var(--font-inter), system-ui, sans-serif;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: .04em;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(5,109,254,.25);
    transition: all .2s;
    display: inline-block;
  }
  .nf-report-btn:hover {
    background: #0455c7;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(5,109,254,.35);
    border-bottom: none;
  }

  /* footer strip */
  .nf-foot {
    border-top: 1px solid var(--nf-rule);
    padding: 28px 56px;
    font-family: var(--font-jetbrains-mono), monospace;
    font-size: 11px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--nf-slate-soft);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
  }
  .nf-foot b { color: #1d9d48; font-weight: 500; }

  /* responsive */
  @media (max-width: 1080px) {
    .nf-hero-grid { grid-template-columns: 1fr; gap: 48px; padding: 24px 28px 64px; }
    .nf-body-grid { grid-template-columns: 1fr; gap: 40px; }
    .nf-body { padding: 64px 28px 80px; }
    .nf-crumbs { padding: 16px 28px; }
    .nf-foot { padding: 20px 28px; flex-direction: column; gap: 12px; align-items: flex-start; }
    .nf-toc { position: static; }
    .nf-report-card { flex-direction: column; align-items: flex-start; }
  }
`;

export default function NotFoundPage() {
  const debrisRef = useRef<HTMLDivElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const readtimeRef = useRef<HTMLSpanElement>(null);
  const zeroRef = useRef<HTMLSpanElement>(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hh}:${mm}`);
  }, []);

  useEffect(() => {
    // 1. Drifting debris
    const debris = debrisRef.current;
    if (debris) {
      const bits = [
        "{ contrato: null }",
        "/* TODO: notarizar */",
        '<a href="???">',
        "GET 404",
        "undefined",
        "sin folio",
        "null",
        "// ¿dónde?",
        "[expediente perdido]",
        "cláusula vacía",
        "try { } catch(∅)",
        "404 ✗",
        "ERR_NO_FOLIO",
      ];
      for (let i = 0; i < 14; i++) {
        const s = document.createElement("span");
        s.textContent = bits[i % bits.length];
        s.style.left = Math.random() * 100 + "%";
        s.style.top = 60 + Math.random() * 60 + "%";
        s.style.setProperty("--r", Math.random() * 30 - 15 + "deg");
        s.style.animationDuration = 16 + Math.random() * 22 + "s";
        s.style.animationDelay = -Math.random() * 22 + "s";
        s.style.fontSize = 10 + Math.random() * 4 + "px";
        debris.appendChild(s);
      }
    }

    // 2. Drag the giant 404 around
    const big = bigRef.current;
    if (big) {
      big.querySelectorAll<HTMLElement>(".nf-digit").forEach((d) => {
        let dragging = false,
          sx = 0,
          sy = 0;
        const onDown = (e: MouseEvent) => {
          dragging = true;
          sx = e.clientX;
          sy = e.clientY;
          d.style.transition = "none";
          e.preventDefault();
        };
        const onMove = (e: MouseEvent) => {
          if (!dragging) return;
          const ox = e.clientX - sx;
          const oy = e.clientY - sy;
          d.style.transform = `translate(${ox}px, ${oy}px) rotate(${ox * 0.05}deg)`;
        };
        const onUp = () => {
          if (!dragging) return;
          dragging = false;
          d.style.transition = "transform .8s cubic-bezier(.2,1.4,.4,1)";
          d.style.transform = "";
        };
        d.addEventListener("mousedown", onDown);
        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseup", onUp);
        return () => {
          d.removeEventListener("mousedown", onDown);
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("mouseup", onUp);
        };
      });
    }

    // 3. Click digit → loss counter ghost
    let lossCount = 0;
    const handleBigClick = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(".nf-digit");
      if (!t) return;
      lossCount++;
      const ghost = document.createElement("span");
      ghost.textContent = "−1";
      ghost.style.cssText = `
        position:fixed; left:${e.clientX}px; top:${e.clientY}px;
        font-family:var(--font-jetbrains-mono),monospace; font-size:14px; color:#3989ff;
        pointer-events:none; transition: all 1.2s ease-out; z-index:9999;
        transform: translate(-50%,-50%);
      `;
      document.body.appendChild(ghost);
      requestAnimationFrame(() => {
        ghost.style.transform = "translate(-50%, -120px)";
        ghost.style.opacity = "0";
      });
      setTimeout(() => ghost.remove(), 1200);
      if (readtimeRef.current) {
        readtimeRef.current.textContent = `${3 + lossCount} min de duelo`;
      }
    };
    big?.addEventListener("click", handleBigClick as EventListener);

    // 4. Cycle notario captions
    const captions = [
      '"Damos fe de que la página solicitada no existe."',
      '"Consta en el folio 0404 que el vínculo se encuentra en paradero desconocido."',
      '"Se levanta acta de extravío. No procede recuperación."',
      '"El suscrito hace constar que la URL fue protocolizada y, sin embargo, ya no."',
      '"Todo lo demás en el sitio sí conserva forma y validez."',
    ];
    const captionEl = captionRef.current;
    let ci = 0;
    const captionTimer = setInterval(() => {
      ci = (ci + 1) % captions.length;
      if (captionEl) {
        captionEl.style.opacity = "0";
        setTimeout(() => {
          if (captionEl) {
            captionEl.textContent = captions[ci];
            captionEl.style.opacity = "1";
          }
        }, 300);
      }
    }, 4000);

    // 5. TOC active state on scroll
    const tocLinks = document.querySelectorAll<HTMLAnchorElement>(".nf-toc a");
    const sectionIds = ["s1", "s2", "s3"];
    const sections = sectionIds.map((id) => document.getElementById(id));
    const updateToc = () => {
      const y = window.scrollY + 200;
      let active = sections[0];
      sections.forEach((s) => {
        if (s && s.offsetTop <= y) active = s;
      });
      tocLinks.forEach((l) =>
        l.classList.toggle("active", l.getAttribute("href") === "#" + active?.id)
      );
    };
    window.addEventListener("scroll", updateToc, { passive: true });

    // 6. Zero easter egg
    const zero = zeroRef.current;
    let zeroHovers = 0;
    const onZeroEnter = () => {
      zeroHovers++;
      if (zeroHovers === 5 && zero) {
        zero.style.transition = "transform 1.2s cubic-bezier(.2,.9,.3,1)";
        zero.style.transform = "rotate(720deg) scale(1.1)";
        setTimeout(() => {
          if (zero) zero.style.transform = "";
          zeroHovers = 0;
        }, 1300);
      }
    };
    zero?.addEventListener("mouseenter", onZeroEnter);

    return () => {
      clearInterval(captionTimer);
      window.removeEventListener("scroll", updateToc);
      zero?.removeEventListener("mouseenter", onZeroEnter);
      big?.removeEventListener("click", handleBigClick as EventListener);
      // Clear debris children
      if (debrisRef.current) debrisRef.current.innerHTML = "";
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* ═══ HERO ═══ */}
      <section className="nf-hero">
        <div className="nf-crumbs">
          <Link href="/">inicio</Link>
          <span>/</span>
          <span style={{ color: "#fff" }}>404</span>
        </div>

        <div className="nf-debris" ref={debrisRef} aria-hidden="true" />

        <div className="nf-hero-grid">
          <div>
            <div className="nf-eyebrow">
              <span className="nf-err">ERROR&nbsp;404</span>
              <span className="nf-sep" />
              <span>Crisis existencial · en progreso</span>
            </div>

            <div className="nf-big" ref={bigRef} title="Arrástrame, soy frágil">
              <span className="nf-digit" data-d="4">4</span>
              <span className="nf-digit nf-zero" ref={zeroRef} data-d="0">0</span>
              <span className="nf-digit" data-d="4">4</span>
            </div>

            <h1 className="nf-headline">
              Buscamos esta página <em>en cada expediente</em>.<br />
              <span className="nf-strike">No la encontramos</span> ni en archivo.
            </h1>

            <div className="nf-meta">
              <div className="nf-author">
                <div className="nf-avatar">N</div>
                <div>
                  <div className="nf-author-name">Departamento Legal Interno</div>
                  <div className="nf-author-role">redactando una excusa formal</div>
                </div>
              </div>
              <span className="nf-dot-sm" />
              <span>28 ABR 2026</span>
              <span className="nf-dot-sm" />
              <span ref={readtimeRef}>3 min de duelo</span>
            </div>

            <div className="nf-tags">
              <span className="nf-tag">#extraviada</span>
              <span className="nf-tag">#404</span>
              <span className="nf-tag">#sin-cláusula</span>
              <span className="nf-tag">#objeción-procedente</span>
            </div>
          </div>

          {/* Notario animation */}
          <aside className="nf-notario" aria-hidden="true">
            <div className="nf-notario-bar">
              <span>Acta · Folio 0404</span>
              <span className="nf-notario-live">EN PROTOCOLO</span>
            </div>
            <div className="nf-stage">
              <svg viewBox="0 0 260 250" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
                {/* rotating badge ring */}
                <g className="nf-badge-ring">
                  <circle cx="130" cy="100" r="78" fill="none" stroke="#3989ff" strokeWidth=".5" strokeDasharray="2 4" />
                  <circle cx="130" cy="100" r="92" fill="none" stroke="#3989ff" strokeWidth=".4" strokeDasharray="1 8" />
                </g>
                {/* Document */}
                <g>
                  <rect className="nf-doc-paper" x="70" y="50" width="120" height="150" rx="2" />
                  <path d="M 178 50 L 190 50 L 190 62 Z" fill="#dccba2" stroke="#c9b893" strokeWidth=".6" />
                  <text className="nf-doc-title" x="130" y="72">— Escritura Pública —</text>
                  <text className="nf-doc-folio" x="130" y="84">FOLIO 0404 · TOMO IV</text>
                  <line className="nf-doc-line" x1="82" y1="98" x2="178" y2="98" />
                  <line className="nf-doc-line" x1="82" y1="108" x2="172" y2="108" />
                  <line className="nf-doc-line" x1="82" y1="118" x2="178" y2="118" />
                  <line className="nf-doc-line" x1="82" y1="128" x2="160" y2="128" />
                  <line className="nf-doc-line" x1="82" y1="148" x2="178" y2="148" />
                  <line className="nf-doc-line" x1="82" y1="158" x2="170" y2="158" />
                  <line className="nf-doc-line" x1="82" y1="168" x2="178" y2="168" />
                  <line className="nf-doc-line" x1="82" y1="178" x2="155" y2="178" />
                  <line className="nf-doc-line" x1="100" y1="190" x2="160" y2="190" strokeWidth="1.2" opacity=".8" />
                </g>
                {/* Impact ring */}
                <circle className="nf-impact" cx="130" cy="100" r="22" fill="none" stroke="#a82c2c" strokeWidth="1" />
                {/* Wax seal */}
                <g className="nf-seal-group">
                  <circle className="nf-seal" cx="130" cy="100" r="20" />
                  <circle className="nf-seal-inner" cx="130" cy="100" r="16" />
                  <circle className="nf-seal-inner" cx="130" cy="100" r="12" />
                  <text className="nf-seal-text" x="130" y="98" textAnchor="middle">FE</text>
                  <text className="nf-seal-text" x="130" y="108" textAnchor="middle">PÚBLICA</text>
                  <path d="M 130 86 L 132 92 L 138 92 L 133 96 L 135 102 L 130 98 L 125 102 L 127 96 L 122 92 L 128 92 Z" fill="#5a0e0e" opacity=".4" />
                </g>
                {/* Dust puffs */}
                <g className="nf-puff">
                  <circle cx="115" cy="100" r="2" style={{ "--tx": "-14px", "--ty": "-6px" } as CSSProperties} />
                  <circle cx="145" cy="100" r="2" style={{ "--tx": "14px", "--ty": "-6px" } as CSSProperties} />
                  <circle cx="130" cy="115" r="2" style={{ "--tx": "0", "--ty": "10px" } as CSSProperties} />
                  <circle cx="120" cy="90" r="1.6" style={{ "--tx": "-10px", "--ty": "-12px" } as CSSProperties} />
                  <circle cx="140" cy="90" r="1.6" style={{ "--tx": "10px", "--ty": "-12px" } as CSSProperties} />
                </g>
                {/* Stamp */}
                <g className="nf-stamp">
                  <ellipse className="nf-stamp-handle" cx="130" cy="14" rx="14" ry="6" />
                  <rect className="nf-stamp-grip" x="124" y="18" width="12" height="22" rx="2" />
                  <rect className="nf-stamp-base" x="108" y="40" width="44" height="14" rx="2" />
                  <path className="nf-stamp-base" d="M 108 54 L 152 54 L 146 70 L 114 70 Z" />
                  <rect className="nf-stamp-pad" x="116" y="70" width="28" height="6" rx="1" />
                  <rect x="126" y="20" width="2" height="18" fill="rgba(255,255,255,.18)" rx="1" />
                </g>
                {/* Pen */}
                <g className="nf-pen">
                  <rect className="nf-pen-body" x="196" y="120" width="6" height="60" rx="2" transform="rotate(28 199 150)" />
                  <polygon className="nf-pen-nib" points="221,178 226,184 218,186" />
                </g>
              </svg>
            </div>
            <div className="nf-caption" ref={captionRef}>
              &ldquo;Damos fe de que la página solicitada no existe.&rdquo;
            </div>
          </aside>
        </div>
      </section>

      {/* ═══ BODY ═══ */}
      <section className="nf-body">
        <div className="nf-body-grid">
          <article className="nf-article">
            <h2 id="s1">Lo que sabemos hasta ahora.</h2>
            <p>
              A las <strong>{currentTime} hrs</strong> del día de hoy, esta URL fue solicitada por su
              navegador. Procedimos a buscarla en cada uno de nuestros servidores, en cada caja de
              archivo muerto, en cada respaldo notarial, e incluso en el cajón donde guardamos los
              pendientes que decimos que no tenemos. El resultado fue, en todos los casos, idéntico:{" "}
              <em>nada</em>.
            </p>
            <p>
              No queremos alarmarle, pero el vínculo que usted siguió apunta a un recurso que
              —según nuestros registros— o nunca existió, o existió y se fue, o existió y prefiere
              no constituir antecedente. Por respeto a su privacidad, no investigaremos más sin
              orden de búsqueda.
            </p>

            <blockquote>
              &ldquo;Pensé que era un contrato. Resulta que era una metáfora.&rdquo;
              <br />
              <span
                style={{
                  fontSize: 14,
                  color: "var(--nf-slate-soft)",
                  fontStyle: "normal",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
              >
                — Nuestro servidor de producción, en mediación desde el martes
              </span>
            </blockquote>

            <h2 id="s2">Hipótesis, en orden de probabilidad.</h2>
            <ul>
              <li>
                <span className="nf-num">01</span>
                <span>El enlace fue movido a una mejor URL y nadie tuvo el valor de avisarle. Clásico.</span>
                <span className="nf-stat">62%</span>
              </li>
              <li>
                <span className="nf-num">02</span>
                <span>Usted escribió la dirección de memoria. Su memoria, como todo testigo, es falible.</span>
                <span className="nf-stat">21%</span>
              </li>
              <li>
                <span className="nf-num">03</span>
                <span>El recurso renunció sin previo aviso. No firmamos cláusula de permanencia.</span>
                <span className="nf-stat">9%</span>
              </li>
              <li>
                <span className="nf-num">04</span>
                <span>Una actualización programada para el próximo trimestre se ejecutó hoy. Imputable a nadie en particular.</span>
                <span className="nf-stat">7%</span>
              </li>
              <li>
                <span className="nf-num">05</span>
                <span>El enlace está vivo, pero invocó su derecho a guardar silencio.</span>
                <span className="nf-stat">1%</span>
              </li>
            </ul>

            <h2 id="s3">Lo que puede hacer ahora.</h2>
            <p>
              Respire hondo, como antes de una audiencia. La página no existe, pero usted sí — eso
              ya constituye prueba suficiente para seguir adelante. Considere regresar al{" "}
              <Link href="/">inicio</Link>, donde la mayoría de las páginas todavía conservan su forma
              corpórea, o explorar nuestros <Link href="/fedatarios">módulos</Link>: Control de
              Proyectos, Facturación, Control de Flujo, Automatización de Documentos y PLD — todos
              plenamente localizables.
            </p>
            <p>
              Si llegó aquí desde un enlace dentro de Nuvigant, le agradeceríamos enormemente que
              nos avise. Cada enlace roto que reportan nuestros usuarios se convierte,
              eventualmente, en un enlace arreglado — con su debida acta circunstanciada.
            </p>
            <p>
              Si simplemente quería distraerse cinco minutos entre escrituras — felicidades, está
              funcionando.
            </p>

            <div className="nf-report-card">
              <div>
                <h3>¿Llegó aquí desde un enlace nuestro?</h3>
                <p>Cuéntenos qué intentaba abrir. Lo arreglamos antes de que termine su café — sin honorarios.</p>
              </div>
              <a className="nf-report-btn" href="mailto:soporte@nuvigant.com">
                Reportar enlace roto →
              </a>
            </div>
          </article>

          {/* TOC */}
          <aside className="nf-toc" id="nf-toc">
            <div className="nf-toc-label">Contenido</div>
            <a href="#s1" className="active">Lo que sabemos</a>
            <a href="#s2">Hipótesis del equipo</a>
            <a href="#s3">Qué puede hacer ahora</a>
          </aside>
        </div>
      </section>

      {/* mini status footer */}
      <div className="nf-foot">
        <div>Uptime · <b>99.97%</b> · todo lo demás funciona, lo prometemos</div>
      </div>
    </>
  );
}
