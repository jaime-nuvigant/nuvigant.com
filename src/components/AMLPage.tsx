import { ShieldCheck, Search, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { URL_SCHEDULE_DEMO } from "../constants";

export default function AMLPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-[#53a0fd] to-[#4161d4] pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Anti Lavado de Dinero (AML)
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Cumple con tus obligaciones de prevención de lavado de dinero de manera
            sencilla, automática y a un precio justo.
          </p>
          <div className="mt-10">
            <a
              href={URL_SCHEDULE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-[#4161d4] shadow-lg transition hover:shadow-xl"
            >
              Agenda una demo
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">
              Todo lo que necesitas para cumplir con la UIF
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
              Nuvigant se adapta a tu empresa. Contamos con módulos que puedes usar de
              manera independiente para cumplir tus objetivos.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
              <Search size={36} className="text-[#4161d4] mb-4" />
              <h3 className="font-bold text-slate-800 text-lg">Búsqueda en Listados Negros</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                Realiza búsquedas en todos los listados requeridos por la UIF: ONU, OFAC, EFOS/EDOS y más.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-md border-t-4 border-t-[#056dfe] border-slate-100">
              <ShieldCheck size={36} className="text-[#056dfe] mb-4" />
              <h3 className="font-bold text-slate-800 text-lg">Evaluación de Riesgo</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                Evalúa el riesgo de cada cliente de manera automática y mantén un expediente completo.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white shadow-sm border border-slate-100">
              <FileText size={36} className="text-[#4161d4] mb-4" />
              <h3 className="font-bold text-slate-800 text-lg">Reportes Automáticos</h3>
              <p className="mt-2 text-slate-500 text-sm leading-relaxed">
                Genera reportes automáticos para la UIF y constancias de búsqueda en PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">Explora más sobre AML</h2>
          <Link
            href="/aml/sanctions-lists"
            className="group inline-flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-8 py-5 text-slate-700 font-semibold hover:border-[#056dfe]/30 hover:shadow-md transition-all"
          >
            <Search size={20} className="text-[#056dfe]" />
            Búsqueda en Listados Negros (KYC)
            <ArrowRight size={16} className="text-slate-300 group-hover:text-[#056dfe] transition-colors" />
          </Link>
        </div>
      </section>
    </div>
  );
}
