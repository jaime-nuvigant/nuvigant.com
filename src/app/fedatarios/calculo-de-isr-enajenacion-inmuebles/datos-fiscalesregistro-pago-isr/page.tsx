import type { Metadata } from "next";
import DatosFiscalesISRPage from "@/components/DatosFiscalesISRPage";

export const metadata: Metadata = {
  title: "Datos Fiscales | ISR | Nuvigant",
};

export default function Page() {
  return <DatosFiscalesISRPage />;
}
