import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRInmobiliariasPage from "@/components/CalcISRInmobiliariasPage";

const title = "Calcula ISR para Inmobiliarias";
const description = "Herramienta de cálculo de ISR por enajenación de inmuebles diseñada para inmobiliarias. Obtén resultados precisos y en cumplimiento con el SAT.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-isr/inmobiliarias"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-isr/inmobiliarias" }),
  title,
  description,
};

export default function Page() {
  return <CalcISRInmobiliariasPage />;
}
