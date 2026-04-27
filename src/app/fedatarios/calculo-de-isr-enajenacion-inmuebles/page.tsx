import type { Metadata } from "next";
import CalcISRLandingPage from "@/components/CalcISRLandingPage";

export const metadata: Metadata = {
  title: "Cálculo de ISR por Enajenación de Inmuebles Gratis | Nuvigant",
  description:
    "Cálculo de ISR por enajenación de inmuebles en segundos y gratis en nuestro portal en línea. Sin instalar nada y desde internet.",
};

export default function Page() {
  return <CalcISRLandingPage />;
}
