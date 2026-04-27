import { HelpCircle, BookOpen, Users } from "lucide-react";

const faqs = [
  {
    icon: HelpCircle,
    title: "¿Cuáles son los siguientes pasos?",
    body: "Habiendo hecho el primer depósito, ponte en contacto con tu asesor de ventas y dependiendo del producto que hayas contratado se tomarán los siguientes pasos.",
  },
  {
    icon: BookOpen,
    title: "¿Cómo funcionan las capacitaciones?",
    body: "Si el producto que contrataste requiere capacitaciones, por lo general hacemos tres capacitaciones con todo tu equipo, una cada semana. Duran alrededor de una hora. Si tu equipo es muy grande recomendamos hacer estas capacitaciones por áreas funcionales dentro de la empresa.",
  },
  {
    icon: Users,
    title: "¿Qué pasa si necesito soporte adicional?",
    body: "Siempre tendrás acceso al manual digital de la aplicación. En este recurso también contamos con un chat con el que nos puedes escribir con tus dudas. Usualmente contestamos en cuestión de minutos. Finalmente puedes solicitar capacitaciones adicionales de así requerirlo.",
    cta: { label: "Ir a Manual Digital", href: "https://manual.nuvigant.com" },
  },
];

export default function DatosFiscalesPage() {
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
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Tus datos fiscales
            </h1>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Nos emociona mucho que hayas decidido unirte a la comunidad de Nuvigant.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Te pedimos nos dejes tus datos fiscales usando nuestra forma de registro.
              Puedes leer las preguntas frecuentes en la parte inferior.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-6 space-y-3 text-sm">
              <p className="font-bold text-slate-800 text-base">Cuenta de depósito</p>
              <p><span className="text-slate-400">Razón Social:</span> <span className="text-slate-700">S Mas Mas S.C.</span></p>
              <p><span className="text-slate-400">Banco:</span> <span className="text-slate-700">Banorte</span></p>
              <p><span className="text-slate-400">A nombre de:</span> <span className="text-slate-700">S Mas Mas SC</span></p>
              <p><span className="text-slate-400">Cuenta:</span> <span className="font-mono text-slate-800">01308242664</span></p>
              <p><span className="text-slate-400">CLABE:</span> <span className="font-mono text-slate-800">072164013082426644</span></p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <p className="font-semibold text-lg text-slate-800 mb-4">
              Llena el siguiente formulario con tus datos fiscales para continuar con tu
              registro.
            </p>
            <p className="text-slate-500 text-sm">
              Una vez enviado el formulario, tu asesor de ventas se pondrá en contacto
              contigo para coordinar los siguientes pasos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Preguntas Frecuentes</h2>
            <p className="mt-4 text-lg text-slate-500">
              Probablemente tengas algunas inquietudes para empezar. Te dejamos varias de
              las preguntas más frecuentes.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {faqs.map(({ icon: Icon, title, body, cta }) => (
              <div key={title} className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
                <Icon size={32} className="text-[#056dfe]" />
                <h3 className="font-bold text-slate-800">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">{body}</p>
                {cta && (
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#056dfe] hover:underline"
                  >
                    {cta.label} →
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
