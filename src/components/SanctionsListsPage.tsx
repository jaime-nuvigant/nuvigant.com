import { Search, FileCheck, List, ArrowRight } from "lucide-react";
import { URL_SCHEDULE_DEMO } from "../constants";

const features = [
  {
    icon: Search,
    title: "Diversos Campos",
    desc: "Busca utilizando nombres, RFC's (SSN), o número de pasaportes.",
  },
  {
    icon: ArrowRight,
    title: "Realiza la búsqueda",
    desc: "Realiza la búsqueda y obtén una respuesta en segundos. Puedes hacerlo por medio de un API si requieres integración a tu sistema o una interfaz gráfica.",
    featured: true,
  },
  {
    icon: FileCheck,
    title: "Imprime una constancia",
    desc: "Mantén un registro de todas tus búsquedas imprimiendo un PDF con la información de la búsqueda. Si utilizas nuestro CRM, podrás guardar tu búsqueda directamente en el expediente de tus clientes.",
  },
];

const lists = [
  "Listado Consolidado de la ONU",
  "Listado de EFOS y EDOS (empresas que venden facturas)",
  "Listado del OFAC (Office of Foreign Assets Control, Departamento del Tesoro de Estados Unidos)",
  "Listados internacionales de PEPs (personas expuestas políticamente)",
];

const plans = [
  {
    name: "Paquete Inicial",
    subtitle: "El que casi todo mundo usa",
    price: "$300",
    period: "USD / año",
    items: [
      "+ 50,000 búsquedas al año",
      "+ Los listados que en verdad requieres buscar",
      "+ Descargar por interfaz gráfica o por medio de API",
      "+ Soporte de 'OnBoarding'",
    ],
    cta: "Agenda una demo",
  },
  {
    name: "Servicios Adicionales",
    subtitle: "Personaliza tu servicio",
    price: "$-",
    period: "USD / año",
    items: [
      "+ Listados adicionales",
      "+ Búsquedas adicionales",
      "+ Personalización de constancia de búsqueda (PDF)",
      "+ Búsquedas masivas de nombres",
    ],
    cta: "Agenda una demo",
  },
];

export default function SanctionsListsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Búsqueda de Listados Negros (KYC)
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Nuestro software realiza búsquedas únicamente en los listados que se requiere
            por la ley. No añadimos herramientas sofisticadas adicionales que no necesitas
            en verdad y te lo ofrecemos a un excelente precio.
          </p>
          <div className="mt-10">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3ed5ef] to-[#4ae081] px-7 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Agenda una demo
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              Conocer a tu cliente hecho sencillo
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Olvídate de pagar por herramientas de inteligencia artificial y demás que
              aunque suena muy sofisticado, no es requerido por la ley.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {features.map(({ icon: Icon, title, desc, featured }) => (
              <div
                key={title}
                className={`flex flex-col items-center text-center gap-4 rounded-2xl p-8 ${
                  featured
                    ? "bg-white shadow-md border-t-4 border-t-[#056dfe] border-slate-100"
                    : "bg-white shadow-sm border border-slate-100"
                }`}
              >
                <Icon size={36} className="text-[#4161d4]" />
                <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Agenda una demo
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Los listados</h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              Consulta los listados que te exige buscar la UIF y el SAT.
            </p>
            <ul className="space-y-3 mb-6">
              {lists.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <List size={16} className="text-[#056dfe] mt-1 shrink-0" />
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm leading-relaxed">
              Adicionalmente puedes escoger buscar en más de 10 listados de países como
              Canadá, la Unión Europea entre otros. Aunque esto no es requerido en México
              para todos los negocios, puedes escoger en qué listados buscar.
            </p>
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Agenda una demo
            </a>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 h-80 flex items-center justify-center">
            <FileCheck size={64} className="text-slate-300" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="bg-[#0c71c3] px-8 py-6">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{plan.subtitle}</p>
                </div>
                <div className="px-8 py-6">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-slate-800">{plan.price}</span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {plan.items.map((item) => (
                      <li key={item} className="text-slate-600 text-sm">{item}</li>
                    ))}
                  </ul>
                  <a
                    href={URL_SCHEDULE_DEMO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] py-3 font-bold text-white shadow hover:shadow-md transition-shadow text-sm"
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-xl font-bold text-slate-700 leading-relaxed">
              "A veces es difícil saber cuáles son tus obligaciones anti lavado de dinero,
              y muchas empresas aprovechan esta ambigüedad para vender software caro que en
              verdad no necesitas. Me gusta que Nuvigant ofrece su servicio a un precio
              justo y sólo ofrece lo que en verdad necesitas."
            </p>
            <footer className="mt-4 text-slate-500">— Ali Sayed</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
