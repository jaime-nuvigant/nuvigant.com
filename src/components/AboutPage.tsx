import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { URL_SCHEDULE_DEMO } from "@/constants";

export default function AboutPage() {
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
            Quienes somos
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Somos una bola de nerds de computadora, mercadólogos y administradores que a lo largo de 30 años ha desarrollado muchos sistemas y aplicaciones para empresas en diferentes sectores.
          </p>
        </div>
      </section>

      {/* ── 30 años de experiencia ────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                30 Años de Experiencia Nos Respaldan
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Somos una empresa que después de 30 años de operaciones se atrevió a reinventarse. Nuestra combinación de experiencia y pasión por lo nuevo nos permite ofrecer lo mejor de los dos mundos, seguridad e innovación.
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
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-4xl font-extrabold"
                  style={{ background: "linear-gradient(135deg, #fe5b48 0%, #b80572 100%)" }}
                >
                  30
                </div>
                <p className="text-slate-700 font-semibold text-lg">Años de experiencia</p>
                <p className="text-slate-500 text-sm mt-2">Reinventándonos con tecnología moderna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ¿Dónde estamos? ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px] order-last lg:order-first">
              <div className="text-center">
                <div className="text-5xl mb-4">🌎</div>
                <p className="text-slate-700 font-semibold text-lg">Trabajo 100% remoto</p>
                <p className="text-slate-500 text-sm mt-2">CDMX · Austin · Cancún · Chihuahua</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                ¿Dónde estamos?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                La empresa es originalmente de Chihuahua, México, pero con la implementación de nuevas tecnologías logramos deshacernos de nuestras oficinas. Ahora puedes encontrar a colaboradores nuestros trabajando en cafeterías o coworks en diferentes partes del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Siempre mejorando ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Siempre Estamos Mejorando
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Nuestro producto no sería lo que es sin la ayuda de muchísimos clientes a lo largo del tiempo. Te escuchamos y queremos saber de qué manera crees que pudiéramos mejorar nuestro servicio y aplicación.
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-5xl mb-4">🚀</div>
                <p className="text-slate-700 font-semibold text-lg">Mejora continua</p>
                <p className="text-slate-500 text-sm mt-2">Escuchamos y evolucionamos con nuestros clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-2xl sm:text-3xl font-bold text-slate-800 leading-relaxed mb-6">
            "Me queda claro, este tipo de software es en verdad el futuro en administración."
          </blockquote>
          <p className="text-slate-500 font-semibold">— Bernardo R. — Usuario de la aplicación</p>
        </div>
      </section>
    </div>
  );
}
