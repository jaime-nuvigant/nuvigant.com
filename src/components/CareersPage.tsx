"use client";

import { useState } from "react";
import { MapPin, TrendingUp, Target, Users, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { EMAIL_MAIN } from "@/constants";

const teams = [
  {
    title: "Marketing y Ventas",
    subtitle: "Buscamos a gente creativa con pasión.",
    positions: [
      {
        title: "Diseño y Mercadotecnia",
        desc: "Nosotros te damos las herramientas y tú liberas tu creatividad. Buscamos a alguien con conocimientos de: Marketing Digital (instagram, facebook, google ads), Content Marketing (blog), buen@ para escribir, SEO, WordPress. Estarás desarrollando campañas de merca todas las semanas, donde podrás probar ideas y usar tu creatividad.",
      },
      {
        title: "Ventas",
        desc: "Buscamos a gente con pasión por ayudarle a otros a alcanzar sus metas. Trabaja junto con el equipo de merca para platicarle a nuestros prospectos de qué manera se beneficiarán al utilizar Nuvigant.",
      },
    ],
  },
  {
    title: "Producto",
    subtitle: "¡Se buscan nerds!",
    positions: [
      {
        title: "Desarrollador Front-End",
        desc: "Buscamos nerds de computadora que les apasione crear experiencia para sus usuarios. Algo de lo que distingue a Nuvigant es lo fácil que es para utilizar. Por esto mismo serás parte integral de nuestro equipo. Bonus: Experiencia con Angular 2+.",
      },
      {
        title: "Desarrollador Back-End",
        desc: "Base de datos, servidores, docker… Todas esas cosas que te apasionan las hacemos aquí. Si ya has trabajado con estas tecnologías, mucho mejor: Python, C#, Base de Datos relacionales y NoSQL, Docker.",
      },
    ],
  },
  {
    title: "Directores",
    subtitle: "Se buscan jefes buena onda",
    positions: [
      {
        title: "Director de Desarrollo",
        desc: "Necesitamos a un súper nerd de computadoras que lidere a nuestro equipo de desarrollo. Por lo menos 5 años de experiencia en desarrollo de aplicaciones. Bonus: fuiste desarrollador Full Stack en alguna parte de tu vida.",
      },
      {
        title: "Director de Ventas",
        desc: "Buscamos a alguien que esté listo para liderar a un equipo de ventas y de mercadotecnia. Por lo menos 5 años de experiencia en ventas de software con un record probado de ventas.",
      },
    ],
  },
];

const perks = [
  {
    icon: MapPin,
    title: "Trabaja de Donde Sea",
    desc: "No importa dónde estés. Lo único que necesitas es una conexión a Internet. Algunos de nosotros somos nómadas digitales.",
    color: "#3D72E7",
    bg: "#eff6ff",
  },
  {
    icon: TrendingUp,
    title: "Oportunidad de Crecimiento",
    desc: "Crece de una manera predecible. Sabrás exactamente lo que tienes que hacer para crecer y te ayudaremos a lograrlo.",
    color: "#2ea4f2",
    bg: "#f0f9ff",
  },
  {
    icon: Target,
    title: "Trabajo Basado en Metas",
    desc: "Se te darán objetivos y tú podrías decidir cómo cumplirlos. ¿Terminas todos los objetivos a principio de semana? Ya no trabajas el resto.",
    color: "#37d6bb",
    bg: "#f0fdf9",
  },
  {
    icon: Users,
    title: "Ambiente Agradable",
    desc: "Nos importa mucho llevar la fiesta en paz. Buscamos a gente positiva y amigable para ser parte del equipo de Nuvigant.",
    color: "#b030db",
    bg: "#faf5ff",
  },
];

function PositionItem({ title, desc }: { title: string; desc: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-all border-t-4 border-t-[#3D72E7]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-slate-800 text-sm">{title}</span>
        {open ? (
          <ChevronUp size={16} className="text-slate-400 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown size={16} className="text-slate-400 shrink-0 mt-0.5" />
        )}
      </div>
      {open && <p className="mt-3 text-slate-500 text-sm leading-relaxed">{desc}</p>}
    </button>
  );
}

export default function CareersPage() {
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
            ¡Únete al Equipo!
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nuvigant es una startup dinámica que está creciendo rápidamente. Únete al equipo y ayúdanos en nuestra
            misión: "Crear un mundo más conectado"
          </p>
        </div>
      </section>

      {/* ── ¿Listo para cambiar? ──────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                ¿List@ para cambiar la manera de hacer las cosas?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Tenemos un lugar amigable donde es fácil trabajar, en el que puedas usar tu talento al máximo y puedes
                ser libre de usar tus conocimientos y creatividad.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Queremos platicar contigo y ver si podemos ser un buen "match" para trabajar juntos.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Durante la entrevista a nosotros nos importa lo que hay en tu cabeza, no la ropa que traigas puesta.
                Mándanos tu CV y vamos a platicar.
              </p>
              <a
                href={`mailto:${EMAIL_MAIN}?subject=Aplicación%20para%20Nuvigant`}
                className="group inline-flex items-center gap-2 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Enviar mi CV
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-slate-700 font-semibold text-lg">Crecimiento rápido</p>
                <p className="text-slate-500 text-sm mt-2">Startup dinámica con impacto real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipos y Oportunidades ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Equipos y Oportunidades
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Descubre las oportunidades que hay dentro de nuestra empresa. Esperamos conocerte muy pronto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teams.map(({ title, subtitle, positions }) => (
              <div key={title} className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
                </div>
                {positions.map((pos) => (
                  <PositionItem key={pos.title} {...pos} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nuestra Oficina ──────────────────────────────── */}
      <section
        className="relative py-20 lg:py-28 text-center"
        style={{ background: "linear-gradient(135deg, rgba(254,91,72,0.9) 0%, rgba(184,5,114,0.9) 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Nuestra Oficina
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            ¡No tenemos! Desde que empezamos operaciones en el 2016 decidimos trabajar de manera remota. Esto nos ayudó
            primero a bajar costos, después nos dimos cuenta que en esta economía digital no es necesario tener oficinas y
            darnos a todos la versatilidad de trabajar en donde queramos.
          </p>
          <p className="text-white/80 text-base font-medium">
            Ciudad de México · Austin · Cancún · Chihuahua
          </p>
        </div>
      </section>

      {/* ── Ventajas y Beneficios ────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ventajas y Beneficios
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {perks.map(({ icon: Icon, title, desc, color, bg }) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
    </div>
  );
}
