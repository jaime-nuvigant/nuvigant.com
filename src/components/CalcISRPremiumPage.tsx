import { CheckCircle, Quote, ArrowRight } from "lucide-react";
import { PRICE_ISR_PRO } from "../constants";

const plusFeatures = [
  "Todo lo que incluye la versión gratuita",
  "Impresión de PDF personalizada con tu logo en vez del nuestro",
  "Desaparecen leyendas de promoción de Nuvigant",
  "Podrás guardar tus cálculos, editarlos o exportarlos en cualquier momento",
  "Consultar dudas sobre casos específicos",
  "Podrás exportar al DECLARANOT (Notarías)",
];

const testimonials = [
  {
    quote:
      "He usado muchos programas para calcular el ISR en mi trayectoria, pero este me gusta porque me permite imprimir formatos directamente del cálculo, lo puedo usar en el teléfono y pues obvio que sea gratis es muy conveniente.",
    author: "Lilia Marín",
    role: "Abogada Titular Notaría 16",
  },
  {
    quote:
      "Al calcular el impuesto en la aplicación me di cuenta de que a veces sale más barato que como regularmente lo calculo. Después de hablar con ellos me explicaron varios otros métodos que utilizan para bajar el costo del impuesto.",
    author: "Roberto Solís",
    role: "Contador Independiente",
  },
  {
    quote:
      "Me ayuda mucho poder calcular el ISR desde mi celular. Aunque los notarios son quien tienen la responsabilidad final de hacer este cálculo, el saber un estimado confiable es muy útil para mis clientes.",
    author: "Joquín Gómez",
    role: "BK Inmobiliaria",
  },
  {
    quote:
      "Muy seguido necesitaba calcular el impuesto y tenía mis hojas de Excel que eran difíciles de usar y de mantenerlas actualizadas. Su herramienta me quita ese problema.",
    author: "Rodrigo Lavoie",
    role: "Contador Independiente",
  },
];

export default function CalcISRPremiumPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Versión Plus de Calculadora de ISR por venta de inmuebles
          </h1>
          <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
            {plusFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3 text-white/90">
                <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-white" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 inline-block bg-white/10 rounded-xl px-6 py-3">
            <p className="text-white font-semibold text-lg">
              Costo: <span className="text-2xl font-extrabold">${PRICE_ISR_PRO} MXN</span> / año + IVA
            </p>
          </div>
          <div className="mt-8">
            <a
              href="/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#4161d4] shadow-lg transition hover:shadow-xl"
            >
              ¡Regístrate aquí!
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Más de 15,000 usuarios utilizan esta herramienta
            </h2>
            <p className="mt-3 text-slate-600">
              Inmobiliarias, notarías, y contadores en toda México. Más de 30 años en desarrollo de
              software notarial nos respaldan. Aquí hay algo de lo que dicen nuestros usuarios.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.author}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Quote size={20} className="text-[#2ea4f2]" />
                <p className="mt-4 text-slate-700 leading-relaxed">"{t.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-8 py-4 font-bold text-white shadow-lg transition hover:shadow-xl"
            >
              ¡Regístrate aquí!
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
