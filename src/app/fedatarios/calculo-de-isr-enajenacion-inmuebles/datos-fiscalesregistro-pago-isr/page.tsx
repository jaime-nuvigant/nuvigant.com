import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import DatosFiscalesISRPage from "@/components/DatosFiscalesISRPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr'),

  title: "Datos Fiscales | ISR | Nuvigant",
};

export default function Page() {
  return <DatosFiscalesISRPage />;
}
