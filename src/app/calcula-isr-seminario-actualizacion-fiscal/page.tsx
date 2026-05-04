import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CalcISRSeminarioPage from "@/components/CalcISRSeminarioPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/calcula-isr-seminario-actualizacion-fiscal'),

  title: "Calcula ISR — Seminario de Actualización Fiscal",
  description:
    "Herramienta de cálculo de ISR por enajenación de inmuebles presentada en el Seminario de Actualización Fiscal. Calcula el impuesto de manera precisa y rápida.",
};

export default function Page() {
  return <CalcISRSeminarioPage />;
}
