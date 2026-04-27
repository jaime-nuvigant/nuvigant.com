import { CheckSquare, Target, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: CheckSquare,
    text: "17 preguntas clave para identificar las necesidades únicas de tu despacho o empresa.",
  },
  {
    icon: Target,
    text: "9 funciones esenciales que debes considerar para crear una ventaja competitiva sólida.",
    featured: true,
  },
  {
    icon: TrendingUp,
    text: "Cómo calcular el ROI del software que elijas y cómo aprovechar las demostraciones gratuitas.",
  },
];

export default function GuiaSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Guía: Cómo elegir un software para abogados
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            El software indicado tiene más impacto a lo largo del tiempo en la rentabilidad
            del despacho que cualquier empleado o caso individual.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">En esta guía encontrarás</h2>
            <p className="mt-4 text-lg text-slate-500">
              Información puntual para gestionar la transformación digital de tu despacho
              de manera inteligente.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, text, featured }) => (
              <div
                key={text}
                className={`flex flex-col items-center text-center gap-4 rounded-2xl p-8 ${
                  featured
                    ? "bg-white shadow-md border-t-4 border-t-[#056dfe] border-slate-100"
                    : "bg-white shadow-sm border border-slate-100"
                }`}
              >
                <Icon size={36} className="text-[#4161d4]" />
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Llena el formulario para recibir la guía{" "}
            <span className="text-[#056dfe]">completamente gratis</span>
          </h2>
          <p className="text-slate-500 mb-8">
            Te enviaremos la guía directamente a tu correo electrónico.
          </p>
          <div className="rounded-2xl bg-[#056dfe] p-8 text-left">
            <p className="text-white/80 text-sm">
              El formulario de registro se cargará aquí. Mientras tanto, puedes contactarnos
              directamente para recibir la guía.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="text-xl font-bold text-slate-700 leading-relaxed">
              "Esta guía me ayudó a entender mejor los puntos clave que debo de saber al
              momento de elegir un software para mi despacho"
            </p>
            <footer className="mt-4 text-slate-500">— Julia Sánchez</footer>
          </blockquote>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Nuvigant</h2>
          <p className="text-slate-500 leading-relaxed max-w-xl mx-auto">
            Es el software todo en uno que te permitiría tener una visión 360° de tu
            despacho. Organiza tus expedientes mediante canvas interactivos, recibe
            notificaciones y prevé vencimientos, CRM, automatización de documentos,
            control de dinero, firma electrónica, trabajo remoto y más.
          </p>
        </div>
      </section>
    </div>
  );
}
