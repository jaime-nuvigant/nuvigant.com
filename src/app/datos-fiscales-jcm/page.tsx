import type { Metadata } from "next";
import DatosFiscalesJCMPage from "@/components/DatosFiscalesJCMPage";

export const metadata: Metadata = {
  title: "Datos Fiscales | JCM | Nuvigant",
};

export default function Page() {
  return <DatosFiscalesJCMPage />;
}
