import type { Metadata } from "next";
import PreguntasFrecuentesISRPage from "@/components/PreguntasFrecuentesISRPage";

export const metadata: Metadata = {
  title: "ISR Enajenación de Inmuebles | Preguntas Frecuentes | Nuvigant",
  description:
    "¿Tienes alguna pregunta sobre el cálculo de ISR por enajenación de inmuebles? Te dejamos las preguntas más comunes.",
};

export default function Page() {
  return <PreguntasFrecuentesISRPage />;
}
