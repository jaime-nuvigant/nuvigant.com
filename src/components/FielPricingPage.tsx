"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Paquete de Inicio",
    subtitle: "1–100 Firmas",
    price: "$60",
    per: "Firma",
    color: "#535b7c",
    features: [
      { label: "Familiarízate con la eFirma", included: true },
      { label: "Define si es algo que te puede ayudar", included: true },
      { label: "Organiza tus documentos de manera sencilla", included: true },
      { label: "Tus clientes firman en nuestra página", included: false },
      { label: "Soporte sólo por email", included: false },
    ],
  },
  {
    title: "Paquete Plus",
    subtitle: "300 Firmas",
    price: "$45",
    per: "Firma",
    color: "#3D72E7",
    featured: true,
    features: [
      { label: "Ya estás convencid@ de los beneficios de la eFirma", included: true },
      { label: "Soporte por medio de chat", included: true },
      { label: "Tus clientes no verán tu branding al momento de firmar", included: false },
    ],
  },
  {
    title: "Paquete Avanzado",
    subtitle: "500+ Firmas",
    price: "—",
    per: "Contáctanos",
    color: "#7A3CB9",
    features: [
      { label: "Firma con tu branding", included: true },
      { label: "Tus clientes firman en tu página de Internet", included: true },
      { label: "Soporte por medio de Chat", included: true },
    ],
  },
];

const faqs = [
  {
    q: "¿Qué tan personalizable es el servicio?",
    a: "El servicio se puede personalizar bastante. Contáctate con nosotros y te podemos apoyar para que todo el proceso de firma lo hagan tus clientes directamente en tu página de Internet.",
  },
  {
    q: "¿Tienen fecha de caducidad las firmas?",
    a: "Para nada. Las firmas las puedes usar cuando tú quieras.",
  },
  {
    q: "¿Cómo empiezo?",
    a: "Ponte en contacto con nosotros, te enseñamos cómo funciona la plataforma, adquieres las firmas y listo.",
  },
  {
    q: "¿Tiene la misma validez la eFirma que una firma autógrafa?",
    a: "Siempre que un documento no necesite ser firmado frente a notario o exista una ley que lo prohíba, un documento firmado con la FIEL tiene la misma validez que uno firmado con firma autógrafa. Una firma realizada con la FIEL no es repudiable ni falsificable, mientras que las autógrafas sí lo son.",
  },
  {
    q: "¿En dónde puedo encontrar el fundamento legal?",
    a: "Principalmente en la Ley de Firma Electrónica Avanzada. También puedes ver más en: 1. Código Fiscal de la Federación (Art. 17F) | 2. Ley Federal de Trabajo (Art. 776, 836) | 3. Código de Comercio (Art. 89 hasta 114).",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-slate-800 text-sm leading-relaxed">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-slate-400 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown size={18} className="text-slate-400 shrink-0 mt-0.5" />
        )}
      </div>
      {open && <p className="mt-4 text-slate-500 text-sm leading-relaxed">{a}</p>}
    </button>
  );
}

export default function FielPricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 text-center">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #2ea4f2 0%, #51d2e9 70%, transparent 100%)" }}
        />
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Escoge un paquete de firmas y empieza a firmar
          </h1>
          <p className="text-lg text-slate-500">
            Mientras más firmas compres, más económico se vuelve adquirirlas. Ponte en contacto con nosotros si tienes dudas.
          </p>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map(({ title, subtitle, price, per, color, featured, features }) => (
              <div
                key={title}
                className={`rounded-2xl p-8 border bg-white transition-all ${
                  featured
                    ? "border-[#3D72E7] border-t-4 shadow-xl scale-105"
                    : "border-slate-100 shadow-md hover:shadow-lg"
                }`}
              >
                {featured && (
                  <div className="text-xs font-bold text-[#3D72E7] bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-slate-500 text-sm mb-6">{subtitle}</p>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold" style={{ color }}>
                    {price}
                  </span>
                  <span className="text-slate-400 text-sm ml-2">/ {per}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {features.map(({ label, included }) => (
                    <li key={label} className={`flex items-start gap-2 text-sm ${included ? "text-slate-700" : "text-slate-400"}`}>
                      <span className="mt-0.5 text-base">{included ? "✓" : "–"}</span>
                      {label}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className="block text-center text-white font-bold text-sm py-3 rounded-xl transition-all"
                  style={{ background: `linear-gradient(135deg, ${color} 0%, #53a0fe 100%)` }}
                >
                  Contáctanos
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-slate-500">Te dejamos aquí algunas de las preguntas más frecuentes que nos hacen.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQ key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold text-slate-800 mb-6">¿Aún tienes preguntas?</p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 text-white font-bold text-base px-9 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
          >
            Contáctanos
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
