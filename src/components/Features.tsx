"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import {
  Users,
  Brain,
  ShieldCheck,
  Receipt,
  BellRing,
  Plug,
} from "lucide-react";

type SegId = "proyectos" | "facturacion" | "flujo" | "docs" | "pld";

const SEG_COLORS: Record<SegId, string> = {
  proyectos: "#6cc3c8",
  facturacion: "#3a8aa8",
  flujo: "#1f5673",
  docs: "#13315c",
  pld: "#0b2545",
};

interface FeatureItem {
  id: string;
  seg: SegId;
  num: string;
  title: string;
  desc: string;
  style: CSSProperties;
  numStyle?: CSSProperties;
}

const FEATURES: FeatureItem[] = [
  // Control Proyectos (right-top)
  {
    id: "f1", seg: "proyectos", num: "01 · Proyectos",
    title: "Personalización de tiempos y retrasos",
    desc: "Ritmos por proyecto, alertas cuando algo se desvía.",
    style: { left: "55%", top: "0%", width: 170, textAlign: "center" },
  },
  {
    id: "f2", seg: "proyectos", num: "02 · Proyectos",
    title: "Reportes personalizados",
    desc: "Vistas a la medida del despacho y del cliente.",
    style: { left: "81%", top: "26%", width: 200, textAlign: "left" },
  },
  {
    id: "f3", seg: "proyectos", num: "03 · Proyectos",
    title: "Personalización de alertas",
    desc: "Avisos accionables — no ruido en la bandeja.",
    style: { left: "81%", top: "39%", width: 200, textAlign: "left" },
  },
  // Facturación (right)
  {
    id: "f4", seg: "facturacion", num: "04 · Facturación",
    title: "CFDI 4.0",
    desc: "Emisión vigente y cumplimiento sin paréntesis.",
    style: { left: "81%", top: "53%", width: 200, textAlign: "left" },
  },
  {
    id: "f5", seg: "facturacion", num: "05 · Facturación",
    title: "Personalización de facturación",
    desc: "Plantillas, conceptos y series por línea de negocio.",
    style: { left: "81%", top: "65%", width: 200, textAlign: "left" },
  },
  // Control de Flujo (bottom)
  {
    id: "f6", seg: "flujo", num: "06 · Flujo",
    title: "Complemento de notario automatizado",
    desc: "Trámite y estampado sin pasos manuales.",
    style: { left: "64%", top: "84%", width: 200, textAlign: "left" },
  },
  {
    id: "f7", seg: "flujo", num: "07 · Flujo",
    title: "Control de ingresos & egresos",
    desc: "Balances y estados de cuenta al instante, sin reconciliar a mano.",
    style: { left: "50%", top: "88%", transform: "translateX(-50%)", width: 240, textAlign: "center" },
    numStyle: { justifyContent: "center" },
  },
  {
    id: "f8", seg: "flujo", num: "08 · Flujo",
    title: "Balances y estados de cuenta rápidos",
    desc: "Una vista, todas las cuentas — actualizadas.",
    style: { right: "64%", top: "84%", width: 200, textAlign: "right" },
    numStyle: { justifyContent: "flex-end" },
  },
  // Automatización Documentos (left)
  {
    id: "f9", seg: "docs", num: "09 · Documentos",
    title: "Escrituras & documentos por machotes",
    desc: "Genera con la información ya capturada — un click.",
    style: { left: "0%", top: "60%", width: 200, textAlign: "right" },
    numStyle: { justifyContent: "flex-end" },
  },
  {
    id: "f10", seg: "docs", num: "10 · Documentos",
    title: "Una sola captura para hacer todo",
    desc: "Los datos viven en un solo lugar y alimentan al resto.",
    style: { left: "0%", top: "46%", width: 200, textAlign: "right" },
    numStyle: { justifyContent: "flex-end" },
  },
  // PLD (left-top)
  {
    id: "f11", seg: "pld", num: "11 · PLD",
    title: "Exportación DECLARANOT",
    desc: "Archivo listo para enviar — sin reformatear.",
    style: { left: "0%", top: "30%", width: 200, textAlign: "right" },
    numStyle: { justifyContent: "flex-end" },
  },
  {
    id: "f12", seg: "pld", num: "12 · PLD",
    title: "Acumulados por operación",
    desc: "Vigilancia automática de umbrales y patrones.",
    style: { left: "0%", top: "14%", width: 200, textAlign: "right" },
    numStyle: { justifyContent: "flex-end" },
  },
  {
    id: "f13", seg: "pld", num: "13 · PLD",
    title: "Búsqueda en listas negras",
    desc: "SAT, OFAC, ONU — verificación al capturar.",
    style: { left: "32%", top: "0%", width: 170, textAlign: "center" },
    numStyle: { justifyContent: "center" },
  },
];

const CARDS = [
  {
    icon: Users,
    title: "Portal de Clientes",
    description:
      "Ofrece a tus clientes un portal seguro para seguimiento en tiempo real de sus trámites, firma electrónica y comunicación directa con el notario.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Asistente IA que redacta escrituras, detecta inconsistencias en documentos, sugiere cláusulas legales y acelera la revisión de expedientes.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: ShieldCheck,
    title: "Prevención de Lavado",
    description:
      "Cumple con la LFPIORPI de forma automática. Listas negras, evaluación de riesgo de clientes, generación de reportes para la UIF y alertas PLD.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
  {
    icon: Receipt,
    title: "Control de Flujo y Facturación",
    description:
      "Gestiona honorarios, gastos y anticipos. Emite CFDIs timbrados al SAT, controla flujo de caja y genera estados financieros por escritura.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: BellRing,
    title: "Alertas y Reportes",
    description:
      "Recibe alertas inteligentes sobre vencimientos, pendientes y anomalías. Genera reportes ejecutivos con un clic y compártelos en segundos.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Plug,
    title: "Integración a Zapier",
    description:
      "Conecta Nuvigant con más de 6,000 aplicaciones: CRM, WhatsApp Business, Google Workspace, calendarios y mucho más. Sin código.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
];

const LEGEND = [
  {
    seg: "pld" as SegId, color: "#0b2545",
    title: "PLD", meta: "03 · funciones",
    desc: "DECLARANOT, listas negras y acumulados automáticos.",
  },
  {
    seg: "docs" as SegId, color: "#13315c",
    title: "Automatización Docs", meta: "02 · funciones",
    desc: "Machotes y captura única que alimenta todo.",
  },
  {
    seg: "flujo" as SegId, color: "#1f5673",
    title: "Control de Flujo", meta: "03 · funciones",
    desc: "Complemento notarial, ingresos/egresos y balances.",
  },
  {
    seg: "facturacion" as SegId, color: "#3a8aa8",
    title: "Facturación", meta: "02 · funciones",
    desc: "CFDI 4.0 y facturación personalizada.",
  },
  {
    seg: "proyectos" as SegId, color: "#6cc3c8",
    title: "Control Proyectos", meta: "03 · funciones",
    desc: "Tiempos, reportes y alertas por proyecto.",
  },
];

const FRAUNCES = "'Fraunces', serif";
const MONO = "'JetBrains Mono', monospace";
const INK_SOFT = "#4a5965";

export default function Features() {
  const [active, setActive] = useState<SegId | null>(null);

  const segStyle = (id: SegId): CSSProperties => ({
    cursor: "pointer",
    transition: "filter 0.35s ease",
    transformOrigin: "640px 500px",
    filter: active
      ? active === id
        ? "brightness(1.06) saturate(1.05)"
        : "saturate(0.35) brightness(1.04) opacity(0.55)"
      : undefined,
  });

  const calloutStyle = (seg: SegId, base: CSSProperties): CSSProperties => ({
    position: "absolute",
    color: "#11212d",
    transition: "opacity 0.3s ease",
    opacity: active && active !== seg ? 0.18 : 1,
    ...base,
  });

  return (
    <section id="features" className="bg-slate-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#2ea4f2]/10 border border-[#2ea4f2]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Todo lo que tu notaría necesita,{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #056dfe, #51d2e9)" }}
            >
              en un solo lugar
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed">
            Diseñado específicamente para el entorno legal y fiscal de notarías.
            Cumplimiento normativo, eficiencia operativa y tecnología de punta.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {CARDS.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="absolute top-0 left-6 right-6 h-0.5 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                style={{ background: bg }}
              >
                <Icon size={24} style={{ color }} strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              <div
                className="mt-5 text-xs font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color }}
              >
                Saber más
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem subheading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-200/60 text-slate-500 text-xs font-semibold px-4 py-1.5 rounded-full mb-4" style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: ".12em" }}>
            UN ECOSISTEMA
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Una sola captura,{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #1f5673, #6cc3c8)" }}>
              todo hecho
            </span>
          </h3>
          <p className="mt-3 text-sm text-slate-500">
            Explora los cinco módulos y cómo se integran entre sí. Pasa el cursor sobre cada segmento.
          </p>
        </div>

        {/* Ecosystem Stage */}
        <div className="overflow-x-auto">
          <div
            style={{ position: "relative", width: "100%", minWidth: 1100, aspectRatio: "1280 / 980" }}
            onMouseLeave={() => setActive(null)}
          >
            <svg
              viewBox="0 0 1280 980"
              aria-hidden="true"
              style={{ width: "100%", height: "100%", display: "block", overflow: "visible" }}
            >
              <defs>
                <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="55%" stopColor="#000" stopOpacity="0" />
                  <stop offset="100%" stopColor="#000" stopOpacity=".15" />
                </radialGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="14" />
                  <feOffset dx="0" dy="14" result="off" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope=".18" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Shadow + orbit rings */}
              <ellipse cx="640" cy="880" rx="320" ry="14" fill="#000" opacity=".07" />
              <circle cx="640" cy="500" r="392" fill="none" stroke="#cfc7b6" strokeWidth="1" strokeDasharray="2 6" opacity=".7" />
              <circle cx="640" cy="500" r="430" fill="none" stroke="#d9d2c4" strokeWidth="1" opacity=".5" />

              {/* Pie */}
              <g filter="url(#softShadow)">
                <path
                  style={segStyle("proyectos")}
                  fill={SEG_COLORS.proyectos}
                  d="M 640 500 L 640 140 A 360 360 0 0 1 982.4 384.7 Z"
                  onMouseEnter={() => setActive("proyectos")}
                />
                <path
                  style={segStyle("facturacion")}
                  fill={SEG_COLORS.facturacion}
                  d="M 640 500 L 982.4 384.7 A 360 360 0 0 1 851.6 791.2 Z"
                  onMouseEnter={() => setActive("facturacion")}
                />
                <path
                  style={segStyle("flujo")}
                  fill={SEG_COLORS.flujo}
                  d="M 640 500 L 851.6 791.2 A 360 360 0 0 1 428.4 791.2 Z"
                  onMouseEnter={() => setActive("flujo")}
                />
                <path
                  style={segStyle("docs")}
                  fill={SEG_COLORS.docs}
                  d="M 640 500 L 428.4 791.2 A 360 360 0 0 1 297.6 384.7 Z"
                  onMouseEnter={() => setActive("docs")}
                />
                <path
                  style={segStyle("pld")}
                  fill={SEG_COLORS.pld}
                  d="M 640 500 L 297.6 384.7 A 360 360 0 0 1 640 140 Z"
                  onMouseEnter={() => setActive("pld")}
                />

                {/* Inner glow + dividers + hole */}
                <circle cx="640" cy="500" r="360" fill="url(#innerGlow)" pointerEvents="none" />
                <g stroke="rgba(255,255,255,.18)" strokeWidth="1" pointerEvents="none">
                  <line x1="640" y1="500" x2="640" y2="140" />
                  <line x1="640" y1="500" x2="982.4" y2="384.7" />
                  <line x1="640" y1="500" x2="851.6" y2="791.2" />
                  <line x1="640" y1="500" x2="428.4" y2="791.2" />
                  <line x1="640" y1="500" x2="297.6" y2="384.7" />
                </g>
                <circle cx="640" cy="500" r="118" fill="#0b1a26" />
                <circle cx="640" cy="500" r="118" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
              </g>

              {/* Segment labels */}
              {(
                [
                  { text: ["CONTROL", "PROYECTOS"], x: 800, y: 295, size: 22 },
                  { text: ["FACTURACIÓN"], x: 878, y: 582, size: 22 },
                  { text: ["CONTROL", "DE FLUJO"], x: 640, y: 745, size: 22 },
                  { text: ["AUTOMATIZACIÓN", "DOCUMENTOS"], x: 402, y: 568, size: 18 },
                  { text: ["PLD"], x: 493, y: 312, size: 22 },
                ] as { text: string[]; x: number; y: number; size: number }[]
              ).map(({ text, x, y, size }) =>
                text.map((line, i) => (
                  <text
                    key={`${x}-${i}`}
                    fill="#fff"
                    fontFamily={FRAUNCES}
                    fontWeight="500"
                    letterSpacing=".04em"
                    fontSize={size}
                    x={x}
                    y={y + i * (size + 5)}
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {line}
                  </text>
                ))
              )}
            </svg>

            {/* Center card */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 230,
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: ".3em", color: "#cfd8df", marginBottom: 10 }}>
                — UN ECOSISTEMA —
              </div>
              <div style={{ fontFamily: FRAUNCES, fontStyle: "italic", fontWeight: 300, fontSize: 34, lineHeight: 1, color: "#fff", letterSpacing: "-0.02em" }}>
                Una captura,
                <strong style={{ fontStyle: "normal", fontWeight: 500, color: "#fff", display: "block", marginTop: 6, letterSpacing: ".05em", fontSize: 38 }}>
                  todo hecho.
                </strong>
              </div>
            </div>

            {/* Feature callouts */}
            {FEATURES.map((f) => (
              <div
                key={f.id}
                style={calloutStyle(f.seg, f.style)}
                onMouseEnter={() => setActive(f.seg)}
                onMouseLeave={() => setActive(null)}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: ".2em",
                    color: INK_SOFT,
                    marginBottom: 6,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    ...f.numStyle,
                  }}
                >
                  <span style={{ width: 18, height: 1, background: "currentColor", display: "inline-block", flexShrink: 0 }} />
                </div>
                <h4 style={{ fontFamily: FRAUNCES, fontWeight: 400, fontSize: 18, lineHeight: 1.15, letterSpacing: "-0.01em", margin: "0 0 6px", color: "#11212d" }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: 12.5, lineHeight: 1.45, color: INK_SOFT, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

  
      </div>
    </section>
  );
}
