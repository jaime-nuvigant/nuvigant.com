import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CalcISRVersionPlusPage from "@/components/CalcISRVersionPlusPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-isr/get-version-plus'),

  title: "Obtén la Versión Plus — Calculadora ISR",
  description:
    "Desbloquea funciones avanzadas de la calculadora de ISR por enajenación de inmuebles. Accede a la versión Plus y optimiza el cálculo en tu notaría.",
};

export default function Page() {
  return <CalcISRVersionPlusPage />;
}
