import Link from "next/link";
import { ArrowRight, Heart, Zap, Globe, Users } from "lucide-react";
import { EMAIL_MAIN } from "../constants";

const perks = [
  {
    icon: Heart,
    title: "Impacto real",
    desc: "Ayudamos a miles de notarías, inmobiliarias y despachos a trabajar mejor con tecnología.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
  {
    icon: Zap,
    title: "Tecnología de punta",
    desc: "Trabajamos con IA, automatización y las herramientas más modernas del mercado.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Globe,
    title: "100% remoto",
    desc: "Trabaja desde donde quieras. Lo que importa es el resultado.",
    color: "#51d2e9",
    bg: "#ecfeff",
  },
  {
    icon: Users,
    title: "Equipo pequeño y ágil",
    desc: "Tu trabajo se nota. Somos un equipo donde cada persona tiene responsabilidades reales desde el primer día.",
    color: "#056dfe",
    bg: "#eff6ff",
  },
];

export default function TrabajaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28" style={{ background: "#f6f2ea" }}>
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-black/8 border border-black/10 text-slate-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-[#056dfe] rounded-full" />
                Carreras en Nuvigant
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Trabaja con nosotros.
              </h1>

              <p className="mt-6 text-lg text-slate-700 leading-relaxed max-w-lg">
                Queremos cambiar cómo se hacen las cosas en el sector inmobiliario de México. Te invitamos a ser parte
                de esto.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#formulario"
                  className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  Enviar mi CV
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-slate-900 font-bold text-base px-8 py-3.5 rounded-xl border-4 border-slate-900 bg-transparent hover:bg-slate-900 hover:text-white transition-all shadow-md"
                >
                  Conoce más de Nuvigant
                </Link>
              </div>
            </div>

            {/* Right: form */}
            <div id="formulario" className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Déjanos tu información y CV</h2>
              <p className="text-slate-500 text-sm mb-6">Nos pondremos en contacto contigo.</p>

              <form
                action={`mailto:${EMAIL_MAIN}`}
                method="get"
                encType="text/plain"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre completo</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    ¿En qué área te gustaría colaborar?
                  </label>
                  <select
                    name="area"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-700 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Desarrollo de software">Desarrollo de software</option>
                    <option value="Diseño de producto">Diseño de producto</option>
                    <option value="Ventas">Ventas</option>
                    <option value="Atención al cliente">Atención al cliente</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje o motivación</label>
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder="Cuéntanos brevemente sobre ti y por qué quieres unirte al equipo..."
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition resize-none"
                  />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  Al enviar este formulario nos escribirás un correo. Adjunta tu CV en el correo que se abrirá.
                </p>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  Enviar información
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Perks ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              ¿Por qué unirte al equipo?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {perks.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
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
        className="relative overflow-hidden py-20 lg:py-24"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)" }}
      >
        <div
          aria-hidden
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, #2ea4f2 0%, #056dfe 40%, transparent 70%)" }}
        />

        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            ¿Listo para sumarte?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8">
            Escríbenos a{" "}
            <a href={`mailto:${EMAIL_MAIN}`} className="text-[#51d2e9] hover:underline font-medium">
              {EMAIL_MAIN}
            </a>{" "}
            con tu CV y cuéntanos sobre ti.
          </p>

          <a
            href="#formulario"
            className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
          >
            Aplicar ahora
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
