import Link from "next/link";
import { Calculator, Smartphone, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";
import { URL_ISR } from "../constants";

const features = [
  {
    icon: Calculator,
    title: "Completamente Gratuita",
    desc: "Así es, realiza todos los cálculos que necesites desde tu celular o computadora sin ningún costo.",
  },
  {
    icon: CheckCircle,
    title: "Todas las Variantes",
    desc: "Cálculo de ISR solo terreno, solo construcción, construcción y terreno o excedente terreno. Todos los que necesitas, sencillo y amigable.",
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Índices Actualizados",
    desc: "La herramienta de cálculo se conecta cada vez directamente con el Banco de México para asegurarse de tener los índices más actualizados.",
  },
];

const testimonials = [
  {
    name: "Lilia Marín",
    role: "Abogada en Notaría",
    text: "He usado muchos programas para calcular el ISR en mi trayectoria, pero este me gusta porque me permite imprimir formatos directamente del cálculo, lo puedo usar en el teléfono y pues obvio que sea gratis es muy conveniente.",
  },
  {
    name: "Roberto Solis",
    role: "Contador Independiente",
    text: "Al calcular el impuesto en la aplicación me di cuenta de que a veces sale más barato que como regularmente lo calculo. Después de hablar con ellos me explicaron varios otros métodos que utilizan para bajar el costo del impuesto.",
  },
  {
    name: "Joquín Gómez",
    role: "BK Inmobiliaria",
    text: "Me ayuda mucho poder calcular el ISR desde mi celular. Aunque los notarios son quien tienen la responsabilidad final de hacer este cálculo, el saber un estimado confiable de lo que les va a salir el ISR es muy útil para mis clientes.",
  },
  {
    name: "Rodrigo Lavoie",
    role: "Contador Independiente",
    text: "Muy seguido necesitaba calcular el impuesto (ISR por enajenación de Inmuebles), y tenía mis hojas de Excel que me ayudaban, pero eran difíciles de usar y de mantenerlas actualizadas. Su herramienta me quita ese problema.",
  },
];

export default function CalcISRLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Calculadora de ISR por enajenación de inmuebles gratis
          </h1>
          <ul className="mt-8 space-y-2 text-white/90 text-lg">
            <li className="flex items-center justify-center gap-2">
              <CheckCircle size={18} className="shrink-0" />
              Realiza el cálculo del ISR en segundos
            </li>
            <li className="flex items-center justify-center gap-2">
              <Smartphone size={18} className="shrink-0" />
              Hazlo desde cualquier dispositivo
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle size={18} className="shrink-0" />
              Imprime un PDF explicando el resultado
            </li>
          </ul>
          <div className="mt-10">
            <a
              href={`${URL_ISR}/calculo-isr?show_welcome_message=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#35c6cc] to-[#3bb586] px-8 py-4 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              ¡Pruébalo Ahora gratis! <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              Más de 15,000 usuarios (inmobiliarias, notarías, y contadores)
              utilizan esta herramienta
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Más de 35 años en desarrollo de software notarial nos respaldan, aquí hay
              algo de lo que dicen nuestros usuarios.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <div
                key={name}
                className="rounded-2xl bg-slate-50 border border-slate-100 p-8 flex flex-col gap-4"
              >
                <p className="text-slate-600 italic leading-relaxed">"{text}"</p>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Sencillo de usar y sin costo</h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Aparte de funcionar completamente en línea en cualquier dispositivo, nuestra
              herramienta de cálculo ofrece varias ventajas, como lo son:
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
              href={URL_ISR}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              ¡Pruébalo ahora gratis!
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 leading-tight">
              Conoce la versión PLUS de nuestro cálculo de ISR
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              La versión plus de la aplicación, además de calcular el ISR te permite:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle size={16} className="text-[#056dfe] shrink-0" />
                Guardar los cálculos que hayas hecho
              </li>
              <li className="flex items-center gap-2 text-slate-600">
                <CheckCircle size={16} className="text-[#056dfe] shrink-0" />
                Exportar la información al DECLARANOT para notarías
              </li>
            </ul>
            <Link
              href="/fedatarios/calculo-isr/get-version-plus"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3D72E7] to-[#53a0fe] px-8 py-3.5 font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Ver más info <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 h-72 flex items-center justify-center">
            <Calculator size={64} className="text-slate-300" />
          </div>
        </div>
      </section>
    </div>
  );
}
