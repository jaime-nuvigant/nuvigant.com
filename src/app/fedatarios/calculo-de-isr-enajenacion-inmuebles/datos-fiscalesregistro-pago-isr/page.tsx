import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import DatosFiscalesISRPage from "@/components/DatosFiscalesISRPage";

const title = "Datos Fiscales | ISR | Nuvigant";
const description = "Página de Nuvigant: Datos Fiscales | ISR | Nuvigant";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/datos-fiscalesregistro-pago-isr" }),
  title,
  description,
};

export default function Page() {
  return <DatosFiscalesISRPage />;
}
