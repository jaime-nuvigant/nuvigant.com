import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  ShieldCheck,
  Cloud,
  Upload,
  Calculator,
  Wallet,
} from "lucide-react";
import {
  WA_LINK,
  WA_DISPLAY,
  EMAIL_CONTACT,
  URL_SCHEDULE_DEMO,
  ISR_USER_COUNT,
} from "../constants";

const AUTOMATION_VIDEO_PATH = "/automatizacion-documentos-ia-notaria#video";

const pitchCards = [
  {
    icon: Upload,
    title: "Extracción automática con IA",
    desc: "El cliente carga el documento y el sistema extrae participantes, inmuebles y datos operativos sin volver a teclear: argumento de venta instantáneo.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: Sparkles,
    title: "Machotes y escrituras sin captura manual",
    desc: "Plantillas con llaves, expediente único y redacción automática de proyectos de escritura: menos fricción, más cierres.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Users,
    title: "Portal de clientes y control de proyectos",
    desc: "Seguimiento en línea al trámite, control de presupuestos e ingresos/egresos: valor visible desde el primer mes.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
  {
    icon: ShieldCheck,
    title: "PLD y UIF integrados",
    desc: "Más de 10 listados negros, evaluación de riesgo, reportes y constancias en PDF: cumplimiento que las notarías ya buscan.",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    icon: Cloud,
    title: "Administración en la nube",
    desc: "Facturación y CFDIs, información centralizada y acceso seguro desde cualquier lugar: producto moderno, fácil de defender.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: Calculator,
    title: "Ecosistema ISR",
    desc: `Calculadora gratuita y plan ISR Pro con miles de usuarios (${ISR_USER_COUNT}+): puerta de entrada natural hacia la plataforma completa.`,
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
];

const sellsItselfPoints = [
  "Resuelve dolores reales: tiempo perdido en captura, errores en escrituras y presión regulatoria (Prevención de Lavado de Dinero).",
  "La demo en video muestra el flujo completo en minutos: tus prospectos entienden el valor sin una charla técnica eterna.",
  "Suscripción mensual sin permanencia: menos objeciones y más confianza al cerrar.",
  "Personalizable por el propio cliente; cuando falta algo, el equipo Nuvigant puede proponer desarrollo a medida.",
  "Seguridad, exportación de datos y transparencia en el uso de la información: argumentos sólidos frente a comités y socios.",
];

export default function PromotoresPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2ea4f2 0%, #51d2e9 70%, transparent 100%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            Programa de promotores
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            Únete a un equipo que{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)",
              }}
            >
              ya está ganando
            </span>{" "}
            con Nuvigant
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Vende software que las notarías necesitan hoy: automatización con IA, cumplimiento PLD y administración en la
            nube. Comisiones claras, producto fuerte y soporte detrás de ti.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Quiero ser promotor
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href={AUTOMATION_VIDEO_PATH}
              className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              <Play size={18} className="text-[#056dfe]" fill="currentColor" />
              Ver el video
            </Link>
          </div>
        </div>
      </section>

      {/* Must-see video */}
      <section className="bg-slate-900 py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-amber-200 mb-5">
            Paso 1 — antes de vender
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Mira el video de automatización: es{" "}
            <span className="text-[#51d2e9]">imprescindible</span> antes de hablar con clientes
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
            En pocos minutos verás cómo Nuvigant lee escrituras, alimenta expedientes y genera documentos sin re-captura.
            Esa misma narrativa es la que cerrará reuniones contigo: domínala primero.
          </p>
          <div className="mt-8">
            <Link
              href={AUTOMATION_VIDEO_PATH}
              className="group inline-flex items-center gap-3 text-[#0a1628] font-bold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
            >
              <Play size={22} className="text-[#056dfe]" fill="currentColor" />
              Abrir página de automatización y el video
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commission */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              <Wallet size={14} />
              Comisiones
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Estructura transparente por valor de ticket
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed">
              A mayor volumen de venta en una operación, mayor comisión para ti. Sin letras chiquitas: solo dos tramos.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80">
                  <th className="px-6 py-4 font-bold text-slate-900">Valor del ticket</th>
                  <th className="px-6 py-4 font-bold text-slate-900 text-right">Comisión promotor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-6 py-5 text-slate-700">Menor a $10,000 MXN</td>
                  <td className="px-6 py-5 text-right">
                    <span className="text-2xl font-extrabold text-[#056dfe]">15%</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-5 text-slate-700 font-semibold">$10,000 MXN en adelante</td>
                  <td className="px-6 py-5 text-right">
                    <span className="text-2xl font-extrabold text-emerald-600">20%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Montos en pesos mexicanos antes de IVA, salvo que acuerden contigo otro esquema por escrito con Nuvigant.
          </p>
        </div>
      </section>

      {/* Opportunity */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Tu esfuerzo se traduce en ingresos recurrentes
              </h2>
              <p className="mt-5 text-slate-500 leading-relaxed">
                Las notarías pagan por valor: menos tiempo en captura, menos riesgo regulatorio y mejor experiencia para
                el cliente final. Tú conectas la oportunidad; puedes participar en la implementación, y nosotros entregamos el producto y
                continuidad.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Pitch simple: “Deja de teclear varias veces lo que ya está en el expediente.”",
                  "Hemos trabajado con más de 200 notarías, y estamos creciendo de manera acelerada.",
                  "Ofrece seguridad, exportación de datos y suscripción sin permanencia.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                    <TrendingUp className="shrink-0 text-[#056dfe]" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-8 text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #0d2256 100%)" }}
            >
              <h3 className="text-xl font-bold mb-4">¿Por qué es fácil venderlo?</h3>
              <p className="text-slate-200 text-sm leading-relaxed mb-6">
                No vendes una promesa vaga: vendes flujos concretos (extracción → facturación → escritura → PLD en la
                nube). El cliente ve el ahorro de horas por semana desde la primera demo.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 font-bold text-[#0a1628] bg-white px-5 py-2.5 rounded-lg text-sm hover:bg-slate-100 transition-colors"
              >
                Ver precios públicos
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#2ea4f2]/10 border border-[#2ea4f2]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Lo que llevas en la maleta
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Producto que se explica solo en la mesa de notario
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Estas capacidades salen de nuestra oferta comercial y de automatización: úsalas como checklist cuando
              prepares un encuentro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pitchCards.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: bg }}
                >
                  <Icon size={24} style={{ color }} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sells itself */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center leading-tight mb-4">
            Por qué este producto{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #056dfe, #51d2e9)" }}
            >
              casi se vende solo
            </span>
          </h2>
          <p className="text-center text-slate-500 mb-10 leading-relaxed">
            Combina lo tangible de la automatización con la tranquilidad de cumplimiento y administración. Tú refuerzas la
            confianza; la propuesta ya viene armada.
          </p>
          <ul className="space-y-4">
            {sellsItselfPoints.map((pt) => (
              <li key={pt} className="flex gap-3 bg-slate-50 rounded-xl border border-slate-100 px-5 py-4">
                <CheckCircle className="shrink-0 text-[#056dfe]" size={22} strokeWidth={2} />
                <span className="text-slate-700 text-sm leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
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
            Siguiente paso
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Activa tu perfil de{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #51d2e9, #2ea4f2)" }}
            >
              promotor
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Escríbenos por WhatsApp con el asunto “Promotores”, agenda una llamada con el equipo o deja tus datos en el
            formulario de contacto. Te compartimos materiales y siguientes pasos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
            >
              WhatsApp: hablemos de comisiones
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={URL_SCHEDULE_DEMO}
              className="inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              Agendar llamada
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Link
              href="/contact"
              className="text-[#51d2e9] font-semibold hover:underline"
            >
              Formulario de contacto
            </Link>
            <span className="hidden sm:inline text-slate-600">·</span>
            <a href={`mailto:${EMAIL_CONTACT}`} className="text-slate-400 hover:text-white transition-colors">
              {EMAIL_CONTACT}
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            WhatsApp {WA_DISPLAY} — recuerda ver el video en automatización antes de tu primera cita de venta.
          </p>
        </div>
      </section>
    </div>
  );
}
