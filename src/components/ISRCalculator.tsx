"use client";

import { useState } from "react";
import { Calculator, ChevronRight, Building2, ArrowRight } from "lucide-react";
import { URL_ISR_CALCULATOR } from "../constants";

export default function ISRCalculator() {
  const [montoOperacion, setMontoOperacion] = useState("");

  const valorAdquisicion = parseFloat(montoOperacion.replace(/,/g, "")) || 0;

  const handleCalcular = () => {
    const url = `${URL_ISR_CALCULATOR}?&valorAdquisicion=${valorAdquisicion}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="isr" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left – copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#51d2e9]/10 border border-[#51d2e9]/30 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <Calculator size={12} />
              Herramienta gratuita para notarios
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
              Calculadora de ISR por{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #056dfe, #51d2e9)",
                }}
              >
                enajenación de inmuebles
              </span>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed mb-6">
              Conoce nuestra calculador de ISR por enajenación de 
              inmuebles que calcula el impuesto de una manera sencilla 
              y rápida desde tu celular.
            </p>

            <ul className="space-y-3">
              {[
                "Se conecta al Banco de México diario para descargar índices",
                "Exporta los cálculos al DECLARANOT",
                "Comparativo: ISR sobre ganancia vs. 20% del precio",
                "Se conecta a la aplicación administrativa completa",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-[#056dfe]/10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight size={12} className="text-[#056dfe]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right – calculator card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#51d2e9] to-[#056dfe] flex items-center justify-center">
                <Building2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-slate-800 text-sm">
                Utiliza la calculadora – sin costo
              </span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Monto de operación
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="Ej: 3,500,000"
                    value={montoOperacion}
                    onChange={(e) => setMontoOperacion(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#056dfe]/30 focus:border-[#056dfe] transition-all placeholder:text-slate-300"
                  />
                </div>
              </div>

              <button
                onClick={handleCalcular}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #056dfe, #51d2e9)",
                }}
              >
                Calcular ISR
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
