import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRSeminarioPage from "@/components/CalcISRSeminarioPage";

const title = "Calcula ISR — Seminario de Actualización Fiscal";
const description = "Herramienta de cálculo de ISR por enajenación de inmuebles presentada en el Seminario de Actualización Fiscal. Calcula el impuesto de manera precisa y rápida.";
export const metadata: Metadata = {
  ...canonicalAlternates("/calcula-isr-seminario-actualizacion-fiscal"),
  ...ogMetadataSpread({ title, description, pathname: "/calcula-isr-seminario-actualizacion-fiscal" }),
  title,
  description,
};

export default function Page() {
  return <CalcISRSeminarioPage />;
}
