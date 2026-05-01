import type { Metadata } from "next";
import CalcISRPropuestaPage from "@/components/CalcISRPropuestaPage";

export const metadata: Metadata = {
  title: "Propuesta de Servicio — Calculadora ISR Plus",
  description: "Revisa la propuesta de servicio personalizada para acceder a la Calculadora ISR Plus de Nuvigant.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CalcISRPropuestaPage />;
}
