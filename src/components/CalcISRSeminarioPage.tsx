"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Star } from "lucide-react";
import { WA_LINK } from "../constants";

const pricingTiers = [
  {
    name: "Acceso seminario",
    price: "$1,490",
    period: "pago único",
    description: "Ideal para actualizarte con metodología y criterios aplicables a casos frecuentes.",
    features: [
      "Acceso a la sesión completa",
      "Material de consulta posterior",
      "Ejemplos guiados de cálculo",
    ],
  },
  {
    name: "Seminario + implementación",
    price: "$2,900",
    period: "pago único",
    description: "Incluye acompañamiento para aplicar lo aprendido en tu flujo operativo real.",
    features: [
      "Todo lo del acceso seminario",
      "Sesión de dudas con el equipo",
      "Checklist de adopción interna",
    ],
  },
];

const faqs = [
  {
    question: "¿El seminario está dirigido solo a notarías?",
    answer: "Está orientado a notarías, pero también resulta útil para inmobiliarias y despachos legales o fiscales.",
  },
  {
    question: "¿Recibo constancia de participación?",
    answer: "Sí, compartimos constancia de participación al finalizar para quienes completen el registro.",
  },
  {
    question: "¿Puedo invitar a más personas de mi equipo?",
    answer: "Sí, podemos habilitar acceso para varios asistentes según el plan que elijas.",
  },
];

const testimonials = [
  "Aplicamos el enfoque del seminario y mejoramos la precisión de nuestros cálculos.",
  "La sesión fue clara, práctica y enfocada en casos reales de operación.",
  "El acompañamiento posterior nos ayudó a aterrizar el proceso rápidamente.",
  "Muy útil para unificar criterios entre áreas jurídica y fiscal.",
];

export default function CalcISRSeminarioPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#f6f2ea] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#544fff]">
              Actualización fiscal
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
              Seminario de cálculo ISR para enajenación de inmuebles
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Un programa práctico para reforzar criterios, resolver dudas recurrentes y mejorar la operación
              diaria en casos de compraventa inmobiliaria.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Reservar lugar
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Opciones de inscripción</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {pricingTiers.map((tier, idx) => (
              <article
                key={tier.name}
                className={`rounded-2xl border bg-white p-8 shadow-sm ${idx === 1 ? "border-[#544fff] shadow-lg" : "border-slate-200"}`}
              >
                <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-2 text-slate-600">{tier.description}</p>
                <p className="mt-6 text-5xl font-extrabold text-slate-900">
                  {tier.price}
                  <span className="ml-2 text-base font-semibold text-slate-500">{tier.period}</span>
                </p>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#544fff]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Testimonios</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Star size={18} className="text-amber-500" />
                <p className="mt-3 text-slate-700 leading-relaxed">"{item}"</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Solicitar información
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
