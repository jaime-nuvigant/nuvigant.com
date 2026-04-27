"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, CheckCircle } from "lucide-react";
import { URL_ISR_CALCULATOR } from "../constants";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  title: string;
  items: FaqItem[];
}

const faqSections: FaqSection[] = [
  {
    title: "Generales del ISR",
    items: [
      {
        question: "¿Qué es la ley de cálculo ochenta veinte?",
        answer:
          "El cálculo ochenta veinte es una de las diferentes variantes para calcular el ISR cuando se vende una propiedad que cuenta con terreno y con construcción. Se utiliza cuando no se conoce (o no existe) un precio de adquisición por separado del terreno y de la construcción. Lo que se hace es separar el monto total de adquisición, dándole el 80% a la construcción y el 20% al terreno. De esa separación viene el nombre.",
      },
      {
        question: "¿El IVA de un local comercial se calcula a partir del ISR por enajenación?",
        answer:
          "No, estos son impuestos independientes. El IVA por un local comercial lo paga el comprador y lo recibe y declara el vendedor.",
      },
      {
        question: "¿Cómo funciona el cálculo de ISR por segregación de un inmueble?",
        answer:
          "Funciona de una manera muy similar a los demás cálculos. Supongamos que compraste un inmueble por $100,000.00 MXN y decides vender el 20% del inmueble. El precio de venta se pacta entre las dos partes a la hora de hacer la transacción, mientras que el precio de adquisición sería el porcentaje del precio de adquisición completo. En este caso, el precio de adquisición sería el 20% de $100,000.00, que equivale a $20,000.00 MXN.",
      },
    ],
  },
  {
    title: "Impuesto Cedular",
    items: [
      {
        question: "¿Qué es el impuesto cedular?",
        answer:
          "El impuesto cedular es una contribución que varía por estado y se genera cuando una persona física realiza ciertas actividades. Los estados que actualmente cobran este impuesto son: Chihuahua, Yucatán, Guanajuato, Guerrero, Nayarit, Oaxaca y Quintana Roo. Las entidades federativas pueden captar este impuesto sobre ingresos por servicios profesionales, uso o goce temporal de inmuebles, enajenación de bienes inmuebles, o actividades empresariales.",
      },
      {
        question: "¿Qué significa utilizar el impuesto cedular como una deducción?",
        answer:
          "Al calcular el ISR por enajenación de inmuebles, el impuesto cedular puede ser añadido como una deducción. Para esto es necesario primero calcular la ganancia obtenida SIN añadir el impuesto cedular y de ahí se calcula el cedular como lo establezca cada estado. Teniendo el cedular calculado, se hace el cálculo de nuevo añadiendo el impuesto cedular como un deducible (no depreciable). Nuestra herramienta permite hacer esto de manera automática.",
      },
      {
        question: "¿Cuáles estados cobran este impuesto?",
        answer:
          "Los estados que actualmente cobran este impuesto son: Chihuahua, Yucatán, Guanajuato, Guerrero, Nayarit, Oaxaca y Quintana Roo.",
      },
    ],
  },
  {
    title: "Sobre la herramienta",
    items: [
      {
        question: "¿Cómo añado y edito la información de los enajenantes?",
        answer:
          "La información de los enajenantes la puedes editar en la tabla de enajenantes que encuentras en el apartado debajo de donde pones los parámetros de cálculo. Puedes añadir un enajenante dando clic en el botón azul con el signo de \"+\". Al añadir un enajenante, el sistema lo agrega con el nombre \"Enajenante #1, 2, 3... etc\" por default. El nombre y porcentaje de participación lo puedes editar directamente en la tabla. Para editar el CURP y RFC es necesario que des click en el lápiz azul que está enseguida del nombre del enajenante.",
      },
      {
        question: "¿Cómo funciona compensar la pérdida con ganancia?",
        answer:
          "La herramienta cuenta con la capacidad de compensar la pérdida con la ganancia al momento de realizar los cálculos. Esta opción se encuentra disponible para seleccionarla en las distintas opciones de la sección del cálculo de Terreno y Construcción con la casilla que dice "Compensar pérdida con ganancia". Por ejemplo, si al hacer el cálculo se obtiene ganancia del Terreno y cuando se calculan los valores de la Construcción en lugar de ganancia se obtiene pérdida, automáticamente a la ganancia se le resta la pérdida antes de continuar.",
      },
      {
        question: "¿Cada cuándo actualizan los índices?",
        answer:
          "Nuestra aplicación cuenta con acceso a las actualizaciones más recientes del Banco de México, por lo que se actualiza en tiempo real con lo que libera Banxico. Cada vez que se realiza un cálculo, la aplicación consulta directamente los índices con el Banco de México. Nosotros no actualizamos los índices manualmente.",
      },
      {
        question: "No veo que pueda imprimir un formato de mi estado, ¿qué puedo hacer?",
        answer:
          "La herramienta cuenta con la capacidad de imprimir formatos PDF llenados con la información de los cálculos que realices. Esto se hace con el botón que dice \"Imprimir Formatos\". Si no ves el formato que deseas imprimir, ponte en contacto con nosotros y lo podemos añadir.",
      },
    ],
  },
];

function FaqAccordion({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>}
    </div>
  );
}

export default function PreguntasFrecuentesISRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2ea4f2] mb-3">F.A.Q.</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Preguntas frecuentes del cálculo de ISR por enajenación de inmuebles
          </h1>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">
          {faqSections.map((sec) => (
            <div key={sec.title} className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="h-2 w-8 bg-slate-900 mb-4 rounded" />
                <h2 className="text-2xl font-extrabold text-slate-900 leading-snug">
                  {sec.title}
                </h2>
              </div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-6">
                {sec.items.map((item) => (
                  <FaqAccordion key={item.question} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Conoce nuestra herramienta de cálculo de ISR gratuita
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Nuvigant te ofrece una herramienta gratuita para calcular el ISR. Sin ningún costo y
                directo desde tu celular.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Siempre se mantiene actualizada con los índices de BANXICO",
                  "Puedes hacer el cálculo directamente en el celular",
                  "Te imprime un PDF que explica paso por paso cómo se realizó el cálculo",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#2ea4f2]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={URL_ISR_CALCULATOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  Ver más información
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
    </div>
  );
}
