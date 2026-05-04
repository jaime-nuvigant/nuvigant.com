import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CalcISRPremiumPage from "@/components/CalcISRPremiumPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr-premium'),

  title: "Cálculo de ISR Premium | Nuvigant",
  description:
    "Conoce las ventajas de utilizar la versión premium de nuestra herramienta de cálculo de ISR.",
};

export default function Page() {
  return <CalcISRPremiumPage />;
}
