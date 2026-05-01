import type { Metadata } from "next";
import CalcISRVersionPlusPage from "@/components/CalcISRVersionPlusPage";

export const metadata: Metadata = {
  title: "Obtén la Versión Plus — Calculadora ISR",
  description:
    "Desbloquea funciones avanzadas de la calculadora de ISR por enajenación de inmuebles. Accede a la versión Plus y optimiza el cálculo en tu notaría.",
};

export default function Page() {
  return <CalcISRVersionPlusPage />;
}
