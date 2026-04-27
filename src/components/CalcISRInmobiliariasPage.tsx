"use client";

import { useState } from "react";
import { ArrowRight, Building2, Calculator, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { URL_ISR_CALCULATOR, WA_LINK } from "../constants";

const accordionItems = [
  {
    title: "Cálculo guiado para operaciones inmobiliarias",
    content:
      "Organiza los datos de la operación en una ruta de captura clara para reducir omisiones y retrabajo en el cálculo fiscal.",
  },
  {
    title: "Escenarios comunes en compraventa",
    content:
      "Incluye supuestos frecuentes del sector para que el equipo comercial y jurídico tenga una referencia uniforme en cada caso.",
  },
  {
    title: "Resultado listo para compartir",
    content:
      "Obtén un resumen entendible para asesores y clientes, facilitando la explicación del monto y sus variables.",
  },
];

const benefits = [
  {
    title: "Más cierres con claridad",
    description: "Responde dudas fiscales rápido y mejora la confianza en la negociación.",
    icon: Building2,
  },
  {
    title: "Menos errores manuales",
    description: "Estandariza el cálculo y evita depender de hojas aisladas por asesor.",
    icon: Calculator,
  },
  {
    title: "Operación más ágil",
    description: "Acelera tiempos de respuesta entre comercial, jurídico y firma notarial.",
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    quote: "Ahora entregamos escenarios fiscales al cliente en la misma llamada.",
    author: "Coordinación comercial, inmobiliaria",
  },
  {
    quote: "El equipo redujo considerablemente ajustes de último momento.",
    author: "Dirección de operaciones, firma patrimonial",
  },
];

export default function CalcISRInmobiliariasPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#f6f2ea] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#544fff]">
              Solución para inmobiliarias
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Calculadora ISR para equipos inmobiliarios
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Estandariza tus cotizaciones de ISR y acelera el acompañamiento de clientes durante el proceso de
              compraventa.
            </p>
            <div className="mt-10">
              <a
                href={URL_ISR_CALCULATOR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                Probar versión actual
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">
            Funcionalidades destacadas
          </h2>
          <div className="mt-10 space-y-4">
            {accordionItems.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-base font-semibold text-slate-900">{item.title}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} className="text-[#544fff]" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                  )}
                </button>
                {openIndex === index && <p className="px-6 pb-5 text-slate-600 leading-relaxed">{item.content}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2ea4f2] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center">Beneficios para tu operación</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl bg-white p-7 shadow-lg">
                  <Icon size={24} className="text-[#544fff]" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl border-2 border-[#544fff] bg-white p-8 shadow-xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#544fff]">Plan recomendado</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Versión PLUS para inmobiliarias</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Accede al flujo avanzado para guardar cálculos, documentar procesos y trabajar de forma consistente
              en todo tu equipo.
            </p>
            <p className="mt-6 text-5xl font-extrabold text-slate-900">
              $5,800
              <span className="ml-2 text-lg font-semibold text-slate-500">/ año + IVA</span>
            </p>
            <a
              href="/fedatarios/calculo-isr/get-version-plus"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Ver detalles de la versión PLUS
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Testimonios</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item.quote} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700 leading-relaxed">"{item.quote}"</p>
                <p className="mt-4 text-sm font-semibold text-slate-500">{item.author}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Agendar asesoría
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
