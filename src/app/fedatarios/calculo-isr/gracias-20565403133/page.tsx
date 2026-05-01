import type { Metadata } from "next";
import CalcISRGraciasPage from "@/components/CalcISRGraciasPage";

export const metadata: Metadata = {
  title: "¡Gracias por tu solicitud!",
  description: "Hemos recibido tu solicitud. En breve un asesor de Nuvigant se pondrá en contacto contigo.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRGraciasPage />;
}
