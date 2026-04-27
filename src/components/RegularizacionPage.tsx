"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, MessageCircle, Mail, ChevronDown, ChevronUp } from "lucide-react";
import {
  WA_LINK,
  WA_DISPLAY,
  EMAIL_CONTACT,
  EMAIL_ADMIN,
  URL_ISR,
  PRICE_REGULARIZACION_BASE,
  REGULARIZACION_BASE_NAMES,
  PRICE_REGULARIZACION_EXTRA,
  ISR_USER_COUNT,
} from "../constants";

const faqs = [
  {
    q: "¿En qué listados buscan?",
    a: "Se busca en los listados necesarios y varios adicionales. Dentro de ellos están: listados de la ONU, listados del Departamento del Tesoro de Estados Unidos, listados de empresas factureras (entidades con operaciones inexistentes del 69-B), listados de sanciones de Europa, INTERPOL, Australia, y varios listados de PEPs (personas expuestas políticamente).",
  },
  {
    q: "¿Cómo debe ser el archivo Excel que mandamos?",
    a: "Te pedimos que pongas un nombre en cada línea de Excel y el nombre completo en una sola celda. De preferencia quita palabras como Sra., Sr., S.A de C.V. Puedes poner el número de escritura, expediente o fecha de firma en las celdas laterales y las incluiremos en el nombre de los archivos. También puedes incluir el RFC y número de pasaporte en columnas adicionales. Si gustas recibir los nombres separados en folders (e.g. 2020, 2021, 2022, 2023), ponlos en pestañas diferentes.",
  },
  {
    q: "¿Me pueden generar una factura?",
    a: `Por supuesto, solo te pedimos nos mandes tu constancia de situación fiscal al llenar el formulario de solicitud de servicio. También puedes mandárnosla a ${EMAIL_ADMIN}.`,
  },
];

const includes = [
  "Se buscarán los nombres en más de 10 listados (incluye todos los requeridos por la UIF)",
  "Recibes una carpeta con todos los PDFs de constancia de búsqueda",
  "Resultado entregado en 3 días hábiles",
  "Precio no incluye IVA",
];

export default function RegularizacionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [numNames, setNumNames] = useState("");
  const [calcResult, setCalcResult] = useState<string | null>(null);

  const calcCost = () => {
    const n = parseInt(numNames);
    if (isNaN(n) || n <= 0) { setCalcResult("Ingresa un número válido."); return; }
    const base = PRICE_REGULARIZACION_BASE;
    const extra = n > REGULARIZACION_BASE_NAMES ? (n - REGULARIZACION_BASE_NAMES) * PRICE_REGULARIZACION_EXTRA : 0;
    const total = base + extra;
    setCalcResult(
      `Costo estimado para ${n} nombres: $${total.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN (sin IVA)`
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #51d2e9 0%, #056dfe 60%, transparent 100%)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#056dfe]/8 border border-[#056dfe]/20 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#51d2e9] rounded-full" />
            Servicio de Regularización PLD
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            ¡Te ponemos al corriente con las búsquedas de{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 50%, #51d2e9 100%)" }}
            >
              listados negros
            </span>{" "}
            en 1 día!
          </h1>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
            ¿No has realizado todas las búsquedas de listados negros? ¡Nosotros te ayudamos a estar al corriente con
            muy poco esfuerzo de tu parte! Mándanos los nombres, nosotros los buscamos y te regresamos las constancias
            de búsqueda.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Quiero ponerme al día
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contact strip */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-600 text-sm">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#056dfe] transition-colors"
            >
              <MessageCircle size={16} style={{ color: "#25d366" }} />
              {WA_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="inline-flex items-center gap-2 hover:text-[#056dfe] transition-colors"
            >
              <Mail size={16} style={{ color: "#056dfe" }} />
              {EMAIL_CONTACT}
            </a>
          </div>
        </div>
      </section>

      {/* ── How it works ──────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Te explicamos cómo funciona
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
            <p className="text-slate-700 text-base leading-relaxed mb-6">
              Entendemos que cada vez tienes más responsabilidades en materia de prevención de lavado de dinero y una
              de las que pueden ser más complicadas de cumplir es la búsqueda de listados negros.
            </p>
            <p className="text-slate-700 text-base leading-relaxed mb-6">
              Nuestro servicio te permite realizar todas las búsquedas que no has realizado. Nos mandas un listado de
              nombres en Excel y, en un lapso de tres días hábiles, nosotros realizamos la búsqueda de estos nombres y
              te hacemos llegar las constancias en PDF.
            </p>
            <div
              className="rounded-xl p-5 border"
              style={{ background: "#eff6ff", borderColor: "#bfdbfe" }}
            >
              <p className="font-bold text-slate-800 text-base">
                Ya hemos apoyado a notarías en plena inspección UIF y han logrado evitar multas utilizando estas
                constancias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Costos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Pricing card */}
            <div className="bg-white rounded-2xl border-2 border-[#056dfe] shadow-lg p-8">
              <div className="text-center mb-6">
                <p className="text-5xl font-extrabold text-slate-900">
                  ${PRICE_REGULARIZACION_BASE.toLocaleString("es-MX")}
                  <span className="text-lg font-semibold text-slate-500 ml-2">/ hasta {REGULARIZACION_BASE_NAMES} nombres</span>
                </p>
                <p className="mt-2 text-slate-500 text-sm">+ ${PRICE_REGULARIZACION_EXTRA} por cada nombre adicional a {REGULARIZACION_BASE_NAMES}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: "#056dfe", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
              >
                Quiero ponerme al día
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Calculator */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Calcula el costo</h3>
              <p className="text-slate-500 text-sm mb-6">
                Escribe el número de nombres que deseas buscar en los listados negros:
              </p>

              <div className="flex gap-3 mb-4">
                <input
                  type="number"
                  min="1"
                  value={numNames}
                  onChange={(e) => setNumNames(e.target.value)}
                  placeholder="Ej. 350"
                  className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition"
                />
                <button
                  onClick={calcCost}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg"
                  style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
                >
                  Calcular
                </button>
              </div>

              {calcResult && (
                <div
                  className="rounded-xl p-4 text-sm font-semibold"
                  style={{ background: "#eff6ff", color: "#1e40af" }}
                >
                  {calcResult}
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Quiero ponerme al día
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Preguntas frecuentes</h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 text-base leading-snug group-hover:text-[#056dfe] transition-colors">
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="text-[#056dfe] flex-shrink-0" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0 group-hover:text-[#056dfe] transition-colors" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
            >
              Quiero ponerme al día
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── ISR Calculator mention ─────────────────────────── */}
      <section
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2256 50%, #0a1f4a 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white text-lg sm:text-xl font-semibold leading-relaxed mb-6">
            También, conoce nuestra calculadora de ISR por venta de inmuebles gratuita
          </p>
          <p className="text-slate-300 text-base leading-relaxed mb-8">
            Más de {ISR_USER_COUNT} notarías, inmobiliarias, despachos de contadores y abogados ya utilizan la herramienta.
            Pruébala gratis hoy mismo.
          </p>
          <a
            href={URL_ISR}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[#0a1628] font-bold text-base px-9 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all"
            style={{ background: "linear-gradient(135deg, #51d2e9 0%, #2ea4f2 100%)" }}
          >
            Ir a la calculadora ISR
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
