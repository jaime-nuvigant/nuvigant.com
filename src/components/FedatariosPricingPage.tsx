import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { URL_SCHEDULE_DEMO } from "../constants";

const modules = [
  {
    name: "Módulo Base",
    price: "$4,700",
    period: "mes",
    subtitle: "Lo que necesitas para controlar tu oficina",
    items: [
      "Seguimiento de expedientes",
      "Cálculo de Impuestos",
      "Control de Anticipos",
      "Cálculo ISR",
      "Reportes",
      "Soporte por Chat",
    ],
    cta: URL_SCHEDULE_DEMO,
    ctaLabel: "Solicitar Demo",
    highlight: false,
  },
  {
    name: "PLD",
    price: "$80",
    period: "month",
    subtitle: "Protección Contra el Lavado de Dinero",
    items: [
      "Búsqueda en listados negros",
      "Evaluación de riesgo de clientes",
      "Reportes automáticos para la UIF",
      "Constancias de búsqueda en PDF",
    ],
    cta: URL_SCHEDULE_DEMO,
    ctaLabel: "Solicitar Demo",
    highlight: true,
  },
];

export default function FedatariosPricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#8147ed] to-[#6d17d1] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Nuestra plataforma crece junto contigo
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Escoge los módulos que necesitas en este momento, pudiendo en un futuro añadir
            las adiciones que vayas necesitando.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4 rounded-2xl bg-amber-50 border border-amber-200 p-4 max-w-2xl mx-auto">
            <p className="text-amber-700 text-sm">
              Estos precios son de referencia histórica. Para los precios actuales y más
              información, consulta nuestra{" "}
              <Link href="/pricing" className="font-semibold underline hover:no-underline">
                página de precios actualizada
              </Link>{" "}
              o agenda una demo.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className={`rounded-2xl bg-white overflow-hidden border ${
                  mod.highlight
                    ? "shadow-xl border-[#056dfe]/30"
                    : "shadow-sm border-slate-100"
                }`}
              >
                <div className="p-8">
                  <h2 className="text-xl font-bold text-slate-800">{mod.name}</h2>
                  <p className="text-slate-400 text-sm mt-1">{mod.subtitle}</p>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="text-4xl font-extrabold text-slate-800">{mod.price}</span>
                    <span className="text-slate-400 text-sm">/ {mod.period}</span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {mod.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                        <Check size={14} className="text-[#056dfe] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={mod.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 w-full block text-center rounded-full py-3 font-bold text-sm transition-shadow ${
                      mod.highlight
                        ? "bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] text-white shadow-lg hover:shadow-xl"
                        : "bg-slate-700 text-white hover:bg-slate-800"
                    }`}
                  >
                    {mod.ctaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-slate-500 mb-6">¿Tienes más preguntas?</p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver Precios Actuales <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
