"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Printer, Shield, Cpu, BookOpen } from "lucide-react";
import { EMAIL_MAIN } from "../constants";

const topics = [
  { icon: Shield, text: "Cambios en la Reforma PLD 2025" },
  { icon: Cpu, text: "Cómo usar la inteligencia artificial para cumplir más fácilmente con la reforma" },
  {
    icon: BookOpen,
    text: "Análisis de material y procedimientos para implementar fácilmente el programa de capacitación requerido por ley",
  },
];

function formatDateEs(date: Date): string {
  return date.toLocaleDateString("es-MX", { year: "numeric", month: "long", day: "numeric" });
}

export default function ConstanciasPage() {
  const searchParams = useSearchParams();
  const [nombre, setNombre] = useState("[Nombre del Participante]");
  const [fecha, setFecha] = useState(formatDateEs(new Date()));

  useEffect(() => {
    const n = searchParams.get("nombre");
    const f = searchParams.get("fecha");
    if (n) setNombre(n);
    const fechaObj = f && !isNaN(Date.parse(f)) ? new Date(f) : new Date();
    setFecha(formatDateEs(fechaObj));
  }, [searchParams]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-slate-100 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Print button — hidden in print */}
        <div className="text-center mb-8 no-print">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
          >
            <Printer size={18} />
            Imprimir constancia
          </button>
          <p className="mt-3 text-sm text-slate-500">
            ¿Aún no has tomado la capacitación?{" "}
            <Link
              href="/webinar-reforma-pld-2025-para-notarios"
              className="text-[#056dfe] font-medium hover:underline"
            >
              Mírala aquí
            </Link>
          </p>
        </div>

        {/* Certificate */}
        <div
          className="bg-white rounded-2xl shadow-2xl"
          style={{ border: "10px solid #2ea4f2", padding: "0" }}
        >
          <div
            style={{
              border: "6px double #056dfe",
              margin: "12px",
              borderRadius: "8px",
              padding: "48px",
            }}
          >
            {/* Logo */}
            <div className="text-center mb-6">
              <Image
                src="https://notariamasmas3imagenes.blob.core.windows.net/logos/cropped_logo.png"
                alt="Nuvigant"
                width={280}
                height={80}
                className="inline-block"
              />
            </div>

            {/* Title */}
            <h1
              className="text-center font-bold"
              style={{ fontFamily: "Georgia, serif", color: "#2ea4f2", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", lineHeight: 1.2 }}
            >
              CONSTANCIA DE ASISTENCIA
            </h1>

            <p className="text-center font-semibold mt-1 mb-8" style={{ color: "#056dfe", fontSize: "1.1rem" }}>
              Webinar de PLD 2025 para Notarios y Corredores
            </p>

            {/* Body */}
            <div className="text-center max-w-[75%] mx-auto mb-10 space-y-4" style={{ color: "#333", lineHeight: 1.8 }}>
              <p style={{ fontSize: "1.05rem" }}>Otorgamos la presente constancia a:</p>
              <p className="font-bold text-black" style={{ fontSize: "1.25rem" }}>
                {nombre}
              </p>
              <p style={{ fontSize: "1.05rem" }}>
                Por su participación en el webinar sobre <strong>Prevención de Lavado de Dinero (PLD) 2025</strong>{" "}
                para Notarios y Corredores.
              </p>
              <p style={{ fontSize: "1.05rem" }}>
                Se reconoce su interés en cumplir con las obligaciones en materia de prevención conforme a la
                legislación vigente.
              </p>
            </div>

            {/* Topics */}
            <div className="max-w-[75%] mx-auto mb-10">
              <p className="font-bold text-slate-800 mb-3" style={{ fontSize: "1.05rem" }}>
                Temas tratados en el webinar:
              </p>
              <ul className="space-y-2">
                {topics.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-slate-700" style={{ fontSize: "1rem" }}>
                    <Icon size={18} style={{ color: "#056dfe", flexShrink: 0, marginTop: "2px" }} strokeWidth={2} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Date + signature */}
            <div className="flex justify-between items-end mt-10 pt-6 border-t border-slate-200">
              <span className="text-sm text-slate-500">Fecha de emisión: {fecha}</span>
              <div className="text-right">
                <div className="w-48 border-t border-slate-400 mb-1" />
                <p className="text-sm text-slate-500">Equipo Nuvigant</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6 no-print">
          Si tienes algún problema para imprimir tu constancia, escríbenos a{" "}
          <a href={`mailto:${EMAIL_MAIN}`} className="text-[#056dfe] hover:underline">
            {EMAIL_MAIN}
          </a>
        </p>
      </div>
    </div>
  );
}
