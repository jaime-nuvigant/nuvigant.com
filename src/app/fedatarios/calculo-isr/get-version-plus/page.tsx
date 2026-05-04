import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRVersionPlusPage from "@/components/CalcISRVersionPlusPage";

const title = "Obtén la Versión Plus — Calculadora ISR";
const description = "Desbloquea funciones avanzadas de la calculadora de ISR por enajenación de inmuebles. Accede a la versión Plus y optimiza el cálculo en tu notaría.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-isr/get-version-plus"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-isr/get-version-plus" }),
  title,
  description,
};

export default function Page() {
  return <CalcISRVersionPlusPage />;
}
