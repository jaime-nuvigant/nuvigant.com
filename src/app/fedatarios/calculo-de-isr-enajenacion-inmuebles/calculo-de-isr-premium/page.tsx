import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRPremiumPage from "@/components/CalcISRPremiumPage";

const title = "Cálculo de ISR Premium | Nuvigant";
const description = "Conoce las ventajas de utilizar la versión premium de nuestra herramienta de cálculo de ISR.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr-premium"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr-premium" }),
  title,
  description,
};

export default function Page() {
  return <CalcISRPremiumPage />;
}
