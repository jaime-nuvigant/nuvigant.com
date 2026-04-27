"use client";

import { useState } from "react";
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
      <section className="bg-[#f6f2ea] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#544fff]">
              Versión avanzada
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Calculadora ISR — Versión PLUS
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Diseñada para fedatarios y equipos que necesitan control completo del proceso, trazabilidad
              y una experiencia profesional sin fricción.
            </p>
            <p className="mt-8 text-5xl font-extrabold text-slate-900">
              ${PRICE_ISR_PRO}
              <span className="ml-2 text-lg font-semibold text-slate-500">/ año + IVA</span>
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Solicitar versión PLUS
              <ArrowRight size={18} />
            </a>
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
