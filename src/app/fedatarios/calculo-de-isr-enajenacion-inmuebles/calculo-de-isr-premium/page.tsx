import type { Metadata } from "next";
import CalcISRPremiumPage from "@/components/CalcISRPremiumPage";

export const metadata: Metadata = {
  title: "Cálculo de ISR Premium | Nuvigant",
  description:
    "Conoce las ventajas de utilizar la versión premium de nuestra herramienta de cálculo de ISR.",
};

export default function Page() {
  return <CalcISRPremiumPage />;
}
