import { ExternalLink } from "lucide-react";

export default function EncuestaDemoPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-16 lg:pt-36">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">Encuesta demo</h1>
        <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-3xl">
          Este contenido originalmente se mostraba en un iframe. Se conserva aquí un placeholder para integrar
          el embed definitivo cuando se tenga la URL final.
        </p>

        <section className="mt-10 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Embed placeholder</p>
            <p className="mt-3 text-slate-700">
              Reemplaza este bloque por el iframe de la encuesta para habilitar el flujo completo.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-slate-500 border border-slate-200">
              <ExternalLink size={16} />
              <span>Zona reservada para iframe</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
