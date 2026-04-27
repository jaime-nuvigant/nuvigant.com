import { CheckCircle, Quote, ArrowRight, MessageCircle } from "lucide-react";
import { WA_LINK, URL_ISR_CALCULATOR } from "../constants";

const testimonials = [
  {
    quote:
      "He usado muchos programas para calcular el ISR en mi trayectoria, pero este me gusta porque me permite imprimir formatos directamente del cálculo, lo puedo usar en el teléfono y pues obvio que sea gratis es muy conveniente.",
    author: "Lilia Marín",
    role: "Abogada Titular Notaría 16",
  },
  {
    quote:
      "Al calcular el impuesto en la aplicación me di cuenta de que a veces sale más barato que como regularmente lo calculo. Después de hablar con ellos me explicaron varios otros métodos que utilizan para bajar el costo del impuesto.",
    author: "Roberto Solís",
    role: "Contador Independiente",
  },
  {
    quote:
      "Me ayuda mucho poder calcular el ISR desde mi celular. Aunque los notarios son quien tienen la responsabilidad final de hacer este cálculo, el saber un estimado confiable de lo que les va a salir el ISR es muy útil para mis clientes.",
    author: "Joquín Gómez",
    role: "BK Inmobiliaria",
  },
  {
    quote:
      "Muy seguido necesitaba calcular el impuesto (ISR por enajenación de Inmuebles), y tenía mis hojas de Excel que me ayudaban, pero eran difíciles de usar y de mantenerlas actualizadas. Su herramienta me quita ese problema.",
    author: "Rodrigo Lavoie",
    role: "Contador Independiente",
  },
];

const features = [
  {
    title: "Completamente Gratuita",
    body: "Realiza todos los cálculos que necesites desde tu celular o computadora sin ningún costo.",
  },
  {
    title: "Todas las Variantes",
    body: "Cálculo de ISR solo terreno, solo construcción, construcción y terreno o excedente terreno. Todos los que necesitas, sencillo y amigable.",
    highlight: true,
  },
  {
    title: "Índices Actualizados",
    body: "La herramienta se conecta directamente con el Banco de México para asegurarse de tener los índices más actualizados.",
  },
];

export default function CalcISRGAPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            La app de cálculo de ISR por venta de inmuebles, gratis y sencilla
          </h1>
          <div className="mt-10">
            <a
              href={URL_ISR_CALCULATOR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#4161d4] shadow-lg transition hover:shadow-xl"
            >
              Ir a la calculadora
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Más de 1,200 inmobiliarias, notarías, y contadores utilizan esta herramienta
            </h2>
            <p className="mt-3 text-slate-600">
              Más de 30 años en desarrollo de software nos respaldan. Aquí hay algo de lo que dicen
              nuestros usuarios.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.author}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Quote size={20} className="text-[#2ea4f2]" />
                <p className="mt-4 text-slate-700 leading-relaxed">"{t.quote}"</p>
                <div className="mt-4">
                  <p className="font-semibold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Sencillo de usar y sin costo
            </h2>
            <p className="mt-3 text-slate-600">
              Además de funcionar completamente en línea en cualquier dispositivo, nuestra herramienta
              ofrece varias ventajas:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className={`rounded-2xl p-7 ${
                  f.highlight
                    ? "bg-white shadow-lg border-t-4 border-[#2ea4f2]"
                    : "bg-white border border-slate-100 shadow-sm"
                }`}
              >
                <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={URL_ISR_CALCULATOR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-8 py-4 font-bold text-white shadow-lg transition hover:shadow-xl"
            >
              Probar calculadora
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
                Conoce la versión PLUS de nuestro cálculo de ISR
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                La versión Plus, además de calcular el ISR te permite:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Guardar los cálculos que hayas hecho",
                  "Exportar la información al DECLARANOT para notarías",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#2ea4f2]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  Ponte en contacto
                </a>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <p className="text-5xl font-extrabold text-slate-900">$3,500</p>
              <p className="mt-2 text-slate-500 text-lg">MXN / año</p>
              <p className="mt-4 text-slate-600">
                Acceso completo con guardado de cálculos y exportación a DECLARANOT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
