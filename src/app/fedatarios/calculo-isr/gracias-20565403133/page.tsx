import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CalcISRGraciasPage from "@/components/CalcISRGraciasPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-isr/gracias-20565403133'),

  title: "¡Gracias por tu solicitud!",
  description: "Hemos recibido tu solicitud. En breve un asesor de Nuvigant se pondrá en contacto contigo.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRGraciasPage />;
}
