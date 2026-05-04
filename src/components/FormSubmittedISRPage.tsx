import Link from "next/link";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { WA_LINK } from "../constants";

export default function FormSubmittedISRPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle size={64} className="text-white/90" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Te enviamos un correo con la liga para entrar
          </h1>
          <p className="mt-6 text-lg text-white/90">
            ¿No lo recibiste?{" "}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold"
            >
              Ponte en contacto con nosotros por WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
                Conoce la versión PLUS de nuestro cálculo de ISR
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                La versión Plus de la aplicación, además de calcular el ISR te permite:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Guardar los cálculos que hayas hecho",
                  "Exportar la información al DECLARANOT para notarías",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle size={18} className="mt-0.5 flex-shrink-0 text-[#2ea4f2]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#2ea4f2] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
                >
                  <MessageCircle size={18} />
                  Ponte en contacto
                </a>
                <Link
                  href="/fedatarios/calculo-isr/get-version-plus"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Ver versión PLUS
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 text-center">
              <p className="text-5xl font-extrabold text-slate-900">$3,500</p>
              <p className="mt-2 text-slate-500 text-lg">MXN / año</p>
              <p className="mt-4 text-slate-600">
                Acceso completo a la versión Plus con guardado de cálculos y exportación a DECLARANOT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
