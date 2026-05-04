"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { PRICE_ISR_PRO, URL_ISR, WA_LINK } from "../constants";

const comparisonRows = [
  { label: "Cálculos ilimitados", plus: true, base: true },
  { label: "Guardar historial de operaciones", plus: true, base: false },
  { label: "Exportación para DECLARANOT", plus: true, base: false },
  { label: "Versión sin branding Nuvigant", plus: true, base: false },
  { label: "Soporte de implementación", plus: true, base: false },
];

const faqs = [
  {
    question: "¿El pago de la versión PLUS es mensual o anual?",
    answer: "La licencia se contrata de forma anual para facilitar la operación continua del equipo.",
  },
  {
    question: "¿Puedo empezar con la versión básica y luego migrar?",
    answer: "Sí. Puedes comenzar con la versión estándar y dar el salto a PLUS cuando requieras funciones avanzadas.",
  },
  {
    question: "¿Incluye acompañamiento para adopción interna?",
    answer: "Sí, te apoyamos para que tu equipo utilice la plataforma con una configuración inicial recomendada.",
  },
];

const testimonials = [
  {
    quote: "Con la versión PLUS tenemos el historial ordenado para auditorías internas.",
    author: "Notaría usuaria de ISR PLUS",
  },
  {
    quote: "Exportar información nos ahorró horas de trabajo operativo cada semana.",
    author: "Despacho fiscal inmobiliario",
  },
];

export default function CalcISRVersionPlusPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-amber-500/25 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#544fff]/30 blur-[110px]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.65)_100%)]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
            <div className="max-w-xl lg:max-w-none">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-amber-200/90 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Versión avanzada
              </p>
              <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Calculadora ISR{" "}
                <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-200/90 bg-clip-text text-transparent">
                  — Versión PLUS
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Diseñada para fedatarios y equipos que necesitan control completo del proceso, trazabilidad
                y una experiencia profesional sin fricción.
              </p>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-l-2 border-[#544fff] pl-5">
                <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">${PRICE_ISR_PRO}</p>
                <span className="text-base font-medium text-slate-400">/ año + IVA</span>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-[0_12px_40px_-8px_rgba(84,79,255,0.55)] transition hover:bg-[#4540e6] hover:shadow-[0_16px_48px_-8px_rgba(84,79,255,0.65)]"
              >
                Solicitar versión PLUS
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-400/35 via-[#544fff]/25 to-transparent opacity-90 blur-xl sm:-inset-4"
              />
              <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-sm sm:p-3">
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/calculo-isr-version-plus-hero.png"
                    alt="Vista de la calculadora ISR Plus: pestañas Terreno y Construcción, datos de compra y venta, cálculo por vendedor e ISR a pagar."
                    width={887}
                    height={958}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Comparativo de funcionalidades</h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">Funcionalidad</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">Base</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#544fff]">PLUS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <td className="px-6 py-4 text-sm text-slate-700">{row.label}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {row.base ? (
                          <CheckCircle size={18} className="text-emerald-600" />
                        ) : (
                          <span className="text-sm font-semibold text-slate-400">No</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {row.plus ? (
                          <CheckCircle size={18} className="text-[#544fff]" />
                        ) : (
                          <span className="text-sm font-semibold text-slate-400">No</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Preguntas frecuentes</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <article key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-[#544fff]" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                  )}
                </button>
                {openFaq === index && <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Testimonios de usuarios PLUS</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.quote} className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
                <p className="text-slate-700 leading-relaxed">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-500">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#544fff] py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Listo para activar la versión PLUS</h2>
          <p className="mt-5 text-lg text-indigo-100 leading-relaxed">
            Integra la calculadora avanzada en tu operación y centraliza resultados en un flujo profesional.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#544fff] shadow-lg transition hover:shadow-xl"
            >
              Solicitar activación
              <ArrowRight size={18} />
            </a>
            <a
              href={URL_ISR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Conocer plataforma ISR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
