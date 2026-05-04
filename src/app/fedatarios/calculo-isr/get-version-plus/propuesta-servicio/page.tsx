import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRPropuestaPage from "@/components/CalcISRPropuestaPage";

const title = "Propuesta de Servicio — Calculadora ISR Plus";
const description = "Revisa la propuesta de servicio personalizada para acceder a la Calculadora ISR Plus de Nuvigant.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-isr/get-version-plus/propuesta-servicio"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-isr/get-version-plus/propuesta-servicio" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRPropuestaPage />;
}
