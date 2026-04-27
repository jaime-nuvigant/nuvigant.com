import { MessageCircle, CreditCard, HelpCircle } from "lucide-react";
import { WA_LINK, PRICE_ISR_PRO } from "../constants";

const faqItems = [
  {
    title: "¿Cuáles son los siguientes pasos?",
    body: "Habiendo hecho el depósito, llena la forma de datos fiscales. Te mandaremos un correo con tus claves de acceso. También puedes ponerte en contacto con nosotros por WhatsApp.",
  },
  {
    title: "¿Qué pasa si necesito soporte adicional?",
    body: "Siempre tendrás acceso al manual digital de la aplicación. En este recurso contamos con un chat para resolver tus dudas, usualmente contestamos en minutos. Finalmente puedes solicitar capacitaciones adicionales si así lo requieres.",
    link: {
      href: "/isr-enajenacion-inmuebles-manual",
      label: "Ir a Manual digital",
    },
  },
];

export default function DatosFiscalesISRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#6b73ff] to-[#000dff] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                ¿List@ para empezar?
              </h1>
              <p className="mt-5 text-lg text-white/90 leading-relaxed">
                Para comenzar a utilizar la herramienta premium de cálculo de ISR te pedimos que
                realices el pago de{" "}
                <strong className="text-white">${PRICE_ISR_PRO} MXN + IVA ($6,728.00 MXN)</strong>{" "}
                a la siguiente cuenta:
              </p>
              <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard size={20} className="text-white" />
                  <p className="font-semibold text-white">Cuenta de depósito</p>
                </div>
                <p className="text-white/90 font-semibold">Banorte</p>
                <div className="mt-3 space-y-1.5 text-sm text-white/80">
                  <p>
                    <span className="text-white/50">A nombre de:</span>{" "}
                    <span className="font-medium text-white">S Mas Mas SC</span>
                  </p>
                  <p>
                    <span className="text-white/50">Cuenta:</span>{" "}
                    <span className="font-mono font-medium text-white">01308242664</span>
                  </p>
                  <p>
                    <span className="text-white/50">CLABE:</span>{" "}
                    <span className="font-mono font-medium text-white">072164013082426644</span>
                  </p>
                </div>
              </div>
              <p className="mt-5 text-white/80 text-sm">
                Una vez realizado el pago, compártenos tus datos fiscales por WhatsApp y te enviaremos
                tus claves de acceso.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <h2 className="text-xl font-bold text-slate-900 mb-2">¿Ya realizaste el pago?</h2>
              <p className="text-slate-600 mb-6">
                Escríbenos por WhatsApp para registrar tus datos fiscales y recibir tus claves de
                acceso. Te respondemos en minutos.
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
              Probablemente tengas algunas inquietudes para empezar. Te dejamos las preguntas más
              frecuentes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-7 shadow-sm border border-slate-100"
              >
                <HelpCircle size={36} className="text-[#2ea4f2] mb-4" />
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">{item.body}</p>
                {item.link && (
                  <a
                    href={item.link.href}
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
