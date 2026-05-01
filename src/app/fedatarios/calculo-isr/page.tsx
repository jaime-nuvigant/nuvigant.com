import type { Metadata } from "next";
import CalcISRPage from "@/components/CalcISRPage";

export const metadata: Metadata = {
  title: "Calculadora de ISR por Enajenación de Inmuebles",
  description:
    "Calcula el ISR por enajenación de inmuebles de forma precisa y conforme a la ley. Herramienta especializada para fedatarios públicos en México.",
};

export default function Page() {
  return <CalcISRPage />;
}
