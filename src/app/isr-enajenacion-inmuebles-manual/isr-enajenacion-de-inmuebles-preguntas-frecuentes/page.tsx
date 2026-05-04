import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import PreguntasFrecuentesISRPage from "@/components/PreguntasFrecuentesISRPage";

const title = "ISR Enajenación de Inmuebles | Preguntas Frecuentes | Nuvigant";
const description = "¿Tienes alguna pregunta sobre el cálculo de ISR por enajenación de inmuebles? Te dejamos las preguntas más comunes.";
export const metadata: Metadata = {
  ...canonicalAlternates("/isr-enajenacion-inmuebles-manual/isr-enajenacion-de-inmuebles-preguntas-frecuentes"),
  ...ogMetadataSpread({ title, description, pathname: "/isr-enajenacion-inmuebles-manual/isr-enajenacion-de-inmuebles-preguntas-frecuentes" }),
  title,
  description,
};

export default function Page() {
  return <PreguntasFrecuentesISRPage />;
}
