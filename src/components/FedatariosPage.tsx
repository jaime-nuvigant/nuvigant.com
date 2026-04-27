import { ArrowRight, BookOpen, Calculator, Settings, Layers } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "/fedatarios/calculo-de-isr-enajenacion-inmuebles",
    icon: Calculator,
    title: "Calculadora de ISR",
    desc: "Calcula el ISR por enajenación de inmuebles en segundos, gratis, desde cualquier dispositivo.",
  },
  {
    href: "/fedatarios/pricing",
    icon: Layers,
    title: "Precios",
    desc: "Conoce los módulos disponibles y elige el que mejor se adapta a tu operación.",
  },
  {
    href: "/fedatarios/implementation",
    icon: Settings,
    title: "Tips de Implementación",
    desc: "Consejos probados para arrancar con el sistema y sacarle el máximo provecho.",
  },
  {
    href: "/fedatarios/sistema-notarias/notariamasmas-nuvigant",
    icon: BookOpen,
    title: "Notaría++",
    desc: "Estamos pasando por un cambio de imagen. Si usabas Notaría++ entra aquí.",
  },
];

export default function FedatariosPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Fedatarios
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Software en la nube que te acerca a tus clientes y a tus metas.
            Selecciona la sección que necesitas.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {links.map(({ href, icon: Icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-[#056dfe]/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#056dfe]/10 flex items-center justify-center">
                    <Icon size={22} className="text-[#056dfe]" />
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-slate-300 group-hover:text-[#056dfe] transition-colors"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                  <p className="mt-1 text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
