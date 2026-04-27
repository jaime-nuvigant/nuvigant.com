import { ArrowRight, CheckCircle2 } from "lucide-react";
import { URL_ISR } from "../constants";

export default function CalcISRGraciasPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="text-emerald-600" size={32} />
          </div>
          <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Gracias, recibimos tu solicitud
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Nuestro equipo revisará tu información y te compartirá los siguientes pasos para activar la
            solución que mejor se ajuste a tu operación.
          </p>
          <a
            href={URL_ISR}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#544fff] px-7 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
          >
            Ir a isr.nuvigant.com
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-8 py-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#544fff]">Confianza de mercado</p>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900">+3,500 negocios atendidos</p>
            <p className="mt-2 text-slate-600">
              Equipos notariales, inmobiliarios y despachos utilizan nuestras herramientas diariamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
