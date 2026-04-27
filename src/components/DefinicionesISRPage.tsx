"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { URL_ISR_CALCULATOR } from "../constants";

interface ToggleItem {
  title: string;
  body: string;
}

interface Section {
  heading: string;
  subtitle: string;
  items: ToggleItem[];
}

const sections: Section[] = [
  {
    heading: "Valores de Cálculo",
    subtitle:
      "Esta sección te muestra los valores que se usarán para el cálculo. Si hay algún ajuste (como precios antes de 1993) te mostrará aquí el ajuste.",
    items: [
      {
        title: "Fecha Enajenación",
        body: "La fecha en la que se vende el inmueble. Esta fecha la determinas tú en la aplicación. Esta fecha siempre es la misma para el terreno y para la construcción.",
      },
      {
        title: "Precio Enajenación",
        body: "El precio por el cual el inmueble es vendido. Esta puede llegar a estar separada en Precio Enajenación del Terreno y Precio de Enajenación de la construcción.",
      },
      {
        title: "Fecha Adquisición",
        body: "Es la fecha en la que el inmueble fue comprado originalmente. Esta puede llegar a ser diferente para la construcción y para el terreno, dependiendo del cálculo que estés realizando.",
      },
      {
        title: "Precio Adquisición",
        body: "El precio por el cual el inmueble fue comprado. Cuando se cuenta con terreno y construcción y no se tienen los precios por separado, por lo general se aplica la regla "ochenta veinte", en la cual el precio se separa yéndose 80% del precio a la construcción y el 20% restante al terreno.",
      },
      {
        title: "UDIs",
        body: "Las UDIs son unas unidades de valor que se determinan en base a la inflación. Estas son determinadas por el Banco de México. Son necesarias para calcular el valor que una persona puede exentar al vender la casa donde estuvo viviendo. Nuestro sistema las descarga en tiempo real del Banco de México a la hora de hacer el cálculo.",
      },
      {
        title: "UDIs Calculados",
        body: "Este es el valor que se podrá exentar si el enajenante está vendiendo el inmueble que fue su hogar. Para calcular este valor se usa la siguiente fórmula: 700,000 × UDIS × #ENAJENANTES.",
      },
      {
        title: "Deducción",
        body: "Este es el valor real a deducir. Es el menor entre la deducción calculada en UDIs calculados y el precio de enajenación. Esto es porque si el precio de enajenación es menor a las UDIs calculadas, se exenta el 100% del inmueble.",
      },
      {
        title: "Exención por casa habitación",
        body: "Es el porcentaje sobre el cual se realizará el cálculo después de tomar en cuenta la exención por casa habitación.",
      },
    ],
  },
  {
    heading: "Cálculos: Terreno o Construcción",
    subtitle:
      "En esta sección se hace la actualización (ajustar por inflación y depreciación) de los valores originales del inmueble.",
    items: [
      {
        title: "INPC",
        body: "Es el acrónimo de Índice Nacional de Precios al Consumidor. Esta es una de las maneras que tenemos a nuestra disposición para calcular la inflación de un inmueble. El Banco de México actualiza estos valores de manera mensual y nuestra aplicación consulta en tiempo real con el Banco de México a la hora de hacer un cálculo.",
      },
      {
        title: "Factor Ajustes Inflación",
        body: "Este es uno de los factores que podemos usar para calcular la inflación de un inmueble. Estos valores son actualizados anualmente y son publicados en el Anexo 9 de la Miscelánea Fiscal.",
      },
      {
        title: "Factor Utilizado",
        body: "El factor de inflación que será utilizado para el cálculo (INPC o Factor Ajustado de Inflación). Se escoge el más alto pues esto sube lo más posible el valor al precio de adquisición. Nos conviene que el precio de adquisición ajustado por inflación sea lo más alto posible, ya que de esta manera habrá menos ganancia y podrá el enajenante pagar menos ISR.",
      },
      {
        title: "Precio Actualizado",
        body: "El precio de adquisición multiplicado por el Factor Utilizado, resultando en el precio de adquisición actualizado por inflación. Nos conviene que sea lo más alto posible para reducir la ganancia gravable.",
      },
      {
        title: "% Depreciación",
        body: "Este valor es el porcentaje por el cual la construcción del inmueble será depreciada. Se obtiene multiplicando 3% por el número de años que transcurrieron entre la compra y venta del inmueble, teniendo como máximo una depreciación de 80%. Este cálculo solo se realiza para la construcción y no para el terreno, ya que este no se deprecia.",
      },
      {
        title: "Valor Depreciado",
        body: "Es el valor de la construcción después de tomar en cuenta la depreciación.",
      },
    ],
  },
  {
    heading: "Deducibles: Terreno o Construcción",
    subtitle:
      "En esta sección encontrarás los cálculos relacionados a las deducciones autorizadas y la suma de los resultados.",
    items: [
      {
        title: "Monto Original",
        body: "Aparece cuando existe una exención por casa habitación. Es el precio original pagado por el deducible sin haberle aplicado la exención por casa habitación, ni depreciado, ni ajustado por la inflación.",
      },
      {
        title: "Porcentaje Ajuste Casa Habitación",
        body: "En caso de aplicar la exención por casa habitación, los deducibles también deben reducirse de acuerdo al monto que fue exento. El valor que aparece aquí es el porcentaje restante después de hacer esta deducción.",
      },
      {
        title: "Monto",
        body: "El precio original pagado por el deducible. Es decir, el precio no depreciado y no ajustado por la inflación. Si existe exención por casa habitación, este monto ya lo está tomando en cuenta.",
      },
      {
        title: "Fecha",
        body: "La fecha en la que se realizó el gasto deducible.",
      },
      {
        title: "% Depreciación",
        body: "Este valor es el porcentaje por el cual el gasto deducible será depreciado. Se obtiene multiplicando 3% por el número de años que transcurrieron entre la compra y venta del inmueble, teniendo como máximo una depreciación de 80%.",
      },
      {
        title: "Valor Depreciado",
        body: "Es el valor de la construcción después de tomar en cuenta la depreciación.",
      },
      {
        title: "Total Deducibles Construcción o Terreno",
        body: "El total de los deducibles actualizados que fueron aplicados tanto al terreno o la construcción.",
      },
      {
        title: "Total Deducciones por Gastos",
        body: "La suma de todos los deducibles tanto del terreno como de la construcción.",
      },
    ],
  },
  {
    heading: "Resultados: Terreno o Construcción",
    subtitle: "En esta sección encontrarás los resultados de la actualización de los precios de compra.",
    items: [
      {
        title: "Total Deducciones Actualizadas",
        body: "Es el valor total que se pagó por el inmueble. Es decir, el valor del terreno y/o construcción ajustado por inflación, depreciación y cualquier otro ajuste necesario. A esto también se suman los resultados de las deducciones, también ya ajustadas. En pocas palabras, es lo que se le va a restar al precio de venta para calcular la ganancia obtenida.",
      },
      {
        title: "Utilidad Gravable",
        body: "Es la neta ganancia que se obtuvo por la venta del inmueble. Sobre este valor se calculará el ISR.",
      },
      {
        title: "Años Transcurridos",
        body: "La cantidad de años que pasaron entre la compra y venta del inmueble.",
      },
      {
        title: "Utilidad Anual",
        body: "La ganancia que se obtuvo cada año. Se debe calcular porque el arancel que se usa para calcular el ISR está anualizado.",
      },
    ],
  },
  {
    heading: "Enajenantes",
    subtitle:
      "Aquí se imprime lo que cada enajenante deberá pagar y se muestra cómo se realiza el cálculo de acuerdo al arancel.",
    items: [
      {
        title: "Porcentaje de Participación",
        body: "Qué porcentaje del inmueble que se vendió le pertenece al enajenante. Esto es importante porque la ganancia de cada enajenante cambiará de acuerdo a su participación.",
      },
      {
        title: "Utilidad Gravable Enajenante",
        body: "La ganancia que obtuvo el enajenante. Se multiplica la ganancia total por el porcentaje de participación para obtener este monto.",
      },
      {
        title: "Utilidad Anual Enajenante",
        body: "La ganancia que obtuvo el enajenante dividida entre los años transcurridos entre la compra y la venta del inmueble.",
      },
      {
        title: "El cálculo en sí del ISR",
        body: "En esta parte aparecen las diferentes operaciones para calcular el impuesto a pagar ya teniendo las ganancias por enajenante:\n\nUTILIDAD MENOS RANGO INFERIOR IMPUESTO ANUAL = SUMA CUOTA FIJA\nFACTOR (IMPUESTO ÷ UTILIDAD GRAVABLE DEL ENAJENANTE)\nISR TERRENO (UTILIDAD TERRENO × AÑOS × FACTOR)\nISR CONSTRUCCIÓN (UTILIDAD CONSTRUCCIÓN × AÑOS × FACTOR)\n\nLos valores se obtienen a partir de un arancel que puedes encontrar en el Anexo 8 de la Miscelánea Fiscal, tabla 1.A.",
      },
      {
        title: "ISR a la Entidad Federal",
        body: "El ISR que se le pagará al estado. Es como máximo el 5% de la utilidad, pagando el restante a la federación.",
      },
      {
        title: "ISR a la Federación",
        body: "El ISR que se le pagará a la federación. Este es el monto que se exceda sobre el 5% de la ganancia.",
      },
    ],
  },
];

function AccordionItem({ title, body }: ToggleItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-slate-900 pr-4">{title}</span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-slate-600 leading-relaxed whitespace-pre-line">{body}</p>
      )}
    </div>
  );
}

export default function DefinicionesISRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2ea4f2] mb-3">Glosario</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Definiciones del Cálculo de ISR
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            En esta página encontrarás las definiciones que debes saber para poder realizar el cálculo
            de ISR por enajenación de inmuebles.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Genera tu primer cálculo, ¡es gratis!
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Las definiciones que encuentras abajo explican el PDF que imprime nuestra herramienta
                de cálculo de ISR después de realizar el cálculo. Antes de seguir, te recomendamos
                ir a probarla.
              </p>
              <div className="mt-6">
                <a
                  href={URL_ISR_CALCULATOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
                >
                  Ver más información
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-16">
          {sections.map((sec) => (
            <div key={sec.heading} className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <div className="h-2 w-8 bg-slate-900 mb-4 rounded" />
                <h2 className="text-2xl font-extrabold text-slate-900 leading-snug">
                  {sec.heading}
                </h2>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{sec.subtitle}</p>
              </div>
              <div className="divide-y divide-slate-200">
                {sec.items.map((item) => (
                  <AccordionItem key={item.title} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
