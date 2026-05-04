import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRLandingPage from "@/components/CalcISRLandingPage";

const title = "Cálculo de ISR por Enajenación de Inmuebles Gratis | Nuvigant";
const description = "Cálculo de ISR por enajenación de inmuebles en segundos y gratis en nuestro portal en línea. Sin instalar nada y desde internet.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-de-isr-enajenacion-inmuebles"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-de-isr-enajenacion-inmuebles" }),
  title,
  description,
};

export default function Page() {
  return <CalcISRLandingPage />;
}
