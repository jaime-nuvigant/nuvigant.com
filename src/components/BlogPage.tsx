import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { EMAIL_MAIN } from "../constants";

interface Post {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
}

const posts: Post[] = [
  {
    title: "Operaciones vulnerables: 4 cosas que todo notario debe saber",
    excerpt:
      'En el ejercicio notarial, uno de los compromisos más importantes es el cumplimiento de la LFPIORPI. Esta legislación impone obligaciones específicas a los fedatarios públicos, entre las que destaca la identificación, control y reporte de las llamadas "Operaciones Vulnerables".',
    slug: "operaciones-vulnerables-4-cosas-que-todo-notario-debe-sab",
    date: "25 Jul 2025",
    category: "PLD",
  },
  {
    title: "Qué son los PEPS para notarios",
    excerpt:
      "Las Personas Expuestas Políticamente (PEP) son individuos que desempeñan o han desempeñado cargos públicos relevantes. Se consideran de alto riesgo en materia de prevención de lavado de dinero.",
    slug: "que-son-los-peps-para-notarios",
    date: "25 Jul 2025",
    category: "PLD",
  },
  {
    title: "Reforma Antilavado 2025 para notarios",
    excerpt:
      "El 16 de julio de 2025 se publicó en el Diario Oficial una reforma profunda a la LFPIORPI. Esta reforma impacta directamente a los notarios, reforzando su papel en la lucha contra el lavado de dinero.",
    slug: "reforma-antilavado-2025-para-notarios",
    date: "24 Jul 2025",
    category: "PLD",
  },
  {
    title: "Extracción Automática de Datos con Inteligencia Artificial",
    excerpt:
      "Presentamos la función que eficientizará la forma en que gestionas la información de personas: la extracción automática de datos de documentos con inteligencia artificial.",
    slug: "extraccion-automatica-de-datos-de-documentos",
    date: "16 Jul 2025",
    category: "IA",
  },
  {
    title: "Gastos a Cuenta de Terceros para Notarios",
    excerpt:
      "En la práctica notarial, es común que los clientes entreguen a los notarios sumas de dinero para realizar pagos de impuestos, derechos o servicios a nombre de los clientes. ¿Ese dinero se considera ingreso propio?",
    slug: "gastos-a-cuenta-de-terceros-para-notarios",
    date: "10 Jun 2025",
    category: "Fiscal",
  },
  {
    title: "Exención casa habitación mixta: ¿cómo funciona?",
    excerpt:
      "Cuando se realiza la venta de una casa habitación con varios copropietarios, es posible que algunos puedan exentar el ISR mientras que otros no. A esto se le conoce como exención mixta.",
    slug: "exencion-casa-habitacion-mixta",
    date: "23 Abr 2025",
    category: "ISR",
  },
  {
    title: "IA en Notaría: Automatización y Análisis de Escrituras con Nuvigant",
    excerpt:
      "La Inteligencia Artificial en Notaría está revolucionando la gestión documental. Con Nuvigant, es posible analizar escrituras automáticamente, extraer participantes, inmuebles y datos de operación.",
    slug: "ia-en-notaria-automatizacion-y-analisis-de-escrituras-con-nuvigant",
    date: "12 Mar 2025",
    category: "IA",
  },
  {
    title: "Análisis de escrituras con IA",
    excerpt:
      "Nuvigant ha desarrollado una innovadora herramienta de análisis de escrituras con inteligencia artificial diseñada para transformar la gestión notarial.",
    slug: "analisis-de-escrituras-con-ia",
    date: "21 Feb 2025",
    category: "IA",
  },
  {
    title: "Automatización para Notarías e Inmobiliarias: Nuvigant ↔ Zapier",
    excerpt:
      "Nuvigant ahora se integra con Zapier, permitiendo automatizar procesos en notarías e inmobiliarias. ¡Optimiza tu flujo de trabajo!",
    slug: "automatizacion-para-notarias-e-inmobiliarias-nuvigant-zapier",
    date: "12 Feb 2025",
    category: "Producto",
  },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  PLD: { bg: "#eff6ff", text: "#056dfe" },
  IA: { bg: "#ecfeff", text: "#0891b2" },
  Fiscal: { bg: "#fefce8", text: "#ca8a04" },
  ISR: { bg: "#f0fdf4", text: "#15803d" },
  Producto: { bg: "#faf5ff", text: "#7c3aed" },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24"
        style={{
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full" />
            Recursos y aprendizaje
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-slate-900">Bienvenid@ a nuestro </span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)" }}
            >
              Blog
            </span>
          </h1>

          <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Desde inteligencia artificial, temas tecnológicos en el sector notarial e inmobiliario y resúmenes de los
            eventos a los que vamos, aquí puedes encontrarlo.
          </p>
        </div>
      </section>

      {/* ── Post grid ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const catStyle = CATEGORY_COLORS[post.category] ?? { bg: "#f1f5f9", text: "#475569" };
              return (
                <a
                  key={post.slug}
                  href={`https://nuvigant.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Top accent line */}
                  <div
                    className="h-1 w-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(90deg, #056dfe, #51d2e9)" }}
                  />

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: catStyle.bg, color: catStyle.text }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                    </div>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ background: catStyle.bg }}
                    >
                      <BookOpen size={18} style={{ color: catStyle.text }} strokeWidth={1.8} />
                    </div>

                    <h2 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#056dfe] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>

                    <div className="mt-5 flex items-center gap-1 text-[#056dfe] text-sm font-semibold">
                      Leer artículo
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://nuvigant.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              Ver todos los artículos en nuvigant.com
              <ArrowRight size={16} className="text-[#2ea4f2]" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────── */}
      <section
        className="py-20 lg:py-24"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#51d2e9] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
            Mantente al día
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Recibe nuestros{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #51d2e9, #2ea4f2)" }}
            >
              artículos
            </span>{" "}
            directo en tu email
          </h2>
          <p className="text-slate-300 mb-8 text-base leading-relaxed">
            Temas de ISR, PLD, inteligencia artificial y novedades de Nuvigant. Sin spam.
          </p>

          <a
            href={`mailto:${EMAIL_MAIN}?subject=Quiero recibir el blog de Nuvigant`}
            className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
          >
            Suscribirme al blog
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
