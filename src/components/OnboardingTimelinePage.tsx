"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { EMAIL_MAIN } from "@/constants";

const phaseOne = [
  {
    title: "1. Dar de Alta Usuarios",
    body: "Cuando tú nos notificas que estás listo para comenzar, nosotros arreglamos todo para que puedas empezar y hacemos saber cuándo y cómo dar de alta a todo tu equipo dentro de la plataforma.",
  },
  {
    title: "2. Primera Capacitación General",
    body: "Agendaremos la primera capacitación contigo y tu equipo, donde veremos lo básico de la plataforma y te indicaremos cómo pedir ayuda en caso de que la necesites.",
  },
  {
    title: "3. Personalización",
    body: "Dependiendo de los módulos que desees usar, nos juntaremos con los miembros necesarios de tu equipo para personalizar la aplicación a tu operación y enseñarles cómo pueden hacer estas modificaciones ustedes mismos.",
  },
  {
    title: "4. Dos Semanas de Uso",
    body: "Después de la primera capacitación tendrás dos semanas para usar la aplicación antes de nuestra segunda junta. Durante este tiempo podrás hablar con nuestro equipo de soporte cuando lo necesites y tendrás acceso a nuestros videos, tutoriales y manuales en línea.",
  },
];

const phaseTwo = [
  {
    title: "1. Segunda Capacitación",
    body: "Esta capacitación la dedicamos principalmente para analizar la manera en que estás usando la aplicación. En caso de detectar errores, los comentaremos y corregiremos ahí mismo. Aquí también aprovecharemos para responder a cualquier duda que pueda seguir habiendo sobre el uso de la aplicación.",
  },
  {
    title: "2. Definimos Indicadores a Medir",
    body: "En este punto, también definiremos indicadores clave que te interese controlar usando la aplicación y nos aseguraremos de que estés capturando la información de la manera adecuada para poder medirlos en tus reportes.",
  },
];

const phaseThree = [
  {
    title: "1. Última Capacitación",
    body: "Durante esta capacitación se resuelven las últimas dudas y sacaremos los primeros reportes con los indicadores que tú buscas.",
  },
  {
    title: "2. Soporte Continuo",
    body: "No importa que ya hayan pasado las tres capacitaciones, seguirás teniendo el mismo apoyo que te dimos desde el principio. En cualquier momento podrás chatear con nuestro equipo de soporte, para lo que sea que necesites.",
  },
  {
    title: "3. Capacitaciones Adicionales",
    body: "Aunque muy probablemente no lo necesites, con mucho gusto podemos agendar capacitaciones adicionales para ayudarte en lo que sea que puedas llegar a batallar.",
  },
];

function AccordionItem({ title, body, defaultOpen = false }: { title: string; body: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:shadow-md transition-all"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-slate-800 text-sm">{title}</span>
        {open ? (
          <ChevronUp size={16} className="text-slate-400 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown size={16} className="text-slate-400 shrink-0 mt-0.5" />
        )}
      </div>
      {open && <p className="mt-3 text-slate-500 text-sm leading-relaxed font-normal">{body}</p>}
    </button>
  );
}

function PhaseSection({ number, label, subtitle, items }: { number: string; label: string; subtitle: string; items: { title: string; body: string }[] }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-2">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-lg shrink-0"
          style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
        >
          {number}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{label}</h3>
      </div>
      <p className="text-slate-500 text-sm mb-5 ml-14">{subtitle}</p>
      <div className="ml-14 space-y-3">
        {items.map((item, i) => (
          <AccordionItem key={item.title} {...item} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}

export default function OnboardingTimelinePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28 text-center">
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
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Empezar a trabajar en la nube no tiene que ser complicado
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Nuestro proceso de "OnBoarding" de clientes, para que empieces a usar nuestra plataforma, ya lleva tiempo de
            ser probado y exitoso.
          </p>
        </div>
      </section>

      {/* ── Timeline Content ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Una experiencia diseñada contigo en mente
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nada nos da más gusto que cuando un cliente descubre lo sencillo que es usar la aplicación y lo fácil que
              se vuelve tener todo bajo control. Aquí te platicamos sobre nuestro proceso de "OnBoarding" para que tu
              comienzo con Nuvigant sea lo más sencillo posible.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>¿Ya te decidiste por Nuvigant?</strong> Contáctanos y haznos saber que estás listo para empezar.
              Aquí te dejamos el proceso que sigue:{" "}
              <em>(este es el proceso normal para empresas con menos de 40 colaboradores, si cuentas con más, recomendamos una implementación "On Site")</em>
            </p>
          </div>

          <PhaseSection
            number="1"
            label="Primera Parte"
            subtitle="Primeras semanas"
            items={phaseOne}
          />

          <PhaseSection
            number="2"
            label="Segunda Parte"
            subtitle="Dos semanas después — en este punto ya habrás, junto con tu equipo, entendido cómo funciona lo esencial de la plataforma."
            items={phaseTwo}
          />

          <PhaseSection
            number="3"
            label="Última Parte"
            subtitle="Dos semanas después — en este punto ya serás todo un Nuvigante y podrás empezar a medir tus primeros indicadores."
            items={phaseThree}
          />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Vamos a platicar
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                En verdad estamos convencidos que nuestro producto te puede hacer la vida fácil. Contáctanos y
                platiquemos para ver cómo te podemos ayudar.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
              >
                Contáctanos
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 flex items-center justify-center min-h-[260px]">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-slate-700 font-semibold text-lg">Implementación exitosa</p>
                <p className="text-slate-500 text-sm mt-2">Probada y perfeccionada con cada cliente</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
