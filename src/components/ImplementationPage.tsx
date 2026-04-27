"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionGroupProps {
  heading: string;
  items: AccordionItem[];
}

function AccordionGroup({ heading, items }: AccordionGroupProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold text-slate-700 mb-4">{heading}</h3>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-100 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-white text-left font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span>{item.title}</span>
              {open === i ? (
                <ChevronUp size={18} className="shrink-0 text-slate-400" />
              ) : (
                <ChevronDown size={18} className="shrink-0 text-slate-400" />
              )}
            </button>
            {open === i && (
              <div className="px-6 pb-5 pt-1 bg-white text-slate-500 text-sm leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const SECTION_1: AccordionItem[] = [
  {
    title: "1. Jueguen con él sin miedo",
    content:
      "El sistema no se va a romper si le pican a algo que no se debe. Por esto recomendamos que se tomen un tiempo para jugar con él y ver qué pasa. La base de datos puede ser restaurada en cualquier momento.",
  },
  {
    title: "2. Ponte en contacto",
    content:
      "Nuestro equipo de soporte está disponible para apoyarte por medio del chat dentro de la plataforma. Que no te dé miedo, escríbenos con cualquier duda. Nos queda muy claro que al principio es cuando más necesitarás ayuda, entonces no te estreses y escríbenos con cualquier problema que puedas tener.",
  },
  {
    title: "3. Personaliza",
    content:
      "Aunque nosotros te dejamos precargada información de acuerdo a tus procesos, una de las ventajas de nuestra plataforma es lo personalizable que es. Entonces te recomendamos que te tomes un tiempo de analizar las configuraciones y modificarlas a tu gusto.",
  },
];

const SECTION_2: AccordionItem[] = [
  {
    title: "1. Separar las responsabilidades",
    content:
      "Probablemente el consejo más importante que les podemos dar es que separen las responsabilidades dentro del sistema de cada quién por función. Esto evita varios problemas como que caiga mucha responsabilidad en una sola persona, la necesidad de contactar varias veces al cliente para pedirle su información, y que se duplique el trabajo dentro del sistema.",
  },
  {
    title: "2. Recepción",
    content:
      "Nosotros recomendamos que recepción capture la información de las personas dentro del sistema — idealmente toda la necesaria para imprimir el expediente único de identificación (EUI). También que realicen la primer búsqueda en los listados negros y que carguen los documentos de identificación al expediente electrónico del cliente. Si se cumplen estos puntos lo más pronto posible, efectivamente nadie entra a tus oficinas sin que sepan exactamente quién es.",
  },
  {
    title: "3. Jurídico",
    content:
      "Recomendamos fuertemente que el área jurídica no realice la captura de la información de las personas. La labor del área jurídica dentro del sistema es: abrir el expediente al cliente, generar su presupuesto, darle seguimiento a la operación, realizar la segunda búsqueda en los listados negros al día de la firma, y cargar documentos necesarios al expediente.",
  },
  {
    title: "4. Contabilidad",
    content:
      "En contabilidad lo que consideramos adecuado hacer dentro del sistema es: recibir el dinero, generar cheques (pagos de impuestos a las entidades de gobierno, proveedores, etc.) y generar las facturas y sus complementos. Si las demás áreas no cumplen su parte, es posible que toda la gestión recaiga en contabilidad, algo que recomendamos fuertemente se evite.",
  },
];

const SECTION_3: AccordionItem[] = [
  {
    title: "1. Captura Todo",
    content:
      "Si tienes algo urgente que comunicar es muy fácil hablar por teléfono y decirlo. Solo hay un problema con esto: no queda grabado para el futuro. Recomendamos que se tome la mentalidad de: si no está en el sistema, no pasó. ¿Tienes algo urgente que comunicar? Mándaselo a tu compañer@ por medio de una notificación dentro de la etapa que necesitas.",
  },
  {
    title: "2. En casos más extremos",
    content:
      "Una medida un poco más severa, pero bastante efectiva, es que el/la fedatario/a no firme nada si no están todos los recibos dentro del sistema.",
  },
];

export default function ImplementationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Tips de Implementación
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            La parte que más cuesta trabajo de cualquier sistema es la implementación.
            Aquí te dejamos algunos puntos a tomar en cuenta que hemos visto sirven mucho
            específicamente para notarios y corredores públicos.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-slate-500 mb-12 leading-relaxed">
            <span className="font-semibold text-slate-700">El tiempo que le dediques determinará lo que obtendrás.</span>{" "}
            Estaremos aquí para apoyarte durante todo el proceso. Que no te dé pena ponerte en
            contacto con nosotros.
          </p>

          <AccordionGroup heading="Empezar a Conocer el Sistema" items={SECTION_1} />
          <AccordionGroup heading="La Operación con el Sistema" items={SECTION_2} />
          <AccordionGroup
            heading='Candados Administrativos — "Si no está en el sistema, no pasó"'
            items={SECTION_3}
          />
        </div>
      </section>
    </div>
  );
}
