import Link from "next/link";
import { BarChart3, FileText, Shield, PenTool, FileCode, Bell, Users, ArrowRight } from "lucide-react";
import { URL_SCHEDULE_DEMO, URL_ISR_CALCULATOR } from "@/constants";

const features = [
  {
    icon: BarChart3,
    title: "Control de Proyectos",
    desc: "No pierdas el control de tu trabajo, controla tus proyectos fácilmente y dales un buen seguimiento con nuestros avisos y alertas.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: FileText,
    title: "Reportes Personalizados",
    desc: "Aprovecha tu información generando reportes personalizados que se adaptan a lo que tú buscas y no al revés.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
    featured: true,
  },
  {
    icon: Shield,
    title: "PLD",
    desc: "Busca en listados negros y genera el expediente único de tus clientes de una manera sencilla y automática.",
    color: "#37d6bb",
    bg: "#f0fdf9",
  },
  {
    icon: PenTool,
    title: "Firma Electrónicamente",
    desc: "Permítele a tus clientes realizar sus trámites en donde sea que estén. Esta firma está aquí para quedarse y la puedes implementar muy fácilmente.",
    color: "#b030db",
    bg: "#faf5ff",
  },
  {
    icon: FileCode,
    title: "Automatiza Documentos",
    desc: "Crea machotes a los que le podrás insertar automáticamente toda la información del sistema.",
    color: "#3D72E7",
    bg: "#eff6ff",
    featured: true,
  },
  {
    icon: Bell,
    title: "Alertas y Seguimiento",
    desc: "Mantente al tanto de todo con alertas de seguimiento. No se te escape ningún plazo o actividad importante.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
];

export default function LawyersPage() {
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
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Sistema para abogados: Controla proyectos, clientes y flujos de manera sencilla.
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-10">
            Nuestro software para abogados, una solución en la nube que te permite ofrecer un servicio de vanguardia y
            administrarte de una manera amigable y sencilla.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product/"
              className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Más info
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={URL_SCHEDULE_DEMO}
              className="inline-flex items-center gap-2 text-slate-700 font-semibold text-base px-8 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              Ver en acción
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Todo lo que necesita tu despacho en un solo lugar
            </h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Sistema para abogados que se adapta a tu operación. Cada módulo puedes usarlo de manera independiente
              dependiendo de lo que necesites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color, bg, featured }) => (
              <div
                key={title}
                className={`group rounded-2xl p-8 border transition-all duration-300 ${
                  featured
                    ? "bg-white border-[#3D72E7] border-t-4 shadow-lg"
                    : "bg-white border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: bg }}
                >
                  <Icon size={28} style={{ color }} strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={URL_SCHEDULE_DEMO}
              className="inline-flex items-center gap-2 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all"
              style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
            >
              Solicitar Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trabajo remoto ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Trabajo remoto, hecho fácil
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Cada vez más despachos empiezan a trabajar completamente en línea. Esto trae varios beneficios en costos
                al igual que volverte más atractivo al momento de reclutar colaboradores.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Nuestra plataforma te permite implementar esquemas más flexibles de trabajo remoto sin que tengas que
                sacrificar el control de tu operación.
              </p>
              <Link
                href={URL_SCHEDULE_DEMO}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Ver más
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-6xl mb-4">⚖️</div>
                <p className="text-slate-700 font-semibold text-lg">Tu despacho en la nube</p>
                <p className="text-slate-500 text-sm mt-2">Desde cualquier lugar, en cualquier momento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── No te atrases ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px] order-last lg:order-first">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Users size={40} style={{ color: "#2ea4f2" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Gestión centralizada</p>
                <p className="text-slate-500 text-sm mt-2">Proyectos, clientes y flujo en un solo lugar</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                No te atrases con nada
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                No importa si son plazos que tengas que cumplir, recordatorios que tengas con tus clientes o proyectos,
                recibe alertas por correo y por teléfono puntuales para que no se te escape nada.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Colabora con tu equipo dentro de nuestro sistema administrativo para que todo mundo se mantenga al tanto
                de lo que ya se hizo y lo que se tiene que hacer, pudiéndolo revisar en una aplicación amigable y fácil
                de utilizar.
              </p>
              <Link
                href={URL_SCHEDULE_DEMO}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Ver más
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ISR Calculator CTA ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Herramienta de cálculo de ISR gratuita
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Te invitamos a conocer y utilizar nuestra herramienta gratuita de cálculo de ISR por enajenación de
                bienes inmuebles.
              </p>
              <ul className="space-y-2 text-slate-600 mb-8 list-disc list-inside">
                <li>No tiene ningún costo</li>
                <li>Siempre se mantiene actualizada con los índices de BANXICO</li>
                <li>Te imprime un PDF que explica paso por paso cómo se realizó el cálculo</li>
              </ul>
              <a
                href={URL_ISR_CALCULATOR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Realizar primer cálculo
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-12 flex items-center justify-center min-h-[280px]">
              <div className="text-center">
                <div className="text-6xl mb-4">🧮</div>
                <p className="text-slate-700 font-semibold">Calculadora de ISR</p>
                <p className="text-slate-500 text-sm mt-2">Enajenación de bienes inmuebles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section
        className="relative py-20 lg:py-24 text-center"
        style={{ background: "linear-gradient(135deg, #53a0fd 0%, #4161d4 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Administrar tu despacho en la nube no tiene que ser difícil
          </h2>
          <p className="text-white/85 text-lg mb-8">
            Nuestro software para abogados se moldea fácilmente a lo que tú necesitas. A nuestros clientes les encanta
            lo fácil que es usarla.
          </p>
          <Link
            href={URL_SCHEDULE_DEMO}
            className="inline-flex items-center gap-2 bg-white text-[#3D72E7] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
          >
            Solicitar Demo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold text-slate-800 leading-relaxed mb-6">
            "Muy amigable, incluso antes de haberla probado, sólo con verla entendí cómo usarla"
          </blockquote>
          <p className="text-slate-500 font-semibold">— Oscar G. — Abogado usuario de la aplicación</p>
        </div>
      </section>
    </div>
  );
}
