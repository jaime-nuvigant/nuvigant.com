import { ArrowRight, BookOpen } from "lucide-react";
import { getPostUrl } from "@/lib/blog";
import { URL_SCHEDULE_DEMO, EMAIL_MAIN, WA_DISPLAY_2 } from "../constants";

const relatedPosts = [
  {
    title: "IA en Notaría: Automatización y Análisis de Escrituras con Nuvigant",
    excerpt:
      "La Inteligencia Artificial en Notaría está revolucionando la gestión documental en despachos notariales. Con Nuvigant, es posible analizar escrituras automáticamente y extraer datos sin intervención manual.",
    slug: "ia-en-notaria-automatizacion-y-analisis-de-escrituras-con-nuvigant",
    category: "industry",
    subcategory: "fedatarios",
    date: "Mar 12, 2025",
  },
  {
    title: "Análisis de escrituras con IA",
    excerpt:
      "Nuvigant ha desarrollado una innovadora herramienta de análisis de escrituras con inteligencia artificial diseñada para transformar la gestión notarial, reducir errores y optimizar tiempos.",
    slug: "analisis-de-escrituras-con-ia",
    category: "inteligencia-artificial",
    subcategory: "",
    date: "Feb 21, 2025",
  },
  {
    title: "Extracción Automática de Datos con Inteligencia Artificial",
    excerpt:
      "Presentamos la función que eficientizará la forma en que gestionas la información de personas: la extracción automática de datos de documentos con inteligencia artificial.",
    slug: "extraccion-automatica-de-datos-de-documentos",
    category: "inteligencia-artificial",
    subcategory: "",
    date: "Jul 16, 2025",
  },
];

export default function WebinarIaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-0"
        style={{
          background: "linear-gradient(180deg, #023047 80%, #ffffff 80%)",
        }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #2ea4f2 0%, #056dfe 50%, transparent 80%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center pb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#51d2e9] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            Webinar Nuvigant
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            Webinar: La IA en la Fe Pública
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Te compartimos la grabación del webinar. Hablamos sobre qué es la IA, cómo puedes utilizarla en el proceso
            notarial y algunas predicciones a futuro y maneras de prepararse.
          </p>
          <p className="mt-3 text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Si te gustaría ver una presentación personalizada de la herramienta que se usa en el webinar, puedes dar
            clic en el siguiente botón.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#023047] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
            >
              Solicitar Demo de Herramienta
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* YouTube embed */}
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 pb-0 translate-y-12">
          <div className="rounded-2xl border border-slate-200 shadow-2xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/aGPJQX_oz18"
              title="Webinar: La IA en la Fe Pública"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── Related Articles banner ─────────────────────── */}
      <section
        className="py-16 mt-16"
        style={{ background: "linear-gradient(135deg, #2b87da 53%, #29c4a9 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
            Te compartimos también varios artículos de nuestro blog que pudieran interesarte.
          </p>
        </div>
      </section>

      {/* ── Blog article cards ─────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <a
                key={post.slug}
                href={getPostUrl(post)}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "#eff6ff" }}
                >
                  <BookOpen size={20} style={{ color: "#056dfe" }} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#056dfe] transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>
                <span className="mt-4 text-xs text-slate-400">{post.date}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section
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
            Descubre cómo Nuvigant puede transformar la operación de tu notaría con inteligencia artificial.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
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

          <p className="mt-8 text-xs text-slate-500">WhatsApp: {WA_DISPLAY_2} · {EMAIL_MAIN}</p>
        </div>
      </section>
    </div>
  );
}
