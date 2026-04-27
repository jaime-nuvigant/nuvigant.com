export default function CFDI40VideosPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 lg:pt-36">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">CFDI 4.0 — Videos</h1>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          Recursos prácticos para entender, aplicar y comunicar correctamente los cambios de CFDI 4.0 dentro de tu
          operación administrativa y fiscal.
        </p>

        <section className="mt-10 space-y-6">
          <article className="rounded-2xl border border-slate-200 p-7">
            <h2 className="text-2xl font-bold text-slate-900">1) Panorama general</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Revisión de los conceptos esenciales y de los cambios que más impactan en la emisión diaria de CFDIs.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-7">
            <h2 className="text-2xl font-bold text-slate-900">2) Flujo operativo recomendado</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Sugerencias de captura y validación previa para reducir rechazos, correcciones tardías y reprocesos.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-7">
            <h2 className="text-2xl font-bold text-slate-900">3) Casos frecuentes y resolución</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Ejemplos reales de incidencias comunes con recomendaciones puntuales para resolverlas rápidamente.
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-7">
          <h2 className="text-2xl font-bold text-slate-900">Errores comunes</h2>
          <ol className="mt-4 space-y-3 list-decimal list-inside text-slate-700 leading-relaxed">
            <li>RFC del receptor con datos desactualizados o incompletos.</li>
            <li>Uso incorrecto del régimen fiscal y código postal del cliente.</li>
            <li>Falta de validación previa antes de timbrar en volumen.</li>
            <li>Inconsistencia entre concepto, objeto de impuesto y desglose.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
