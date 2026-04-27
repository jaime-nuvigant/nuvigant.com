"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { URL_ISR_CONVENIO } from "../constants";

interface PricingPlan {
  title: string;
  subtitle: string;
  price: string;
  per?: string;
  headerColor: string;
  features: string[];
  note?: string;
  cta?: string;
}

const plans: PricingPlan[] = [
  {
    title: "Solo Cálculo ISR",
    subtitle: "Versión Gratis",
    price: "$0",
    headerColor: "#51d2e9",
    features: [
      "Cálculos de ISR ilimitados",
      "Impresión de PDF explicando el resultado paso a paso (con logo de Nuvigant)",
    ],
    note: "No incluye: exportar al DECLARANOT, soporte por correo, guardar cálculos, tutoriales de estrategias.",
    cta: URL_ISR_CONVENIO,
  },
  {
    title: "Solo Cálculo ISR",
    subtitle: "Versión PLUS",
    price: "$4,200",
    per: "año",
    headerColor: "#056dfe",
    features: [
      "Todo lo incluido en la versión gratuita",
      "Exporta al DECLARANOT",
      "Sin marcas de agua — imprime con tu logo",
      "Capacitación de 20 minutos de uso",
      "Guarda tus cálculos en cualquier dispositivo",
      "Tutoriales de estrategias para reducir el impuesto",
    ],
  },
  {
    title: "Módulo PLD",
    subtitle: "Blindaje ante el lavado de dinero",
    price: "$1,500",
    per: "mes",
    headerColor: "#7CDA24",
    features: [
      "Incluye Cálculo de ISR PLUS",
      "Búsqueda de listados negros",
      "Control y alertas de acumulados",
      "Impresión de Expediente Único y expedientes de beneficiario controlador",
      "Exporta al DECLARANOT con mayor facilidad",
      "Guarda todos los documentos de tus clientes en su expediente electrónico",
    ],
    note: "Costo de implementación y configuración: $700 (pagado una sola vez al inicio)",
  },
  {
    title: "Sistema Integral",
    subtitle: "Todo menos facturación",
    price: "$3,500",
    per: "mes",
    headerColor: "#4f8e18",
    features: [
      "Incluye todo lo del Módulo PLD",
      "Control de proyectos con alertas estilo Facebook",
      "Control de Clientes con expediente electrónico",
      "Control de Ingresos y Egresos completo",
      "Impresión de machotes (proyectos del sistema)",
      "Interacción con el cliente vía portal de clientes",
    ],
    note: "Implementación: $2,000 MXN (una vez). Se puede añadir facturación por $1,300 MXN/mes.",
  },
];

const faqs = [
  {
    q: "¿Necesito infraestructura nueva para empezar a usar la aplicación?",
    a: "Lo único que necesitas es una conexión a internet. Teniendo eso y cualquier dispositivo (celular, laptop, mac, tableta), podrás entrar al sistema.",
  },
  {
    q: "¿Necesito firmar un contrato?",
    a: "No, puedes consultar nuestro aviso de privacidad y los términos y condiciones, pero a menos de que lo desees, no entramos en ningún contrato. Lo que te permite dejar de utilizar la aplicación en el momento que desees.",
  },
  {
    q: "¿Qué pasa con mi información si decido dejar de usar el sistema?",
    a: "Se te regresa tu información, se eliminan tus accesos y nosotros borramos tu base de datos cuando hayas confirmado que recibiste tu información.",
  },
];

export default function ConvenioMichoacanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left: title + CTA */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full" />
                Convenio con Colegios de Notarios
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                Convenio de Nuvigant con el{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)" }}
                >
                  Colegio de Notarios de Michoacán
                </span>
              </h1>

              <p className="mt-5 text-base text-slate-600 leading-relaxed max-w-xl">
                Agradeciendo a la Presidenta Isania Solarzano y al comité digital del Colegio de Notarios de Michoacán,
                en la parte inferior de esta página podrán encontrar los precios y modalidades del convenio.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://share.hsforms.com/1oI9kEt0xR5-FtNhHOxNpvw2lcwx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  Registrarse al convenio
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#precios"
                  className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  Ver precios
                </a>
              </div>
            </div>

            {/* Right: video */}
            <div>
              <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/-ReL78pKoRM"
                  title="Convenio Colegio de Notarios de Michoacán"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <section
        id="precios"
        className="py-20 lg:py-28"
        style={{
          background: "#2ea4f2",
          backgroundImage:
            "url(https://nuvigant.com/wp-content/uploads/2023/09/line-pattern-light-transparent.png)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div className="text-white">
              <p className="font-semibold text-base">* Precios son sin IVA</p>
              <p className="font-semibold text-base">* Si se paga la anualidad se da un mes de descuento</p>
            </div>
            <a
              href="https://share.hsforms.com/1oI9kEt0xR5-FtNhHOxNpvw2lcwx"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl border-2 border-white bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm shadow-lg"
            >
              Entrar al convenio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan) => (
              <div key={plan.title + plan.subtitle} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                {/* Header */}
                <div className="py-5 px-6 text-white text-center" style={{ background: plan.headerColor }}>
                  <p className="font-bold text-lg leading-tight">{plan.title}</p>
                  <p className="text-sm opacity-90 mt-0.5">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="text-center py-6 border-b border-slate-100">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.per && <span className="text-slate-500 text-sm ml-1">/ {plan.per}</span>}
                </div>

                {/* Features */}
                <div className="px-6 py-5 flex-1">
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Check size={15} strokeWidth={2.5} style={{ color: plan.headerColor, flexShrink: 0, marginTop: "3px" }} />
                        <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.note && (
                    <p className="mt-4 text-xs text-slate-500 leading-relaxed italic">{plan.note}</p>
                  )}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href={plan.cta ?? "https://share.hsforms.com/1oI9kEt0xR5-FtNhHOxNpvw2lcwx"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:opacity-90"
                    style={{ background: plan.headerColor, color: "#fff" }}
                  >
                    Registrarse
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Preguntas frecuentes</h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 text-base leading-snug group-hover:text-[#056dfe] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="text-[#056dfe] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0 group-hover:text-[#056dfe] transition-colors" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
