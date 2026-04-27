import { ArrowRight, CheckCircle, BookOpen, HelpCircle, Play } from "lucide-react";
import { URL_ISR_CALCULATOR } from "../constants";

const resources = [
  {
    icon: <Play size={36} className="text-[#2ea4f2]" />,
    title: "El videotutorial",
    description:
      "Calcula el ISR por enajenación de inmuebles sencilla y gratuitamente. En este vídeo te mostramos lo que necesitas saber para poder calcular el ISR con nuestra herramienta en línea.",
    cta: { label: "Ir a herramienta", href: URL_ISR_CALCULATOR, external: true },
    video: "https://www.youtube.com/embed/-_TG14X8usU",
  },
];

const links = [
  {
    icon: <BookOpen size={36} className="text-[#2ea4f2]" />,
    title: "Conoce las Definiciones",
    description:
      "Te compartimos un glosario de diferentes términos usados en el cálculo. Esta página también puede ayudarte si tienes dudas del resultado PDF que imprime nuestra herramienta.",
    cta: {
      label: "Ir a glosario",
      href: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/definiciones-en-el-isr-por-enajenacion-de-inmuebles",
    },
  },
  {
    icon: <HelpCircle size={36} className="text-[#2ea4f2]" />,
    title: "Preguntas Frecuentes",
    description:
      "Te compartimos también una sección de preguntas frecuentes, ya sean del cálculo de ISR en sí, o de la herramienta de cálculo. Aquí vamos actualizando las preguntas más relevantes.",
    cta: {
      label: "Ir a Preguntas",
      href: "/isr-enajenacion-inmuebles-manual/isr-enajenacion-de-inmuebles-preguntas-frecuentes",
    },
  },
];

const freeFeatures = [
  "No tiene ningún costo",
  "Siempre se mantiene actualizada con los índices de BANXICO",
  "Te imprime un PDF que explica paso por paso cómo se realizó el cálculo",
];

export default function ManualISRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#2EA4F2] to-[#51D2E9] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Conoce la calculadora en línea
            <br />
            <span className="text-white/90">de ISR por venta de inmueble</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">El videotutorial</h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                Calcula el ISR por enajenación de inmuebles sencilla y gratuitamente. En este vídeo te
                mostramos lo que necesitas saber para poder calcular el ISR con nuestra herramienta en
                línea de cálculo.
              </p>
              <div className="mt-8">
                <a
                  href={URL_ISR_CALCULATOR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  Ir a herramienta
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/-_TG14X8usU"
                title="Tutorial ISR por Enajenación de Inmuebles"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {links.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
                <div className="mt-6">
                  <a
                    href={item.cta.href}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
                  >
                    {item.cta.label}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Si no lo has hecho…
                </h2>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                  Te invitamos a conocer y utilizar nuestra herramienta gratuita de cálculo de ISR por
                  enajenación de bienes inmuebles.
                </p>
                <ul className="mt-5 space-y-3">
                  {freeFeatures.map((f) => (
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
              <div className="hidden md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
