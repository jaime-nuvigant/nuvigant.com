import Link from "next/link";
import { BarChart3, Database, Star, Bell, FileText, Users, TrendingUp, Cloud, ArrowRight } from "lucide-react";
import { URL_SCHEDULE_DEMO } from "@/constants";

const features = [
  {
    icon: BarChart3,
    title: "Control de Proyectos",
    desc: "Controla tus proyectos fácilmente desde donde sea que te encuentres con una herramienta amigable y personalizable.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: Database,
    title: "Análisis de Datos",
    desc: "Construye tus reportes personalizados y analiza tu información de la manera en que tú necesitas.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Star,
    title: "Servicio de Primer Nivel",
    desc: "¡No batalles! Nuestro equipo de soporte está disponible para responder tus dudas en todo momento.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
  {
    icon: Bell,
    title: "Notificaciones y Avisos",
    desc: "Recibe avisos sobre lo que se tiene que hacer para que no dejes pasar esas actividades importantes para tus clientes.",
    color: "#b030db",
    bg: "#faf5ff",
  },
  {
    icon: FileText,
    title: "Cotizaciones Automatizadas",
    desc: "Sorprende a tus clientes con cotizaciones profesionales, personalizables y automatizadas, entregadas directo a su correo.",
    color: "#37d6bb",
    bg: "#f0fdf9",
  },
  {
    icon: Users,
    title: "Minimiza la Captura de Datos",
    desc: "Captura la información de tus clientes una vez y úsala para todos tus procesos dentro y fuera de la app.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: TrendingUp,
    title: "Controla tu Flujo",
    desc: "Descubre áreas de pérdida y áreas de negocio inesperadas con la herramienta de control de flujo.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Database,
    title: "Controla tus Documentos",
    desc: "Carga y descarga documentos en tus operaciones o directamente en el perfil de tus clientes.",
    color: "#b030db",
    bg: "#faf5ff",
  },
  {
    icon: BarChart3,
    title: "Súper Personalizable",
    desc: "Captura la información que quieras y personaliza tus proyectos, seguimiento y cotizaciones como tú lo necesites.",
    color: "#37d6bb",
    bg: "#f0fdf9",
  },
];

export default function ProductPage() {
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
            Sobre el Producto
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nuestra herramienta es amigable, sencilla de usar y robusta. Permítenos contarte un poco más sobre ella.
          </p>
        </div>
      </section>

      {/* ── Administra Todo en un Sólo Lugar ────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-12 flex items-center justify-center min-h-[320px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud size={40} style={{ color: "#00c3d8" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Todo en un solo lugar</p>
                <p className="text-slate-500 text-sm mt-2">Proyectos, clientes, flujo y facturación</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Administra Todo en un Sólo Lugar
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Controla tus proyectos, la relación con tus clientes, tu facturación y flujo en un sólo lugar y en donde estés.
              </p>
              <ul className="space-y-2 text-slate-600 mb-8 list-disc list-inside">
                <li>Primero que nada te hará la vida más fácil. Es más sencillo si puedes consultar toda tu información en un sólo lugar.</li>
                <li>Minimiza la captura que realizas. Teniendo un lugar centralizado de información, podrás sacarle uso distinto a ella.</li>
              </ul>
              <Link
                href={URL_SCHEDULE_DEMO}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Ver en Acción
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pon tu Información en Acción ─────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Pon tu Información en Acción
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Hacemos más fácil que nunca que analices y ordenes tu información como tú quieras. Nuestra herramienta de reportes personalizados te permitirá afrontar las necesidades de tu trabajo con un enfoque basado en datos.
              </p>
              <Link
                href={URL_SCHEDULE_DEMO}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Ver en Acción
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 flex items-center justify-center min-h-[320px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={40} style={{ color: "#0780b5" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Reportes personalizados</p>
                <p className="text-slate-500 text-sm mt-2">Decisiones basadas en datos reales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Grid ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              La Herramienta que Buscabas para Administrar tu Trabajo
            </h2>
            <p className="mt-4 text-slate-600 text-lg">Fácil y amigable, y con soporte rápido y eficiente.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: bg }}
                >
                  <Icon size={22} style={{ color }} strokeWidth={1.6} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── El poder de la nube ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                El Poder de la Nube en tus Manos
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Accesa tu información en dónde sea que estés de manera segura. Olvídate de servidores, redes y demás complicaciones. Descubre lo sencillo que es trabajar en la nube y administrar tu trabajo en donde sea que te encuentres.
              </p>
              <Link
                href={URL_SCHEDULE_DEMO}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Agendar Demo
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud size={40} style={{ color: "#2ea4f2" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Acceso desde cualquier lugar</p>
                <p className="text-slate-500 text-sm mt-2">Sin servidores ni infraestructura que administrar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold text-slate-800 leading-relaxed mb-6">
            "Esta herramienta se ha vuelto indispensable para nuestra operación"
          </blockquote>
          <p className="text-slate-500 font-semibold">— Norberto D.</p>
        </div>
      </section>
    </div>
  );
}
