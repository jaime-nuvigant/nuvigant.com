import type { Metadata } from "next";
import CalcISRContactFormPage from "@/components/CalcISRContactFormPage";

export const metadata: Metadata = {
  title: "¡Solicitud enviada!",
  description: "Tu solicitud ha sido recibida. Un asesor de Nuvigant se pondrá en contacto contigo pronto.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRContactFormPage />;
}
