"use client";

import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";

function readHubspotUtk(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const m = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return m?.[1] ? decodeURIComponent(m[1]) : undefined;
}

export default function ScheduleDemoForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("submitting");

    const form = e.currentTarget;
    const fd = new FormData(form);
    const nombre = String(fd.get("nombre") ?? "").trim();
    const apellidos = String(fd.get("apellidos") ?? "").trim();
    const empresa = String(fd.get("empresa") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const telefono = String(fd.get("telefono") ?? "").trim();
    const mensaje = String(fd.get("mensaje") ?? "").trim();

    const hutk = readHubspotUtk();
    const pageUri =
      typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : "";

    try {
      const res = await fetch("/api/hubspot/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          apellidos,
          empresa,
          email,
          telefono,
          mensaje,
          pageUri,
          ...(hutk ? { hutk } : {}),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        setErrorMessage(data.error ?? "Algo salió mal. Intenta de nuevo.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("No hay conexión. Revisa tu red e intenta de nuevo.");
      setStatus("error");
    }
  }, []);

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-100 bg-emerald-50/80 px-5 py-6 text-center">
        <p className="text-base font-semibold text-emerald-900">¡Listo!</p>
        <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
          Gracias por tu interés. Nos pondremos en contacto contigo muy pronto.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-emerald-900 underline underline-offset-2 hover:text-emerald-950"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl font-bold text-slate-900 mb-2">Solicitar una Demo</h2>
      <p className="text-slate-500 text-sm mb-6">Nos pondremos en contacto contigo muy pronto.</p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
            <input
              type="text"
              name="nombre"
              required
              autoComplete="given-name"
              disabled={status === "submitting"}
              placeholder="Tu nombre"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm disabled:opacity-60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Apellidos</label>
            <input
              type="text"
              name="apellidos"
              required
              autoComplete="family-name"
              disabled={status === "submitting"}
              placeholder="Tus apellidos"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm disabled:opacity-60"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Empresa</label>
          <input
            type="text"
            name="empresa"
            autoComplete="organization"
            disabled={status === "submitting"}
            placeholder="Tu empresa"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm disabled:opacity-60"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Correo electrónico</label>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            disabled={status === "submitting"}
            placeholder="tu@empresa.com"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm disabled:opacity-60"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            required
            autoComplete="tel"
            disabled={status === "submitting"}
            placeholder="+52 55 0000 0000"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm disabled:opacity-60"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
          <textarea
            name="mensaje"
            rows={3}
            disabled={status === "submitting"}
            placeholder="Cuéntanos brevemente sobre tu empresa y qué te gustaría ver en la demo..."
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-[#056dfe] focus:ring-2 focus:ring-[#056dfe]/10 transition text-sm resize-none disabled:opacity-60"
          />
        </div>

        {errorMessage ? (
          <p className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:pointer-events-none"
          style={{ background: "linear-gradient(135deg, #056dfe 0%, #2ea4f2 100%)" }}
        >
          {status === "submitting" ? "Enviando…" : "Solicitar Demo"}
          <ArrowRight size={18} aria-hidden />
        </button>
      </form>
    </>
  );
}
