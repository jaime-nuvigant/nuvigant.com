import { Bell, FileText, Calculator, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Seguimiento avanzado y más notificaciones automatizadas",
    desc: "Nuvigant te va a permitir llevar un seguimiento mucho más avanzado con notificaciones que podrás programar y automatizar.",
  },
  {
    icon: FileText,
    title: "Automatización de Documentos",
    desc: "Nos hemos asociado con la empresa Legito para traerles lo que son los documentos automatizados e inteligentes.",
    featured: true,
  },
  {
    icon: Calculator,
    title: "Cálculo de ISR",
    desc: "Algunos de ustedes ya lo han estado usando, y nos han dicho que les encanta lo fácil que es de usar en comparación a las otras herramientas.",
    cta: { label: "Ir a cálculo", href: "/fedatarios/calculo-de-isr-enajenacion-inmuebles" },
  },
];

const faqItems = [
  {
    q: "¿Qué beneficios tiene para mí?",
    a: "Fuera de las mejoras técnicas la nueva aplicación tiene una interfaz gráfica más limpia y actualizada, así como personalizable. Tiene también varias funciones nuevas que estamos seguro les van a encantar.",
  },
  {
    q: "¿Por qué hicimos esta actualización?",
    a: "En el mundo de software es necesario estar al corriente con las tendencias tecnológicas, por lo que cada dos o tres años es necesario actualizar las tecnologías que se usan. De lo contrario se empieza a degradar el servicio y después de más años empiezan a presentarse vulnerabilidades en cuestión de seguridad y compatibilidad.",
  },
  {
    q: "¿Por qué le cambiamos el nombre?",
    a: "El cambio de nombre ha sido necesario porque afortunadamente la aplicación ha crecido y se ha empezado a usar por diferentes nichos que requieren software anti lavado de dinero y control de clientes y expedientes (corredores públicos, financieras, abogados). Es por esto que el nombre Notaría++ era problemático. Sin embargo, seguimos siendo los mismos.",
  },
  {
    q: "¿Es necesario que empiece a utilizar la nueva versión?",
    a: "No, la aplicación que están usando actualmente seguirá corriendo por un buen tiempo. En un año evaluaremos la situación y si la mayoría de los clientes ya migraron al nuevo sistema, apoyaremos a los que quedan a migrar para dedicarnos únicamente a este nuevo software.",
  },
  {
    q: "¿Debo de capturar toda mi información de nuevo?",
    a: "Para nada, la información es la misma. Los cambios que hagas en una aplicación se verán reflejados en la otra. Puedes usar las dos versiones de manera paralela para ir probando la nueva versión.",
  },
];

export default function CambioNotariaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Conoce nuestra nueva actualización
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Estamos listos para presentarles la nueva y mejorada versión del Notaría++
            que ahora será conocida como Nuvigant.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">¿Qué beneficios tiene para mí?</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Fuera de las mejoras técnicas, la nueva aplicación tiene una interfaz gráfica
              más limpia y actualizada, así como personalizable. Tiene también varias
              funciones nuevas que estamos seguros les van a encantar. Algunas de estas son:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc, featured, cta }) => (
              <div
                key={title}
                className={`flex flex-col gap-4 items-center text-center rounded-2xl p-8 ${
                  featured
                    ? "bg-white shadow-md border-t-4 border-t-[#056dfe] border-slate-100"
                    : "bg-white shadow-sm border border-slate-100"
                }`}
              >
                <Icon size={36} className="text-[#4161d4]" />
                <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                {cta && (
                  <a href={cta.href} className="text-sm font-semibold text-[#056dfe] hover:underline flex items-center gap-1">
                    {cta.label} <ArrowRight size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {faqItems.map(({ q, a }) => (
              <div key={q} className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{q}</h3>
                <p className="text-slate-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#53a0fd] to-[#4161d4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Cómo puedo empezar a ver esta nueva versión?
          </h2>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Ahora en vez de entrar a notariamasmas.com deberás entrar a{" "}
            <strong>www.nuvigant.com</strong>. En la parte de arriba a la derecha
            encontrarás la pestaña que dice Clientes → Ir a aplicación. Si das click ahí
            llegarás a la ventana de inicio de sesión que ya conoces y podrás iniciar
            sesión con tu misma cuenta.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            ¿Te interesa platicar con nosotros sobre estos cambios?
          </h2>
          <p className="text-slate-500 mb-6">
            Aviso Importante: Hemos hecho todo lo necesario para que puedan seguir usando
            la misma información y puedan trabajar con las dos aplicaciones paralelamente.
            Sin embargo, solo hay una parte del sistema que tuvo cambios fuertes: el
            control de egresos. Si actualmente estás usando esta herramienta, ponte en
            contacto con nosotros para hacer una migración de tu información.
          </p>
          <a
            href="mailto:soporte@nuvigant.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#056dfe] px-8 py-3.5 font-bold text-white shadow-lg hover:bg-[#0459d4] transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>
    </div>
  );
}
