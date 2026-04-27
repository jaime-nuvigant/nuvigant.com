import { MessageCircle, CreditCard, HelpCircle } from "lucide-react";
import { WA_LINK } from "../constants";

const faqItems = [
  {
    icon: <HelpCircle size={40} className="text-[#2ea4f2]" />,
    title: "¿Cuáles son los siguientes pasos?",
    body: "Habiendo hecho el primer depósito, ponte en contacto con tu asesor de ventas. Dependiendo del producto que hayas contratado se tomarán los siguientes pasos.",
  },
  {
    icon: <HelpCircle size={40} className="text-[#2ea4f2]" />,
    title: "¿Cómo funcionan las capacitaciones?",
    body: "Si el producto que contrataste requiere capacitaciones, por lo general hacemos tres capacitaciones con todo tu equipo, una cada semana. Duran alrededor de una hora. Si tu equipo es muy grande recomendamos hacerlas por áreas funcionales.",
  },
  {
    icon: <HelpCircle size={40} className="text-[#2ea4f2]" />,
    title: "¿Qué pasa si necesito soporte adicional?",
    body: "Siempre tendrás acceso al manual digital de la aplicación. En este recurso también contamos con un chat para resolver tus dudas, usualmente contestamos en minutos. Finalmente puedes solicitar capacitaciones adicionales si así lo requieres.",
    link: { href: "https://manual.nuvigant.com", label: "Ir a Manual digital" },
  },
];

export default function DatosFiscalesJCMPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Tus datos fiscales
              </h1>
              <p className="mt-5 text-lg text-slate-500 leading-relaxed">
                Nos emociona mucho que hayas decidido unirte a la comunidad de Nuvigant.
                <br />
                <br />
                Te pedimos nos dejes tus datos fiscales usando el formulario y puedes leer las
                preguntas frecuentes en la parte inferior.
              </p>
              <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard size={20} className="text-[#056dfe]" />
                  <p className="font-semibold text-slate-800">Cuenta de depósito</p>
                </div>
                <p className="text-slate-700 font-semibold">Santander</p>
                <div className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <p>
                    <span className="text-slate-400">Razón Social:</span>{" "}
                    <span className="font-medium text-slate-800">Jaime Alberto Calderón Mátar</span>
                  </p>
                  <p>
                    <span className="text-slate-400">A nombre de:</span>{" "}
                    <span className="font-medium text-slate-800">Jaime Alberto Calderón Mátar</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Cuenta:</span>{" "}
                    <span className="font-mono font-medium text-slate-800">60623750112</span>
                  </p>
                  <p>
                    <span className="text-slate-400">CLABE:</span>{" "}
                    <span className="font-mono font-medium text-slate-800">014164606237501129</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-2">¿Ya realizaste el pago?</h2>
              <p className="text-slate-600 mb-6">
                Escríbenos por WhatsApp para confirmar tu pago y registrar tus datos fiscales. Te
                responderemos en minutos.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#2ea4f2] px-6 py-3.5 font-semibold text-white shadow-md transition hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Enviar mis datos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Preguntas Frecuentes</h2>
            <p className="mt-3 text-slate-600">
              Probablemente tengas algunas inquietudes para empezar. Te dejamos varias de las preguntas
              más frecuentes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {faqItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-7 shadow-sm border border-slate-100">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-[#2ea4f2] hover:underline"
                  >
                    {item.link.label} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
