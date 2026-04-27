import Link from "next/link";
import { BarChart3, TrendingUp, Users, ArrowRight } from "lucide-react";
import { EMAIL_CONTACT } from "@/constants";

export default function InvestPage() {
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
            Invierte en el Futuro de Latinoamérica
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nuestra misión es ayudarle a los pequeños y medianos negocios en Latinoamérica a controlar toda su operación en un solo lugar con una aplicación en la nube.
          </p>
        </div>
      </section>

      {/* ── Nuestra Misión ───────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={40} style={{ color: "#0780b5" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Crecimiento mensual</p>
                <p className="text-slate-500 text-sm mt-2">Nuestro MRR crece mes a mes</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Nuestra Misión
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                La nube parece estar en todos lados, pero un lugar donde aún tiene mucho por recorrer son las pequeñas y medianas empresas de Latinoamérica.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Es nuestra misión proporcionar a empresas de servicios una manera sencilla y amigable de controlar su operación con las nuevas tecnologías de la nube.
              </p>
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contáctanos
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features: Todo en un Solo Lugar ─────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Todo en un Solo Lugar
            </h2>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
              Tener que contratar varios softwares muy grandes se vuelve costoso y complicado para cualquier empresa mediana o pequeña. Nosotros queremos cambiar eso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Control de Proyectos",
                desc: "Una manera gráfica y amigable de controlar tus proyectos con una fuerte capacidad de personalización.",
                color: "#056dfe",
                bg: "#eff6ff",
              },
              {
                icon: TrendingUp,
                title: "Control de Flujo",
                desc: "Ingresos, egresos, facturación. Todo esto puedes ver en la misma pantalla donde controlas tus proyectos.",
                color: "#2ea4f2",
                bg: "#f0f9ff",
              },
              {
                icon: Users,
                title: "Control de Clientes",
                desc: "Sácale provecho a tu información. Mientras controlas todo, ve armando tu base de datos de clientes.",
                color: "#51d2e9",
                bg: "#ecfeff",
              },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
        </div>
      </section>

      {/* ── Tecnología y Escalabilidad ───────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Nuestra Tecnología y Escalabilidad
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Usamos una infraestructura basada en microservicios que en conjunto forman una aplicación "multi-tenant".
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Con cada implementación logramos bajar nuestros costos y tiempos de "OnBoarding" dejando a los clientes tan satisfechos como cuando hicimos nuestras primeras implementaciones "On-Site".
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Esto y el estar cerca de lograr que nuestros costos de "OnBoarding" sean marginales, nos da mucha seguridad de estar preparados para crecer exponencialmente.
              </p>
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contáctanos
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={40} style={{ color: "#00c3d8" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">Arquitectura de microservicios</p>
                <p className="text-slate-500 text-sm mt-2">Escalable, segura y multi-tenant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modelo de Negocios ───────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={40} style={{ color: "#0780b5" }} strokeWidth={1.4} />
                </div>
                <p className="text-slate-700 font-semibold text-lg">SaaS probado</p>
                <p className="text-slate-500 text-sm mt-2">Modelo de suscripción con MRR creciente</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Nuestro Modelo de Negocios
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                <strong>Software as a Service.</strong> Cobramos una suscripción por nuestro servicio.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                En algunos casos especiales igual se monetiza el "OnBoarding" y servicios adicionales que el cliente pueda necesitar. Esta fórmula probada de hacer negocios nos ha funcionado muy bien y llevamos algún tiempo en que cada mes crece nuestro MRR.
              </p>
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contáctanos
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold text-slate-800 leading-relaxed mb-6">
            "Me sentí como un niño que le acaban de regalar el Nintendo 64 cuando empecé a usar Nuvigant."
          </blockquote>
          <p className="text-slate-500 font-semibold">— Lic. Norberto D. — Usuario de la aplicación</p>
        </div>
      </section>
    </div>
  );
}
