import { ArrowRight, Upload, FileText, Printer, FileCheck, ShieldCheck, Cloud } from "lucide-react";
import { URL_SCHEDULE_DEMO, EMAIL_MAIN, WA_DISPLAY_2 } from "../constants";

const highlights = [
  {
    icon: Upload,
    title: "Extracción Automática",
    desc: "Optimiza la recopilación de datos con nuestra herramienta de extracción automática. Solo cargas el documento y listo, el sistema lee la información.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: FileText,
    title: "Utiliza la información",
    desc: "Imprime el expediente único, genera complementos de notarios o incluso genera cualquier machote sin haber tecleado nada.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
];

const keyFeatures = [
  {
    icon: Upload,
    title: "Extracción automática de documentos",
    desc: "Agiliza la recopilación de datos críticos. Carga el documento y deja que la IA haga el trabajo.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: FileCheck,
    title: "Facturación e impuestos",
    desc: "Usa la información capturada para generar tus CFDIs y preparar tu DECLARANOT sin re-capturar nada.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Printer,
    title: "Redacción automática de escrituras",
    desc: "Genera proyectos de escritura listos para presentar, sin errores y sin esfuerzo manual.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
  {
    icon: ShieldCheck,
    title: "Prevención de lavado de dinero",
    desc: "Cumple con las normas PLD de forma automática. Listas negras, evaluación de riesgo y reportes para la UIF.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: Cloud,
    title: "Administración en la nube",
    desc: "Gestiona tu notaría desde cualquier lugar, con toda la información centralizada y segura en la nube.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
];

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Decorative blobs */}
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
              Descubre cómo Nuvigant transforma tu notaría
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Mira cómo Nuvigant{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)",
                }}
              >
                automatiza tu notaría
              </span>{" "}
              sin teclear nada
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Experimenta la revolución en la gestión notarial con nuestra solución automatizada que simplifica cada proceso.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#video"
                className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
              >
                Ver Video
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
              >
                Ver funciones
                <ArrowRight size={16} className="text-[#2ea4f2]" />
              </a>
            </div>
          </div>

          {/* YouTube embed */}
          <div id="video" className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/H9CSuNK1cGQ"
                title="Nuvigant — automatización notarial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlight Cards ───────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: bg }}
                >
                  <Icon size={28} style={{ color }} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-base text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features ──────────────────────────────────── */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#2ea4f2]/10 border border-[#2ea4f2]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              Funcionalidades
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Funciones Clave de{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #056dfe, #51d2e9)" }}
              >
                Nuvigant
              </span>
            </h2>
            <p className="mt-5 text-base text-slate-500 leading-relaxed">
              Nuvigant ofrece una solución integral para notarios, comenzando con la{" "}
              <strong className="text-slate-700">extracción automática de información de documentos</strong>, que agiliza
              la recopilación de datos críticos. Después podrás usar esta información para hacer tus facturas, tu
              DECLARANOT y finalmente, la{" "}
              <strong className="text-slate-700">redacción automática de proyectos de escritura</strong> garantiza que
              cada documento esté listo para ser presentado sin errores, ahorrando tiempo y esfuerzo.
            </p>
            <p className="mt-4 text-base text-slate-500 leading-relaxed">
              Además cuenta con todo lo que necesitas para cumplir con las normas de prevención de lavado y para
              administrar tu notaría de una manera eficiente y en la nube.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map(({ icon: Icon, title, desc, color, bg }) => (
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
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
        id="demo"
        className="relative overflow-hidden py-24 lg:py-32"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, #2ea4f2 0%, #056dfe 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-72 h-72 opacity-10 blur-3xl pointer-events-none rounded-full"
          style={{ background: "#51d2e9" }}
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
              demo
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-10">
            Comienza tu prueba ahora y descubre cómo Nuvigant puede transformar la operación de tu notaría sin teclear nada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={URL_SCHEDULE_DEMO}
              className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
            >
              Solicitar demo gratuita
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`mailto:${EMAIL_MAIN}`}
              className="inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              Hablar con el equipo
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            WhatsApp: {WA_DISPLAY_2} · {EMAIL_MAIN}
          </p>
        </div>
      </section>
    </div>
  );
}
