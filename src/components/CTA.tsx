import { ArrowRight, CheckCircle2 } from "lucide-react";
import { EMAIL_MAIN } from "../constants";

const perks = [
  "Sin plazos forzosos",
  "Configuración y capacitación asistida",
  "Chat de soporte",
  "Cumplimiento LFPIORPI y SAT",
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, #2ea4f2 0%, #056dfe 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-72 h-72 opacity-10 blur-3xl pointer-events-none rounded-full"
        style={{ background: "#51d2e9" }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#51d2e9] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full animate-pulse" />
          Empieza hoy
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Transforma tu notaría{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #51d2e9, #2ea4f2)",
            }}
          >
            con IA
          </span>
        </h2>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
          Únete a más de 200 despachos notariales que ya optimizan su
          operación con Nuvigant. Onboarding guiado y soporte personalizado.
        </p>

        {/* Perks */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 size={16} className="text-[#51d2e9] flex-shrink-0" />
              {perk}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL_MAIN}`}
            className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            style={{
              background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)",
            }}
          >
            Solicitar demo gratuita
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href={`mailto:${EMAIL_MAIN}`}
            className="inline-flex items-center gap-2 text-white font-semibold text-base px-9 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 transition-all backdrop-blur-sm"
          >
            Hablar con ventas
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-xs text-slate-500">
          Cifrado AES-256 · Cumplimiento NOM-151
        </p>
      </div>
    </section>
  );
}
