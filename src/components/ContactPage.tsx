"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { EMAIL_MAIN, WA_DISPLAY, WA_LINK } from "@/constants";

const faqs = [
  {
    q: "¿Cuánto tiempo se tarda en implementar la plataforma?",
    a: "Nuestra plataforma es bastante fácil de usar y la mayoría de los clientes no tienen problemas. El tiempo exacto de implementación depende de los módulos que contratas, eso sí, desde la primer capacitación estarás integrando y controlando tu operación.",
  },
  {
    q: "¿Cómo comienzo?",
    a: "Antes que nada, ponte en contacto con nosotros. Nos gusta conocer a nuestros usuarios y nos esforzamos para entender lo que buscas y poder determinar junto contigo si nuestra solución es lo que necesitas.",
  },
  {
    q: "¿Con qué recursos de soporte al cliente cuentan?",
    a: "Nosotros estamos convencidos que no importa la calidad del sistema, si éste no tiene buen soporte y servicio al cliente, no va a funcionar. Dentro de la aplicación tendrás un chat con el que te podrás comunicar con nosotros en cualquier momento. Nuestros tiempos de respuesta rara vez son más de 5 minutos. También tendrás acceso a muchos vídeos tutoriales y a nuestro manual de sistema en línea.",
  },
  {
    q: "¿Cómo funciona la implementación?",
    a: "Para empresas entre 1-30 empleados, por lo regular es suficiente hacer tres capacitaciones en línea y que se designe un 'implementador' dentro de la empresa. Para empresas entre 31-100 empleados, es recomendado que se contrate el servicio de implementación 'On-Site'. Si tu empresa es más grande, contáctanos y analizaremos tu operación a profundidad.",
  },
  {
    q: "¿Cuáles son los precios?",
    a: "Te dirigimos a nuestra página de precios donde puedes ver los precios de la plataforma.",
  },
  {
    q: "¿Qué tan segura es la nube?",
    a: "¡Bastante segura! Nos tomamos muy en serio la seguridad de tus datos, tu información se encuentra segura desde el momento en que la capturas hasta el momento en que se almacena en tu base de datos.",
  },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-all border-t-4 border-t-[#3D72E7]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-slate-800 text-sm leading-relaxed">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-slate-400 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown size={18} className="text-slate-400 shrink-0 mt-0.5" />
        )}
      </div>
      {open && <p className="mt-4 text-slate-500 text-sm leading-relaxed">{a}</p>}
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-36 lg:pb-20 text-center">
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
        <div className="relative max-w-2xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Hay que platicar
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Ponte en contacto con nosotros ya sea en alguno de los siguientes correos o directamente en el chat que encuentras abajo a la derecha.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-12">
            {/* Sales */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
                <Mail size={32} className="text-[#056dfe]" strokeWidth={1.4} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hablar con Ventas</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                ¿Estás interesad@ en saber más sobre el servicio? Escríbenos o agenda una demo.
              </p>
              <p className="text-[#056dfe] font-semibold text-sm">{EMAIL_MAIN}</p>
              <a
                href={`mailto:${EMAIL_MAIN}`}
                className="mt-2 inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contactar
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Support */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center">
                <Phone size={32} className="text-[#2ea4f2]" strokeWidth={1.4} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Contacto de Soporte</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                ¿Ya eres usuario de la aplicación y tienes una duda? Ponte en contacto con nuestro equipo de soporte.
              </p>
              <p className="text-[#2ea4f2] font-semibold text-sm">soporte@nuvigant.com</p>
              <a
                href="mailto:soporte@nuvigant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contactar
                <ArrowRight size={14} />
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center">
                <MessageCircle size={32} className="text-[#25D366]" strokeWidth={1.4} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Ponte en contacto con ventas por WhatsApp. Escríbenos al
              </p>
              <p className="text-green-600 font-semibold text-sm">{WA_DISPLAY}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contactar
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Email Form Section ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Envía un correo
            </h2>
            <p className="mt-4 text-slate-500 text-lg">
              Te dejamos esta forma que de igual manera puedes usar para contactarnos con cualquier duda.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <form
              action={`mailto:${EMAIL_MAIN}`}
              method="get"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre completo"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Correo</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
                <textarea
                  name="mensaje"
                  rows={5}
                  placeholder="¿En qué te podemos ayudar?"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Enviar mensaje
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-slate-500">Mientras nos ponemos en contacto, te dejamos algunas preguntas y respuestas frecuentes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <FAQ key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
