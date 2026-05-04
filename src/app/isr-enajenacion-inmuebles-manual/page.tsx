import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ManualISRPage from "@/components/ManualISRPage";

const title = "Manual ISR Enajenación de Inmuebles | Nuvigant";
const description = "Conoce la calculadora en línea de ISR por venta de inmueble. Videotutorial, glosario de definiciones y preguntas frecuentes.";
export const metadata: Metadata = {
  ...canonicalAlternates("/isr-enajenacion-inmuebles-manual"),
  ...ogMetadataSpread({ title, description, pathname: "/isr-enajenacion-inmuebles-manual" }),
  title,
  description,
};

export default function Page() {
  return <ManualISRPage />;
}
