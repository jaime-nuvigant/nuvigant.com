import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRGAPage from "@/components/CalcISRGAPage";

const title = "Cálculo de ISR: Herramienta Gratuita | Nuvigant";
const description =
  "Accede a la calculadora de ISR por enajenación de inmuebles de Nuvigant. Herramienta gratuita para estimar el impuesto conforme a la normativa vigente.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr" }),
  title,
  description,
  robots: { index: false },
};

export default function Page() {
  return <CalcISRGAPage />;
}
