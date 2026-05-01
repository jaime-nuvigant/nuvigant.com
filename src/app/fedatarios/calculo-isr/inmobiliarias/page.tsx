import type { Metadata } from "next";
import CalcISRInmobiliariasPage from "@/components/CalcISRInmobiliariasPage";

export const metadata: Metadata = {
  title: "Calcula ISR para Inmobiliarias",
  description:
    "Herramienta de cálculo de ISR por enajenación de inmuebles diseñada para inmobiliarias. Obtén resultados precisos y en cumplimiento con el SAT.",
};

export default function Page() {
  return <CalcISRInmobiliariasPage />;
}
