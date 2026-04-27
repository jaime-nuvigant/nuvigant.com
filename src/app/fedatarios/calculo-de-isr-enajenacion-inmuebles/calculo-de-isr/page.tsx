import type { Metadata } from "next";
import CalcISRGAPage from "@/components/CalcISRGAPage";

export const metadata: Metadata = {
  title: "Cálculo de ISR: Herramienta Gratuita | Nuvigant",
  robots: { index: false },
};

export default function Page() {
  return <CalcISRGAPage />;
}
