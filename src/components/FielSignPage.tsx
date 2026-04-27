"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

declare global {
  interface Window {
    mifiel?: {
      widget: (options: { widgetId: string; appendTo: string; successBtnText: string; color: string }) => void;
      push?: (args: unknown[]) => void;
    };
  }
}

export default function FielSignPage() {
  const searchParams = useSearchParams();
  const signatureId = searchParams.get("signatureid");
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!signatureId || scriptLoaded.current) return;

    const loadMifiel = () => {
      if (window.mifiel && typeof window.mifiel.widget === "function") {
        window.mifiel.widget({
          widgetId: signatureId,
          appendTo: "mifiel-widget-container",
          successBtnText: "Ya puedes cerrar esta ventana",
          color: "056dfe",
        });
      }
    };

    if (window.mifiel) {
      loadMifiel();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.mifiel.com/sign-widget-v1.0.0.js";
    script.async = true;
    script.onload = loadMifiel;
    document.head.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [signatureId]);

  if (!signatureId) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto mb-6">
            <Shield size={40} style={{ color: "#056dfe" }} strokeWidth={1.4} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Enlace de firma no válido</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            No se encontró un identificador de firma válido en la URL. Por favor verifica que el enlace que recibiste esté completo.
          </p>
          <Link
            href="/e-siganature/fiel/"
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
            style={{ background: "linear-gradient(135deg, #3D72E7 0%, #53a0fe 100%)" }}
          >
            <ArrowLeft size={16} />
            Volver a eFirma
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#056dfe] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            <Shield size={14} />
            Firma Segura con FIEL
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Firma tu documento</h1>
          <p className="text-slate-500">Por favor completa el proceso de firma a continuación.</p>
        </div>

        <div
          id="mifiel-widget-container"
          ref={containerRef}
          className="bg-white rounded-2xl shadow-lg border border-slate-100 min-h-[500px] p-4"
        />
      </div>
    </div>
  );
}
