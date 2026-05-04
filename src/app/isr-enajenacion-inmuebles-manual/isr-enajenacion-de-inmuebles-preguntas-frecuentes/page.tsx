import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import PreguntasFrecuentesISRPage from "@/components/PreguntasFrecuentesISRPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/isr-enajenacion-inmuebles-manual/isr-enajenacion-de-inmuebles-preguntas-frecuentes'),

  title: "ISR Enajenación de Inmuebles | Preguntas Frecuentes | Nuvigant",
  description:
    "¿Tienes alguna pregunta sobre el cálculo de ISR por enajenación de inmuebles? Te dejamos las preguntas más comunes.",
};

export default function Page() {
  return <PreguntasFrecuentesISRPage />;
}
