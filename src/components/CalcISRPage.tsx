"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Quote } from "lucide-react";
import { URL_ISR_CALCULATOR, URL_ISR, WA_LINK } from "../constants";

const highlights = [
  "Genera cálculos de ISR para compraventa de inmuebles en minutos.",
  "Incluye escenarios comunes de operaciones notariales.",
  "Entrega reportes claros para explicar el resultado al cliente.",
];

const testimonials = [
  {
    quote: "Nos ahorra muchísimo tiempo cuando hay operaciones urgentes.",
    author: "Equipo jurídico, notaría en CDMX",
  },
  {
    quote: "La interfaz es muy clara para validar cada supuesto del cálculo.",
    author: "Despacho inmobiliario, Monterrey",
  },
  {
    quote: "Pudimos estandarizar el proceso y reducir errores manuales.",
    author: "Área fiscal, firma legal",
  },
];

const featureCards = [
  {
    title: "Precisión fiscal",
    description: "Estructura de cálculo diseñada para operaciones reales de enajenación.",
  },
  {
    title: "Velocidad operativa",
    description: "Obtén resultados rápidamente y evita rehacer cálculos en hojas sueltas.",
  },
  {
    title: "Lista para explicar",
    description: "Presenta un resultado claro para clientes, fedatarios y equipo interno.",
  },
];

export default function CalcISRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#f6f2ea] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#544fff]">
              Cálculo ISR para fedatarios
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Calculadora de ISR para venta de inmuebles
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Una experiencia enfocada en rapidez, consistencia y claridad para notarios, inmobiliarias y
              despachos que necesitan resolver cálculos confiables en cada operación.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#544fff]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={URL_ISR_CALCULATOR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                Probar calculadora
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Lo que dicen quienes ya la usan
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.quote} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Quote size={20} className="text-[#2ea4f2]" />
                <p className="mt-4 text-slate-700 leading-relaxed">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-500">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2ea4f2] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">Características clave</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className="rounded-2xl bg-white p-7 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#544fff]">Versión PLUS</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Llévala al siguiente nivel con guardado y exportación
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Si además de calcular necesitas conservar historial, compartir resultados y operar sin branding,
            revisa la versión avanzada de la herramienta.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fedatarios/calculo-isr/get-version-plus"
              className="inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Ver versión PLUS
              <ArrowRight size={18} />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Resolver dudas por WhatsApp
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            También disponible en <a href={URL_ISR} className="font-semibold text-[#544fff] hover:underline">{URL_ISR}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
