"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Mail,
  Smartphone,
  Server,
  ShieldCheck,
  Calculator,
  Users,
  Minus,
  Plus,
} from "lucide-react";
import {
  WA_LINK,
  WA_DISPLAY,
  EMAIL_CONTACT,
  URL_ISR,
  PRICE_SOFTWARE_ADMIN,
  PRICE_PLD_MODULE,
  PRICE_ISR_PRO,
  PRICE_ADDITIONAL_USER,
  USERS_INCLUDED,
  ISR_USER_COUNT,
} from "../constants";

const BASE_PRICE_NUM = 6900;
const MAX_USERS_SELF_SERVE = 45;

const adminFeatures = [
  "Sistema de control de proyectos",
  "Facturación y generación de CFDIs (todos los que necesitas)",
  "Portal de clientes — seguimiento en línea a su trámite",
  "Control de presupuestos, ingresos y egresos",
  "Impresión de documentos con IA (genera machotes con la información ya capturada)",
  "Hasta 5 usuarios incluidos",
  `$${PRICE_ADDITIONAL_USER} MXN por usuario adicional`,
  "¿Más de 10 usuarios? Te hacemos una propuesta personalizada",
];

const pldFeatures = [
  "Búsqueda en más de 10 listados negros (todos los requeridos por la UIF)",
  "Listas de la ONU, OFAC, Europa, INTERPOL y más",
  "Evaluación de riesgo de clientes",
  "Reportes automáticos para la UIF",
  "Constancias de búsqueda en PDF",
];

const isrFreeFeatures = [
  "Genera todos los cálculos de ISR que desees",
  "Imprime un PDF con los resultados",
  "Incluye todas las variaciones del cálculo",
  "Optimizada para usarse desde el teléfono",
];

const isrFreeNotIncluded = [
  "Guardar cálculos en la plataforma",
  "Exportar al DECLARANOT",
  "Versión sin branding de Nuvigant",
];

const isrPaidFeatures = [
  "Todo lo del plan gratuito",
  "Guarda y consulta todos tus cálculos",
  "Exporta directamente al DECLARANOT",
  "Versión sin branding de Nuvigant",
  "Optimizada para usarse desde el teléfono",
];

const faqs = [
  {
    q: "¿Puedo personalizar la plataforma de acuerdo a lo que necesito?",
    a: "Sí, la plataforma es muy personalizable y puedes hacer estas personalizaciones tú mism@. Si hay algo que no se puede personalizar y que necesitas, podemos platicarlo y hacerte una propuesta de desarrollo.",
  },
  {
    q: "¿Está segura mi información?",
    a: "Claro. Nos tomamos muy en serio la seguridad de tu información e invertimos fuertemente en todo lo necesario para mantenerla protegida. Con la aplicación puedes acceder a tu información de manera segura desde cualquier lugar.",
  },
  {
    q: "¿Puedo descargar mi información cuando quiera?",
    a: "Sí, en cualquier momento puedes descargar toda tu información desde la plataforma, sin necesidad de solicitarlo, las veces que quieras.",
  },
  {
    q: "¿Qué pasa si ya no quiero usar la aplicación?",
    a: "Nada. Sólo nos avisas y tendrás un mes para descargar tu información en formato .csv (Excel). Nosotros borramos todos tus datos y no nos quedamos con ningún respaldo.",
  },
  {
    q: "¿Cómo se utiliza la información que capturo?",
    a: "Nosotros no le damos ningún uso a tu información que no sea para prestarte el servicio. Esa información es completamente tuya y no la usamos para ningún otro fin.",
  },
  {
    q: "¿Hay un contrato de permanencia?",
    a: "No. La suscripción es mensual y puedes cancelar cuando quieras sin penalización.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [userCount, setUserCount] = useState<number>(USERS_INCLUDED);

  const additionalUsers = Math.max(0, userCount - USERS_INCLUDED);
  const totalPrice = BASE_PRICE_NUM + additionalUsers * PRICE_ADDITIONAL_USER;
  const formattedTotal = totalPrice.toLocaleString("es-MX");
  const isOverLimit = userCount > MAX_USERS_SELF_SERVE;

  function handleUserInput(val: string) {
    const n = parseInt(val, 10);
    if (!isNaN(n) && n >= 1) setUserCount(n);
    else if (val === "") setUserCount(1);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
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

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full" />
            Precios
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Escoge los servicios que{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)" }}
            >
              tu empresa necesita
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Nuestra plataforma se personaliza a lo que tú necesitas. Escoge los módulos de tu interés
            y ponte en contacto con nosotros para platicar cómo te podemos ayudar.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 text-sm">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#056dfe] transition-colors"
            >
              <MessageCircle size={16} style={{ color: "#25d366" }} />
              {WA_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="inline-flex items-center gap-2 hover:text-[#056dfe] transition-colors"
            >
              <Mail size={16} style={{ color: "#056dfe" }} />
              {EMAIL_CONTACT}
            </a>
          </div>
        </div>
      </section>

      {/* ── Software + PLD Modules ──────────────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Plataforma administrativa
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Gestiona tu notaría en la nube
            </h2>
            <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
              Un sistema completo para el día a día de tu notaría, con los módulos que necesitas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Software Administrativo */}
            <div className="relative bg-white rounded-2xl border-2 border-[#056dfe] shadow-xl p-8 flex flex-col">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full shadow"
                style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
              >
                Módulo principal
              </div>

              <div className="flex items-center gap-3 mb-6 mt-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#eff6ff" }}
                >
                  <Server size={24} style={{ color: "#056dfe" }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">Software administrativo</h3>
                  <p className="text-slate-500 text-sm">Sistema de gestión notarial</p>
                </div>
              </div>

              {/* Price display */}
              <div className="mb-5">
                {isOverLimit ? (
                  <div className="rounded-xl border border-[#056dfe]/30 bg-[#056dfe]/5 px-5 py-4">
                    <p className="text-base font-bold text-slate-900 mb-0.5">¿Más de {MAX_USERS_SELF_SERVE} usuarios?</p>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed">
                      Te preparamos una propuesta personalizada.
                    </p>
                    <a
                      href="/contacto"
                      className="group inline-flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow hover:shadow-md transition-all"
                      style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                    >
                      Ponte en contacto
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ) : (
                  <>
                    <p className="text-5xl font-extrabold text-slate-900 transition-all duration-200">
                      ${formattedTotal}
                      <span className="text-lg font-semibold text-slate-500 ml-2">/ mes + IVA</span>
                    </p>
                    {additionalUsers > 0 && (
                      <p className="mt-1 text-[#056dfe] text-xs font-medium">
                        Incluye {additionalUsers} usuario{additionalUsers !== 1 ? "s" : ""} adicional{additionalUsers !== 1 ? "es" : ""} (${(additionalUsers * PRICE_ADDITIONAL_USER).toLocaleString("es-MX")} MXN)
                      </p>
                    )}
                    <p className="mt-1 text-slate-500 text-sm">
                      {USERS_INCLUDED} usuarios incluidos · ${PRICE_ADDITIONAL_USER} MXN por usuario adicional
                    </p>
                  </>
                )}
              </div>

              {/* User counter */}
              <div className="mb-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users size={15} className="text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">Número de usuarios</span>
                  </div>
                  {additionalUsers > 0 && !isOverLimit && (
                    <span className="text-xs bg-[#056dfe]/10 text-[#056dfe] font-semibold px-2 py-0.5 rounded-full">
                      +{additionalUsers} adicional{additionalUsers !== 1 ? "es" : ""}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setUserCount((u) => Math.max(1, u - 1))}
                    className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#056dfe] hover:text-[#056dfe] transition-colors"
                    aria-label="Quitar usuario"
                  >
                    <Minus size={15} />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={userCount}
                    onChange={(e) => handleUserInput(e.target.value)}
                    className="w-16 text-center font-bold text-slate-900 text-lg border border-slate-200 rounded-lg py-1.5 focus:outline-none focus:border-[#056dfe] bg-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    onClick={() => setUserCount((u) => u + 1)}
                    className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:border-[#056dfe] hover:text-[#056dfe] transition-colors"
                    aria-label="Agregar usuario"
                  >
                    <Plus size={15} />
                  </button>
                  <span className="text-slate-500 text-sm ml-1">
                    usuario{userCount !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {adminFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={17} style={{ color: "#056dfe", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
              >
                Solicitar demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Módulo PLD */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#f0fdf4" }}
                >
                  <ShieldCheck size={24} style={{ color: "#16a34a" }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">Módulo de prevención de lavado</h3>
                  <p className="text-slate-500 text-sm">Cumplimiento PLD / UIF</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-5xl font-extrabold text-slate-900">
                  ${PRICE_PLD_MODULE}
                  <span className="text-lg font-semibold text-slate-500 ml-2">/ mes + IVA</span>
                </p>
                <p className="mt-1 text-slate-500 text-sm">Se agrega al módulo base</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pldFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={17} style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 text-slate-700 font-bold text-base px-8 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Más información
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#2ea4f2]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ISR Calculator Plans ────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#2ea4f2]/10 border border-[#2ea4f2]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Calculadora de ISR
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Cálculo de ISR por venta de inmuebles
            </h2>
            <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
              Más de {ISR_USER_COUNT} notarías, inmobiliarias y despachos ya usan nuestra calculadora. Empieza gratis hoy mismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* ISR Free */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#f8fafc" }}
                >
                  <Smartphone size={24} style={{ color: "#64748b" }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">ISR Gratuito</h3>
                  <p className="text-slate-500 text-sm">Ideal para consultas rápidas</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-5xl font-extrabold text-slate-900">
                  $0
                  <span className="text-lg font-semibold text-slate-500 ml-2">/ gratis</span>
                </p>
                <p className="mt-1 text-slate-500 text-sm">Sin registro · disponible desde tu teléfono</p>
              </div>

              <ul className="space-y-3 mb-4 flex-1">
                {isrFreeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={17} style={{ color: "#056dfe", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
                {isrFreeNotIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <XCircle size={17} style={{ color: "#cbd5e1", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    <span className="text-slate-400 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={URL_ISR}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 w-full inline-flex items-center justify-center gap-2 text-slate-700 font-bold text-base px-8 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all"
              >
                Ir a la calculadora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#2ea4f2]" />
              </a>
            </div>

            {/* ISR Paid */}
            <div className="relative bg-white rounded-2xl border-2 border-[#056dfe] shadow-xl p-8 flex flex-col">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full shadow"
                style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
              >
                Más popular
              </div>

              <div className="flex items-center gap-3 mb-6 mt-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#eff6ff" }}
                >
                  <Calculator size={24} style={{ color: "#056dfe" }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">ISR Pro</h3>
                  <p className="text-slate-500 text-sm">Para profesionales del sector</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-5xl font-extrabold text-slate-900">
                  ${PRICE_ISR_PRO}
                  <span className="text-lg font-semibold text-slate-500 ml-2">/ año + IVA</span>
                </p>
                <p className="mt-1 text-slate-500 text-sm">Acceso completo sin restricciones</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {isrPaidFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={17} style={{ color: "#056dfe", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    <span className="text-slate-700 text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={URL_ISR}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
              >
                Contratar ISR Pro
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Optional Modules Banner ──────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Otros módulos opcionales
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            Ponte en contacto con nosotros para analizar tus necesidades y hacerte una propuesta personalizada
            con los módulos adicionales que mejor se adapten a tu operación.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
          >
            Platiquemos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ── Testimonial ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <blockquote>
            <p className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed mb-6">
              "La aplicación es fresca y amigable, se va adaptando y mejorando sola de acuerdo a lo que voy necesitando."
            </p>
            <footer className="text-slate-500 text-sm">
              — <strong className="text-slate-700">Mauricio G.</strong> · Notario y usuario de la aplicación
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
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

          <p className="mt-10 text-center text-slate-500 text-sm">
            ¿Tienes más preguntas?{" "}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#056dfe] font-semibold hover:underline">
              Ponte en contacto con nosotros
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Dark CTA ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)" }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #2ea4f2 0%, #056dfe 40%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#51d2e9] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            Empieza hoy
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Agenda una{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #51d2e9, #2ea4f2)" }}
            >
              demo gratuita
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Cuéntanos qué necesitas y te mostramos cómo Nuvigant se adapta a tu notaría en una llamada sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
          >
            Solicitar demo por WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              Enviar correo
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            WhatsApp: {WA_DISPLAY} · {EMAIL_CONTACT}
          </p>
        </div>
      </section>
    </div>
  );
}
