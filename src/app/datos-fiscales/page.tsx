import type { Metadata } from "next";
import DatosFiscalesPage from "@/components/DatosFiscalesPage";

export const metadata: Metadata = {
  title: "Datos Fiscales | Nuvigant",
  description: "Estamos muy cerca de empezar a trabajar juntos. Te pedimos tus datos fiscales para seguir adelante.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DatosFiscalesPage />;
}
