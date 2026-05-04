import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRGraciasPage from "@/components/CalcISRGraciasPage";

const title = "¡Gracias por tu solicitud!";
const description = "Hemos recibido tu solicitud. En breve un asesor de Nuvigant se pondrá en contacto contigo.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-isr/gracias-20565403133"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-isr/gracias-20565403133" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRGraciasPage />;
}
