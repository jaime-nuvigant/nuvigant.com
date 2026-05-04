import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CalcISRContactFormPage from "@/components/CalcISRContactFormPage";

const title = "¡Solicitud enviada!";
const description = "Tu solicitud ha sido recibida. Un asesor de Nuvigant se pondrá en contacto contigo pronto.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-isr-contact-form-submitted"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-isr-contact-form-submitted" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRContactFormPage />;
}
