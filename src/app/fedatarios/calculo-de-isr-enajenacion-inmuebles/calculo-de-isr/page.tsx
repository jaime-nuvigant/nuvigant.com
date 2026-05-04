import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CalcISRGAPage from "@/components/CalcISRGAPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-de-isr'),

  title: "Cálculo de ISR: Herramienta Gratuita | Nuvigant",
  robots: { index: false },
};

export default function Page() {
  return <CalcISRGAPage />;
}
