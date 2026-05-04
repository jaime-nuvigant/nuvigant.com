import { ArrowRight, CheckCircle, FileText, Shield, Download } from "lucide-react";
import { URL_SCHEDULE_DEMO, EMAIL_MAIN, WA_DISPLAY_2 } from "../constants";

const bullets = [
  { icon: Shield, text: "Conoce los cambios que hubo en la reforma" },
  {
    icon: Download,
    text: "Descarga los lineamientos del programa de capacitación",
    link: "/webinar-pld",
    linkLabel: "(clic aquí)",
  },
  {
    icon: CheckCircle,
    text: "Regístrate para recibir una constancia de asistencia como evidencia de cumplimiento con el requisito de capacitaciones anuales",
    link: "/constancias-webinar-pld-2025",
    linkLabel: "(regístrate aquí)",
  },
  {
    icon: FileText,
    text: "Lee el artículo de apoyo sobre los principales cambios",
    link: "/blog/reforma-antilavado-2025-para-notarios",
    linkLabel: "(clic aquí)",
  },
];

export default function WebinarPldPage() {
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            Webinar Nuvigant
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: headline + bullets */}
            <div className="lg:col-span-3">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Webinar: Reforma{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)" }}
                >
                  PLD 2025
                </span>{" "}
                para notarios
              </h1>

              <p className="mt-5 text-lg text-slate-500 leading-relaxed max-w-xl">
                Analizamos los principales cambios que trae esta nueva legislación y cómo afectan directamente a las
                notarías en México.
              </p>

              <ul className="mt-8 space-y-4">
                {bullets.map(({ icon: Icon, text, link, linkLabel }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: "#eff6ff" }}
                    >
                      <Icon size={16} style={{ color: "#056dfe" }} strokeWidth={2} />
                    </div>
                    <span className="text-slate-700 text-base leading-relaxed">
                      {text}{" "}
                      {link && linkLabel && (
                        <a
                          href={link}
                          className="text-[#056dfe] font-medium hover:underline"
                          target={link.startsWith("http") ? "_blank" : undefined}
                          rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {linkLabel}
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#video"
                  className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  Ver grabación
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                >
                  Agendar demo
                </a>
              </div>
            </div>

            {/* Right: video */}
            <div id="video" className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 shadow-xl overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/jcjxUrKXmsI"
                  title="Webinar: Reforma PLD 2025 para notarios"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
        id="demo"
        className="relative overflow-hidden py-24 lg:py-32"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)" }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #2ea4f2 0%, #056dfe 40%, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#51d2e9] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            ¡Ve el software en acción!
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
            Si te interesó el software Nuvigant que se mostró en el video, agenda una sesión uno a uno con nosotros.
            Te mostraremos las funcionalidades y responderemos tus preguntas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
            >
              Agendar una demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`mailto:${EMAIL_MAIN}`}
              className="inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all backdrop-blur-sm"
            >
              Hablar con el equipo
            </a>
          </div>

          <p className="mt-8 text-xs text-slate-500">WhatsApp: {WA_DISPLAY_2} · {EMAIL_MAIN}</p>
        </div>
      </section>
    </div>
  );
}
