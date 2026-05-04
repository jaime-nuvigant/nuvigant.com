import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import DefinicionesISRPage from "@/components/DefinicionesISRPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-de-isr-enajenacion-inmuebles/definiciones-en-el-isr-por-enajenacion-de-inmuebles'),

  title: "Definiciones en el ISR por Enajenación de Inmuebles | Nuvigant",
  description:
    "Aquí te explicamos lo que significa cada una de las variables en el cálculo de ISR por enajenación de inmuebles.",
};

export default function Page() {
  return <DefinicionesISRPage />;
}
