import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ManualISRPage from "@/components/ManualISRPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/isr-enajenacion-inmuebles-manual'),

  title: "Manual ISR Enajenación de Inmuebles | Nuvigant",
  description:
    "Conoce la calculadora en línea de ISR por venta de inmueble. Videotutorial, glosario de definiciones y preguntas frecuentes.",
};

export default function Page() {
  return <ManualISRPage />;
}
