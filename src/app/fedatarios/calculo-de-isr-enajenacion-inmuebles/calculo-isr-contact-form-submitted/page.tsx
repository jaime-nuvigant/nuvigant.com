import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CalcISRContactFormPage from "@/components/CalcISRContactFormPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-de-isr-enajenacion-inmuebles/calculo-isr-contact-form-submitted'),

  title: "¡Solicitud enviada!",
  description: "Tu solicitud ha sido recibida. Un asesor de Nuvigant se pondrá en contacto contigo pronto.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRContactFormPage />;
}
