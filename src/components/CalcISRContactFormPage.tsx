"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, CircleCheckBig } from "lucide-react";
import { WA_LINK } from "../constants";

const faqs = [
  {
    question: "¿En cuánto tiempo me contactan?",
    answer: "Normalmente te contactamos en horario laboral durante el mismo día hábil.",
  },
  {
    question: "¿Qué información necesitan para cotizar?",
    answer: "Con tu tipo de operación y el objetivo del uso podemos proponerte una ruta y plan recomendado.",
  },
  {
    question: "¿Pueden hacer una demostración para mi equipo?",
    answer: "Sí, podemos coordinar una sesión breve para mostrar el flujo completo con casos reales.",
  },
  {
    question: "¿La calculadora se puede usar desde celular?",
    answer: "Sí, la herramienta está optimizada para utilizarse desde dispositivos móviles y escritorio.",
  },
];

export default function CalcISRContactFormPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-16 lg:pt-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CircleCheckBig className="text-emerald-600" size={32} />
          </div>
          <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Formulario enviado correctamente
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Gracias por tu interés. Ya recibimos tus datos y te contactaremos para ayudarte con la mejor
            versión de la calculadora ISR para tu operación.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
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
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">¿Quieres acelerar la implementación?</h2>
          <p className="mt-5 text-lg text-slate-600">
            Escríbenos por WhatsApp y te ayudamos a definir la mejor opción para tu caso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Hablar por WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
