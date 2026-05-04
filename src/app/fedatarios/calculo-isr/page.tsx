import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRPage from "@/components/CalcISRPage";

const title = "Calculadora de ISR por Enajenación de Inmuebles";
const description = "Calcula el ISR por enajenación de inmuebles de forma precisa y conforme a la ley. Herramienta especializada para fedatarios públicos en México.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-isr"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-isr" }),
  title,
  description,
};

export default function Page() {
  return <CalcISRPage />;
}
